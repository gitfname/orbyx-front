import ProfileCard_1 from "./ProfileCard_1";

export default function ArticleCard_1({
    tag="", img="", title="", info="", author={img:"", username: ""}, pubDate=""}) {
    
    return (
        <div
            dir="ltr"
            className="w-full h-full overflow-hidden rounded-3xl grid grid-rows-[max-content_1fr] bg-[--dark-blue]"
        >
            
            <img
                alt=""
                src={img}
                className="w-full aspect-square object-center object-cover"
            />

            <div className="p-5 h-full flex flex-col">

                <p
                    className="text-lg font-bold text-white line-clamp-3 tracking-wide"
                >
                    {title}
                </p>

                <p
                    className="text-sm font-normal text-white line-clamp-5 tracking-wide mt-4 leading-6 mb-3"
                >
                    {info}
                </p>

                {/* <hr className="border-white/10 w-full mt-auto" />

                <ProfileCard_1
                    img={author.img}
                    title={author.username}
                    subtitle={pubDate}
                /> */}

            </div>

        </div>
    )
}