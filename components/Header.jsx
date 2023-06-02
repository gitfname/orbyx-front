
import { Link } from "react-router-dom"
import Button from "./Button"

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
    return (
        <nav
            className="flex items-center justify-between w-full absolute top-0 left-0
            pt-[--header--pt] pb-[--header--pb] pl-[--header--pl] pr-[--header--pr] bg-[--header--bg]"
        >

            <div className="flex items-center gap-x-9">
                <Link to="/" className="flex items-center gap-x-3">
                    <img
                        src={import.meta.env.BASE_URL+"/logo.svg"}
                        className="w-[--logo--width] h-[--logo--height] object-center object-cover"
                    />
                    <p
                        style={{
                            fontSize: "var(--logo__text--font-size)",
                            fontFamily: "var(--logo__text--font-family)"
                        }}
                        className="text-[--logo__text--color] font-[--logo__text--font-weight]"
                    >
                        FinanceFlow
                    </p>
                </Link>

                <div className="flex items-center gap-x-5">
                    <NavLink
                        text="HOME"
                    />
                    <NavLink
                        text="ABOUT"
                    />
                    <NavLink
                        text="PRICING"
                    />
                    <NavLink
                        text="TOKENS"
                    />
                    <NavLink
                        text="BLOG"
                    />
                    <NavLink
                        text="CONTACT US"
                    />
                </div>
            </div>

            <Button
                text="DOWNLOAD APP"
                style={{
                    fontSize: "var(--header__btn--font-size)",
                    fontFamily: "var(--header__btn--font-family)",
                    bg: "var(--header__btn--bg)",
                    color: "var(--header__btn--color)",
                    px: "var(--header__btn--px)",
                    py: "var(--header__btn--py)",
                    rounded: "var(--header__btn--border-radius)"
                }}
            />

        </nav>
    )
}