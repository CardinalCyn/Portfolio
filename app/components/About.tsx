import React from "react";
import TypingAnimation from "./TypingAnimation";

const About=()=>{
    return(
        <div id="About" className="flex items-center justify-center flex-col text-center pt-20 pb-6 h-screen">
            <h1 className="text-7xl">
                Salah Zanabili
            </h1>
            <div className="mt-12 text-4xl">
                <h2>
                    Fullstack Developer
                </h2>
                <TypingAnimation />
            </div>
        </div>
    )
}

export default About