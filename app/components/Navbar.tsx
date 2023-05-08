import React from "react";

const Navbar=()=>{
    const navbarElements=["About","Projects","Skills","Contact Me"]
    return (
        <nav className="fixed top-0 left-0 right-0 h-20 items-center flex justify-center w-screen list-none text-white bg-newLightBlue z-40">
            {navbarElements.map((navbarText)=>{
                return (
                <li key={navbarText} className="ht-20 ml-4 text-lg hover:bg-gray-700 rounded font-sans">
                    <a href= {"#"+navbarText}>{navbarText}</a>
                </li>)
            })}
        </nav>
    )
}

export default Navbar