import React from 'react'
import { Property } from '../types/property.types';
import { useCart } from '../context/Context';


interface CartSinglePropertyCardProps {
    property: Property; // the type for your property
}
const CartSingleProperty: React.FC<CartSinglePropertyCardProps> = ({ property }) => {
    let { title, description, isAvailable, price, amenities, image, totalBedrooms, location, totalRatings, rating, id } = property;
    const { cartState: { cart, wishlist }, cartDispatch } = useCart();

    return (
        <div className="max-w-80 bg-white border border-gray-200 rounded-lg shadow">
            <div className="relative">
                <img className="w-full h-48 object-cover rounded-t-lg" src={image} alt="Skylight Condo" />
                {/* --------wishlist--------- */}
                {
                    wishlist.some(prty => prty.id === id) ?
                        (
                            <i onClick={() => {
                                console.log("clicked REMOVE_FROM_WISHLIST")
                                cartDispatch({
                                    type: "REMOVE_FROM_WISHLIST",
                                    payload: property
                                })
                            }}
                                className="fas fa-heart fa-heart-filled text-2xl absolute top-2 right-2 text-red-600 hover:text-red-400 cursor-pointer" title="Remove from wishlist"></i>
                        ) : (
                            <i onClick={() => {
                                console.log("clicked ADD_TO_WISHLIST")
                                cartDispatch({
                                    type: "ADD_TO_WISHLIST",
                                    payload: property
                                })
                            }}
                                className="fas fa-heart text-2xl absolute top-2 right-2 text-red-100 hover:text-red-400  cursor-pointer" title="Add to wishlist"></i>
                        )
                }
                {/* --------wishlist---------  */}
            </div>
            <div className="p-4">
                <div className="flex justify-between items-center">
                    <h5 className="text-lg font-semibold tracking-tight text-black">{title}</h5>
                    {
                        isAvailable ?
                            <div className=" h-4 w-4 rounded-full bg-green-500 cursor-pointer" title="Available"></div> : <div className="h-4 w-4 rounded-full bg-red-500 cursor-pointer" title="Not Available"></div>
                    }
                </div>
                <p className="text-sm text-gray-600 mt-2">{description}</p>
                <p className="text-sm text-gray-600 mt-1"><i className="fas fa-map-marker-alt text-red-500 mr-1"></i>
                    {location}</p>
                <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        {rating} {" "} <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    </div>
                    <span className="text-xs text-gray-500 ml-2">({totalRatings} ratings)</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-2xl font-bold text-black mb-2 sm:mb-0">${price}</span>
                    <div className="flex flex-col items-start sm:items-end">
                        <span className="text-sm text-gray-600">{totalBedrooms} Bedrooms</span>
                        <div className="flex flex-wrap justify-start sm:justify-end gap-1 mt-1">
                            {amenities.map((amenity, index) => (
                                <span key={index} className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded">{amenity}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    {/* Cart Management */}
                    {
                        cart.some(prpty => prpty.id === id) ?
                            (
                                <button
                                    onClick={() => {
                                        cartDispatch({
                                            type: "REMOVE_FROM_CART",
                                            payload: property
                                        })
                                    }}
                                    disabled={isAvailable ? false : true}
                                    className={isAvailable ? "text-white bg-red-600 hover:bg-red-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full block" : " text-white bg-gray-500 hover:bg-gray-500 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full block"}
                                >Remove from Cart</button>
                            ) : (
                                <button
                                    onClick={() => {
                                        cartDispatch({
                                            type: "ADD_TO_CART",
                                            payload: property
                                        })
                                    }}
                                    disabled={isAvailable ? false : true}
                                    className={isAvailable ? "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full block" : " text-white bg-gray-500 hover:bg-gray-500 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full block"}
                                >Add to Cart</button>
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default CartSingleProperty;
