import ProfileCard_1 from "./ProfileCard_1";

export default function TestimotionalCard_1({ img, name, job_title = "", education = "" }) {
    return (
        <div className="overflow-hidden relative self-stretch">
            <div
                className="p-6 max-sm:w-[90vw] sm:min-w-[--testimotionals-card-1--min-w]
            rounded-[--testimotionals-card-1--border-radius] bg-[--testimotionals-card-1--bg]
            shadow-sm shadow-black/5 group min-h-[12rem] grid place-items-center h-full"
            >

                <div className="relative z-10 p-3 rounded-xl bg-transparent/40 backdrop-blur-md shadow-md shadow-black/10
            group-hover:translate-x-1/2 transition-transform duration-300 w-full h-full">
                    <p
                        className="text-sm text-white font-[Inter] font-light leading-6 tracking-wide max-w-[45ch] line-clamp-2"
                    >
                        {name}
                    </p>

                    <p
                        className="text-xs text-white/90 font-[Inter] font-light mt-3 tracking-wide max-w-[45ch] break-all"
                    >
                        {job_title}
                    </p>

                    <div className="mt-5">
                        {
                            education?.map(item => (
                                <p
                                    className="text-xs mt-2 text-white/75 font-[Inter] font-light tracking-wide max-w-[45ch] line-clamp-2"
                                >
                                    {item}
                                </p>
                            ))
                        }
                    </div>

                </div>


                <div className="w-full h-full absolute top-0 left-0 rounded-[--testimotionals-card-1--border-radius] overflow-hidden">
                    <img
                        alt=""
                        src={img}
                        className="w-40 h-40 rounded-full shadow-md shadow-black/10 absolute bottom-0 left-0
                translate-y-7 -translate-x-7 group-hover:-translate-y-3 group-hover:translate-x-3
                group-hover:scale-110 transition-transform duration-300"
                    />
                </div>



                {/* <ProfileCard_1
                img={img}
                title={username}
                subtitle={company}
            /> */}

            </div>
        </div>
    )
}