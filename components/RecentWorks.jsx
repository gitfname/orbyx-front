
import { useEffect, useRef, useContext } from "react"
import { ApplicationLanguageContetx } from "../hooks/useApplicationLanguage"
import BScroll from '@better-scroll/core'
import useSWR, { mutate } from "swr"
import { STRAPI_BASE_URL, STRAPI_RECENT_WORKS_API_URL } from "../constants"

function RecentWorkCard({ text, subtext, img, dir }) {

    return (
        <div className="group tilt">
            <div className="w-64 md:w-72 flex">
                <div className="overflow-hidden rounded-3xl">
                    <img
                        loading="lazy"
                        alt=""
                        src={img}
                        className="w-64 md:w-72 aspect-video shadow-md shadow-black/10
                            transition-transform duration-300 rounded-3xl group-hover:translate-y-[10%]"
                    />
                </div>
            </div>
            <div dir={dir} className="px-2 translate-z-30">
                <p className="text-xs text-gray-50 font-[morabbaRegular] font-normal tracking-wide mt-2.5">
                    {text}
                </p>

                <p className="text-xs text-gray-400 font-[morabbaRegular] font-normal tracking-wide mt-0.5">
                    {subtext}
                </p>
            </div>
        </div>
    )
}

function RecentWorks() {

    const [lang] = useContext(ApplicationLanguageContetx);

    const containerRef = useRef(null)
    const bScrollref = useRef(null)

    const {
        data: recentWorks,
        error: recentWorksError,
        isLoading: isRecentWorksLoading,
        mutate
    } = useSWR(
        "/recent-works",
        async () => await (await fetch(STRAPI_RECENT_WORKS_API_URL + "&locale=" + lang.lang)).json(),
        {
            shouldRetryOnError: true,
            errorRetryCount: 2,
            revalidateOnFocus: false
        }
    )

    useEffect(
        () => {
            mutate()
        },
        [lang.lang]
    )


    const initiate = () => {
        window.VanillaTilt.init(document.querySelectorAll('.tilt'), {
            max: 25,
            speed: 1800,
        })

        bScrollref.current = BScroll(
            containerRef.current,
            {
                disableMouse: false,
                scrollX: true,
                preventDefault: true,
                swipeTime: 3000
            }
        )
    }

    useEffect(
        () => {
            initiate()
        },
        []
    )

    useEffect(
        () => {
            initiate()
        },
        [recentWorks]
    )

    return (
        <div dir="ltr" className="w-full" ref={containerRef}>
            <div className="w-max min-w-full pt-2 pb-6 px-4 md:px-8 flex items-center gap-x-4">

                {
                    isRecentWorksLoading || recentWorksError
                        ?
                        <div className="w-11/12 mx-auto rounded-3xl bg-white/5 grid place-items-center h-48">
                            <div className="w-10 h-10 rounded-full border-t border-t-gray-200 animate-spin"></div>
                        </div>
                        :
                        recentWorks?.data?.map(item => (
                            <RecentWorkCard
                                text={item?.attributes?.title}
                                subtext={item?.attributes?.description}
                                img={STRAPI_BASE_URL + item?.attributes?.image?.data?.attributes?.url}
                                dir={lang.dir}
                            />
                        ))
                }

            </div>
        </div>
    )
}

export default RecentWorks