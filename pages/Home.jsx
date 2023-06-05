import ArticleCard_1 from "../components/ArticleCard_1";
import Button from "../components/Button";
import Card_1 from "../components/Card_1";
import Card_2 from "../components/Card_2";
import FeatureCard_1 from "../components/FeatureCard_1";
import SectionGroup_1 from "../components/SectionGroup_1";
import TestimotionalsSlider_1 from "../components/TestimotionalSlider_1";
import VideoPlayer_1 from "../components/VideoPlayer_1";
import { useMediaQuery } from "@chakra-ui/react"
import { useContext } from "react";
import ApplicationDataContext from "../context/ApplicationData";
import TestimotionalCard_1 from "../components/TestimotionalCard_1";

export default function HomePage() {
    const applicationData = useContext(ApplicationDataContext)
    const [sm, md] = useMediaQuery([
        "(max-width: 768px)",
        "(min-width: 768px)"
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
                        {
                            applicationData?.hero?.["text"]?.map(text => (
                                <p
                                    style={{
                                        fontSize: "var(--hero-section__title--font-size)",
                                        fontFamily: "var(--hero-section__title--font-family)"
                                    }}
                                    className="text-[--hero-section__title--color] font-[--hero-section__title--font-weight]
                                    leading-[--hero-section__title--line-height]"
                                >
                                    {text}
                                </p>
                            ))
                        }
                    </div>
                    {
                            applicationData?.hero?.["subtext"]?.map(text => (
                                <p
                                    style={{
                                        fontSize: "var(--hero-section__subtitle--font-size)",
                                        fontFamily: "var(--hero-section__subtitle--font-family)"
                                    }}
                                    className="max-w-[50ch] text-[--hero-section__subtitle--color] font-[--hero-section__subtitle--font-weight]
                                    leading-[--hero-section__subtitle--line-height] tracking-[--hero-section__subtitle--letter-spacing]"
                                >
                                    {text}
                                </p>
                            ))
                        }
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
                            href={{
                                link: applicationData["download-our-app-link"],
                                target: "_blank"
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
                        src={import.meta.env.BASE_URL+(md ? applicationData?.hero?.img?.md : applicationData?.hero?.img?.sm)}
                        className="h-auto"
                    />
                </div>

            </div>

            {/* section-2 */}
            <p className="text-sm text-white font-[Inter] font-light text-center md:hidden mb-6 mt-36">Finance flow has been featured on</p>
            <img
                alt="logos"
                src={
                    import.meta.env.BASE_URL+
                    (
                        sm
                        ?
                            applicationData?.["home-page-sections"]?.["section-2"].img.blue.sm
                        :
                            applicationData?.["home-page-sections"]?.["section-2"].img.blue.md
                    )
                }
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
                    {applicationData?.["home-page-sections"]?.["section-3"].title}
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
                    {applicationData?.["home-page-sections"]?.["section-3"].subtitle}
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
                    className="block mx-auto mt-12 w-max"
                    style={{
                        fontSize: "var(--header__btn--font-size)",
                        fontFamily: "var(--header__btn--font-family)",
                        bg: "var(--header__btn--bg)",
                        color: "var(--header__btn--color)",
                        px: "1.75rem",
                        py: "1.1rem",
                        rounded: "var(--header__btn--border-radius)"
                    }}
                    href={{
                        link: (applicationData?.["download-our-app-link"]),
                        target: "_blank"
                    }}
                />

            </div>

            {/* section-4 */}
            <div className="w-full max-md:px-6 md:w-10/12 mx-auto mt-36">

                <div className="w-full grid grid-cols-1 gap-y-6 md:grid-cols-2 place-items-center">

                    <img
                        alt=""
                        src={import.meta.env.BASE_URL+(applicationData?.["home-page-sections"]?.["section-4"]?.img)}
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
                            {applicationData?.["home-page-sections"]?.["section-4"]?.title}
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
                            {applicationData?.["home-page-sections"]?.["section-4"]?.subtitle}
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
                            {applicationData?.["home-page-sections"]?.["section-5"]?.title}
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
                            {applicationData?.["home-page-sections"]?.["section-5"]?.subtitle}
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
                        src={import.meta.env.BASE_URL+( md ? applicationData?.["home-page-sections"]?.["section-5"]?.img?.md : applicationData?.["home-page-sections"]?.["section-5"]?.img?.sm)}
                        className="w-full h-auto place-self-end"
                    />

                </div>

            </div>

            {/* section-6 */}
            <div className="w-full mt-36 bg-[#0328EE]">

                <div className="w-full md:w-10/12 max-md:px-6 mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center relative max-md:pb-0 py-20">

                    <div className="md:pl-10 max-md:translate-y-2 z-10">
                        <p
                            style={{
                                fontFamily: "var(--home__section-5__title--font-family)",
                                fontSize: "var(--home__section-5__title--font-size)",
                            }}
                            className="max-w-[50ch] max-md:mx-auto text-[--home__section-5__title--color]
                            font-[--home__section-5__title--font-weight]"
                        >
                            {applicationData?.["home-page-sections"]?.["section-6"]?.title}
                        </p>

                        <p
                            style={{
                                fontFamily: "var(--home__section-5__subtitle--font-family)",
                                fontSize: "var(--home__section-5__subtitle--font-size)",
                            }}
                            className="mt-4 max-w-[40ch] max-md:max-w-[30ch] max-md:text-center max-md:mx-auto text-[--home__section-5__subtitle--color]
                            font-[--home__section-5__subtitle--font-weight] leading-[--home__section-5__subtitle--line-height]
                            tracking-[--home__section-5__subtitle--letter-spacing]"
                        >
                            {applicationData?.["home-page-sections"]?.["section-6"]?.subtitle}
                        </p>

                        <Button
                            text="DOWNLOAD APP"
                            className="mt-4 max-md:w-full w-max"
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
                            href={{
                                link: (applicationData?.["download-our-app-link"]),
                                target: "_blank"
                            }}
                        />
                    </div>

                    <img
                        alt=""
                        src={import.meta.env.BASE_URL+applicationData?.["home-page-sections"]?.["section-6"]?.img}
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
                        {applicationData?.["home-page-sections"]?.["testimotionals"]?.title?.en}
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
                        href={{
                            link: (applicationData?.["download-our-app-link"]),
                            target: "_blank"
                        }}
                    />
                </div>
                <TestimotionalsSlider_1
                    items={applicationData?.["home-page-sections"]?.testimotionals?.items}
                    renderer={data => (
                        <TestimotionalCard_1
                            key={data.id}
                            text={data.text}
                            username={data.username}
                            company={data.company}
                            img={import.meta.env.BASE_URL+data.img}
                        />
                    )}
                />
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
                leftText={applicationData?.["latest-news"]?.title?.en}
                rightText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non neque orci amet, amet ."
            >
                <>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {
                            applicationData?.["latest-news"]?.items?.map(latestNew => (
                                <ArticleCard_1
                                    key={latestNew.id}
                                    title={latestNew.title}
                                    info={latestNew.info}
                                    img={import.meta.env.BASE_URL+latestNew.img}
                                    author={{
                                        img: import.meta.env.BASE_URL+latestNew.author.img,
                                        username: latestNew.author.username
                                    }}
                                    pubDate={latestNew.pubDate}
                                />
                            ))
                        }
                    </div>

                    <Button
                        text="VIEW ALL ARTICLES"
                        className="mt-8 block mx-auto tracking-widest w-max"
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
                        href={{
                            link: (applicationData?.["header"]?.links?.find(link => link.id === "header-link-blog")?.href),
                            target: "_self"
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