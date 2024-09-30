import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
export const navigation = [
    {
        id: "0",
        title: "Home",
        url: "/",
    },
    {
        id: "1",
        title: "Projects",
        url: "/projects",
    },
    {
        id: "2",
        title: "About",
        url: "/about",
    },

    {
        id: "3",
        title: "Get in touch",
        url: "/get-in-touch",
        onlyMobile: true,
    },
];


export const programmingSkills = [
    {
        id: "0",
        title: "HTML/CSS",
    },
    {
        id: "1",
        title: "JavaScript",
    },
    {
        id: "2",
        title: "Responsive Design",
    },
]


export const programmingFramework = [
    {
        id: "0",
        title: "React Native",
    },
    {
        id: "1",
        title: "React",
    },
    {
        id: "2",
        title: "Laravel",
    },
    {
        id: "3",
        title: "aJax/jQuery",
    },
]

export const otherSkills = [
    {
        id: "0",
        title: "Git Control",
    },
    {
        id: "1",
        title: "Tailwind",
    },
    {
        id: "2",
        title: "Bootstrap",
    },
]

export const socialMedia = [
    {
        id: "1",
        url: "https://www.facebook.com/ohhearl",
        icon: FaFacebookSquare,
    },
    {
        id: "2",
        url: "https://www.linkedin.com/in/earl-jason-cordero-239b51320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        icon: FaLinkedin,
    },
    {
        id: "3",
        url: "https://github.com/OhhEarl",
        icon: FaGithubSquare,
    },
    {
        id: "4",
        url: "https://instagram.com/Ohh.earl",
        icon: FaInstagramSquare,
    },
];

export const skillLevel = [
    { id: 1, name: "HTML", progress: 85 },
    { id: 2, name: "CSS", progress: 75 },
    { id: 3, name: "JavaScript", progress: 50 },
    { id: 4, name: "React", progress: 50 },
    { id: 5, name: "Laravel", progress: 50 },
    { id: 5, name: "React native", progress: 50 },
];
