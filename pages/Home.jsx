import Button from "../components/Button";

export default function HomePage() {
    return (
        <div>

            {/* light circles*/}
            <div className="bg-[--dark-blue] absolute top-3 left-44 w-48 h-48 rounded-full -z-10"></div>
            <div className="bg-[--dark-blue] absolute top-48 left-2 w-48 h-48 rounded-full -z-10"></div>
            <div className="absolute top-0 left-0 w-full h-screen -z-10 backdrop-blur-3xl"></div>

            
            {/* hero section */}
            <div className="w-full grid grid-cols-[56%_1fr] place-items-center pt-40 pl-14">

                <div className="space-y-3">
                    <div>
                        <p
                            style={{
                                fontSize: "var(--hero-section__title--font-size)",
                                fontFamily: "var(--hero-section__title--font-family)"
                            }}
                            className="text-[--hero-section__title--color] font-[--hero-section__title--font-weight]
                            leading-[--hero-section__title--line-height]"
                        >
                            Buy, trade, and hold
                        </p>
                        <p
                            style={{
                                fontSize: "var(--hero-section__title--font-size)",
                                fontFamily: "var(--hero-section__title--font-family)"
                            }}
                            className="text-[--hero-section__title--color] font-[--hero-section__title--font-weight]
                            leading-[--hero-section__title--line-height]"
                        >
                            350+ cryptocurrencies
                        </p>
                    </div>
                    <p
                        style={{
                            fontSize: "var(--hero-section__subtitle--font-size)",
                            fontFamily: "var(--hero-section__subtitle--font-family)"
                        }}
                        className="max-w-[50ch] text-[--hero-section__subtitle--color] font-[--hero-section__subtitle--font-weight]
                        leading-[--hero-section__subtitle--line-height] tracking-[--hero-section__subtitle--letter-spacing]"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat.
                    </p>
                    <div className="flex items-center gap-x-6 !mt-7">
                        <Button
                            text="DOWNLOAD APP"
                            style={{
                                fontSize: "var(--hero-section__cta1--font-size)",
                                fontFamily: "var(--hero-section__cta1--font-family)",
                                bg: "var(--hero-section__cta1--bg)",
                                color: "var(--hero-section__cta1--color)",
                                px: "var(--hero-section__cta1--px)",
                                py: "var(--hero-section__cta1--py)",
                                rounded: "var(--hero-section__cta1--border-radius)"
                            }}
                        />
                        <Button
                            text="VIEW PRICING"
                            style={{
                                fontSize: "var(--hero-section__cta2--font-size)",
                                fontFamily: "var(--hero-section__cta2--font-family)",
                                bg: "var(--hero-section__cta2--bg)",
                                color: "var(--hero-section__cta2--color)",
                                px: "var(--hero-section__cta2--px)",
                                py: "var(--hero-section__cta2--py)",
                                rounded: "var(--hero-section__cta2--border-radius)"
                            }}
                        />
                    </div>
                </div>

                <div className="relative">
                    {/* light circles*/}
                    <div className="bg-[--dark-blue] absolute left-3 -bottom-2 w-72 h-72 translate-y-20 -translate-x-16 rounded-full -z-10"></div>
                    <div className="bg-[--dark-blue] absolute right-0 -bottom-2 w-56 h-56 translate-y-20 -translate-x-16 rounded-full -z-10"></div>
                    <div className="absolute right-0 bottom-0 translate-y-20 w-[150%] h-72  scale-y-150 backdrop-blur-xl -z-10"></div>
                    <img
                        alt="Apple Computer"
                        src="/images/Apple-Computers.png"
                        className="h-auto"
                    />
                </div>

            </div>
        </div>
    )
}