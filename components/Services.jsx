
import useSWR from "swr"
import { STRAPI_BASE_URL, STRAPI_GET_FEATURES_API_URL } from "../constants"
import { useContext, useEffect } from "react"
import { ApplicationLanguageContetx } from "../hooks/useApplicationLanguage"
import { Tilt } from "react-tilt"
import Card_1 from "./Card_1"

function Services() {

    const [lang] = useContext(ApplicationLanguageContetx)

    const {
        data: features,
        error: featuresError,
        isLoading: isFeaturesLoading,
        mutate
    } = useSWR(
        "/features",
        async () => await (await fetch(STRAPI_GET_FEATURES_API_URL+"&locale="+lang.lang)).json(),
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


    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                features?.data?.map(item => (
                    <Tilt
                        max={35}
                        reverse={true}
                        transition={true}
                    >
                        <Card_1
                            dir={lang.dir}
                            title={item?.attributes?.title}
                            subtitle={item?.attributes?.description}
                            img={STRAPI_BASE_URL + item?.attributes?.image?.data?.attributes?.url}
                        />
                    </Tilt>
                ))
            }
        </div>
    )
}

export default Services