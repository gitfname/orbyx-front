
export default function TestimotionalCard_1({text, img}) {
    return (
        <div
            className="p-[--testimotionals-card-1--padding] min-w-[--testimotionals-card-1--min-w]
            rounded-[--testimotionals-card-1--border-radius] bg-[--testimotionals-card-1--bg]
            shadow-sm shadow-black/5"
        >

            <p
                className="text-sm text-white font-light leading-6 tracking-wide max-w-[45ch]"
            >
                {text}
            </p>

            <div className="mt-6 flex items-center gap-x-5">
                <img
                    alt=""
                    src={img}
                    className="w-11 h-11 rounded-full object-center object-cover"
                />

                <div>
                    <p
                        style={{
                            fontSize: "var(--testimotionals-card-1__username--font-size)",
                            fontFamily: "var(--testimotionals-card-1__username--font-family)"
                        }}
                        className="text-[--testimotionals-card-1__username--color] font-[--testimotionals-card-1__username--font-weight]"
                    >
                        John carter
                    </p>

                    <p
                        style={{
                            fontSize: "var(--testimotionals-card-1__company--font-size)",
                            fontFamily: "var(--testimotionals-card-1__company--font-family)"
                        }}
                        className="mt-0.5 text-[--testimotionals-card-1__company--color] font-[--testimotionals-card-1__company--font-weight]"
                    >
                        Role. Company
                    </p>
                </div>
            </div>

        </div>
    )
}