import DownloadOurApplicationCard_1 from "./DownloadOurApplicationCard_1";
import { useContext } from "react";
import ApplicationDataContext from "../context/ApplicationData";
import { Link } from "react-router-dom";
import getText from "../application-db/getText";

export default function Footer() {
    const applicationData = useContext(ApplicationDataContext)
    
    return (
        <div className="w-full py-10 bg-[--dark-blue]">

            <div className="w-11/12 md:w-10/12 mx-auto">

                <div className="w-full flex max-md:flex-col gap-y-5 items-center md:justify-between">

                    <Link
                        to="/"
                    >
                        <img
                            alt="Finance Flow Logo"
                            src={import.meta.env.BASE_URL+applicationData?.logo}
                            className="h-auto w-28 object-center object-cover"
                        />
                    </Link>


                    <div className="flex items-center gap-x-3">
                        {
                            applicationData?.footer?.["social-links"]?.items?.map(socialLink => (
                                <Link
                                    target="_blank"
                                    key={socialLink.id}
                                    to={socialLink.link}
                                >
                                    <img
                                        alt={socialLink["img-alt"]}
                                        src={import.meta.env.BASE_URL+socialLink.img}
                                        className="w-7 h-7 object-center object-cover"
                                    />
                                </Link>
                            ))
                        }
                    </div>
                    
                </div>

                <div className="w-full flex max-md:flex-col gap-y-10 items-center md:items-start md:justify-between mt-16 py-10">

                    {/* menu */}
                    <div className="w-full max-w-xs">
                        <p
                            className="text-lg text-white font-medium tracking-wide"
                        >
                            {getText(applicationData?.footer?.["menu-title"])}
                        </p>

                        <hr className="border-white/50 my-6" />

                        <div className="grid grid-cols-2 gap-4">

                            {
                                applicationData?.header?.links?.map(link => (
                                    <Link
                                        to={link.href}
                                        key={link.id}
                                        className="text-sm text-white font-normal tracking-wide"
                                    >
                                        { getText(link.text) }
                                    </Link>
                                ))
                            }

                        </div>

                    </div>

                    <DownloadOurApplicationCard_1 />
                </div>

            </div>

        </div>
    )
}