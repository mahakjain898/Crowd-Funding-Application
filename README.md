## Table of contents

- [Application Interface](#Application-Interface)
- [Functionality](#Functionality)
- [User Story](#User-Story)
- [General Info](#General-Info)
- [Technologies](#Technologies)
- [Future Functionality](#Future-Functionality)
- [Summary](#Summary)
- [UML](#UML)
- [Database](#Database)

## Tech Stack

Tech Stack: React.JS, MongoDB, Node.JS, Express.JSHTML, CSS, Javascript

## Application Interface

This is the main log-in portal of the website. Users are prompted to provide a username and email which creates them an individual account.

About Us: The About Us page describes our core values and motivation.
News:The News page includes a search bar - users can look up worldwide news related to charities.
Charity: The Charity Search page provides the user with a worldmap, and the ability to find charities by location.
Donate: The Donate page includes a charity search bar, and custom buttons allowing the user to donate an amount of their choosing to their selected charity.
Contact Us: The Contact Us page provides personal information / photos about the creators and founders of Donate Now.com. There is also a "Review" section where users can ask questions or give comments.

# Functionality

### Log-in System

User can login the system using email and password. Unregistered user can sign up with the system too.

## General Info

" "Donate Now" enables visitors to look out international organizations and donate to a specific cause of their choosing. The program makes use of the entire "MERN" stack and includes a Mongo Database that stores user data and "preferred" charity. The "Charity Map" part uses the user's location to geolocate nearby charity. This React project's "Donate" section instructs users on how to give a predetermined or custom sum of money to the charity of their choice. The "News" option allows users to search for international news about particular charity."

## How to use the system

-Git clone and download the Repository "donate_now" from Github onto your local computer

-In your terminal, cd to "donate_now" folder

-Setup .env file with variable BACKEND_URL(add backend url for API calls.)

-In terminal run "npm start" for running application

-cd into server folder
---Setup .env file with variable DB(add mongoDB url for connecting to database), JWTPRIVATEKEY
---npm install and npm install all of the dependencies
---in terminal run using "npm start"

-Local browser website will be: localhost:3000

## Technologies

Project is created with:

- [React library](https://reactjs.org/)
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://www.javascript.com/)
- [React-Bootstrap](https://react-bootstrap.github.io/)
- [Mongo](https://www.mongodb.com/)
- [Covid-19 API](https://rapidapi.com/api-sports/api/covid-193)
- [Ant Design](https://ant.design/)
- [Formik](https://jaredpalmer.com/formik/docs/api/field)
- [Yup](https://www.npmjs.com/package/yup)

## Future Functionality

- Synchronizing user pay and charity selections with their "Favorites" page
- Tweaks to the layout and Member page
- A blog/chat option where users can talk about their website experience or view charity information

## Summary

- "Donate Now" is a charity search and donation application, helping users in multiple ways to stay informed about world events and opportunities to give back to those in need.

## Database

- This project was completed using MongoDB, populating the database with charity information such as: Charity name, description, rating, and website URL.

## Authors

- Rutvi Tilala
- Mahak Jain
- Ridham Modh
- Naman Diwan
- Panth Shah
