import { FaReact, FaNodeJs, FaNode, FaJava } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiRedux, SiFirebase } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";

const Skills = [
    {
        head: "Programming languages :",
        value: "Java, JavaScript, C, C++"
    },
    {
        head: "Web Development :",
        value: "MERN stack, Redux, Hooks, HTML/CSS, Sass, Redux, Firebase"
    },
    {
        head: "Version control system :",
        value: "Github, Gitlab"
    },
    {
        head: "Database :",
        value: "MySQL, MongoDB."
    },
    {
        head: "Web Hosting :",
        value: "Heroku, Surge, Vercel, Firebase"
    },
    {
        value: "Object-Oriented Programming"
    },
    {
        value: "Analytical Thinking and Problem Solving"
    },
    {
        value: "Eagerness to Learn New Technologies"
    }
]

export const aboutSkill = [{
    name: "REACT",
    Icon: FaReact
}, {
    name: "REDUX",
    Icon: SiRedux
}, {
    name: "NODE",
    Icon: FaNode
}, {
    name: "EXPRESS",
    Icon: FaNodeJs
}, {
    name: "SCSS",
    Icon: FaReact
}, {
    name: "JAVASCRIPT",
    Icon: SiJavascript
}, {
    name: "JAVA",
    Icon: FaJava
}, {
    name: "FIREBASE",
    Icon: SiFirebase
}, {
    name: "MONGODB",
    Icon: SiMongodb
}, {
    name: "SQL",
    Icon: AiOutlineConsoleSql
}]

export default Skills;