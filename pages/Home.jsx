import ArticleCard_1 from "../components/ArticleCard_1";
import Button from "../components/Button";
import Card_1 from "../components/Card_1";
import Card_2 from "../components/Card_2";
import FeatureCard_1 from "../components/FeatureCard_1";
import SectionGroup_1 from "../components/SectionGroup_1";
import TestimotionalsSlider_1 from "../components/TestimotionalSlider_1";
import VideoPlayer_1 from "../components/VideoPlayer_1";
import { useMediaQuery } from "@chakra-ui/react"

export default function HomePage() {
    const [sm, md] = useMediaQuery([
        "(max-width: 768px)",
        "(max-width: 1024px)"
    ])

    return (
        <div className="pb-10 relative overflow-hidden">

            {/* light circles*/}
            <div className="bg-[--dark-blue] absolute top-3 left-44 w-48 h-48 rounded-full blur-3xl -z-10"></div>
            <div className="bg-[--dark-blue] absolute top-48 left-2 w-48 h-48 rounded-full blur-3xl -z-10"></div>

            
            {/* hero section */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-[56%_1fr] gap-y-10 place-items-center pt-24 lg:pt-40 max-lg:px-6 lg:pl-14">

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
                    <div className="flex max-lg:flex-col max-lg:items-stretch gap-y-4 items-center gap-x-6 !mt-7">
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
                        src={import.meta.env.BASE_URL+(md ? "/images/Apple-Computers-mobile.png" : "/images/Apple-Computers.png")}
                        className="h-auto"
                    />
                </div>

            </div>

            <p className="text-sm text-white font-[Inter] font-light text-center md:hidden mb-6 mt-36">Finance flow has been featured on</p>
            <img
                alt="logos"
                src={import.meta.env.BASE_URL+(sm ? "/logos-blue-mobile.png" : "/logos-blue.png")}
                className="w-10/12 h-auto block mx-auto md:mt-36 max-md:max-w-sm"
            />


            {/* section-3 */}
            <div className="w-full max-md:px-6 md:w-10/12 mx-auto mt-36">

                <p
                    style={{
                        fontFamily: "var(--home__section-3__title--font-family)",
                        fontSize: "var(--home__section-3__title--font-size)",
                    }}
                    className="lg:text-center text-[--home__section-3__title--color]
                    font-[--home__section-3__title--font-weight]"
                >
                    Build your crypto portfolio
                </p>

                <p
                    style={{
                        fontSize: "var(--home__section-3__subtitle--font-size)",
                        letterSpacing: "var(--home__section-3__subtitle--letter-spacing)",
                        fontFamily: "var(--home__section-3__subtitle--font-family)",
                        lineHeight: "var(--home__section-3__subtitle--line-height)"
                    }}
                    className="max-w-[50ch] tracking-wide mt-4 lg:text-center lg:mx-auto text-[--home__section-3__subtitle--color]
                    font-[--home__section-3__subtitle--font-weight] max-lg:max-w-[40ch]"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
                </p>

                <div className="w-full mt-20 grid grid-cols-1 md:grid-cols-[1fr_40%_1fr] gap-6">

                    <div className="h-full flex flex-col sm:flex-row md:flex-col gap-8">
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

                    <div className="flex flex-col sm:flex-row md:flex-col gap-8">
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

            {/* section-4 */}
            <div className="w-full max-md:px-6 md:w-10/12 mx-auto mt-36">

                <div className="w-full grid grid-cols-1 gap-y-6 md:grid-cols-2 place-items-center">

                    <img
                        alt=""
                        src={import.meta.env.BASE_URL+"/images/two-iphones.png"}
                        className="w-96 h-auto"
                    />

                    <div>
                        <p
                            style={{
                                fontFamily: "var(--home__section-4__title--font-family)",
                                fontSize: "var(--home__section-4__title--font-size)",
                            }}
                            className="max-w-[15ch] text-[--home__section-4__title--color]
                            font-[--home__section-4__title--font-weight]"
                        >
                            Earn daily rewards on your idle tokens
                        </p>

                        <p
                            style={{
                                fontFamily: "var(--home__section-4__subtitle--font-family)",
                                fontSize: "var(--home__section-4__subtitle--font-size)",
                            }}
                            className="mt-4 max-w-[40ch] text-[--home__section-4__subtitle--color]
                            font-[--home__section-4__subtitle--font-weight] leading-[--home__section-4__subtitle--line-height]
                            tracking-[--home__section-4__subtitle--letter-spacing]"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
                        </p>

                        <div className="space-y-3 mt-4">
                            <FeatureCard_1
                                text="Lowest fees in market"
                                img={import.meta.env.BASE_URL+"/images/low-charts.png"}
                            />
                            <FeatureCard_1
                                text="Fast and secure transactions"
                                img={import.meta.env.BASE_URL+"/images/thunder.png"}
                            />
                            <FeatureCard_1
                                text="256-bit secure encryption"
                                img={import.meta.env.BASE_URL+"/images/lock.png"}
                            />
                        </div>
                    </div>

                </div>

            </div>

            {/* section-5 */}
            <div className="w-full max-md:px-6 mx-auto mt-36">

                <div className="w-full gap-y-6 grid grid-cols-1 md:grid-cols-[45%_55%] place-items-center">

                    <div className="md:pl-10">
                        <p
                            style={{
                                fontFamily: "var(--home__section-5__title--font-family)",
                                fontSize: "var(--home__section-5__title--font-size)",
                            }}
                            className="max-w-[15ch] text-[--home__section-5__title--color]
                            font-[--home__section-5__title--font-weight]"
                        >
                            Earn daily rewards on your idle tokens
                        </p>

                        <p
                            style={{
                                fontFamily: "var(--home__section-5__subtitle--font-family)",
                                fontSize: "var(--home__section-5__subtitle--font-size)",
                            }}
                            className="mt-4 max-w-[40ch] text-[--home__section-5__subtitle--color]
                            font-[--home__section-5__subtitle--font-weight] leading-[--home__section-5__subtitle--line-height]
                            tracking-[--home__section-5__subtitle--letter-spacing]"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
                        </p>

                        <div className="space-y-3 mt-4">
                            <FeatureCard_1
                                text="100% Private data"
                                img={import.meta.env.BASE_URL+"/images/shield.png"}
                            />
                            <FeatureCard_1
                                text="99.99% Uptime guarantee"
                                img={import.meta.env.BASE_URL+"/images/99-percent.png"}
                            />
                            <FeatureCard_1
                                text="24/7 Dedicated support"
                                img={import.meta.env.BASE_URL+"/images/message.png"}
                            />
                        </div>
                    </div>

                    <img
                        alt=""
                        src={import.meta.env.BASE_URL+( md ? "/images/Apple-Computers-mobile.png" : "/images/Apple-Computers-2.png")}
                        className="w-full h-auto place-self-end"
                    />

                </div>

            </div>

            {/* section-6 */}
            <div className="w-full mt-36 bg-[#0328EE]">

                <div className="w-full md:w-10/12 max-md:px-6 mx-auto grid  grid-cols-1 md:grid-cols-2 place-items-center relative max-md:pb-0 py-20">

                    <div className="md:pl-10 max-md:translate-y-2 z-10">
                        <p
                            style={{
                                fontFamily: "var(--home__section-5__title--font-family)",
                                fontSize: "var(--home__section-5__title--font-size)",
                            }}
                            className="max-w-[50ch] max-md:mx-auto text-[--home__section-5__title--color]
                            font-[--home__section-5__title--font-weight]"
                        >
                            Explore endless possibilities with FinanceFlow
                        </p>

                        <p
                            style={{
                                fontFamily: "var(--home__section-5__subtitle--font-family)",
                                fontSize: "var(--home__section-5__subtitle--font-size)",
                            }}
                            className="mt-4 max-w-[40ch] max-md:max-w-[30ch] text-center mx-auto text-[--home__section-5__subtitle--color]
                            font-[--home__section-5__subtitle--font-weight] leading-[--home__section-5__subtitle--line-height]
                            tracking-[--home__section-5__subtitle--letter-spacing]"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
                        </p>

                        <Button
                            text="DOWNLOAD APP"
                            className="mt-4 max-md:w-full"
                            style={{
                                fontSize: "var(1rem)",
                                fontFamily: "var(--header__btn--font-family)",
                                fontWeight: 700,
                                bg: "white",
                                color: "var(--primary-color)",
                                px: "1.75rem",
                                py: "1.1rem",
                                rounded: "var(--header__btn--border-radius)"
                            }}
                        />
                    </div>

                    <img
                        alt=""
                        src={import.meta.env.BASE_URL+"/images/two-iphones-2.png"}
                        className="w-64 md:w-[30rem] max-md:z-10 h-auto place-self-end md:absolute max-md:block max-md:mx-auto md:bottom-0 md:-right-2"
                    />

                </div>

            </div>

            {/* testimotionals */}
            <div className="mt-36 w-full relative">
                {/* light circles*/}
                <div className="bg-[rgba(3,40,238,0.4)] absolute -bottom-28 left-64 w-56 h-56 rounded-full blur-3xl -z-10"></div>

                <div className="w-full max-md:px-6 max-md:flex-col md:w-10/12 mx-auto flex gap-y-4 md:items-center justify-between mb-8">
                    <p
                        style={{
                            fontSize: "var(--home__testimotionals__title--font-size)",
                            fontFamily: "var(--home__testimotionals__title--font-family)"
                        }}
                        className="text-[--home__testimotionals__title--color]
                        font-[--home__testimotionals__title--font-weight]"
                    >
                        What our users say?
                    </p>

                    <Button
                        text="DOWNLOAD APP"
                        style={{
                            fontSize: "var(--home__testimotionals__btn--font-size)",
                            fontFamily: "var(--home__testimotionals__btn--font-family)",
                            bg: "var(--home__testimotionals__btn--bg)",
                            color: "var(--home__testimotionals__btn--color)",
                            px: "var(--home__testimotionals__btn--px)",
                            py: "var(--home__testimotionals__btn--py)",
                            rounded: "var(--home__testimotionals__btn--border-radius)"
                        }}
                    />
                </div>
                <TestimotionalsSlider_1 />
            </div>

            {/* section-7 */}
            <div className="w-full max-md:px-6 md:w-10/12 mx-auto mt-36">

                <div className="w-full grid grid-cols-1 md:grid-cols-2 place-items-center gap-y-5">

                    <div>
                        <p
                            style={{
                                fontFamily: "var(--home__section-4__title--font-family)",
                                fontSize: "var(--home__section-4__title--font-size)",
                            }}
                            className="max-w-[15ch] text-[--home__section-4__title--color]
                            font-[--home__section-4__title--font-weight]"
                        >
                            Get started today
                        </p>

                        <p
                            style={{
                                fontFamily: "var(--home__section-4__subtitle--font-family)",
                                fontSize: "var(--home__section-4__subtitle--font-size)",
                            }}
                            className="mt-4 max-w-[40ch] text-[--home__section-4__subtitle--color]
                            font-[--home__section-4__subtitle--font-weight] leading-[--home__section-4__subtitle--line-height]
                            tracking-[--home__section-4__subtitle--letter-spacing]"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
                        </p>

                        <div className="space-y-3 mt-4">
                            <FeatureCard_1
                                text="Download app"
                                img={import.meta.env.BASE_URL+"/images/download.png"}
                            />
                            <FeatureCard_1
                                text="Create a free account"
                                img={import.meta.env.BASE_URL+"/images/user.png"}
                            />
                            <FeatureCard_1
                                text="Start trading"
                                img={import.meta.env.BASE_URL+"/images/money.png"}
                            />
                        </div>
                    </div>

                    <div className="max-w-md w-full">
                        <VideoPlayer_1 />
                    </div>


                </div>

            </div>


            {/* latest news */}
            <SectionGroup_1
                leftText="Browse our latest news"
                rightText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non neque orci amet, amet ."
            >
                <>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <ArticleCard_1
                            title="The Basics about Cryptocurrency"
                            info="Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo."
                            author={{
                                img: import.meta.env.BASE_URL+"/images/user-profiles/user-1.jpg",
                                username: "Jhon Smith"
                            }}
                            pubDate="AUGUST, 2, 2023"
                        />

                        <ArticleCard_1
                            title="How to become a successful trader in 2023 "
                            info="Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo."
                            author={{
                                img: import.meta.env.BASE_URL+"/images/user-profiles/user-2.jpg",
                                username: "Markus Parker"
                            }}
                            pubDate="AUGUST, 2, 2023"
                        />

                        <ArticleCard_1
                            title="Best Cryptocurrencies to buy in 2023"
                            info="Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo."
                            author={{
                                img: import.meta.env.BASE_URL+"/images/user-profiles/user-1.jpg",
                                username: "Jhon Smith"
                            }}
                            pubDate="AUGUST, 2, 2023"
                        />
                    </div>

                    <Button
                        text="VIEW ALL ARTICLES"
                        className="mt-8 block mx-auto tracking-widest"
                        style={{
                            fontSize: "0.75rem",
                            fontFamily: "Inter",
                            fontWeight: 500,
                            bg: "rgba(255, 255, 255, 0.1)",
                            color: "white",
                            px: "1.75rem",
                            py: "1.1rem",
                            rounded: "100px"
                        }}
                    />
                </>
            </SectionGroup_1>


            {/* download our app */}
            <SectionGroup_1
                leftText="Downlaod our app"
                rightText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non neque orci amet, amet ."
            >

                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-20 place-items-center">

                    <Card_2
                        title="Download for ios"
                        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer in pellentesque tortor semper elementum. Felis."
                        img={import.meta.env.BASE_URL+"/images/iPhones.png"}
                        style={{
                            card: {
                                bg: "var(--dark-blue)",
                                px: "2.2rem"
                            }
                        }}
                        className="!h-72 !w-auto"
                        content={
                            <Button
                                text="APPLE STORE"
                                className="my-7 w-max tracking-wide"
                                style={{
                                    fontSize: "0.75rem",
                                    fontFamily: "Inter",
                                    fontWeight: 500,
                                    bg: "var(--blue)",
                                    color: "white",
                                    px: "1.75rem",
                                    py: "1.1rem",
                                    rounded: "100px"
                                }}
                                left={
                                    <img
                                        alt=""
                                        src={import.meta.env.BASE_URL+"/images/ios.png"}
                                        className="w-6 h-6 object-center object-scale-down"
                                    />
                                }
                            />
                        }
                    />

                    <Card_2
                        title="Download for android"
                        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer in pellentesque tortor semper elementum. Felis."
                        img={import.meta.env.BASE_URL+"/images/Samsung-Galaxys.png"}
                        style={{
                            card: {
                                bg: "var(--dark-blue)",
                                px: "2.2rem"
                            }
                        }}
                        className="!h-72 !w-auto"
                        content={
                            <Button
                                text="PLAY STORE"
                                className="my-7 w-max tracking-wide"
                                style={{
                                    fontSize: "0.75rem",
                                    fontFamily: "Inter",
                                    fontWeight: 500,
                                    bg: "var(--blue)",
                                    color: "white",
                                    px: "1.75rem",
                                    py: "1.1rem",
                                    rounded: "100px"
                                }}
                                left={
                                    <img
                                        alt=""
                                        src={import.meta.env.BASE_URL+"/images/play-store.png"}
                                        className="w-5 h-5 object-center object-scale-down"
                                    />
                                }
                            />
                        }
                    />

                </div>

            </SectionGroup_1>
        </div>
    )
}