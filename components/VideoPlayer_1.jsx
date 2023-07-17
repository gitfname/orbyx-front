import getBaseUrl from "../utils/base-url";

export default function VideoPlayer_1() {
    return (
        <div
            style={{
                backgroundColor: "var(--video-player-1--bg)"
            }}
            className="w-full aspect-video rounded-3xl relative"
        >

            <img
                alt="Play Button"
                src={getBaseUrl()+"/images/play.png"}
                className="w-16 h-16 object-center object-cover absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
            />

        </div>
    )
}