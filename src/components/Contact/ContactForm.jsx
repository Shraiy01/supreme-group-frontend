
const ContactForm = () => {
    return (
        <section className="w-full">
            <div className="Toastify"></div>
            <div>
                <form noValidate className="mx-auto w-full grid 2xl:gap-9 xl:gap-4 gap-4">
                    <div className="relative">
                        <input
                            className="sg-translate text-white placeholder:text-opacity-90 focus-visible:border-opacity-100 border-white border-opacity-40 placeholder:sg-translate transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2 w-full text-base lg:text-lg placeholder:text-white font-normal bg-transparent outline-none focus-visible:outline-none"
                            id="name"
                            placeholder="Full name"
                            name="name"
                        />
                    </div>

                    <div className="relative">
                        <input
                            className="text-white placeholder:text-opacity-90 focus-visible:border-opacity-100 border-white border-opacity-40 transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2 w-full text-base lg:text-lg placeholder:text-white font-normal bg-transparent outline-none focus-visible:outline-none"
                            id="email"
                            type="email"
                            inputMode="email"
                            placeholder="Email"
                            name="email"
                        />
                    </div>

                    <div className="relative">
                        <input
                            className="text-white placeholder:text-opacity-90 focus-visible:border-opacity-100 border-white border-opacity-40 transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2 w-full text-base lg:text-lg placeholder:text-white font-normal bg-transparent outline-none focus-visible:outline-none"
                            type="text"
                            id="company"
                            inputMode="text"
                            placeholder="Company"
                            name="company"
                        />
                    </div>

                    <div>
                        <textarea
                            rows="3"
                            id="message"
                            className="text-white placeholder:text-opacity-90 focus-visible:border-opacity-100 border-white border-opacity-40 transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2 w-full text-base lg:text-lg placeholder:text-white font-normal bg-transparent outline-none focus-visible:outline-none"
                            placeholder="Message"
                            name="message"
                        ></textarea>
                    </div>

                    <div className="flex justify-center md:grid relative place-content-center md:place-content-start">
                        <button
                            type="submit"
                            className="flex justify-center gap-1 w-full disabled:opacity-70 disabled:cursor-not-allowed relative outline-none !bg-transparent rounded-full transition-all duration-700 ease-in-out hover:text-black focus:text-black hover:!bg-white focus:!bg-white text-white stroke-dark hover:stroke-white font-semibold !hover:bg-white hover:border-transparent border border-white lg:text-base text-sm px-8 md:px-12 py-3"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;