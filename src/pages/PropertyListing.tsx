import React from 'react';
import FilterSection from '../components/FilterSection';
import Footer from '../components/Footer';
import { useCart } from '../context/Context';
import SinglePropertyCard from '../components/SinglePropertyCard';
import { Property } from '../types/property.types';
import { toast } from 'react-toastify';

const PropertyListing: React.FC = () => {
  // here we are having the propertyData and propertyState
  const {
    cartState: { propertyData },
    propertyState: { underPrice, isAvailable, numberOfBedroom, haveGym, haveParking, haveBalcony, havePool, haveWifi, searchQueryForLocation }
  } = useCart();

  // Function to transform products based on filters
  const transformedProducts = (): Property[] => {
    let sortedProducts: Property[] = propertyData; // before passign to the components transforming the array of objects here

    // --------------Filtering for price ---------------
    if (underPrice) {
      sortedProducts = sortedProducts.filter((prod) => prod.price <= underPrice);
    }
    //---------------is Available---------------
    //if isavailable is false[not marked] render all true in the propertyDataSET
    //if is available is true[marked] render all regardless of their propertdataSet 
    if (!isAvailable) {
      sortedProducts = sortedProducts.filter((prod) => prod.isAvailable); // Update this condition based on your data
    }

    //-----------filter by number of bedrooms ------------------
    if (numberOfBedroom > 0) {
      sortedProducts = sortedProducts.filter((prod) => prod.totalBedrooms == numberOfBedroom);
    }

    // ----------------------------amenities--------------------
    if (!haveWifi) {
      sortedProducts = sortedProducts.filter((prod) => !prod.amenities.includes("WiFi"));
    }
    if (haveGym) {
      sortedProducts = sortedProducts.filter((prod) => prod.amenities.includes("Gym"));
    }
    if (haveParking) {
      sortedProducts = sortedProducts.filter((prod) => prod.amenities.includes("Parking"));
    }
    if (havePool) {
      sortedProducts = sortedProducts.filter((prod) => prod.amenities.includes("Pool"));
    }
    if (haveBalcony) {
      sortedProducts = sortedProducts.filter((prod) => prod.amenities.includes("Balcony"));
    }
    // -------------------search by location ---------------------------
    if (searchQueryForLocation) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.location.toLowerCase().includes(searchQueryForLocation.toLowerCase())
      );
    }
    // -----------if upon filter no product is there---------------------
    if (sortedProducts.length == 0 && (haveGym || haveBalcony || haveBalcony || haveParking || haveWifi)) {
      toast.warn('Unfortunately, we don\'t have property of this selection!', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    // ------------------if upon all the amenties are deselected-------------------
    if(!havePool && !haveGym && !haveBalcony && !haveParking && !haveWifi){
      toast.warn('Please Select atleast on amenity!', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    return sortedProducts;
  };

  return (
    <div className="product-listing-component">
      <div className="parentoffilterAndProductContainer flex flex-col md:flex-row">
        <FilterSection />
        <div className="product-container flex-grow bg-white p-4">
          <div className='grid grid-cols-1 mx-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {
              // tranformed product data goes to SinglePropertyCard
              transformedProducts().map((prop) => {
                return (
                  <SinglePropertyCard property={prop} key={prop.id} />
                );
              })

            }
          </div>

        </div>
      </div>
      {/* footer are not on every page but to specific pages, but will be here in this component */}
      <Footer />
    </div>
  );
};

export default PropertyListing;
