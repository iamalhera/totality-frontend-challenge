import React from 'react';
import FilterSection from '../components/FilterSection';
import Footer from '../components/Footer';
import { useCart } from '../context/Context';
import SinglePropertyCard from '../components/SinglePropertyCard';
import { Property } from '../types/property.types';

const PropertyListing: React.FC = () => {
  const {
    cartState: { propertyData },
    propertyState: { underPrice, isAvailable, numberOfBedroom, haveGym, haveParking, haveBalcony, havePool, haveWifi, searchQueryForLocation }
  } = useCart();
  
  // Function to transform products based on filters
  const transformedProducts = (): Property[] => {
      let sortedProducts: Property[] = propertyData; // Make a copy of the products array

      // --------------Filtering for price ---------------
      if (underPrice) {
          sortedProducts = sortedProducts.filter((prod) => prod.price <= underPrice );
      }
      //---------------is Available---------------
      //if isavailable is false[not marked] render all true in the propertyDataSET
      //if is available is true[marked] render all regardless of their propertdataSet 
      if (!isAvailable) {
          sortedProducts = sortedProducts.filter((prod) => prod.isAvailable); // Update this condition based on your data
      }

      //-----------filter by number of bedrooms ------------------
      if(numberOfBedroom>0){
        sortedProducts = sortedProducts.filter((prod)=> prod.totalBedrooms == numberOfBedroom);
      }

      // ----------------------------amenities--------------------
      if(!haveWifi){
        sortedProducts = sortedProducts.filter((prod)=> !prod.amenities.includes("WiFi"));
      }
      if(haveGym){
        sortedProducts =  sortedProducts.filter((prod)=> prod.amenities.includes("Gym"));
      }
      if(haveParking){
        sortedProducts =  sortedProducts.filter((prod)=> prod.amenities.includes("Parking"));
      }
      if(havePool){
        sortedProducts =  sortedProducts.filter((prod)=> prod.amenities.includes("Pool"));
      }
      if(haveBalcony){
        sortedProducts =  sortedProducts.filter((prod)=> prod.amenities.includes("Balcony"));
      }
      // -------------------search by location ---------------------------
      if (searchQueryForLocation) {
          sortedProducts = sortedProducts.filter((prod) =>
              prod.location.toLowerCase().includes(searchQueryForLocation.toLowerCase())
          );
      }

      return sortedProducts;
  };

  return (
    // Parent
    <div className="product-listing-component">
      <div className="parentoffilterAndProductContainer flex flex-col md:flex-row">
        <FilterSection />
        <div className="product-container flex-grow bg-white p-4">
          <div className='grid grid-cols-1 mx-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {
          // transformedProducts()
          transformedProducts().map((prop) => {
            return (
              <SinglePropertyCard property={prop} key={prop.id} />
              );
              })
              }
          </div>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PropertyListing;
