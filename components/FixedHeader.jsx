
import { useScroll, useThrottle } from "ahooks"
import { useEffect, useMemo, useState, useContext } from "react"
import { Link } from "react-router-dom"
import Button from "./Button"
import { ApplicationLanguageContetx } from "../hooks/useApplicationLanguage"
import useSWR from "swr"
import { STRAPI_HOME_PAGE_NAV_LINKS_API_URL } from "../constants"
import getBaseUrl from "../utils/base-url"
import { HashLink } from "react-router-hash-link"

function NavLink({ text, href = "/" }) {
    return (
        <HashLink
            to={href}
        >
            <p
                className="text-white text-sm font-normal font-[morabbaLight]"
            >
                {text}
            </p>
        </HashLink>
    )
}

const Content = ({ visible, links, setLang }) => useMemo(
    () => {

        return (
            <div className={`w-full z-50 fixed top-0 left-0 -translate-y-full
            ${visible ? "!translate-y-0" : ""} transition-transform duration-300 p-3`}>

                <div
                    className="w-full flex items-center justify-between bg-white/10 rounded-xl
                    backdrop-blur-md py-3.5 px-8 shadow-lg shadow-black/10"
                >

                    <HashLink to="/#hero" className="flex items-center gap-x-3">
                        <img
                            src={getBaseUrl() + "/logo.png"}
                            className="w-[--logo--width] h-[--logo--height] object-center object-cover"
                        />
                    </HashLink>

                    <div className="flex items-center gap-x-5">
                        {
                            links?.data?.map(item => (
                                <NavLink
                                    key={item?.id}
                                    text={item?.attributes?.title}
                                    href={item?.attributes?.link}
                                />
                            ))
                        }
                    </div>

                    <div className="flex items-center gap-x-3 max-md:hidden">

                        <button
                            className="appearance-none group relative self-stretch"
                        >
                            <button
                                className="h-full px-3 rounded-3xl bg-white/20 active:scale-95 transition-transform duration-300"
                            >
                                <svg className="w-5 h-5 text-gray-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>

                            </button>

                            <div tabIndex={0}
                                className="cursor-default transition-all duration-200 absolute opacity-0 translate-y-[90%]
                            z-10 pointer-events-none bottom-0 left-0 w-44 py-2
                            bg-gray-700 rounded-lg group-focus-within:opacity-100
                            group-focus-within:translate-y-[103%] group-focus-within:pointer-events-auto
                            focus:opacity-100 focus:translate-y-[103%] focus:pointer-events-auto"
                            >
                                <p onClick={() => setLang({ classname: "text-left", dir: "ltr", lang: "en" })} className="text-xs text-white p-2 cursor-pointer hover:bg-white/10 transition-colors duration-200">English</p>
                                <p onClick={() => setLang({ classname: "text-right", dir: "rtl", lang: "fa" })} className="text-xs text-white p-2 cursor-pointer hover:bg-white/10 transition-colors duration-200">Persian</p>
                            </div>
                        </button>

                        <Link
                            to={"/order-project"}
                            className="self-stretch px-3 grid place-items-center aspect-square rounded-3xl bg-white/20 active:scale-95 transition-transform duration-300"
                        >
                            <svg className="w-5 h-5 text-gray-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                            </svg>
                        </Link>

                        <Button
                            text={"hello"}
                            className="max-md:hidden font-[morabbaRegular]"
                            style={{
                                fontSize: "var(--header__btn--font-size)",
                                bg: "var(--header__btn--bg)",
                                color: "var(--header__btn--color)",
                                px: "2rem",
                                py: "var(--header__btn--py)",
                                rounded: "var(--header__btn--border-radius)"
                            }}
                            href={{
                                link: "opp man",
                                target: "_blank"
                            }}
                        />

                    </div>

                </div>

            </div>
        )
    },
    [visible, links]
)

function FixedHeader() {

    const [lang, setLang] = useContext(ApplicationLanguageContetx)

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

    useEffect(
        () => {
            mutate()
        },
        [lang]
    )

    const [visible, setVisible] = useState(false)
    const scroll = useScroll(
        document
    )

    const debouncedScroll = useThrottle(scroll, {
        wait: 250
    })

    useEffect(
        () => {
            if (scroll?.top > 500 && !visible) setVisible(true)
            else if (scroll?.top <= 500 && visible) setVisible(false)
        },
        [debouncedScroll]
    )

    return (
        <Content visible={visible} links={navLinks} setLang={setLang} />
    )
}

export default FixedHeader