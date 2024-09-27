# Project Title
**StayEase** : Property Rental Platform, Totality-Corp Assessment, Frontend Engineer Role

## Demo link:
Access this application at [StayEase](https://stayease-rental-platform.netlify.app/)

## Table of Content:

- [About The App](#about-the-app)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)
- [Approach](#approach)
- [Status](#status)
- [Credits](#credits)
- [License](#license)

## About The App
**StayEase** is a property rental platform that allows users to explore a variety of rental properties and find the one that suits their needs. Users can manage their wishlist, handle cart management, and place bookings seamlessly. This project serves as an assessment for the **Frontend Engineer** role.

## Screenshots

### Gif: Walk Through
![Video Preview](/static/stayease.gif)


### View: Desktop
![View](/static/desktop_homepage.png)
![View](/static/desktop_property_listing.png)
![View](/static/desktop_wishlist.png)
![View](/static/desktop_cart.png)
![View](/static/desktop_checkout.png)

### View: Tablet
![View](/static/tablet_homepage.png)
![View](/static/tablet_property_listing.png)

### View: Mobile
![View](/static/mobile_homepage.png)
![View](/static/mobile_property_listing.png)


## Technologies
- `React` -  library for building UI
- `TypeScript` - strongly-typed programming language 
- `auth0` - for authentication 
- `React-Router` - library for routing and navigation
- `Tailwind CSS` - utility-first CSS framework for styling 
- `react-toastify` - library for customizable toast notifications 
- `vite` - fast build tool for frontend projects
- `ESLint` - tool for identifying and fixing code in JS/TS


## Setup
- Clone the repository `git clone https://github.com/iamalhera/totality-frontend-challenge.git`
- Create an account on `auth0` for authentication handeling, You can follow [this](https://youtu.be/oA-K3DfG1QY?si=jNQVVE-F1IzKVZgD)
- Create a `.env` file to root of you project
- now paste in `.env` file `VITE_AUTH0_DOMAIN=<you domain from auth0>` and `VITE_AUTH0_CLIENT_ID=<you client id from auth0>`
- Remember to change `Callback URLs`, `Logout URLs`, `Allowed Web Origins` URLs in auth0 to `http://localhost:5173` to run auth0 in your local and then to `https://sample.com` when you want to host your app.
- run `npm install` in your terminal
- run `npm run dev` in your terminal

## Approach
After going through the challenge doc, I figured that building a React-based multi-page platform would be the way to go. So, I used react-router to handle navigation between the main pages like the landing page, property listing (with filters), wishlist, cart, and checkout.

####  Challenges I faced -
Managing the state of the products was a pretty big challenge, especially when it came to filtering and updating the cart. I also wanted to make sure I was creating reusable components and setting up proper authentication for protected routes. Another key aspect was ensuring the design was responsive, so it worke good enough on different screen sizes, and getting the checkout page functionality right.

#### Data Handling -
For data, I didn’t have a backend, so I created a dummy JSON file. I stored property images in the assets folder and made up random information for the rental properties, like location, number of bedrooms, amenities, price, and rating. This setup allowed me to test the booking functionality easily. The property listing page was especially tricky because of the complex filtering options. I had to make sure the component was structured efficiently to avoid unnecessary re-renders and to handle multiple filters properly without slowing down the app.

#### Design & Responsiveness - 
I decided to use Tailwind CSS to make the app responsive. Tailwind made it super easy to build layouts that looks good across different screen sizes. I also used some pre-built components from the internet to speed up development. Responsiveness was particularly important for ensuring that the user experience remained consistent on different devices, especially during actions like adding properties to the wishlist or viewing the cart.

#### TypeScript for Error Handling -
I went with TypeScript because it helps catch errors early on. That way, I wouldn’t have to deal with as many runtime issues later, which made coding a lot smoother. TypeScript was also useful in avoiding bugs during wishlist and cart management, ensuring that updates to bookings were reflected instantly while allowing users to modify their selections easily.

#### Authentication & State Management
For user authentication, I used Auth0 because it’s pretty easy to integrate, and I didn’t want to spend too much time building a custom auth system from scratch. As for managing the app’s state, I stuck with React’s built-in hooks like useState, useContext, and useReducer to keep things simple and straightforward. Managing the state for features like the wishlist, cart, and checkout was critical for ensuring that users could modify their bookings and proceed with payment only after filling out all the necessary information.

#### Notifications & Deployment

For notifications, I used react-toastify to show pop-ups whenever necessary, like when items were added to the cart or wishlist. Finally, I deployed the whole project on [Netlify](https://app.netlify.com) for smooth deployment. I also linked it with GitHub to automate the process, ensuring that any changes I made were quickly reflected online.

 

## Status
[StayEase] is `Completed` as per assessments need.

## Credits
List of Help Guides:
- [google](https://google.com)
- [chatGPT](https://chat.openai.com)
- [tailwindcss official doc](https://tailwindcss.com/)
- [react docs](https://react.dev/)
- [typescript doc](https://www.typescriptlang.org/docs/handbook/intro.html)
- [react-router docs](https://reactrouter.com/en/main)
- [auth0 docs](https://auth0.com/docs)
- [react-toastify docs](https://fkhadra.github.io/react-toastify/introduction/)
- [HTML, CSS, JS docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## License

This is brought to you by [Alhera Ahmad](https://gentleshah.netlify.app)