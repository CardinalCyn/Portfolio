import React from "react";
import ProjectData from "./ProjectData";
import PortfolioItem from "./PortfolioItem";

const Projects=()=>{
    return(
        <div id="Projects" className="max-w-5xl w-11/12 mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ProjectData.slice(0,3).map((project)=>{
                    return <PortfolioItem key={project.projectTitle} projectTitle={project.projectTitle} projectUrl={project.projectUrl} projectDescription={project.projectDescription} projectImg={project.projectImg} projectSkills={project.projectSkills} projectGithubUrl={project.projectGithubUrl}/>
                })}
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-auto">
                {ProjectData.slice(3,5).map((project)=>{
                    return <PortfolioItem key={project.projectTitle} projectTitle={project.projectTitle} projectUrl={project.projectUrl} projectDescription={project.projectDescription} projectImg={project.projectImg} projectSkills={project.projectSkills} projectGithubUrl={project.projectGithubUrl}/>
                })}
            </div>
        </div>
    )
}

export default Projects