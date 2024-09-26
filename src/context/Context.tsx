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
        underPrice: 1999,
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

    const [cartState, cartDispatch] = useReducer(cartReducerFunc, {
        //initial State of propertyData, cart and wishlist
        propertyData: propertyData,
        cart: [],
        wishlist: [],
    });

    const [propertyState, propertyDispatch] = useReducer(propertyReducerFunc, initialPropertyState);
    
    return (
        <CartContext.Provider value={{ propertyState,cartState, cartDispatch, propertyDispatch }}> 
            {children}
        </CartContext.Provider>
    );
};

export { useCart, CartProvider };
