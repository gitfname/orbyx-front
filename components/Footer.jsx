import DownloadOurApplicationCard_1 from "./DownloadOurApplicationCard_1";

export default function Footer() {
    
    return (
        <div className="w-full py-10 bg-[--dark-blue]">

            <div className="w-11/12 md:w-10/12 mx-auto">

                <div className="w-full flex max-md:flex-col gap-y-5 items-center md:justify-between">

                    <img
                        alt="Finance Flow Logo"
                        src={import.meta.env.BASE_URL+"/logo.png"}
                        className="h-auto w-28 object-center object-cover"
                    />

                    <div className="flex items-center gap-x-3">
                        <img
                            alt="Instagram"
                            src={import.meta.env.BASE_URL+"/images/insta.png"}
                            className="w-7 h-7 object-center object-cover"
                        />
                        <img
                            alt="Facebook"
                            src={import.meta.env.BASE_URL+"/images/facebook.png"}
                            className="w-7 h-7 object-center object-cover"
                        />
                        <img
                            alt="Linkdin"
                            src={import.meta.env.BASE_URL+"/images/linkedin.png"}
                            className="w-7 h-7 object-center object-cover"
                        />
                    </div>
                    
                </div>

                <div className="w-full flex max-md:flex-col gap-y-10 items-center md:items-start md:justify-between mt-16 py-10">

                    {/* menu */}
                    <div className="w-full max-w-xs">
                        <p
                            className="text-lg text-white font-medium tracking-wide"
                        >
                            Menu
                        </p>

                        <hr className="border-white/50 my-6" />

                        <div className="grid grid-cols-2 gap-4">

                            <p
                                className="text-xs text-white font-normal tracking-wide"
                            >
                                HOME
                            </p>

                            <p
                                className="text-xs text-white font-normal tracking-wide"
                            >
                                TOKENS
                            </p>

                            <p
                                className="text-xs text-white font-normal tracking-wide"
                            >
                                ABOUT
                            </p>

                            <p
                                className="text-xs text-white font-normal tracking-wide"
                            >
                                BLOG
                            </p>

                            <p
                                className="text-xs text-white font-normal tracking-wide"
                            >
                                PRICING
                            </p>

                            <p
                                className="text-xs text-white font-normal tracking-wide"
                            >
                                CONTACT US
                            </p>

                        </div>

                    </div>

                    <DownloadOurApplicationCard_1 />
                </div>

            </div>

        </div>
    )
}