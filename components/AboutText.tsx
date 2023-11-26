import ColourfulBox from "./ColourfulBox";
import profileData from "../assets/profileDetails.json";
import Link from "next/link";

const AboutText = () => {

    return (
        <>
            <div className="my-24 px-[1vw] min-w-screen justify-center min-h-screen items-center flex flex-col text-white font-light font-ChakraPetch">
                <div className="mx-10 animate-blurShow"><ColourfulBox><p className="leading-relaxed text-center text-4xl sm:text-5xl font-bold">I&#39;m Ding Han, a Year 2 NUS Computer Science undergraduate!</p></ColourfulBox></div>
                <div className="mt-8 grid grid-rows-2 grid-flow-col sm:gap-4 gap-2">
                    <div className="animate-blurShowLate"><ColourfulBox>
                        <ul className="leading-relaxed text-center sm:text-2xl text-xl">
                            <li className="font-bold">Programming Languages:</li>
                            {profileData.profile_details.programming_languages.map((item, index) => {
                                return <li key={index}>- {item}</li>
                            })}
                        </ul>
                    </ColourfulBox></div>
                    <div className="animate-blurShowLate"><ColourfulBox>
                        <ul className="leading-relaxed text-center sm:text-2xl text-xl">
                            <li className="font-bold">Frameworks / Technologies:</li>
                            {profileData.profile_details.frameworks.map((item, index) => {
                                return <li key={index}>- {item}</li>
                            })}
                        </ul>
                    </ColourfulBox></div>
                    <div className="animate-blurShowLate"><ColourfulBox>
                        <ul className="leading-relaxed text-center sm:text-2xl text-xl">
                            <li className="font-bold">Relevant Courses Taken:</li>
                            {profileData.profile_details.courses.map((item, index) => {
                                return <li key={index}>- {item}</li>
                            })}
                        </ul>
                    </ColourfulBox></div>
                    <div className="animate-blurShowLate"><ColourfulBox>
                        <ul className="leading-relaxed text-center sm:text-2xl text:xl">
                        <li className="font-bold">Projects:</li>
                            {profileData.profile_details.projects.map((item, index) => {
                                return <li key={index}><Link href={item.link} rel="noopener noreferrer" target="_blank">- {item.name}</Link></li>
                            })}
                        </ul>
                    </ColourfulBox></div>
                </div>

            
            </div>

            



        </>
    )
}

export default AboutText;