import ColourfulBox from "./ColourfulBox";



const HomeText = () => {
    return (
        <>
            <div className="pt-32 w-screen justify-evenly h-screen flex items-center flex-col text-white font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl font-ChakraPetch">
                <ColourfulBox>
                    <p className='leading-relaxed text-center'>
                        <span className="italic animate-highlightText md:border-b-8 sm:border-b-4 border-b-2 border-transparent">Blockchain</span> enthusiast, <br/> 
                        proponent of <span className="italic animate-highlightText  md:border-b-8 sm:border-b-4 border-b-2 border-transparent">machine learning and AI</span>, <br/> 
                        does <span className="italic animate-highlightText  md:border-b-8 sm:border-b-4 border-b-2 border-transparent">web development</span> for fun.
                    </p>
                </ColourfulBox>
                <ColourfulBox>
                    <p className="leading-normal text-left italic">
                        Student by midday, <br/> Asleep by midnight.
                    </p>
                </ColourfulBox>
            </div>
        </>
    )
}

export default HomeText;