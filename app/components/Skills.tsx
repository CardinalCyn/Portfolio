import React from "react";

const Skills = () => {
    const skills = [
        { name: "React", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
        { name: "Angular", logoUrl: "https://angular.io/assets/images/logos/angular/angular.svg" },
        { name: "Node", logoUrl: "https://nodejs.org/static/images/logo.svg" },
        { name: "Flask", logoUrl: "https://flask.palletsprojects.com/en/2.1.x/_static/flask-icon.png" },
        { name: "MySQL", logoUrl: "https://www.mysql.com/common/logos/logo-mysql-170x115.png" },
        { name: "MongoDB", logoUrl: "https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png" },
        { name: "JS/TS", logoUrl: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
        { name: "Python", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
        { name: "HTML", logoUrl: "https://www.w3.org/html/logo/downloads/HTML5_Badge_256.png" },
        { name: "Tailwind", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/600px-Tailwind_CSS_Logo.svg.png?20211001194333" }
      ];

  return (
    <div id="Skills" className="pt-20 h-screen">
      <h2 className="text-2xl font-bold text-center mb-20">Skills</h2>
      <div className="md:w-2/3 mx-auto grid grid-cols-2 gap-2 md:justify-items-center" style={{ listStyleType: "none" }}
      >
        {skills.map((skill) => {
          return (
            <li
              key={skill.name}
              className="list-none text-center md:w-1/3 mx-4 my-2 px-4 py-2 bg-newOrange rounded-lg shadow-md text-white"
            >
              <img src={skill.logoUrl} alt={skill.name} className="h-12 mx-auto mb-4" />
              <p>{skill.name}</p>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;