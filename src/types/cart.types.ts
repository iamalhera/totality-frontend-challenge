import { Property, PropertyAction, PropertyState } from "./property.types";

interface CartContextProps {
    cartState: CartState;
    cartDispatch: React.Dispatch<CartAction>; // Replace 'any' with the appropriate action type
    propertyState: PropertyState;
    propertyDispatch: React.Dispatch<PropertyAction>; // Replace 'any' with the appropriate action type
}

interface CartState {
    propertyData: Property[];
    cart: Property[];
    wishlist: Property[];
}

type CartAction =
    //   { type: "ADD_TO_CART"; payload: Property }
    // | { type: "REMOVE_FROM_CART"; payload: { id: number } }
    | { type: "ADD_TO_WISHLIST"; payload: Property }
    | { type: "REMOVE_FROM_WISHLIST"; payload: { id: number } }
    // | { type: "PROCEED_TO_CHECKOUT" }


export type { CartState, CartAction, CartContextProps}