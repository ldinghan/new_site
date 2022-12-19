import ColourfulBox from "./ColourfulBox";


const AboutText = () => {
    return (
        <>
            <div className="pt-[8vh] px-[1vw] w-screen justify-evenly h-screen flex items-center flex-col text-white font-bold text-5xl font-ChakraPetch">
                <div className="absolute invisible animate-blurHide"><ColourfulBox><p className='leading-relaxed text-center'>hi</p></ColourfulBox></div>
                <div className="mx-10 animate-blurShow"><ColourfulBox><p className="leading-relaxed text-center">I am Ding Han, currently a NUS Computer Science freshman!</p></ColourfulBox></div>
                <div className="grid grid-rows-2 grid-flow-col gap-4">
                    <div className="mx-10 animate-blurShowLate"><ColourfulBox>
                        <p className="leading-relaxed text-center text-2xl">
                            Programming Languages:<br/>
                            - Python<br/>
                            - JavaScript<br/>
                            - TypeScript
                        </p>
                    </ColourfulBox></div>
                    <div className="mx-10 animate-blurShowLate"><ColourfulBox>
                        <p className="leading-relaxed text-center text-2xl">
                            Frameworks / Technologies:<br/>
                            - React<br/>
                            - Next.js<br/>
                            - Tailwind CSS<br/>
                            - Chakra UI
                        </p>
                    </ColourfulBox></div>
                    <div className="mx-10 animate-blurShowLate"><ColourfulBox>
                        <p className="leading-relaxed text-center text-2xl">
                            Projects:<br/>
                            - Grocery Scraper<br/>
                            - Aim Trainer<br/>
                            - PaintJS<br/>
                            - Tower of Hanoi
                        </p>
                    </ColourfulBox></div>
                </div>

            
            </div>

            



        </>
    )
}

export default AboutText;