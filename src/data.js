import waterPic from './imgs/Water-project.png';
import cocktailPic from './imgs/cocktail.png';
import placeholder from './imgs/placeholder.png';


const projects = [
    {
        id: 1,
        title: "Water My Plants",
        img: waterPic,
        link: "https://water-my-plants-lambda-7.netlify.app/",
        description: "A web app that allows users to create an account and track the watering schedule of their plants.",
        description2: "Wrote a REST API for the Water My Plants application. Provided user sign up and login with authorization to restricted endpoints using JWT. Collaborated with a team of three front-end engineers using slack and zoom.",
        tech: "Node.js | Express | PostgreSQL | Heroku",
        role: "Back-End Developer"
    },
    {
        id: 2,
        title: "Cocktail Recipe Generator",
        img: cocktailPic,
        link: "https://drink-generator-random.vercel.app/",
        description: "Randomly generate a cocktail recipe with the click of a button!",
        description2: "Created a React application to display JSON responses from a free cocktail API. Handled state management with Redux and styling through CSS.",
        tech: "React | CSS | HTML | Axios | Redux | Vercel",
        role: "Front-End Developer"
    },
    {
        id: 3,
        title: "Freebooter Website",
        img: placeholder,
        link: null,
        description: "The official website of Freebooter Mountain Surf.",
        description2: "Creating the webpage for Freebooter Mountain Surf. Top of the line custom pow-surfers need a top of the line website. Working to create a full CRUD application for the owner of Freebooter to keep inventory and news up to date. ",
        tech: "React | CSS | HTML | Axios | Redux | Node.js | Express | PostgreSQL | Heroku",
        role: "Full-Stack Developer"
    }
];

export default projects;