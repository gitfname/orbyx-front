import { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { Link } from "react-router-dom"

export default function MobileMenu_1({className, navLinks}) {
    const [isOpen, setIsOPen] = useState(false)
    
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
                            <Link id={item.id} to={item.href} className="text-sm none text-white tracking-wide font-normal font-[Inter]">
                                {item.text.en}
                            </Link>
                        ))
                    }

                </div>
            </div>

        </>
    )    
}