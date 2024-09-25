import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection: React.FC = () => {
  return (
    <div>
     <div className="bg-white">
  <div className="relative isolate px-6 lg:px-8">
    <div className="mx-auto max-w-2xl py-18 sm:py-24 lg:py-24">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
        Announcing Our Next Batch of Exotic Properties for Unforgettable Stays! <a href="#" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Discover Your Perfect Home Away from Home
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">At StayEase, we connect you with the best property rentals, whether you're planning a weekend getaway, a business trip, or an extended stay. Explore our curated listings, featuring everything from cozy apartments to luxurious villas, all designed to make your stay unforgettable.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link to="/property-listing" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Explore Properties</Link>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>

  </div>
</div>

    </div>
  )
}

export default HeroSection
