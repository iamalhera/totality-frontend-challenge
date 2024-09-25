import React from 'react'
import HeroSection from '../components/HeroSection'

const Homepage: React.FC = () => {
  return (
    <div>
      < HeroSection />
      <div className="pt-20 lg:max-w-7xl xl:w-[1400px] mx-auto space-y-6  mb-10 rounded-md shadow-lg">
        <h2 className="text-foreground h-fit font-bold text-2xl md:text-4xl lg:text-5xl text-center">Features</h2>
        <p className="h-fit text-base font-light md:text-xl lg:text-xl w-3/4 lg:max-w-[50%] my-6 mx-auto text-center">
          Great, now that we have your attention, we will actually talk about how we help you.
        </p>
        <div className="mt-6 px-6 py-10 lg:max-w-7xl xl:w-[1400px] lg:px-8 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* <!-- Card 1 --> */}
          <div className="rounded-3xl p-8 xl:p-10 bg-muted max-w-[360px] shadow-2xl">
            <div className="w-fit h-fit md:text-lg  text-lg font-medium tracking-tight leading-8 bg-background px-4 py-2 rounded-md">1</div>
            <h3 className="mt-5 text-2xl font-bold  tracking-tight">Verified Property Owners</h3>
            <p className="md:text-lg  mt-5 text-md">
            Rent with confidence knowing that all property owners on our platform are verified. We conduct thorough background checks to ensure you are dealing with trustworthy landlords, giving you peace of mind in your rental journey.
            </p>
            <div className="mt-12 font-normal bg-muted outline-none text-blue-600 flex justify-start items-center hover:cursor-pointer">
              Learn more
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2">
                <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          <div className="rounded-3xl p-8 xl:p-10 bg-muted max-w-[360px] shadow-2xl">
            <div className="w-fit h-fit md:text-lg  text-lg font-medium tracking-tight leading-8 bg-background px-4 py-2 rounded-md">2</div>
            <h3 className="mt-5 text-2xl font-bold  tracking-tight">Seamless Booking Process</h3>
            <p className="md:text-lg  mt-5 text-md">
            Enjoy a hassle-free booking experience with our user-friendly platform. From searching for properties to signing rental agreements, we streamline the entire process to ensure you can secure your rental quickly and efficiently.
            </p>
            <div className="mt-12 font-normal bg-muted outline-none text-blue-600 flex justify-start items-center hover:cursor-pointer">
              Learn more
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2">
                <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>
            </div>
          </div>

          {/* <!-- Card 3 --> */}
          <div className="rounded-3xl p-8 xl:p-10 bg-muted max-w-[360px] shadow-2xl">
            <div className="w-fit h-fit md:text-lg  text-lg font-medium tracking-tight leading-8 bg-background px-4 py-2 rounded-md">3</div>
            <h3 className="mt-5 text-2xl font-bold  tracking-tight">Extensive Property Listings</h3>
            <p className="md:text-lg  mt-5 text-md">
            Explore a diverse range of rental properties that suit every budget and preference. Our extensive listings include apartments, houses, and shared accommodations, making it easy for you to find your perfect home.
            </p>
            <div className="mt-12 font-normal bg-muted outline-none text-blue-600 flex justify-start items-center hover:cursor-pointer">
              Learn more
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2">
                <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Homepage
