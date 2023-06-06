
import { Link } from "react-router-dom"
import Button from "./Button"
import MobileMenu_1 from "./MobileMenu_1"
import { useContext } from "react"
import ApplicationDataContext from "../context/ApplicationData"
import getText from "../application-db/getText"

function NavLink({text, href="/"}) {
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

    return (
        <nav
            className="flex items-center justify-between w-full absolute top-0 left-0 z-30
            pt-[--header--pt] pb-[--header--pb] pl-[--header--pl] pr-[--header--pr] bg-[--header--bg]"
        >

            <div className="flex items-center gap-x-9">
                <Link to="/" className="flex items-center gap-x-3">
                    <img
                        src={import.meta.env.BASE_URL+applicationData?.logo}
                        className="w-[--logo--width] h-[--logo--height] object-center object-cover"
                    />
                </Link>

                <div className="flex items-center gap-x-5 max-md:hidden">
                    {
                        applicationData?.header.links.map(item => (
                            <NavLink
                                key={item.id}
                                text={getText(item.text)}
                                href={item.href}
                            />
                        ))
                    }
                </div>
            </div>

            <Button
                text={getText(applicationData?.header?.["button-text"])}
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

            <MobileMenu_1 navLinks={applicationData?.header?.links} className="md:hidden" />

        </nav>
    )
}