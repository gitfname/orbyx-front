import ProfileCard_1 from "./ProfileCard_1";

export default function ArticleCard_1({
    tag="", title="", info="", author={img:"", username: ""}, pubDate=""}) {
    
    return (
        <div
            className="w-full rounded-3xl overflow-hidden bg-[--dark-blue]"
        >
            
            <img
                alt=""
                src={import.meta.env.BASE_URL+"/images/articles/thumbnail/article-1_thumbnail.png"}
                className="w-full h-auto object-center object-cover"
            />

            <div className="p-5">

                <p
                    className="text-lg font-bold text-white line-clamp-3 tracking-wide"
                >
                    {title}
                </p>

                <p
                    className="text-sm font-normal text-white line-clamp-5 tracking-wide mt-4 leading-6"
                >
                    {info}
                </p>

                <hr className="border-white/10 w-full mt-7" />

                <ProfileCard_1
                    img={author.img}
                    title={author.username}
                    subtitle={pubDate}
                />

            </div>

        </div>
    )
}