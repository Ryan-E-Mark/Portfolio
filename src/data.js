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
        role: "Back-End Developer"
    },
    {
        id: 2,
        title: "Cocktail Recipe Generator",
        img: cocktailPic,
        link: "https://drink-generator-random.vercel.app/",
        description: "Randomly generate a cocktail recipe with the click of a button!",
        role: "Back-End Developer"
    },
    {
        id: 3,
        title: "Freebooter Website",
        img: placeholder,
        link: null,
        description: "The official website of Freebooter Mountain Surf.",
        role: "Full-Stack Developer"
    }
];

export default projects;