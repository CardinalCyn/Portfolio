import React from "react";

interface Props {
    projectTitle:string,
    projectUrl:string,
    projectGithubUrl:string,
    projectDescription:string,
    projectImg:string,
    projectSkills:string[]
}

const PortfolioItem=({projectTitle,projectUrl,projectDescription,projectImg,projectSkills}:Props)=>{
  return(
    <a target="_blank" rel="noopener noreferrer" className=" rounded-md overflow-hidden bg-newBlack text-white border-gray-100 border-2" href={projectUrl}>
      <img className="w-full h-48 object-cover cursor-pointer" src={projectImg} alt={projectTitle} />
      <div className="text-center w-full">
        <h3 className="mt-4 text-lg md:text-2+xl dark:text-white mb-2 md:mb-3 font-semibold ">{projectTitle}</h3>
        <p className="text-lg md:text-xl mb-2 md:mb-3">{projectDescription}</p>
        <p className="flex flex-wrap gap-2 flex-row items-center text-xs md:text-sm justify-center mb-4">
          {projectSkills.map((projectSkill) => (
            <span key={projectSkill} className="bg-newOrange inline-block px-2 py-1 font-semibold rounded-md">
              {projectSkill}
            </span>
          ))}
        </p>
      </div>
    </a>
  )
}

export default PortfolioItem