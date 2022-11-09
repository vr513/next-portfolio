// Skills Logos
import HTML5 from "../../assets/work/html-5.webp"
import Java from "../../assets/work/java.webp"
import CP from "../../assets/work/c.webp"
import JS from "../../assets/work/javascript.webp"
import React from "../../assets/work/react.webp"
import CSS from "../../assets/work/css3.webp"
import GH from "../../assets/work/github.webp"
import MSQL from "../../assets/work/mysql.webp"
import PY from "../../assets/work/python.webp"
import CUI from "../../assets/work/chakraUI.webp"
import MUI from "../../assets/work/mui.webp"
import NEXT from "../../assets/work/nextjs.webp"
import PM from "../../assets/work/postman.webp"
import VSC from "../../assets/work/vscode.webp"
import HK from "../../assets/work/heroku.webp"
import DO from "../../assets/work/digitalocean.webp"
import NF from "../../assets/work/netlify.webp"
import VC from "../../assets/work/vercel.webp"

// Comopany Logos
import Epsitek from '../../assets/work/ET.webp'
import AngelAI from '../../assets/work/AngelAI.webp'
import VIIT from "../../assets/work/viit.webp"
import OT from "../../assets/work/omikron.webp"

//Volunteer Logos
import GFG from "../../assets/work/gfg.webp"
import IOT from "../../assets/work/IOT.webp"

const work = [
    {
        name:"HTML 5",
        image:[HTML5.src],
        link:"https:/developer.mozilla.org/en-US/docs/Glossary/HTML5",
        description:"Web Development",
    },
    {
        name:"Java",
        image:[Java.src],
        link:"https://www.java.com/en/",
        description:"DSA",
    },
    {
        name:"C++",
        image:[CP.src],
        link:"https://cplusplus.com/",
        description:"DSA",
    },
    {
        name:"React JS",
        image:[React.src],
        link:"https://nextjs.org/",
        description:"Web Development",
    },
    {
        name:"Next JS",
        image:[NEXT.src],
        link:"https://reactjs.org/",
        description:"Web Development",
    },
    {
        name:"JavaScript",
        image:[JS.src],
        link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        description:"Full Stack Development",
    },
    {
        name:"CSS 3",
        image:[CSS.src],
        link:"https://developer.mozilla.org/en-US/docs/Web/CSS",
        description:"Web Development",
    },
    {
        name:"MySql",
        image:[MSQL.src],
        link:"https://dev.mysql.com/doc/",
        description:"DBMS",
    },
    {
        name:"GitHub",
        image:[GH.src],
        link:"https:/docs.github.com/en",
        description:"Collaborative Tools",
    },
    {
        name:"Python",
        image:[PY.src],
        link:"https:/docs.python.org/3/",
        description:"Web Dev , Scrapping",
    },
    {
        name:"Chakra UI",
        image:[CUI.src],
        link:"https://chakra-ui.com/",
        description:"UI Framework",
    },
    {
        name:"Material UI",
        image:[MUI.src],
        link:"https://mui.com/",
        description:"UI Framework",
    },
    {
        name:"Postman",
        image:[PM.src],
        link:"https://learning.postman.com/docs/",
        description:"API testing",
    },
    {
        name:"Visual Studio Code",
        image:[VSC.src],
        link:"https://code.visualstudio.com/",
        description:"IDE of choice",
    },
    {
        name:"Heroku",
        image:[HK.src],
        link:"https://devcenter.heroku.com/categories/reference",
        description:"Deployment Tools",
    },
    {
        name:"Digital Ocean",
        image:[DO.src],
        link:"https://docs.digitalocean.com/",
        description:"Deployment Tools",
    },
    {
        name:"Vercel",
        image:[VC.src],
        link:"https://vercel.com/docs",
        description:"Deployment Tools",
    },
    {
        name:"Netlify",
        image:[NF.src],
        link:"https://docs.netlify.com/",
        description:"Deployment Tools",
    },
];

export default work;

export const experience = [
    {
        title:"Omikron Technologies",
        role:"SDE Intern",
        skills:["React","Web Development","Bootstarp","Database","API"],
        period:"3 months",
        alt:"Angel Ai Card",
        logo:[OT.src]
    },
    {
        title:"Angel Ai",
        role:"React Developer Intern",
        skills:["React","Web Development","Bootstarp"],
        period:"3 months",
        alt:"Angel Ai Card",
        logo:[AngelAI.src]
    },
    {
        title:"Epsitek Technologies",
        role:"Web Developer Intern",
        skills:["React","Web Development","Bootstarp"],
        period:"5 months",
        alt:"Epsitek Card",
        logo:[Epsitek.src]
    },
    {
        title:"VIIT Summer Intern",
        role:"Summer Intern",
        skills:["Python","Web Development"],
        period:"3 months",
        alt:"VIIT Card",
        logo:[VIIT.src]
    },
    
];

export const volunteerExperience = [
    {
        title:"GFG VIIT",
        role:"Web Master",
        skills:["Web Development"],
        period:"1 year",
        alt:"VIIT Card",
        logo:[GFG.src]
    },
    {
        title:"IoT Forum",
        role:"Activity Team Member",
        skills:[],
        period:"1 year",
        alt:"VIIT Card",
        logo:[IOT.src]
    },
]