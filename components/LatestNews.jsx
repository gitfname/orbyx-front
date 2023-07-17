
import Button from "./Button"
import SectionGroup_1 from "./SectionGroup_1"
import { useContext, useEffect } from "react"
import { ApplicationLanguageContetx } from "../hooks/useApplicationLanguage"
import useSWR from "swr"
import ArticleCard_1 from "./ArticleCard_1"
import getText from "../application-db/getText"
import BScroll from "@better-scroll/core"
import { STRAPI_BASE_URL, STRAPI_LATEST_ARTICLES_API_URL } from "../constants"

function LatestNews({ leftText, rightText, showSeeAllBtn = true, showAllBtnText = "" }) {

    const [lang] = useContext(ApplicationLanguageContetx)

    const {
        data: latestArticles,
        error: latestArticlesError,
        isLoading: isLatestArticlesLoading
    } = useSWR(
        "/latest-news",
        async () => await (await fetch(STRAPI_LATEST_ARTICLES_API_URL)).json(),
        {
            shouldRetryOnError: true,
            errorRetryCount: 2,
            revalidateOnFocus: false
        }
    )

    const initiateLib = () => {
        BScroll(
            document.getElementById("latest-news-container"),
            {
                scrollX: true,
                disableMouse: false,
                swipeTime: 3000
            }
        )
    }

    useEffect(
        () => {
            initiateLib()
        },
        [latestArticles]
    )

    return (
        <SectionGroup_1
            dir={lang.dir}
            leftText={leftText}
            rightText={rightText}
        >
            <div id="blog">
                <div dir="ltr" className="w-full" id="latest-news-container">
                    <div className="w-max flex items-center gap-6">
                        {
                            !latestArticles || isLatestArticlesLoading
                                ?
                                <div className="w-11/12 mx-auto bg-white/5 rounded-3xl shadow-md shadow-black/10
                            grid place-items-center">

                                    <div className="w-10 h-10 rounded-full border-t border-gray-300 animate-spin"></div>

                                </div>
                                :
                                latestArticles?.data?.map(item => (
                                    <div className="w-64 xl:w-72 self-stretch">
                                        <ArticleCard_1
                                            key={item?.attributes?.id}
                                            title={item?.attributes?.title}
                                            info={item?.attributes?.info}
                                            img={STRAPI_BASE_URL + item?.attributes?.image?.data?.attributes?.url}
                                            author={{
                                                img: "",
                                                username: "hello world"
                                            }}
                                            pubDate={item?.attributes?.createdAt}
                                        />
                                    </div>
                                ))
                        }
                        {/* {
                            applicationData?.["latest-news"]?.items?.map(latestNew => (
                                <div className="w-80">
                                    <ArticleCard_1
                                        key={latestNew.id}
                                        title={latestNew.title}
                                        info={latestNew.info}
                                        img={getBaseUrl() + latestNew.img}
                                        author={{
                                            img: getBaseUrl() + latestNew.author.img,
                                            username: latestNew.author.username
                                        }}
                                        pubDate={latestNew.pubDate}
                                    />
                                </div>
                            ))
                        } */}
                    </div>

                </div>

                {
                    showSeeAllBtn
                    &&
                    <Button
                        text={showAllBtnText}
                        className="mt-8 block mx-auto tracking-widest w-max"
                        style={{
                            fontSize: "0.9rem",
                            fontFamily: "Inter",
                            fontWeight: 500,
                            bg: "rgba(255, 255, 255, 0.1)",
                            color: "white",
                            px: "1.75rem",
                            py: "1.1rem",
                            rounded: "100px"
                        }}
                        href={{
                            link: "/blog",
                            target: "_self"
                        }}
                    />
                }
            </div>
        </SectionGroup_1>
    )
}

export default LatestNews