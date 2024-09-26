import React, { createContext, useContext, useReducer, ReactNode } from "react";
import PropertyData from "../constants/PropertyData"; // Adjust the path as necessary
import {  cartReducerFunc, propertyReducerFunc } from "./Reducers"; // Adjust based on actual reducer names cartReducerFunc, add later
import { Property, PropertyState } from "../types/property.types"; //CartAction <- - add later
import {  CartContextProps } from "../types/cart.types";


// Create context
const CartContext = createContext<CartContextProps | undefined>(undefined);

// Custom hook to use the cart context
const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};

// Cart Provider component
const CartProvider: React.FC<{ children: ReactNode  }> = ({ children }) => {

    const initialPropertyState: PropertyState = {
        underPrice: 2999,
        isAvailable: false,
        numberOfBedroom: 2,
        haveGym: false,
        haveParking: false,
        havePool: false,
        haveWifi: true,
        haveBalcony: false,
        searchQueryForLocation: ""
    };
    const propertyData: Property[] = PropertyData.data; // Using the dataset provided
    // first reducer function for the cart and total state management management
    const [cartState, cartDispatch] = useReducer(cartReducerFunc, {
        //initial State of propertyData, cart and wishlist <-- this is provided to the whole application
        propertyData: propertyData,
        cart: [],
        wishlist: [],
    });
    // second reducer function for the filtering of properties based on amenities and so on
    const [propertyState, propertyDispatch] = useReducer(propertyReducerFunc, initialPropertyState);
    
    // note always create .tsx file for the context in order to be able to create HTML elements [wasted 4 hours just for that]
    return (
        <CartContext.Provider value={{ propertyState,cartState, cartDispatch, propertyDispatch }}> 
            {children}
        </CartContext.Provider>
    );
};
// CartProvider for the elveloping of app & useCart for the availibility of state and actions based upon those state changes
export { useCart, CartProvider };
