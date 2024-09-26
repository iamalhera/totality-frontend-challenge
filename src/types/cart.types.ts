import { Property, PropertyAction, PropertyState } from "./property.types";

//types for the context creation
interface CartContextProps {
    cartState: CartState;
    cartDispatch: React.Dispatch<CartAction>; 
    propertyState: PropertyState;
    propertyDispatch: React.Dispatch<PropertyAction>; 
}
// types for my all state
interface CartState {
    propertyData: Property[];
    cart: Property[];
    wishlist: Property[];
}
// types for the action of Cart / Wishlist management
type CartAction =
      { type: "ADD_TO_CART"; payload: Property }
    | { type: "REMOVE_FROM_CART"; payload: { id: number } }
    | { type: "ADD_TO_WISHLIST"; payload: Property }
    | { type: "REMOVE_FROM_WISHLIST"; payload: { id: number } }
    | { type: "PROCEED_TO_PAY" }


export type { CartState, CartAction, CartContextProps}