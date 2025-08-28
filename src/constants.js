// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import afLogo from './assets/tech_logo/afLogo.png';
import angularLogo from './assets/tech_logo/angular.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import dartLogo from './assets/tech_logo/dartLogo.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import asLogo from './assets/tech_logo/asLogo.webp';
import figmaLogo from './assets/tech_logo/figma.png';
import blenderLogo from './assets/tech_logo/blenderLogo.png';
import csharpLogo from './assets/tech_logo/csharp.png';



import appim from './assets/work_logo/fitflexapp.jpeg';
import webim from './assets/work_logo/webaim.png';
import laravel from './assets/tech_logo/laravel.webp';

import scloogo from './assets/education_logo/salogo.jpeg';
import ssccslog from './assets/education_logo/ssccslog.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo }
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'Laravel', logo: laravel },
     
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'dart', logo: dartLogo},
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Android Studio', logo: asLogo},
      { name: 'blender', logo: blenderLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'After effect', logo: afLogo }
    ],
  },
];

 
  // src/data/educationData.js

export const education = [
  {
    id: 1,
    school: "Shree Swaminarayan College",
    degree: "B.Sc IT",
    date: "2022 - 2025", 
    grade: "7.0 CGPA", 
    desc: "Studied core subjects in IT including web development, data structures, and networking.",
    img: ssccslog,
  },
  {
    id: 2,
    school: "Somnath Uchchatar Madhyamik Shala", 
    degree: "HSC (Commerce)", 
    date: "2019 - 2021",
    grade: "56.14", 
    desc: "Focused on sports and physical education.", 
    img: scloogo,
  },
  {
    id: 3,
    school: "Somnath Madhyamik Shala", 
    degree: "SSC",
    date: "2018 - 2019",
    grade: "64.17%", 
    desc: "Completed secondary education with a strong foundation in science and math.",
    img: scloogo,
  },
];


  
  export const projects = [
  {
    id: 1,
    title: "FitFlex - Fitness App",
    description: "A fitness tracking mobile app that allows users to follow gym routines, plan meals, and track progress using Firebase and RapidAPI.",
    image: appim,
    tags: ["Flutter", "Firebase", "RapidAPI", "UI/UX", "Firestore"],
    github: "https://github.com/Hemangkanojiya-coll?tab=repositories",  
    webapp: "https://github.com/Hemangkanojiya-coll?tab=repositories",  
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio website built using React and TailwindCSS to showcase my skills, education, and projects.",
    image: webim,
    tags: ["React", "TailwindCSS", "Vite", "JavaScript"],
    github: "", 
    webapp: "",     
  },
];
