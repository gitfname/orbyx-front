import ProfileCard_1 from "./ProfileCard_1";

export default function TestimotionalCard_1({text, img, username, company}) {
    return (
        <div
            className="p-[--testimotionals-card-1--padding] max-sm:w-[90vw] sm:min-w-[--testimotionals-card-1--min-w]
            rounded-[--testimotionals-card-1--border-radius] bg-[--testimotionals-card-1--bg]
            shadow-sm shadow-black/5"
        >

            <p
                className="text-sm text-white font-light leading-6 tracking-wide max-w-[45ch] line-clamp-5"
            >
                {text}
            </p>

            <ProfileCard_1
                img={img}
                title={username}
                subtitle={company}
            />

        </div>
    )
}