import { CartAction, CartState } from "../types/cart.types";
import { PropertyAction, PropertyState } from "../types/property.types";
// Define types for actions

// Cart reducer function
export const cartReducerFunc = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case "ADD_TO_CART":
            return { ...state, cart: [...state.cart, { ...action.payload }] };
        case "REMOVE_FROM_CART":
            return { ...state, cart: state.cart.filter((c) => c.id !== action.payload.id) };
        case "ADD_TO_WISHLIST":
            return { ...state, wishlist: [...state.wishlist, { ...action.payload }] };
        case "REMOVE_FROM_WISHLIST":
            return { ...state, wishlist: state.wishlist.filter((c) => c.id !== action.payload.id) };
        case "PROCEED_TO_PAY":
            return { ...state, cart: [] };
        default:
            return state;
    }
}

// Product reducer function
export const propertyReducerFunc = (state: PropertyState, action: PropertyAction): PropertyState => {
    switch (action.type) {
        case "FILTER_BY_PRICE": //[DONE WITH INTEGRATION ]
            return { ...state, underPrice: action.payload }; // 
        case "FILTER_BY_AVAILABILITY": //[DONE WITH INTEGRATION]
            return { ...state, isAvailable: !state.isAvailable };
        case "FILTER_BY_NO_OF_BEDROOM": // [DONE WITH INTEGRATION]
            return { ...state, numberOfBedroom: action.payload };
            // amenities
        case "FILTER_BY_HAVE_GYM": // [DONE WITH GYM]
            return { ...state, haveGym: !state.haveGym };
        case "FILTER_BY_HAVE_PARKING": // [DONE WITH PARKING]
            return { ...state, haveParking: !state.haveParking };
        case "FILTER_BY_HAVE_POOL": // [DONE WITH POOL]
            return { ...state, havePool: !state.havePool }; 
        case "FILTER_BY_HAVE_WIFI":  // [DONE WITH WIFI]
            return { ...state, haveWifi: !state.haveWifi };
        case "FILTER_BY_HAVE_BALCONY":  //[DONE WITH BALCONY]
            return { ...state, haveBalcony: !state.haveBalcony };
            
        case "FILTER_BY_SEARCH_FOR_LOCATION":  //[DONW WITH LOCATION]
            return { ...state, searchQueryForLocation: action.payload };
        case "CLEAR_FILTERS":
            return {
                underPrice: 1999,
                isAvailable: false,
                numberOfBedroom: 2,
                // amenities
                haveGym: false,
                haveParking: false,
                havePool: false,
                haveWifi: true,
                haveBalcony: false,
                searchQueryForLocation: ""
            };
        default:
            return state;
    }
}