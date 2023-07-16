
import useSWR from "swr"
import { STRAPI_HOME_PAGE_DETAILS_API_URL } from "../../constants"

function LoadHomePageDetails() {

    useSWR(
        "/home-page-details",
        async () => await (await fetch(STRAPI_HOME_PAGE_DETAILS_API_URL)).json(),
        {
            shouldRetryOnError: true,
            errorRetryCount: 2,
            revalidateOnFocus: false
        }
    )

    return null
}

export default LoadHomePageDetails