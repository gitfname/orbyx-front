
import Lottie from "lottie-react";
import loadingAnimationData from "../assets/loading-animation.json";

function Loading() {
    return (
        <div className="w-full h-screen grid place-items-center">
            <Lottie duration={0.1} animationData={loadingAnimationData}
                className="w-[33rem] h-[33rem] opacity-[0.035] animate-fade-in absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" />

            <p dir="ltr" className="tracking-wide text-gray-50 loading-container text-7xl">
                <span
                    style={{ "--delay": "1.8s", "--duration": "1s", "--trx": "-2rem" }}
                    className="fadein-x-anim"
                >
                    <span className="text-6xl font-medium">O</span></span>
                <span
                    style={{ "--delay": "2s", "--duration": "1s", "--trx": "-1.6rem" }}
                    className="fadein-x-anim text-7xl"
                ><span className="text-6xl font-medium">R</span></span>

                <span
                    style={{ "--delay": "2.2s", "--duration": "1s", "--trx": "-1.2rem" }}
                    className="fadein-x-anim text-7xl"
                ><span className="text-6xl font-medium">B</span></span>

                <span
                    style={{ "--delay": "2.4s", "--duration": "1s", "--trx": "-1rem" }}
                    className="fadein-x-anim text-7xl"
                ><span className="text-6xl font-medium">Y</span></span>

                <span
                    style={{ "--delay": "2.6s", "--duration": "1s", "--trx": "-1rem" }}
                    className="fadein-x-anim text-7xl"
                ><span className="text-6xl font-medium">X</span></span>
            </p>
        </div>
    )
}

export default Loading