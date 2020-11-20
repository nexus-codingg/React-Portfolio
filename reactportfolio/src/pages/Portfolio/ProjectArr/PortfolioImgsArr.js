import {
    READMECLIApp,
    EmployeeTracker,
    RandomPasswordGen,
    SearchAndDestroy,
    WeatherApp,
    StellaVybz
} from "./exportImage"

const PortfolioImgsArr = [
    {
        id: 0,
        title: "Search & Destroy",
        description: "For my first group project in the bootcamp, we created a video game search web application that allows the user to search for a video game, get recommended games based on selected criteria, and retrieve news and video content of an entered game.",
        image: SearchAndDestroy,
        deployed: "https://microxgleek94.github.io/Search-Destroy/",
        github: "https://github.com/microxgleek94/Search-Destroy",
        alt:"Image of Video Game App"
    },
    {
        id: 1,
        title: "Stella Vybz",
        description: "For my second group project, we created a social music application where users can search an artist's songs, albums, and a future development is to then have the users build their own playlists that they can be shared with their friends. This project is hosted on heroku.",
        image: StellaVybz,
        deployed:"https://stellavybezz.herokuapp.com/",
        github: "https://github.com/microxgleek94/Project2",
        alt:"Image of Music App"
    },
    {
        id: 2,
        title: "Weather App",
        description: "This web application utilizes the OpenWeather API, which allows users to search any city in the search field, and once the search button is clicked, the city's current weather, including temperature, UV Index, Humidity and the current date will be displayed dynamically.",
        image: WeatherApp,
        deployed: "https://microxgleek94.github.io/Weather-App/",
        github: "https://github.com/microxgleek94/Weather-App",
        alt:"Image of Weather App"
    },
    {
        id: 3,
        title: "Random Password Generator",
        description: "This web application runs in the browser and generates a random password based on user-selected criteria.",
        image: RandomPasswordGen,
        deployed:"https://microxgleek94.github.io/Password-Generator/",
        github: "https://github.com/microxgleek94/Password-Generator",
        alt:"Image of Password Generator App"
    },
    {
        id: 4,
        title: "CLI README Generator",
        description: "A simple command-line (CLI) application that runs in your terminal and dynamically generates a README.md from a user's input. ** Note: This is a CLI application and does not have a deployed link. Please review the repo for instructions on how to use the app on your local machine.",
        image: READMECLIApp,
        deployed:"",
        github: "https://github.com/microxgleek94/README_Generator",
        alt:"Image of ReadMe App"
    },
    {
        id: 5,
        title: "CLI Employee Tracker",
        description: "This CLI application runs in the user's terminal and uses a mySQL database to store a table filled with employee data. This application can also create company departments, add new employees/managers and also delete already existing employees, and add roles/titles to employees. ** Note: This is a CLI application and does not have a deployed link. Please review the repo for instructions on how to use the app on your local machine.",
        image: EmployeeTracker,
        deployed:"",
        github: "https://github.com/microxgleek94/CLI-Node_Employee_Tracker",
        alt:"Image of Employee Tracker App"
    },
];

export default PortfolioImgsArr;