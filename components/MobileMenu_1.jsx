import { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { Link } from "react-router-dom"
import getText from "../application-db/getText"
import { useContext } from "react"
import { ApplicationLanguageContetx } from "../hooks/useApplicationLanguage"
import { HashLink } from "react-router-hash-link"

export default function MobileMenu_1({ className, navLinks }) {
    const [isOpen, setIsOPen] = useState(false)
    const [lang, setLang] = useContext(ApplicationLanguageContetx)

    return (
        <>

            <button
                onClick={() => setIsOPen(!isOpen)}
                className={"p-2 active:scale-95 transition-transform duration-300 cursor-pointer rounded-full grid place-items-center bg-[--blue] " + className}
            >
                <AiOutlineMenu className="fill-white w-4 h-4" />
            </button>

            <div
                className={`fixed z-[9999] top-0 left-0 w-full h-full pointer-events-none ${isOpen && "!pointer-events-auto"}`}
            >
                <div
                    onClick={() => setIsOPen(false)}
                    className={`absolute top-0 left-0 bg-black/50 transition-opacity duration-300 opacity-0
                    w-full h-full pointer-events-none z-30 ${isOpen && "!opacity-100 !pointer-events-auto"}`}>
                </div>

                <div
                    className={`z-50 absolute top-0 left-0 w-60 h-full bg-[--dark-blue] transition-transform duration-300
                    -translate-x-[102%] overflow-y-auto p-4 pt-8 flex items-center flex-col gap-5 ${isOpen && "!translate-x-0"}`}
                >

                    {
                        navLinks?.length > 0
                        &&
                        navLinks?.map(item => (
                            <HashLink key={item?.attributes?.id} id={item?.attributes?.id} to={item?.attributes?.link} className="text-sm none text-white tracking-wide font-normal font-[Inter]">
                                {/* {getText(item.text, lang.lang)} */}
                                {item?.attributes?.title}
                            </HashLink>
                        ))
                    }

                    <div className="dropdown w-full mt-auto dropdown-top">
                        <label tabIndex={0} className="text-white text-sm font-normal text-center border border-white/10 block py-2 px-3.5 rounded-lg cursor-pointer hover:bg-white/5 w-max mx-auto">
                            <svg className="w-5 h-5 text-gray-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="dropdown-content menu space-y-2 py-3 px-0 bg-white/10 rounded-box w-full mb-1">
                            <li onClick={() => setLang({ classname: "text-left", dir: "ltr", lang: "en" })} className="text-white/80 p-2 cursor-pointer px-2.5 hover:bg-white/5">en</li>
                            <li onClick={() => setLang({ classname: "text-right", dir: "rtl", lang: "fa" })} className="text-white/80 p-2 cursor-pointer px-2.5 hover:bg-white/5">pr</li>
                        </ul>
                    </div>

                </div>
            </div>

        </>
    )
}