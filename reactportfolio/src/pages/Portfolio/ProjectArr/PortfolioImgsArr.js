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
        description: "For my first group project in the bootcamp, we created a game search application that allows the user to search for a video game, get recommended games based on selected criteria, and retrieve news and video content of an entered game.",
        image: SearchAndDestroy,
        github: "https://microxgleek94.github.io/ColumbiaProject_-1/",
    },
    {
        id: 1,
        title: "Stella Vybz",
        description: "For my second group project, we created a social music application where users can search an artist's songs, albums, and a future development is to then have the users build their own playlists that they can be shared with their friends. This project is hosted on heroku.",
        image: StellaVybz,
        github: "https://github.com/microxgleek94/Project2"
    },
    {
        id: 2,
        title: "Weather App",
        description: "This web application utilizes the OpenWeather API, which allows users to search any city in the search field, and once the search button is clicked, the city's current weather, including temperature, UV Index, Humidity and the current date will be displayed dynamically.",
        image: WeatherApp,
        github: "https://microxgleek94.github.io/Weather-App/"
    },
    {
        id: 3,
        title: "CLI README Generator",
        description: "A simple command-line (CLI) application that runs in your terminal and dynamically generates a README.md from a user's input.",
        image: READMECLIApp,
        github: "https://github.com/microxgleek94/README_Generator"
    },
    {
        id: 4,
        title: "Random Password Generator",
        description: "This web application runs in the browser and generates a random password based on user-selected criteria.",
        image: RandomPasswordGen,
        github: "https://github.com/microxgleek94/Password-Generator"
    },
    {
        id: 5,
        title: "CLI Employee Tracker",
        description: "This CLI application runs in the user's terminal and uses a mySQL database to store a table filled with employee data. This application can also create company departments, add new employees/managers and also delete already existing employees, and add roles/titles to employees.",
        image: EmployeeTracker,
        github: "https://github.com/microxgleek94/CLI-Node_Employee_Tracker"
    },
];

export default PortfolioImgsArr;