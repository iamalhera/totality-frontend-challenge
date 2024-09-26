interface PropertyState {
    underPrice: number, //for slider [Price Range]
    isAvailable: boolean,
    numberOfBedroom: number,
    //6 amenities
    haveGym: boolean,
    haveParking: boolean,
    havePool: boolean,
    haveWifi: boolean,
    haveBalcony: boolean,
    searchQueryForLocation: string;
}

type PropertyAction =
      { type: "FILTER_BY_PRICE"; payload: number }
    | { type: "FILTER_BY_AVAILABILITY" }
    | { type: "FILTER_BY_NO_OF_BEDROOM", payload: number}
    // amenities
    | { type: "FILTER_BY_HAVE_GYM" }
    | { type: "FILTER_BY_HAVE_PARKING" }
    | { type: "FILTER_BY_HAVE_POOL" }
    | { type: "FILTER_BY_HAVE_WIFI" }
    | { type: "FILTER_BY_HAVE_BALCONY" }
    | { type: "FILTER_BY_SEARCH_FOR_LOCATION"; payload: string }
    | { type: "CLEAR_FILTERS" };

    interface Property {
        id: number;
        description: string;
        title: string;
        price: number;
        image: any; // Adjust type based on how you're storing images
        amenities: string[];
        totalBedrooms: number;
        isAvailable: boolean;
        location: string; // [place, city]
        rating: number; // Out of 5
        totalRatings: number; 
    }

export type {Property, PropertyState, PropertyAction}