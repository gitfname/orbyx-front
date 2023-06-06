import Button from "./Button";
import { useContext } from "react";
import ApplicationDataContext from "../context/ApplicationData";

export default function DownloadOurApplicationCard_1() {
    const applicationData = useContext(ApplicationDataContext)


    return (
        <div className="bg-white/10 rounded-3xl px-5 py-9">

            <p
                className="text-white text-sm font-medium font-[Inter]"
            >
                DOWNLOAD OUR APPLICATION
            </p>

            <p
                className="text-white max-w-[40ch] mt-4 text-[0.8rem] font-light font-[Inter] leading-5"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer 
            </p>

            <div className="mt-6 flex max-md:flex-col md:items-center gap-4">

                <Button
                    text="APPLE STORE"
                    className="md:w-max tracking-wide"
                    style={{
                        fontSize: "0.75rem",
                        fontFamily: "Inter",
                        fontWeight: 500,
                        bg: "var(--blue)",
                        color: "white",
                        px: "1.65rem",
                        py: "1rem",
                        rounded: "100px"
                    }}
                    left={
                        <img
                            alt=""
                            src={import.meta.env.BASE_URL+"/images/ios.png"}
                            className="w-6 h-6 object-center object-scale-down"
                        />
                    }
                    href={{
                        link: (applicationData?.["download-our-app-link-ios"]),
                        target: "_blank"
                    }}
                />

                <Button
                    text="PLAY STORE"
                    className="md:w-max tracking-wide"
                    style={{
                        fontSize: "0.75rem",
                        fontFamily: "Inter",
                        fontWeight: 500,
                        bg: "var(--blue)",
                        color: "white",
                        px: "1.65rem",
                        py: "1rem",
                        rounded: "100px"
                    }}
                    left={
                        <img
                            alt=""
                            src={import.meta.env.BASE_URL+"/images/play-store.png"}
                            className="w-5 h-5 object-center object-scale-down"
                        />
                    }
                    href={{
                        link: (applicationData?.["download-our-app-link"]),
                        target: "_blank"
                    }}
                />

            </div>

        </div>
    )
}