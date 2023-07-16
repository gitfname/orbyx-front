
import { Link } from "react-router-dom"
import Button from "./Button"
import MobileMenu_1 from "./MobileMenu_1"
import { useContext } from "react"
import ApplicationDataContext from "../context/ApplicationData"
import getText from "../application-db/getText"
import { useApplicationLanguage, ApplicationLanguageContetx } from "../hooks/useApplicationLanguage"

function NavLink({ text, href = "/" }) {
    return (
        <Link
            to={href}
        >
            <p
                className="text-white text-xs font-normal"
            >
                {text}
            </p>
        </Link>
    )
}


export default function Header() {
    const applicationData = useContext(ApplicationDataContext)
    // const [lang, setLang] = useApplicationLanguage()
    const [lang, setLang] = useContext(ApplicationLanguageContetx)

    return (
        <nav
            className="flex items-center justify-between w-full absolute top-0 left-0 z-30
            pt-[--header--pt] pb-[--header--pb] pl-[--header--pl] pr-[--header--pr] bg-[--header--bg]"
        >

            <div className="flex items-center gap-x-12">
                <Link to="/" className="flex items-center gap-x-3">
                    <img
                        src={import.meta.env.BASE_URL + applicationData?.logo}
                        className="w-[--logo--width] h-[--logo--height] object-center object-cover"
                    />
                </Link>

                <div className="flex items-center gap-x-5 max-md:hidden">
                    {
                        applicationData?.header.links.map(item => (
                            <NavLink
                                key={item.id}
                                text={getText(item.text, lang.lang)}
                                href={item.href}
                            />
                        ))
                    }
                </div>
            </div>

            <div className="flex items-center gap-x-3 max-md:hidden">

                <button
                    className="appearance-none group relative self-stretch mr-2.5"
                >
                    <button
                        className="h-full px-3 rounded-xl bg-white/20 active:scale-95 transition-transform duration-300"
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
                        <p onClick={() => setLang({ classname: "text-right", dir: "rtl", lang: "pr" })} className="text-xs text-white p-2 cursor-pointer hover:bg-white/10 transition-colors duration-200">Persian</p>
                    </div>
                </button>

                <button
                    className="self-stretch px-3 aspect-square rounded-xl bg-white/20 active:scale-95 transition-transform duration-300"
                >
                    <svg className="w-5 h-5 text-gray-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                    </svg>
                </button>

                <Button
                    text={getText(applicationData?.header?.["button-text"], lang.lang)}
                    className="max-md:hidden"
                    style={{
                        fontSize: "var(--header__btn--font-size)",
                        fontFamily: "var(--header__btn--font-family)",
                        bg: "var(--header__btn--bg)",
                        color: "var(--header__btn--color)",
                        px: "var(--header__btn--px)",
                        py: "var(--header__btn--py)",
                        rounded: "var(--header__btn--border-radius)"
                    }}
                    href={{
                        link: applicationData["download-our-app-link"],
                        target: "_blank"
                    }}
                />
            </div>



            <MobileMenu_1 navLinks={applicationData?.header?.links} className="md:hidden" />

        </nav>
    )
}