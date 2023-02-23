// import images
import Hero_person from "./assets/images/Hero/person.png";

import html from "./assets/images/Skills/html.png";
import css from "./assets/images/Skills/css.png";
import tailwind from "./assets/images/Skills/tailwind.png";
import reactjs from "./assets/images/Skills/react.png";
import js from "./assets/images/Skills/js.png";
import node from "./assets/images/Skills/node.png";
import bootsrap from "./assets/images/Skills/bootsrap.png";
import mongo from "./assets/images/Skills/mongo.png";
import express from "./assets/images/Skills/express.png";
import c from "./assets/images/Skills/c.png";




import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";


import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
// import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "ZAIN",
    LastName: "UL ABAIDEEN",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "8+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        id:1,
        name: "HTML",
        para: "I am expert in",
        logo: html,
        li:{
          1:"Hyper Text MarkUp Language",
          2:'I am expert in HTML.',
          3:'I know HTML very well. ',
        }, 
      },
      
      
      {
        id:2,
        name: "CSS",
        para: "I have a very good knowledge",
        logo: css,
        li:{
          1:'CaseCading Styling Sheet',
          2:'I have a good Knowledge.',
          2:'I am energetic to learn deep css .',
        },
      },
      {
        id:3,
        name: "TAILWIND CSS",
        para: "I am expert in",
        logo: tailwind,
        li:{
          1:'I am expert in Tailwind Css.',
          2:'I have good wxperience in Tailwind Css.',
          3:'I love Tailwind Css.'
        },
      },

      {
        id:4,
        name: "BOOTSTRAP",
        para: "I know bootstrap very",
        logo: bootsrap,
        li:{
          1:'I know bootstrap very well.',
          2:'I have used Bootstrap on much places.',
          
        },
      },
      {
        id:5,
        name: "JAVA SCRIPT",
        para: "I have a good practice",
        logo: js,
        li:{
          1:"I have a good practice in JS.",
          2:"I am energetic to learn as much as I can deep in JavaScript "
        },
        
      },
            {
              id:6,
        name: "REACT JS",
        para: "I have a very good practice",
        logo: reactjs,
        li:{
          1:'I have a good practice in ReactJs.',
          2:'I am learning deep in ReactJs.',
          3:"I am energetic to learn as much as I can deep in ReactJS "

        }
      },
      {
        id:7,
      name: "NODE JS",
      para: "I have an intermediate",
      logo: node,
      li:{
        1:'I have an intermediate knowledge about Node js.',
      
        2:"I am energetic to learn as much as I can deep in ReactJS "

      }
    },
      {
        id:8,
        name: "MONGO DB",
        para: "I have an intermediate",
        logo: mongo,
        li:{
          1:'I have an intermediate knowledge about Node js.',
        
          2:"I am energetic to learn as much as I can deep in ReactJS "
  
        }
      },
      {
        id:9,
        name: "EXPRESS",
        para: "I know how to connect",
        logo: express,
        li:{
          1:"I know how to connect express with nodejs very well."
        }
      },
      {
        id:10,
        name: "FUNDAMENTALS OF C",
        para: "I know very well",
        logo: c,
        li:{
          1:'I have the good knowledge of Basics of C language.',
          2:"I am in the process of learning advance C language."
        }
      }
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Frontend Web Development",
        para: " I will do Frontend Web Development with Html, CSS and JS. I am Expert in developing new designs. I am Energetic to Learn new Things. ",
        logo: services_logo1,
      },
      {
        title: "React Developer",
        para: "I will make Websites using React. I will make websites in React using Tailwind Css. I am Energetic to Learn new Things.",
        logo: services_logo2,
      },
      {
        title: "Mern Stack Developer",
        para: "I will make frontend with React and backend with Express , MongoDB and NodeJs.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "E-commerce",
        image: project1,
      },
      {
        title: "Islamic Sociey",
        image: project2,
      },
      {
        title: "E-commerce 2",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    
    para: "Just Give me a Chance to  work with you. It would me Pleasureable for me. ",
    btnText: "Hire Me",
  },
  Contact: {
   
    subtitle: "GET IN TOUCH",
    title: "Contact Me",
    social_media: [
      {
        text: "Linkedin",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/zainulabaideen",
      },
      {
        text: "+92 304 5018000",
        icon: MdCall,
        link: "https://wa.link/qddklj",
      },
      {
        text: "Instagram",
        icon: BsInstagram,
        link: "https://www.instagram.com/m_zain._.05/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
