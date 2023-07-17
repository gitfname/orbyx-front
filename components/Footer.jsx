import DownloadOurApplicationCard_1 from "./DownloadOurApplicationCard_1";
import { useContext } from "react";
import ApplicationDataContext from "../context/ApplicationData";
import { Link } from "react-router-dom";
import getText from "../application-db/getText";
import { ApplicationLanguageContetx } from "../hooks/useApplicationLanguage";
import useSWR from "swr"
import getBaseUrl from "../utils/base-url";

export default function Footer() {
    const applicationData = useContext(ApplicationDataContext)
    const [lang] = useContext(ApplicationLanguageContetx)

    const {
        data: navLinks,
        error: navLinksError,
        isLoading: isNavLinksLoading,
        mutate
    } = useSWR(
        "/home-nav-links",
        async () => await (await fetch(STRAPI_HOME_PAGE_NAV_LINKS_API_URL + "?locale=" + lang.lang)).json(),
        {
            shouldRetryOnError: false,
            errorRetryCount: 2,
            revalidateOnFocus: false
        }
    )

    return (
        <div className="w-full py-10 bg-[--dark-blue]">

            <div className="w-11/12 md:w-10/12 mx-auto">

                <div className="w-full flex max-md:flex-col gap-y-5 items-center md:justify-between">

                    <Link
                        to="/"
                    >
                        <img
                            alt="Finance Flow Logo"
                            src={getBaseUrl() + applicationData?.logo}
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
                                        src={getBaseUrl() + socialLink.img}
                                        className="w-7 h-7 object-center object-cover"
                                    />
                                </Link>
                            ))
                        }
                    </div>

                </div>

                <div className="w-full flex max-md:flex-col gap-y-10 items-center md:items-start md:justify-between mt-16 py-10">

                    {/* menu */}
                    <div dir={lang.dir} className="w-full max-w-xs">
                        <p
                            className="text-lg text-white font-medium tracking-wide"
                        >
                            {getText(applicationData?.footer?.["menu-title"], lang.lang)}
                        </p>

                        <hr className="border-white/50 my-6" />

                        <div className="grid grid-cols-2 gap-4">

                            {
                                navLinks?.data?.map(item => (
                                    <Link
                                        key={item?.id}
                                        text={item?.attributes?.title}
                                        href={item?.attributes?.link}
                                        className="text-sm text-white font-normal tracking-wide"
                                    >
                                        {item?.attributes?.title}
                                    </Link>
                                ))
                            }
                            {/* {
                                applicationData?.header?.links?.map(link => (
                                    <Link
                                        to={link.href}
                                        key={link.id}
                                        className="text-sm text-white font-normal tracking-wide"
                                    >
                                        {getText(link.text, lang.lang)}
                                    </Link>
                                ))
                            } */}

                        </div>

                    </div>

                    <DownloadOurApplicationCard_1 />
                </div>

            </div>

        </div>
    )
}