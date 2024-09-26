import React from 'react';
import { useCart } from '../context/Context';
// FILTER BASED ON LOCATION; PRICE RANGE ; NUMBER OF BEDROOMS; AMENETIES ; AVAILABILITY

//AMENETIES [implement by checkboxes]: WiFi , Parking , Pool  ; Gym  ;  Balcony 
// For this write strict equalness for ex: if three amenities are selected it should be there in the properties 
const FilterSection: React.FC = () => {
  const {
    propertyState: { underPrice, isAvailable, numberOfBedroom, haveWifi, haveGym, havePool, haveParking, haveBalcony, searchQueryForLocation },
    propertyDispatch
  } = useCart();

  return (
    <div className="flex flex-col w-full md:w-1/4 lg:w-3/9 p-4 items-start">
      <h4 className="text-2xl font-bold text-center pb-8">Filter Properties</h4>

      {/* -----------------------------price range------------------------------------ */}
      <span className='py-3 flex flex-wrap'>
        <label htmlFor="price_under">Under Price : <span className='font-semibold'> ${underPrice}</span></label>
        <input
          id='price_under'
          type="range"
          min="849"
          max="2999"
          step="50"
          value={underPrice}
          onChange={(e) => {
            propertyDispatch({
              type: "FILTER_BY_PRICE",
              payload: Number(e.target.value)
            })
          }}
          className="cursor-pointer "
        />
      </span>


      {/* ----------------------------------is available---------------------------------------- */}
      <span className='py-3'>
        <input
          type="checkbox"
          id="is_available"
          name="group-1"
          checked={isAvailable}
          onChange={() => {
            propertyDispatch({
              type: "FILTER_BY_AVAILABILITY"
            });
          }}
        />
        <label htmlFor="is_available"> Include Non-Available</label>
      </span>

      {/* ----------------------------------------number of bedrooms-------------------------------------------- */}
      <span className='py-3'>
        <label htmlFor="bedrooms">No. of Bedrooms </label>
        <select 
         id="bedrooms" 
         className='border-2' 
         value={numberOfBedroom}
         onChange={(e) => {
          propertyDispatch({
            type: "FILTER_BY_NO_OF_BEDROOM",
            payload: Number(e.target.value)
          })
        }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </span>

      {/* -----------------------------------------amenities----------------------------------- */}
      <span className='py-3'>
        <p className='text-start pb-1'>Select Amenities : </p>
        {/* -------------------GYM--------------------- */}
        <span>
          <input
            type="checkbox"
            id="have_gym"
            name="group-1"
          checked={haveGym}
          onChange={() => {
              propertyDispatch({
                  type: "FILTER_BY_HAVE_GYM"
              });
          }}
          />
          <label htmlFor="have_gym"> Gym</label>
        </span>
        {/* -------------Parking--------------- */}
        <span className='px-4'>
          <input
            type="checkbox"
            id="have_parking"
            name="group-1"
          checked={haveParking}
          onChange={() => {
              propertyDispatch({
                  type: "FILTER_BY_HAVE_PARKING"
              });
          }}
          />
          <label htmlFor="have_parking"> Parking</label>
        </span>
        {/* -------------Pool--------------------- */}
        <span>
          <input
            type="checkbox"
            id="have_pool"
            name="group-1"
          checked={havePool}
          onChange={() => {
              propertyDispatch({
                  type: "FILTER_BY_HAVE_POOL"
              });
          }}
          />
          <label htmlFor="have_pool"> Pool</label>
        </span>
        <br />
          {/* ------------WIFI-------------------- */}
        <span>
          <input
            type="checkbox"
            id="have_wifi"
            name="group-1"
            checked={haveWifi}
            onChange={()=>{
              propertyDispatch({
                type: "FILTER_BY_HAVE_WIFI"
              })
            }}
          />
          <label htmlFor="have_wifi"> WiFi</label>
        </span>
            {/* --------------Balcony---------------- */}
        <span className='px-4'>
          <input
            type="checkbox"
            id="have_balcony"
            name="group-1"
          checked={haveBalcony}
          onChange={() => {
              propertyDispatch({
                  type: "FILTER_BY_HAVE_BALCONY"
              });
          }}
          />
          <label htmlFor="have_balcony"> Balcony</label>
        </span>

      </span>

      {/* --------------------------------------location--------------------------------- */}
      <span className='py-3'>
        <label htmlFor="location">Location : </label>
        <input
          className="border-2 pl-1"
          placeholder="Search"
        value={searchQueryForLocation}
        onChange={(e) => {
            propertyDispatch({
                type: "FILTER_BY_SEARCH_FOR_LOCATION",
                payload: e.target.value
            });
        }}
        />
      </span>
      {/* -------------------------------clear all--------------------------------------------- */}
      <button
        className="bg-blue-600 text-white p-1 w-32 rounded hover:text-blue-100"
        onClick={() => {
          propertyDispatch({
          type: "CLEAR_FILTERS"
          });
        }}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default FilterSection;
