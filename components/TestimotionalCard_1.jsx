import ProfileCard_1 from "./ProfileCard_1";

export default function TestimotionalCard_1({ text, img, username, company }) {
    return (
        <div className="overflow-hidden relative">
            <div
                className="p-[--testimotionals-card-1--padding] max-sm:w-[90vw] sm:min-w-[--testimotionals-card-1--min-w]
            rounded-[--testimotionals-card-1--border-radius] bg-[--testimotionals-card-1--bg]
            shadow-sm shadow-black/5 group"
            >

                <div className="relative z-10 p-2 rounded-xl bg-transparent/40 backdrop-blur-md shadow-md shadow-black/10
            group-hover:translate-x-1/2 transition-transform duration-300">
                    <p
                        className="text-sm text-white font-light leading-6 tracking-wide max-w-[45ch] line-clamp-5"
                    >
                        {text}
                    </p>
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