import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import { useCart } from '../context/Context';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

//types for all the booking details
interface BookingDetails {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  paymentMethod: string;
}

const Checkout: React.FC = () => {
  const navigate = useNavigate(); // to navigate to any route
  const { user } = useAuth0(); // API from auth
  const [loadingText, setLoadingText] = useState(''); // State for loading text
  const { cartDispatch, cartState: { cart } } = useCart(); // Data and action from ContextAPI
  const [confirmBooking, setConfirmBooking] = useState<boolean>(false); // to check whether the form is filled or not
  const [amount, setAmount] = useState<number>(0); // to store amount
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>({
    fullName: user?.name ? user?.name : '', //conditional checking of name from auth0
    email: user?.email ? user?.email : '', // conditional checking of email from auth0
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    paymentMethod: 'upi',
  });


  const handlePayment = () => { //payment handler for the "Proceed to Pay" button
    if (confirmBooking) {
      setLoadingText('Loading...'); // Set loading text
      setTimeout(() => {
        setLoadingText(''); // Clear loading text after 2 seconds
        cartDispatch({
          type: 'PROCEED_TO_PAY',
        });
        navigate("/"); //after successfull payment we are routing to "/"
        toast.success('😊 Payment Successfull!! ', {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }, 2000); // 2 seconds delay
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBookingDetails({ ...bookingDetails, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // if any field of the form is empty this will prevent from enabling "Proceed to Payment"
    setConfirmBooking(true); // this will activate the button "Proceed to payment"
  };

  useEffect(() => { // to calculate the amount from the cart item
    let calculatedAmount = 0

    for (let el of cart) {
      calculatedAmount += Number(el.price);
    }
    setAmount(calculatedAmount); // and setting it to a state related to it
  }, [])

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Checkout</h2>
      <div className="flex flex-col md:flex-row justify-between">
        {/* Booking Details */}
        <div className="md:w-2/3 mb-6 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="fullName" className="font-medium">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={bookingDetails.fullName}
                onChange={handleInputChange}
                className="border rounded p-2"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={bookingDetails.email}
                onChange={handleInputChange}
                className="border rounded p-2"
                placeholder="johndoe@example.com"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="font-medium">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={bookingDetails.phone}
                onChange={handleInputChange}
                className="border rounded p-2"
                placeholder="+91 xxxxx xxxxx"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="address" className="font-medium">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={bookingDetails.address}
                onChange={handleInputChange}
                className="border rounded p-2"
                placeholder="1234 Main St"
                required
              />
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col w-1/2">
                <label htmlFor="city" className="font-medium">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={bookingDetails.city}
                  onChange={handleInputChange}
                  className="border rounded p-2"
                  placeholder="New Delhi"
                  required
                />
              </div>

              <div className="flex flex-col w-1/2">
                <label htmlFor="pincode" className="font-medium">Postal Code</label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={bookingDetails.postalCode}
                  onChange={handleInputChange}
                  className="border rounded p-2"
                  placeholder="xxx xxx"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="country" className="font-medium">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                value={bookingDetails.country}
                onChange={handleInputChange}
                className="border rounded p-2"
                placeholder="India"
                required
              />
            </div>

            <h3 className="text-xl font-semibold mt-6">Payment Method</h3>
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="creditCard"
                  name="paymentMethod"
                  value="creditCard"
                  checked={bookingDetails.paymentMethod === 'upi'}
                  onChange={handleInputChange}
                />
                <label htmlFor="creditCard" className="ml-2">Credit Card</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="upi"
                  name="paymentMethod"
                  value="upi"
                  checked={bookingDetails.paymentMethod === 'upi'}
                  onChange={handleInputChange}
                />
                <label htmlFor="upi" className="ml-2">UPI</label>
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 mt-4"
            >
              Confirm Booking
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="md:w-1/3 p-4 border border-gray-300 rounded-lg bg-gray-50">
          <h3 className="text-xl font-semibold mb-4">Booking Summary</h3>
          <div className="flex justify-between">
            <span>Room Price</span>
            <span>${amount}/week</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>GST(18%)</span>
            <span>${(amount * .18).toFixed(2)}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>Total Price</span>
            <span>${(amount * 1.18).toFixed(2)}</span>
          </div>

          <button
            onClick={handlePayment}
            disabled={!confirmBooking || loadingText !== ''}  
            title={!confirmBooking ? 'Please Confirm Your Booking First' : 'Now You can Proceed'}
            className={  
              !confirmBooking
                ? 'bg-gray-500 text-white px-6 py-2 rounded mt-6 w-full cursor-not-allowed'
                : 'bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 mt-6 w-full cursor-pointer'
            }
          >
            {loadingText ? (
              <span>{loadingText}</span> // Show loading text
            ) : (
              <span>Proceed to Payment</span> // Normal button text
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
