import ColourfulBox from "./ColourfulBox";



const HomeText = () => {
    return (
        <>
            
            <div className="pt-[8vh] px-[1vw] w-screen justify-evenly h-screen flex items-center flex-col text-white font-bold text-5xl font-ChakraPetch">
                <ColourfulBox>
                    <p className='leading-relaxed text-center'>
                        <span className="italic animate-highlightText border-b-8 border-transparent">Blockchain</span> enthusiast, <br/> 
                        proponent of <span className="italic animate-highlightText border-b-8 border-transparent">machine learning and AI</span>, <br/> 
                        does <span className="italic animate-highlightText border-b-8 border-transparent">web development</span> for fun.
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