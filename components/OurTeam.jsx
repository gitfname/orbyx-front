

import { useContext, useEffect } from "react"
import { ApplicationLanguageContetx } from "../hooks/useApplicationLanguage"
import useSWR from "swr"
import BScroll from "@better-scroll/core"
import { STRAPI_BASE_URL, STRAPI_OUR_TEAM_MEMBERS_API_URL } from "../constants"
import TestimotionalCard_1 from "./TestimotionalCard_1"

function OurTeam() {

    const [lang] = useContext(ApplicationLanguageContetx)

    const {
        data: teamMembers,
        error: teamMembersError,
        isLoading: isteamMembersLoading
    } = useSWR(
        "/our-team",
        async () => await (await fetch(STRAPI_OUR_TEAM_MEMBERS_API_URL)).json(),
        {
            shouldRetryOnError: true,
            errorRetryCount: 2,
            revalidateOnFocus: false
        }
    )

    const initiateLib = () => {
        BScroll(
            document.getElementById("our-team-members-container"),
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
        [teamMembers]
    )

    return (
        <div dir="ltr" className="w-full" id="our-team-members-container">
            <div className="w-max flex items-center gap-6">

                {
                    teamMembersError || isteamMembersLoading
                        ?
                        <div className="w-11/12 mx-auto bg-white/5 rounded-3xl shadow-md shadow-black/10
                    grid place-items-center">

                            <div className="w-10 h-10 rounded-full border-t border-gray-300 animate-spin"></div>
                            
                        </div>
                        :
                        teamMembers?.data?.map(item => (
                            <TestimotionalCard_1
                                key={item?.id}
                                job_title={item?.attributes?.job_title}
                                name={item?.attributes?.name}
                                education={item?.attributes?.education}
                                img={STRAPI_BASE_URL + item?.attributes?.image?.data?.attributes?.url}
                            />
                        ))
                }


            </div>
        </div>
    )
}

export default OurTeam