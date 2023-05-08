'use client';

import React from "react";
import {TypeAnimation} from 'react-type-animation'

const TypingAnimation=()=>{
    const phrases: string[]= ["React","Angular","Typescript","Javascript","Python","NodeJS","Flask","MySQL","MongoDB"];
    const fullPhrases:(string|number)[]=[];
    for(let i=0;i<phrases.length;i++){
        fullPhrases.push(phrases[i],1000)
    }
    return(
        <div className="mt-10">
            <TypeAnimation
                sequence={fullPhrases} 
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '1em' }}/>
        </div>
    )
}

export default TypingAnimation