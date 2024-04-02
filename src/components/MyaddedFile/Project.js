import React from "react";
import Card from "./ProjectCard";



export default function Project() {
  const githubProject = [
    // {
    //   id: -1,
    //   Name: "Myntra Codeathon'23",
    //   github: "http://github.com/ajaykrmnc/HackElite",
    //   Live: "https://myntraverse.netlify.app",
    //   img: 'myntra.png',
    // },
    {
      id: 0,
      Name: "Urban Reach  Project",
      github: "https://github.com/ShivamSingh8853/UrbanReach",
      Live: "https://urbanreach.netlify.app",
      img: 'urbanreach.png',
      intro: ""
    },
    {
      id: 3,
      Name: "YouTube Clone",
      github: 'https://github.com/ShivamSingh8853/Youtube_Clone',
      img: 'Screenshot (1).png',
      Live: "https://sastautube.netlify.app/"
   },
  //  {
  //   id: 8,
  //   Name: "EcoPoolCabs",
  //   github:'',
  //   Live: 'https://ecopool.netlify.app',
  //   img: 'ecopool.png',
  // },
  //   {
  //     id: 1,
  //     Name: "My 3D portfolio",
  //     github: "http://github.com/ajaykrmnc/",
  //     Live: "https://ajaykrgupta.netlify.app",
  //     img: 'ajaykrgupta.png',
  //     intro: ''
  //   },
    {
      id: 6,
      Name: 'Memories',
      github: 'https://github.com/ShivamSingh8853/Memories-Social-Media',
      Live: 'https://we-amigos.netlify.app',
      img: 'Memories.jpg',
      intro : ''
    },
    // {
    //   id: 2,
    //   Name: "Recursive Tree",
    //   Live: "https://visionmap.netlify.app",
    //   github: 'http://github.com/ajaykrmnc/',
    //   img: 'visionmap.png',
    //   intro:''
    // },
    // {
    //   id: 7,
    //   Name: "Tindog",
    //   github:'https://github.com/ajaykrmnc/tindog',
    //   Live: 'https://ajaykrmnc.github.io/tindog/',
    //   img: 'tindog.png',
    //   intro : ''
    // },
    // {
    //   id: 4,
    //   Name: "Tata Suceess",
    //   github: 'http://github.com/ajaykrmnc/',
    //   Live: 'https://tata-success.netlify.app',
    //   img: 'tata-success.png',
    //   intro : '',
    // },

    
  ];
  return (
    <div className = "about-wrapper">
    <div><h1>Project</h1></div>
    <div className = "ProjectBox">
      {githubProject.map((item) => (
        <div className = "">
          <Card Name={item.Name} github={item.github} Live={item.Live} img={item.img} intro = {item.intro}/>
        </div>
      ))}
    </div>
    </div>
  );
}
