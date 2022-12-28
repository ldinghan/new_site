import ColourfulBox from "./ColourfulBox";


const AboutText = () => {
    return (
        <>
            <div className="my-24 px-[1vw] min-w-screen justify-center min-h-screen items-center flex flex-col text-white font-bold font-ChakraPetch">
                <div className="mx-10 animate-blurShow"><ColourfulBox><p className="leading-relaxed text-center text-4xl sm:text-5xl">I am Ding Han, currently a NUS Computer Science freshman!</p></ColourfulBox></div>
                <div className="mt-8 grid grid-rows-2 grid-flow-col sm:gap-4 gap-2">
                    <div className="animate-blurShowLate"><ColourfulBox>
                        <p className="leading-relaxed text-center sm:text-2xl text-xl">
                            Programming Languages:<br/>
                            - Python<br/>
                            - JavaScript<br/>
                            - TypeScript
                        </p>
                    </ColourfulBox></div>
                    <div className="animate-blurShowLate"><ColourfulBox>
                        <p className="leading-relaxed text-center sm:text-2xl text-xl">
                            Frameworks / Technologies:<br/>
                            - React<br/>
                            - Next.js<br/>
                            - Tailwind CSS<br/>
                            - Chakra UI
                        </p>
                    </ColourfulBox></div>
                    <div className="animate-blurShowLate"><ColourfulBox>
                        <p className="leading-relaxed text-center sm:text-2xl text:xl">
                            Projects:<br/>
                            - Grocery Scraper<br/>
                            - Aim Trainer<br/>
                            - PaintJS<br/>
                            - Tower of Hanoi<br/>
                            - Points Management System <br/>Telegram Bot
                        </p>
                    </ColourfulBox></div>
                </div>

            
            </div>

            



        </>
    )
}

export default AboutText;