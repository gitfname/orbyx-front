import ArticleCard_1 from "../../components/ArticleCard_1";
import Button from "../../components/Button";
import Card_1 from "../../components/Card_1";
import Card_2 from "../../components/Card_2";
import FeatureCard_1 from "../../components/FeatureCard_1";
import SectionGroup_1 from "../../components/SectionGroup_1";
import TestimotionalsSlider_1 from "../../components/TestimotionalSlider_1";
import VideoPlayer_1 from "../../components/VideoPlayer_1";
import { useFocusEffect, useMediaQuery } from "@chakra-ui/react"
import { useContext, useEffect, useMemo, useState } from "react";
import ApplicationDataContext from "../../context/ApplicationData";
import TestimotionalCard_1 from "../../components/TestimotionalCard_1";
import getText from "../../application-db/getText";
import { useApplicationLanguage, ApplicationLanguageContetx } from "../../hooks/useApplicationLanguage";
import { Tilt } from "react-tilt";
import SocialLinks from "./components/SocialLinks";
import { Link } from "react-router-dom";
import OurTechnologies from "./components/OurTechnologies";
import useSWR from "swr"
import { STRAPI_BASE_URL, STRAPI_HOME_PAGE_DETAILS_API_URL } from "../../constants";
import RecentWorks from "../../components/RecentWorks";
import LatestNews from "../../components/LatestNews";
import OurTeam from "../../components/OurTeam";
import getBaseUrl from "../../utils/base-url";
import Services from "../../components/Services";

export default function HomePage() {

    const [lang] = useContext(ApplicationLanguageContetx)

    const {
        data: pageDetails,
        error: pageDetailsError,
        isLoading: isPageDetailsLoading,
        mutate: mutateHomePageDetails
    } = useSWR(
        "/home-page-details",
        async () => await (await fetch(STRAPI_HOME_PAGE_DETAILS_API_URL + "&locale=" + lang.lang)).json(),
        {
            shouldRetryOnError: true,
            errorRetryCount: 2,
            revalidateOnFocus: false
        }
    )

    const applicationData = useContext(ApplicationDataContext)
    const [sm, md] = useMediaQuery([
        "(max-width: 768px)",
        "(min-width: 768px)"
    ])
    // const [lang] = useApplicationLanguage()

    useEffect(
        () => {
            mutateHomePageDetails()
        },
        [lang.lang]
    )

    return (
        <div className="pb-10 relative overflow-hidden">

            {/* light circles*/}
            <div className="bg-[--dark-blue] absolute top-3 left-44 w-48 h-48 rounded-full blur-3xl -z-10"></div>
            <div className="bg-[--dark-blue] absolute top-48 left-2 w-48 h-48 rounded-full blur-3xl -z-10"></div>


            {/* hero section */}
            <div
                id="hero"
                dir={lang.dir}
                className={`w-full grid grid-cols-1 lg:grid-cols-[56%_1fr] gap-y-10 place-items-center pt-24
                lg:pt-40 ${lang.dir !== "rtl" ? "lg:pl-8" : ""}`}
            >

                <div dir={lang.dir} className="space-y-3 max-sm:w-full z-10 max-lg:p-6">
                    <div>
                        {
                            // getText(applicationData?.hero?.["text"], lang.lang)?.map(text => (
                            //     <p
                            //         style={{
                            //             fontSize: "var(--hero-section__title--font-size)",
                            //             fontFamily: "var(--hero-section__title--font-family)"
                            //         }}
                            //         className="text-[--hero-section__title--color] font-[--hero-section__title--font-weight]
                            //         leading-[--hero-section__title--line-height]"
                            //     >
                            //         {text}
                            //     </p>
                            // ))
                            <p
                                style={{
                                    fontSize: "var(--hero-section__title--font-size)",
                                    fontFamily: "var(--hero-section__title--font-family)"
                                }}
                                className="text-[--hero-section__title--color] font-[--hero-section__title--font-weight]
                                    leading-[--hero-section__title--line-height] max-w-md"
                            >
                                {pageDetails?.data?.attributes?.hero_text_1}
                            </p>
                        }
                    </div>
                    {/* {
                        getText(applicationData?.hero?.["subtext"], lang.lang)?.map(text => (
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
                    } */}
                    <div className="flex items-center gap-x-2 w-full h-11">
                        <SocialLinks />
                    </div>

                    <div className="flex max-lg:flex-col max-lg:items-stretch gap-y-4 items-center gap-x-6 !mt-7">
                        <Button
                            text={pageDetails?.data?.attributes?.hero_cta1_text}
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
                        {/* <Button
                            text={getText(applicationData?.["hero"]?.["button-2-text"], lang.lang)}
                            style={{
                                fontSize: "var(--hero-section__cta2--font-size)",
                                fontFamily: "var(--hero-section__cta2--font-family)",
                                bg: "var(--hero-section__cta2--bg)",
                                color: "var(--hero-section__cta2--color)",
                                px: "var(--hero-section__cta2--px)",
                                py: "var(--hero-section__cta2--py)",
                                rounded: "var(--hero-section__cta2--border-radius)"
                            }}
                        /> */}
                        <div
                            className="flex-1 p-4 py-6 rounded-3xl bg-white/10 self-stretch shadow-md shadow-black/10
                            flex items-center justify-center gap-x-7 relative"
                        >

                            <div>
                                <p className="text-2xl text-white/60 font-[Inter] font-semibold text-center">8.4M</p>
                                <hr className="mx-auto w-3/4 h-px bg-white/10 border-none my-0.5" />
                                <p className="text-xs text-white/30 font-[Inter] text-center">Customers</p>
                            </div>

                            <div>
                                <p className="text-2xl text-white/60 font-[Inter] font-semibold text-center">3.2K</p>
                                <hr className="mx-auto w-3/4 h-px bg-white/10 border-none my-0.5" />
                                <p className="text-xs text-white/30 font-[Inter] text-center">Projects</p>
                            </div>

                            <div>
                                <p className="text-2xl text-white/60 font-[Inter] font-semibold text-center">69</p>
                                <hr className="mx-auto w-3/4 h-px bg-white/10 border-none my-0.5" />
                                <p className="text-xs text-white/30 font-[Inter] text-center">Games</p>
                            </div>

                            <Link
                                to="/order-project"
                                className="text-sm capitalize text-gray-50 font-[Inter] tracking-wide
                                rounded-xl bg-[--primary-color] w-max p-3.5 px-6 absolute bottom-0 -right-5
                                translate-y-3/4 active:scale-95 transition-transform duration-300 max-sm:left-1/2 max-sm:-translate-x-1/2"
                            >
                                {pageDetails?.data?.attributes?.hero_cta2_text}
                            </Link>

                        </div>
                    </div>
                </div>

                <div className="relative">
                    {/* light circles*/}
                    <div className="bg-[--dark-blue] absolute left-3 -bottom-2 blur-3xl w-72 h-72 translate-y-20 -translate-x-16 rounded-full -z-10"></div>
                    <div className="bg-[--dark-blue] absolute right-0 -bottom-2 blur-3xl w-56 h-56 translate-y-20 -translate-x-16 rounded-full -z-10"></div>
                    <img
                        loading="lazy"
                        alt="Apple Computer"
                        src={STRAPI_BASE_URL + (md ? pageDetails?.data?.attributes?.hero_image?.data?.attributes?.url : pageDetails?.data?.attributes?.hero_image_mobile?.data?.attributes?.url)}
                        className={`h-auto ${lang.dir === "rtl" ? "-scale-x-100" : ""}`}
                    />
                </div>

            </div>

            {/* section-2 */}
            <p className="text-sm text-gray-300 font-[Inter] font-normal text-center mb-6 mt-36">
                {pageDetails?.data?.attributes?.section2_text}
            </p>
            <div className="w-full overflow-y-hidden overflow-x-auto pt-3 py-2">

                <div className="w-max mx-auto px-4 flex items-center gap-x-8 justify-center">
                    <Tilt
                        max={50}
                        reverse={true}
                        transition={true}
                    >
                        <div className="flex items-center gap-x-2 p-5 bg-slate-900/80 rounded-xl">
                            <img
                                alt=""
                                src={getBaseUrl() + "/company-1.png"}
                                className="w-9 h-auto"
                            />
                            <p
                                className="text-xl text-gray-200 font-[Inter] font-semibold"
                            >
                                Company
                            </p>
                        </div>

                    </Tilt>

                    <Tilt
                        max={50}
                        reverse={true}
                        transition={true}
                    >
                        <div className="flex items-center gap-x-2 p-5 bg-slate-900/80 rounded-xl">
                            <img
                                alt=""
                                src={getBaseUrl() + "/company-2.png"}
                                className="w-9 h-auto"
                            />
                            <p
                                className="text-xl text-gray-200 font-[Inter] font-semibold"
                            >
                                Company
                            </p>
                        </div>
                    </Tilt>

                    <Tilt
                        max={50}
                        reverse={true}
                        transition={true}
                    >
                        <div className="flex items-center gap-x-2 p-5 bg-slate-900/80 rounded-xl">
                            <img
                                alt=""
                                src={getBaseUrl() + "/company-1.png"}
                                className="w-9 h-auto"
                            />
                            <p
                                className="text-xl text-gray-200 font-[Inter] font-semibold"
                            >
                                Company
                            </p>
                        </div>
                    </Tilt>

                    <Tilt
                        max={50}
                        reverse={true}
                        transition={true}
                    >
                        <div className="flex items-center gap-x-2 p-5 bg-slate-900/80 rounded-xl">
                            <img
                                alt=""
                                src={getBaseUrl() + "/company-2.png"}
                                className="w-9 h-auto"
                            />
                            <p
                                className="text-xl text-gray-200 font-[Inter] font-semibold"
                            >
                                Company
                            </p>
                        </div>
                    </Tilt>

                    <Tilt
                        max={50}
                        reverse={true}
                        transition={true}
                    >
                        <div className="flex items-center gap-x-2 p-5 bg-slate-900/80 rounded-xl">
                            <img
                                alt=""
                                src={getBaseUrl() + "/company-1.png"}
                                className="w-9 h-auto"
                            />
                            <p
                                className="text-xl text-gray-200 font-[Inter] font-semibold"
                            >
                                Company
                            </p>
                        </div>
                    </Tilt>
                </div>

            </div>
            {/* <img
                alt="logos"
                src={
                    getBaseUrl() +
                    (
                        sm
                            ?
                            applicationData?.["home-page-sections"]?.["section-2"].img.blue.sm
                            :
                            applicationData?.["home-page-sections"]?.["section-2"].img.blue.md
                    )
                }
                className="w-10/12 h-auto block mx-auto md:mt-36 max-md:max-w-sm"
            /> */}


            {/* section-3 */}
            <div id="services" className="w-full max-md:px-6 md:w-10/12 mx-auto mt-36">

                <p
                    style={{
                        fontFamily: "var(--home__section-3__title--font-family)",
                        fontSize: "var(--home__section-3__title--font-size)",
                    }}
                    className={`lg:text-center text-[--home__section-3__title--color]
                    font-[--home__section-3__title--font-weight] ${lang.classname}`}
                    dir={lang.dir}
                >
                    {pageDetails?.data?.attributes?.section3_text}
                </p>

                <p
                    style={{
                        fontSize: "var(--home__section-3__subtitle--font-size)",
                        letterSpacing: "var(--home__section-3__subtitle--letter-spacing)",
                        fontFamily: "var(--home__section-3__subtitle--font-family)",
                        lineHeight: "var(--home__section-3__subtitle--line-height)"
                    }}
                    className={`max-w-[50ch] ${lang.dir === "rtl" && "ml-auto"} mb-20 tracking-wide mt-4 lg:text-center lg:mx-auto text-[--home__section-3__subtitle--color]
                    font-[--home__section-3__subtitle--font-weight] max-lg:max-w-[40ch] ${lang.classname} !w-full`}
                    dir={lang.dir}
                >
                    {pageDetails?.data?.attributes?.section3_subtext}
                </p>

                <Services />

                {/* <div className="w-full mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"> */}

                    {/* <div className="h-full flex flex-col sm:flex-row md:flex-col gap-8 ali">
                        <Tilt
                            max={35}
                            reverse={true}
                            transition={true}
                        >
                            <Card_1
                                dir={lang.dir}
                                title={getText(applicationData?.["home-page-sections"]?.["section-3"]?.["card-1"]?.title, lang.lang)}
                                subtitle={getText(applicationData?.["home-page-sections"]?.["section-3"]?.["card-1"]?.subtitle, lang.lang)}
                                img={getBaseUrl() + (applicationData?.["home-page-sections"]?.["section-3"]?.["card-1"]?.img)}
                            />
                        </Tilt>

                        <Tilt
                            max={35}
                            reverse={true}
                            transition={true}
                        >
                            <Card_1
                                dir={lang.dir}
                                title={getText(applicationData?.["home-page-sections"]?.["section-3"]?.["card-2"]?.title, lang.lang)}
                                subtitle={getText(applicationData?.["home-page-sections"]?.["section-3"]?.["card-2"]?.subtitle, lang.lang)}
                                img={getBaseUrl() + (applicationData?.["home-page-sections"]?.["section-3"]?.["card-2"]?.img)}
                            />
                        </Tilt>
                    </div> */}

                    {/* <Card_2
                        dir={lang.dir}
                        title={getText(applicationData?.["home-page-sections"]?.["section-3"]?.["card-3"]?.title, lang.lang)}
                        subtitle={getText(applicationData?.["home-page-sections"]?.["section-3"]?.["card-3"]?.subtitle, lang.lang)}
                        img={getBaseUrl() + (applicationData?.["home-page-sections"]?.["section-3"]?.["card-3"]?.img)}
                    /> */}

                    {/* <div className="h-full flex flex-col sm:flex-row md:flex-col gap-8">
                        <Tilt
                            max={35}
                            reverse={true}
                            transition={true}
                        >
                            <Card_1
                                dir={lang.dir}
                                title={getText(applicationData?.["home-page-sections"]?.["section-3"]?.["card-1"]?.title, lang.lang)}
                                subtitle={getText(applicationData?.["home-page-sections"]?.["section-3"]?.["card-1"]?.subtitle, lang.lang)}
                                img={getBaseUrl() + (applicationData?.["home-page-sections"]?.["section-3"]?.["card-1"]?.img)}
                            />
                        </Tilt>


                        <Tilt
                            max={35}
                            reverse={true}
                            transition={true}
                        >
                            <Card_1
                                dir={lang.dir}
                                title={getText(applicationData?.["home-page-sections"]?.["section-3"]?.["card-2"]?.title, lang.lang)}
                                subtitle={getText(applicationData?.["home-page-sections"]?.["section-3"]?.["card-2"]?.subtitle, lang.lang)}
                                img={getBaseUrl() + (applicationData?.["home-page-sections"]?.["section-3"]?.["card-2"]?.img)}
                            />
                        </Tilt>

                    </div> */}

                    {/* <div className="flex flex-col sm:flex-row md:flex-col gap-8">
                        <Tilt
                            max={35}
                            reverse={true}
                            transition={true}
                        >
                            <Card_1
                                dir={lang.dir}
                                title={getText(applicationData?.["home-page-sections"]?.["section-3"]?.["card-4"]?.title, lang.lang)}
                                subtitle={getText(applicationData?.["home-page-sections"]?.["section-3"]?.["card-4"]?.subtitle, lang.lang)}
                                img={getBaseUrl() + (applicationData?.["home-page-sections"]?.["section-3"]?.["card-4"]?.img)}
                            />
                        </Tilt>

                        <Tilt
                            max={35}
                            reverse={true}
                            transition={true}
                        >
                            <Card_1
                                dir={lang.dir}
                                title={getText(applicationData?.["home-page-sections"]?.["section-3"]?.["card-5"]?.title, lang.lang)}
                                subtitle={getText(applicationData?.["home-page-sections"]?.["section-3"]?.["card-5"]?.subtitle, lang.lang)}
                                img={getBaseUrl() + (applicationData?.["home-page-sections"]?.["section-3"]?.["card-5"]?.img)}
                            />
                        </Tilt>

                    </div> */}

                {/* </div> */}

                {/* <Button
                    text={getText(applicationData?.["home-page-sections"]?.["section-3"]?.["button-text"], lang.lang)}
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
                /> */}

            </div>

            <div id="our-projects" className="w-full max-md:px-6 mt-36" dir={lang.dir}>
                <p className="text-2xl md:text-3xl md:w-10/12 mx-auto  text-gray-50 font-[Inter] tracking-wide font-medium mb-4">
                    {pageDetails?.data?.attributes?.recent_works_section_title}
                </p>

                <RecentWorks />

            </div>

            {/* section-4 */}
            <div className="w-full max-md:px-6 md:w-10/12 mx-auto mt-36" dir={lang.dir}>

                <div className="w-full grid grid-cols-1 gap-y-6 md:grid-cols-2 place-items-center">

                    <img
                        alt=""
                        src={STRAPI_BASE_URL + (pageDetails?.data?.attributes?.section4_image?.data?.attributes?.url)}
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
                            {pageDetails?.data?.attributes?.section4_text}
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
                            {pageDetails?.data?.attributes?.section4_subtext}
                        </p>

                        <div className="space-y-3 mt-4">
                            {pageDetails?.data?.attributes?.section4_items?.map(item => (
                                <FeatureCard_1
                                    key={item.id}
                                    text={item.text}
                                    img={item.img}
                                />
                            ))}
                        </div>
                    </div>

                </div>

            </div>

            {/* section-5 */}
            {/* <div className="w-full max-md:px-6 mx-auto mt-36">

                <div className="w-full gap-y-6 grid grid-cols-1 md:grid-cols-[45%_55%] place-items-center">

                    <div dir={lang.dir} className="md:pl-10">
                        <p
                            style={{
                                fontFamily: "var(--home__section-5__title--font-family)",
                                fontSize: "var(--home__section-5__title--font-size)",
                            }}
                            className="max-w-[15ch] text-[--home__section-5__title--color]
                            font-[--home__section-5__title--font-weight]"
                        >
                            {getText(applicationData?.["home-page-sections"]?.["section-5"]?.title, lang.lang)}
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
                            {getText(applicationData?.["home-page-sections"]?.["section-5"]?.subtitle, lang.lang)}
                        </p>

                        <div className="space-y-3 mt-4">
                            {
                                applicationData?.["home-page-sections"]?.["section-5"]?.features?.map(feature => (
                                    <FeatureCard_1
                                        key={feature.id}
                                        text={getText(feature.title, lang.lang)}
                                        img={getBaseUrl() + feature.img}
                                    />
                                ))
                            }
                        </div>
                    </div>

                    <img
                        alt=""
                        src={getBaseUrl() + (md ? applicationData?.["home-page-sections"]?.["section-5"]?.img?.md : applicationData?.["home-page-sections"]?.["section-5"]?.img?.sm)}
                        className="w-full h-auto place-self-end"
                    />

                </div>

            </div> */}

            {/* section-6 */}
            <div className="w-full mt-36 bg-white/5 py-12" dir={lang.dir}>

                {/* <div className="w-full md:w-10/12 max-md:px-6 mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center relative max-md:pb-0 py-20">

                    <div className="md:pl-10 max-md:translate-y-2 z-10">
                        <p
                            style={{
                                fontFamily: "var(--home__section-5__title--font-family)",
                                fontSize: "var(--home__section-5__title--font-size)",
                            }}
                            className="max-w-[50ch] max-md:mx-auto text-[--home__section-5__title--color]
                            font-[--home__section-5__title--font-weight]"
                        >
                            {getText(applicationData?.["home-page-sections"]?.["section-6"]?.title, lang.lang)}
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
                            {getText(applicationData?.["home-page-sections"]?.["section-6"]?.subtitle, lang.lang)}
                        </p>

                        <Button
                            text={getText(applicationData?.["home-page-sections"]?.["section-6"]?.["button-text"], lang.lang)}
                            className="mt-4 max-md:w-full w-max"
                            style={{
                                fontSize: "0.8rem",
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
                        src={getBaseUrl() + applicationData?.["home-page-sections"]?.["section-6"]?.img}
                        className={`w-64 md:w-[30rem] max-md:z-10 h-auto place-self-end md:absolute max-md:block max-md:mx-auto md:bottom-0 ${lang.dir === "ltr" ? 'md:-right-2' : "md:-left-2"}`}
                    />

                </div> */}

                <OurTechnologies />

            </div>

            {/* testimotionals */}
            <div className="mt-36 w-full relative">
                {/* light circles*/}
                <div className="bg-[rgba(3,40,238,0.4)] absolute -bottom-28 left-64 w-56 h-56 rounded-full blur-3xl -z-10"></div>

                <div dir={lang.dir} className="w-full max-md:px-6 max-md:flex-col md:w-10/12 mx-auto flex gap-y-4 md:items-center justify-between mb-8">
                    <p
                        style={{
                            fontSize: "var(--home__testimotionals__title--font-size)",
                            fontFamily: "var(--home__testimotionals__title--font-family)"
                        }}
                        className="text-[--home__testimotionals__title--color]
                        font-[--home__testimotionals__title--font-weight]"
                    >
                        {pageDetails?.data?.attributes?.section5_text}
                    </p>

                    {
                        pageDetails?.data?.attributes?.section5_btn_text?.length > 0
                        &&
                        <Button
                            text={pageDetails?.data?.attributes?.section5_btn_text}
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
                    }

                </div>
                <div className="max-md:px-6 md:w-10/12 mx-auto">
                    <OurTeam />
                </div>
                {/* <TestimotionalsSlider_1
                    items={applicationData?.["home-page-sections"]?.testimotionals?.items}
                    renderer={data => (
                        <TestimotionalCard_1
                            key={data.id}
                            text={getText(data.text, lang.lang)}
                            username={data.username}
                            company={data.company}
                            img={getBaseUrl() + data.img}
                        />
                    )}
                /> */}
            </div>

            {/* section-7 */}
            {
                pageDetails?.data?.attributes?.show_section6
                &&
                <div className="w-full max-md:px-6 md:w-10/12 mx-auto mt-36" dir={lang.dir}>

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
                                {pageDetails?.data?.attributes?.section6_text}
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
                                {pageDetails?.data?.attributes?.section6_subtext}
                            </p>

                            <div className="space-y-3 mt-4">
                                {pageDetails?.data?.attributes?.section6_items?.map(item => (
                                    <FeatureCard_1
                                        key={item.id}
                                        text={item.text}
                                        img={item.img}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="max-w-md w-full">
                            <VideoPlayer_1 />
                        </div>


                    </div>

                </div>
            }


            {/* latest news */}
            <LatestNews
                leftText={pageDetails?.data?.attributes?.section7_text}
                rightText={pageDetails?.data?.attributes?.section7_subtext}
                showAllBtnText="browse all"
            />


            {/* section-8 */}
            {/* download our app */}
            <SectionGroup_1
                dir={lang.dir}
                leftText={pageDetails?.data?.attributes?.section8_text}
                rightText={pageDetails?.data?.attributes?.section8_subtext}
            >

                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-20 place-items-center">

                    {
                        applicationData?.["home-page-sections"]?.["section-8"]?.items?.map(item => (
                            <Card_2
                                dir={lang.dir}
                                key={item.id}
                                title={getText(item.title, lang.lang)}
                                subtitle={getText(item.subtitle, lang.lang)}
                                img={getBaseUrl() + item.img}
                                style={{
                                    card: {
                                        bg: "var(--dark-blue)",
                                        px: "2.2rem"
                                    }
                                }}
                                className="!h-72 !w-auto"
                                content={
                                    <Button
                                        text={item?.["button-text"]}
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
                                                src={getBaseUrl() + item["button-left-icon"]}
                                                className="w-6 h-6 object-center object-scale-down"
                                            />
                                        }
                                        href={{
                                            link: (item["button-link"]),
                                            target: "_blank"
                                        }}
                                    />
                                }
                            />
                        ))
                    }


                </div>

            </SectionGroup_1>
        </div>
    )
}
