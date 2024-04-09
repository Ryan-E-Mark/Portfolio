import waterPic from './imgs/Water-project.png';
import cocktailPic from './imgs/cocktail.png';
import recipePage from './imgs/recipe-page.png';


const projects = [
    {
        id: 1,
        title: "Tasty Bites",
        img: recipePage,
        link: "https://tasty-bites-tau.vercel.app/",
        description: "Search for recipes by a variety of methods.",
        description2: "A personal project interfacing with a recipe-api, used as a way to learn TailwindCSS. Will be an ongoing project as more features are added, and improvemnts in UI made.",
        tech: "React | TailwindCSS | HTML | Axios | TypeScript",
        role: "Front-End Developer"
    },
    {
        id: 2,
        title: "Water My Plants",
        img: waterPic,
        link: "https://github.com/Ryan-E-Mark/water-my-plants-7-backend",
        description: "A web app that allows users to create an account and track the watering schedule of their plants.",
        description2: "Wrote a REST API for the Water My Plants application. Provided user sign up and login with authorization to restricted endpoints using JWT. Collaborated with a team of three front-end engineers using slack and zoom.",
        tech: "Node.js | Express | PostgreSQL | Heroku",
        role: "Back-End Developer"
    },
    {
        id: 3,
        title: "Cocktail Recipe Generator",
        img: cocktailPic,
        link: "https://drink-generator-random.vercel.app/",
        description: "Randomly generate a cocktail recipe with the click of a button!",
        description2: "Created a React application to display JSON responses from a free cocktail API. Handled state management with Redux and styling through CSS.",
        tech: "React | CSS | HTML | Axios | Redux | Vercel",
        role: "Front-End Developer"
    },
];

export default projects;