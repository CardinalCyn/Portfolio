"use client"
import React,{useState} from "react";
import handleValidation from "../utils/handleValidation";

const Contact=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");

    const [successMessage,setSuccessMessage]=useState(false);
    const [failureMessage,setFailureMessage]=useState(false);

    const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        //checks if inputs were valid length, then makes request to send email via sengrid
        const validForm=handleValidation(name,email,message);
        if(validForm){
            const urlToFetch=process.env.NEXT_PUBLIC_PORTFOLIO_DOMAIN+"/api/sendgrid"
            try{
                const res = await fetch((urlToFetch), {
                    body: JSON.stringify({
                    email: email,
                    name: name,
                    message: message,
                    }),
                    headers: {
                    "Content-Type": "application/json",
                    },
                    method: "POST",
                });
                const response = await res.json();
                //if response has an error, sets failureMessage to true, then sets it to false
                if (response.error||!response) {
                    setFailureMessage(true);
                    setTimeout(()=>{
                        setFailureMessage(false);
                    },3000)
                }else{
                    setSuccessMessage(true);
                    setTimeout(()=>{
                        setSuccessMessage(false)
                    },3000)
                }
            }catch(err){
                setFailureMessage(true);
                setTimeout(()=>{
                    setFailureMessage(false);
                },3000)
            }
        }else{
            setFailureMessage(true);
                setTimeout(()=>{
                    setFailureMessage(false);
                },3000)
        }
    }
    return (
      <div id="Contact Me" className="text-white text-center mt-20 md:mt-0 pb-10 md:pb-96">
        
        <h2 className="text-bold text-2xl mt-24 mb-10">Contact Me</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3 pt-0 md:w-1/3 md:mx-auto">
                <input type="text" placeholder="Your name" name="name" className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-3/4" value={name} onChange={(e)=>setName(e.target.value)} required />
            </div>
            <div className="mb-3 pt-0 md:w-1/3 md:mx-auto">
                <input type="email" placeholder="Email" name="email" className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-3/4" value={email} onChange={(e)=>setEmail(e.target.value)} required />
            </div>
            <div className="mb-3 pt-0 md:w-1/3 md:mx-auto">
                <textarea placeholder="Your message" name="message" className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-3/4" value={message} onChange={(e)=>setMessage(e.target.value)} required />
            </div>
            <div className="pt-0 md:w-1/2 md:mx-auto">
                <button className="bg-newLightBlue text-white active:bg-newBlue font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="submit">
                    Send a message
                </button>
            </div>
            {successMessage&&<div className="bg-green-500 text-white rounded-md p-4 mb-4 mt-2 inline-block">Your contact request was successful!</div>}
            {failureMessage&&<div className="bg-red-500 text-white rounded-md p-4 mb-4 mt-2 inline-block">There was an error in your request, try again later</div>}
        </form>
      </div>
    );
  };

export default Contact