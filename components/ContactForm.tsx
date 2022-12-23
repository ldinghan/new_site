import {useForm, ValidationError} from "@formspree/react";
import ColourfulBox from "./ColourfulBox";


const ContactForm = () => {

    const [state, handleSubmit] = useForm("moqrpanw");

    if (state.succeeded) {
        return (
            <>
            <div className="h-screen flex justify-center items-center">
                <ColourfulBox>
                <p className="text-center sm:text-5xl text-2xl text-white font-ChakraPetch">Thanks for your submission!</p>
                </ColourfulBox>
            </div>
            </>
        )
    }


    return (
        <>
        <div className="flex justify-center min-h-fit min-w-fit mt-32 w-auto sm:px-32 text-2xl">
        <ColourfulBox>
            <form className="p-4 flex justify-around items-center flex-col min-h-fit min-w-fit text-black font-ChakraPetch bg-gradient-to-br from-pink-300 to-sky-300 via-teal-100" onSubmit={handleSubmit}>
                <label htmlFor="email">Email Address
                <input className="ml-4 text-xl" placeholder="Your email address" id="email" type="email" name="email" /></label>
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                <textarea className="text-xl my-1 w-52 sm:64 h-32" placeholder="Send me a message!" id="message" name="message" />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
                <button className="active:border active:border-white p-3 active:bg-gradient-to-r active:from-violet-400 active:to-emerald-300 hover:border hover:border-white p-3 hover:bg-gradient-to-r hover:from-violet-300 hover:to-emerald-200" type="submit" disabled={state.submitting}>
                    Submit
                </button>
                <ValidationError errors={state.errors} />
            </form>
        </ColourfulBox>
        </div>
        </>
    )
}

export default ContactForm;