import Button from "../components/Button";
import Card_1 from "../components/Card_1";
import Card_2 from "../components/Card_2";

export default function HomePage() {
    return (
        <div className="pb-10">

            {/* light circles*/}
            <div className="bg-[--dark-blue] absolute top-3 left-44 w-48 h-48 rounded-full blur-3xl -z-10"></div>
            <div className="bg-[--dark-blue] absolute top-48 left-2 w-48 h-48 rounded-full blur-3xl -z-10"></div>

            
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
                    <div className="bg-[--dark-blue] absolute left-3 -bottom-2 blur-3xl w-72 h-72 translate-y-20 -translate-x-16 rounded-full -z-10"></div>
                    <div className="bg-[--dark-blue] absolute right-0 -bottom-2 blur-3xl w-56 h-56 translate-y-20 -translate-x-16 rounded-full -z-10"></div>
                    <img
                        alt="Apple Computer"
                        src={import.meta.env.BASE_URL+"/images/Apple-Computers.png"}
                        className="h-auto"
                    />
                </div>

            </div>

            <img
                alt="logos"
                src={import.meta.env.BASE_URL+"/logos-blue.png"}
                className="w-10/12 h-auto block mx-auto mt-36"
            />

            <div className="w-10/12 mx-auto mt-36">

                <p
                    className="text-center text-white font-bold text-3xl"
                >
                    Build your crypto portfolio
                </p>

                <p
                    className="max-w-[50ch] text-sm font-normal tracking-wide text-white mt-4 text-center mx-auto"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
                </p>

                <div className="w-full mt-20 grid grid-cols-[1fr_40%_1fr] gap-x-6">

                    <div className="space-y-8 h-full flex flex-col">
                        <Card_1
                            title="Send & Receive"
                            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene."
                            img={import.meta.env.BASE_URL+"/images/send-receive.png"}
                        />

                        <Card_1
                            title="100% Secure Wallet"
                            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene."
                            img={import.meta.env.BASE_URL+"/images/vallet.png"}
                        />
                    </div>

                    <Card_2
                        title="iOS & Android App"
                        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In amet, morbi non at sed neque."
                        img={import.meta.env.BASE_URL+"/images/iPhones.png"}
                    />

                    <div className="space-y-8 flex flex-col">
                        <Card_1
                            title="Trading Charts"
                            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene."
                            img={import.meta.env.BASE_URL+"/images/trading-charts.png"}
                        />

                        <Card_1
                            title="Real Time Trading"
                            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene."
                            img={import.meta.env.BASE_URL+"/images/real-time.png"}
                        />
                    </div>

                </div>

                <Button
                    text="DOWNLOAD APP"
                    className="block mx-auto mt-12"
                    style={{
                        fontSize: "var(--header__btn--font-size)",
                        fontFamily: "var(--header__btn--font-family)",
                        bg: "var(--header__btn--bg)",
                        color: "var(--header__btn--color)",
                        px: "1.75rem",
                        py: "1.1rem",
                        rounded: "var(--header__btn--border-radius)"
                    }}
                />

            </div>
        </div>
    )
}