import { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { Link } from "react-router-dom"
import getText from "../application-db/getText"
import { useContext } from "react"
import { ApplicationLanguageContetx } from "../hooks/useApplicationLanguage"

export default function MobileMenu_1({className, navLinks}) {
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
                className={`fixed z-[9999] top-0 left-0 w-full h-full pointer-events-none ${isOpen&&"!pointer-events-auto"}`}
            >
                <div
                    onClick={() => setIsOPen(false)} 
                    className={`absolute top-0 left-0 bg-black/50 transition-opacity duration-300 opacity-0
                    w-full h-full pointer-events-none z-30 ${isOpen&&"!opacity-100 !pointer-events-auto"}`}>
                </div>

                <div
                    className={`z-50 absolute top-0 left-0 w-60 h-full bg-[--dark-blue] transition-transform duration-300
                    -translate-x-[102%] overflow-y-auto p-4 pt-8 flex items-center flex-col gap-5 ${isOpen&&"!translate-x-0"}`}
                >

                    {
                        navLinks.map(item => (
                            <Link key={item.id} id={item.id} to={item.href} className="text-sm none text-white tracking-wide font-normal font-[Inter]">
                                {getText(item.text, lang.lang)}
                            </Link>
                        ))
                    }

                    <div className="dropdown w-full mt-auto dropdown-top">
                        <label tabIndex={0} className="text-white text-sm font-normal text-center border border-white/10 block p-1.5 rounded-lg cursor-pointer hover:bg-white/5 w-full">Language</label>
                        <ul tabIndex={0} className="dropdown-content menu space-y-2 py-3 px-0 bg-white/10 rounded-box w-full mb-1">
                            <li onClick={() => setLang({classname: "text-left", dir: "ltr", lang: "en"})} className="text-white/80 p-2 cursor-pointer px-2.5 hover:bg-white/5">en</li>
                            <li onClick={() => setLang({classname: "text-right", dir: "rtl", lang: "pr"})} className="text-white/80 p-2 cursor-pointer px-2.5 hover:bg-white/5">pr</li>
                        </ul>
                    </div>

                </div>
            </div>

        </>
    )    
}