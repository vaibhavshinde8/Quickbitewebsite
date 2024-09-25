import { useState } from "react";
import { BsLockFill } from "react-icons/bs";
import { BsUnlockFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Footer from "./Footer";
import useOnlineStatus from "../utils/useOnlineStatus";
import Error from "./Error"

const AboutMe = () => {
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (itemId) => {
        if (activeItem === itemId) {
            setActiveItem(null); 
        } else {
            setActiveItem(itemId); 
        }
    };
   if(!useOnlineStatus)return <Error/>

    const email = 'shindevaibhav0711@gmail.com';
    const subject = 'Regarding [Subject]';
    const body = 'Hello,';

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return (
        <div className="main w-full flex flex-col justify-center items-center ">
            <div className="mainBodyRestaurantMenu w-full flex flex-col items-center lg:w-[60%] max-[800px]:px-3 ">
                <div className="firstresNameDetails flex justify-between w-full px-2 my-4 lg:mx-10 ">
                    <div className="left flex flex-col justify-center gap-2  rounded-xl">
                        <h1 className="name text-lg font-bold font-open  max-[800px]:w-full md:text-2xl">VAIBHAV DEEPAK SHINDE</h1>
                        <p className=" text-sm font-semibold text-gray-500">FRONTEND WEB DEVELOPER</p>

                    </div>
                </div>


            </div>


            <div className="ACCORDIANS w-[90%] mb-5 flex flex-col justify-center items-center gap-1 lg:mb-10">



                <div
                    className="flex justify-between items-center px-2 bg-black/20 rounded-xl mb-2 w-full py-1 max-[800px]:px-2 lg:w-[70%]"
                    onClick={() => handleItemClick("aboutme")}
                >
                    <span className="summary text-base pl-4 font-open font-bold py-1 lg:text-xl lg:p-3 ">ABOUT ME</span>
                    <span className="pr-4">{activeItem === "me" ? <BsUnlockFill /> : <BsLockFill />}</span>
                </div>
                {activeItem === "aboutme" && (
                    <div className="flex mb-3 justify-center items-center font-sans bg-black/5 rounded-xl lg:w-[70%]">
                        <div className="content px-4 text-sm font-medium py-4 p-2">
                            Detail-oriented individual with a B.Tech in Computer Science & Engineering, looking for a Frontend Developer position in a fast-growing
                            company to utilize my technical skills and working knowledge of software applications, development and design. I want to work in a
                            competitive environment where I can enhance my skills along with facing the new Situations, learning new things.
                            <pre>
                            <h4>
                                Contact Me
                                <ul>
                                    <li className="font-bold" >Mobile : 9422623965</li>
                                    <li>Gmail : shindevaibhav0711@gmail.com</li>
                                </ul>
                            </h4>

                            </pre>
                        </div>
                    </div>
                )}
                <div
                    className="flex justify-between items-center px-2 bg-black/20 rounded-xl mb-2 w-full py-1 max-[800px]:px-2 lg:w-[70%]"
                    onClick={() => handleItemClick("skills")}
                >
                    <span className="summary text-base pl-4 font-open font-bold py-1 lg:text-xl lg:p-3 ">SKILLS</span>
                    <span className="pr-4">{activeItem === "skills" ? <BsUnlockFill /> : <BsLockFill />}</span>
                </div>
                {activeItem === "skills" && (
                    <div className="flex mb-3 justify-around items-center font-sans bg-black/5 rounded-xl lg:w-[70%]">
                        <div className="content px-4 text-sm  p-2 flex justify-around flex-wrap gap-3 py-4 ">
                            <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">REACT JS</span>
                            <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">REDUX</span>
                            <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">JAVASCRIPT</span>
                            <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">TAILWIND</span>
                            <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">CSS3</span>
                            <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">HTML5</span>
                            <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">BOOTSTRAP</span>
                            <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">NODE.JS</span>
                            <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">CORE JAVA</span>
                            <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">C & C++</span>
                            <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">DATA STRUCTURES & ALGORITHMS</span>
                            <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">DBMS</span>
                            <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">GIT</span>
                            <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">GITHUB</span>
                            <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">00PS</span>
                            <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">PROBLEM SOLVING</span>
                            <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">PHP</span>
                            
                        </div>
                    </div>
                )}
                <div
                    className="flex justify-between items-center px-2 bg-black/20 rounded-xl mb-2 w-full py-1 max-[800px]:px-2 lg:w-[70%]"
                    onClick={() => handleItemClick("socials")}
                >
                    <span className="summary text-base pl-4 font-open font-bold py-1 lg:text-xl lg:p-3 ">SOCIALS</span>
                    <span className="pr-4">{activeItem === "socials" ? <BsUnlockFill /> : <BsLockFill />}</span>
                </div>
                {activeItem === "socials" && (
                    <div className="flex w-full mb-3 justify-center items-center font-sans bg-black/5 rounded-xl py-3 lg:w-[70%] bg-black">
                        <div className="content px-4 text-sm  p-2 flex justify-around w-full">
                            <Link to="https://www.linkedin.com/in/vaibhav-shinde-ba126a264"><img className="w-10 "  alt="" /><div className="flex items-center"><FaLinkedin/><div className="ml-2"></div><div></div>LinkedIn </div>  
                            </Link>
                            <Link to="https://github.com/vaibhavshinde8"><img className="w-10"  alt="" /><div className="flex items-center"><FaGithub /><div className="ml-2"></div><div></div>Github </div>  </Link>
                            <Link to="https://www.instagram.com/vaibhavds07/"><img className="w-10" alt="" /><div className="flex items-center"><FaSquareInstagram /><div className="ml-2"></div><div></div>Instagram </div>  </Link>

                            <Link to={mailtoLink}><img className="w-10" alt="" /></Link>

                        </div>
                    </div>
                )}
                <div
                    className="flex justify-between items-center px-2 bg-black/20 rounded-xl mb-2 w-full py-1 max-[800px]:px-2 lg:w-[70%]"
                    onClick={() => handleItemClick("aboutThisProject")}
                >
                    <span className="summary text-base pl-4 font-open font-bold py-1 lg:text-xl lg:p-3 ">ABOUT THIS PROJECT</span>
                    <span className="pr-4">{activeItem === "aboutThisProject" ? <BsUnlockFill /> : <BsLockFill />}</span>
                </div>
                {activeItem === "aboutThisProject" && (
                    <div className="flex mb-3 justify-center items-center font-sans bg-black/5 lg:w-[70%]">
                        <div className="content px-4 text-sm  p-2 flex flex-col justify-start gap-2">


                            <ul className="flex flex-col justify-between gap-2 lg:items-start">
                                <li>- Authentication with Dummy Json.</li>
                                <li>- Real time Swiggy API DATA of #Nashik.</li>
                                <li>- Detailed Menu page almost same features as Swiggy.</li>
                                <li>- Payment Integration with Razorpay.</li>
                                <li>- Added LAZY LOADING in About-Me page.</li>
                                <li>- 🟢|🔴 Veg & Non Veg icon is also Dynamically used based on food.</li>
                                <li>- Every Detail/Data used is dynamically coming from Swiggy Api.</li>
                                <li>- Hosted on Netlify</li>
                                <li>- Your Location Will be at Top🔝</li>
                            </ul>
                            <div className="HEAD">
                                Tech stack used :
                            </div>
                            <ul className="flex flex-col justify-between items-start">
                                <li> - ✅ React</li>
                                <li> - ✅ Redux</li>
                                <li> - ✅ React Router v6</li>
                                <li> - ✅ Tailwind Labs CSS</li>
                                <li> - ✅ Custom Hooks</li>
                                <li> - ✅ Custom Shimmer</li>
                                <li> - ✅ React Carousel</li>
                                <li> - ✅ Lazy Loading</li>
                                <li> - ✅ Material UI</li>
                                <li> - ✅ GitHub</li>
                                <li> - ✅ Netlify for Deployment</li>
                                <li> - ✅ Swiggy Api</li>
                            </ul>

                        </div>
                    </div>
                )}
                <div
                    className="flex justify-between items-center px-2 bg-black/20 rounded-xl mb-2 w-full py-1 max-[800px]:px-2 lg:w-[70%]"
                    onClick={() => handleItemClick("resume")}
                >
                    <span className="summary text-base pl-4 font-open font-bold py-1 lg:text-xl lg:p-3 ">RESUME</span>
                    <span className="pr-4">{activeItem === "resume" ? <BsUnlockFill /> : <BsLockFill />}</span>
                </div>
                {activeItem === "resume" && (
                    <div className="flex w-full mb-3 justify-center items-center font-sans bg-black/5 px-2 rounded-xl  lg:w-[70%]"> 
                        <div className="content px-4 text-sm p-2 w-full rounded-xl">
                            <a className="flex justify-center items-center" href="https://drive.google.com/file/d/1KM_td9rYEFDNUiLDsu381IMGGhop7F-K/view?usp=drive_link" download="resume.pdf">
                                <button className="flex justify-center gap-2 items-center"><img className="w-6"  alt="" /> <div className="flex items-center bg-green-400 px-4 py-2 font-bold"><BsFillInfoCircleFill  /><div className="ml-2"></div><div></div>Resume </div><span className="font-semibold text-xl"></span></button>
                            </a>
                        </div>
                    </div>
                )}
            </div>


            <div className="items w-full flex flex-col gap-5">

                {/* <ResMenu /> */}


            </div>

        </div>
    )
}

export default AboutMe
