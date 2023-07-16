import { useContext } from "react"
import { ApplicationLanguageContetx } from "../hooks/useApplicationLanguage"

function Constact() {
  const [lang] = useContext(ApplicationLanguageContetx)

  return (
    <div className="w-full px-4 md:px-8 pt-32 md:pt-28 py-10 min-h-screen grid place-items-center">

      <div className="w-full max-w-md md:p-8 flex flex-col gap-y-3 items-center">

        <div>
          <img
            alt=""
            src={import.meta.env.BASE_URL + "/logo.png"}
            className="w-40 h-auto block mx-auto"
          />

          <p
            className="text-xs text-white/50 font-light font-[Inter] tracking-wide text-center mt-3.5"
          >
            We deliver best quality products<br />To you.
          </p>
        </div>

        <div dir={lang.dir} className="w-full flex flex-col gap-y-3" >
          <div
            className="w-full bg-white/10 rounded-xl flex items-center mt-7 py-1.5 pl-2 group"
          >

            <div className="w-12 grid place-items-center">
              <svg className="w-5 h-5 text-gray-400 group-focus-within:text-gray-100 group-[:not(:has(input:placeholder-shown))]:text-gray-100 transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>


            <div className="w-px bg-white/10 self-stretch flex overflow-hidden">
              <div className="w-full h-full translate-y-full transition-transform duration-300 bg-white/20
            group-focus-within:translate-y-0 group-[:not(:has(input:placeholder-shown))]:translate-y-0"></div>
            </div>

            <input
              type="text"
              className="w-full p-2 px-4 bg-transparent text-sm text-slate-200 placeholder-white/30 font-[Inter]
            focus:outline-none focus:border-none border-none outline-none tracking-wide font-normal"
              placeholder="Name"
            />
          </div>

          <div
            className="w-full bg-white/10 rounded-xl flex items-center mt-0.5 py-1.5 pl-2 group"
          >

            <div className="w-12 grid place-items-center">
              <svg className="w-5 h-5 text-gray-400 group-focus-within:text-gray-100 group-[:not(:has(input:placeholder-shown))]:text-gray-100 transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>

            <div className="w-px bg-white/10 self-stretch flex overflow-hidden">
              <div className="w-full h-full translate-y-full transition-transform duration-300 bg-white/20
            group-focus-within:translate-y-0 group-[:not(:has(input:placeholder-shown))]:translate-y-0"></div>
            </div>

            <input
              type="text"
              className="w-full p-2 px-4 bg-transparent text-sm text-slate-200 placeholder-white/30 font-[Inter]
            focus:outline-none focus:border-none border-none outline-none tracking-wide font-normal"
              placeholder="Email"
            />
          </div>

          <div
            className="w-full bg-white/10 rounded-xl flex items-center mt-0.5 py-1.5 pl-2 group"
          >

            <div className="w-12 grid place-items-center">
              <svg className="w-7 h-7 stroke-gray-400 group-focus-within:stroke-gray-100 group-[:not(:has(input:placeholder-shown))]:stroke-gray-100 transition-colors duration-200" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.9588 13.3997C37.2553 9.69394 32.3301 7.65094 27.0831 7.64869C16.2673 7.64869 7.46758 16.4439 7.46533 27.2552C7.46083 30.6954 8.36308 34.0772 10.0821 37.0584L7.29883 47.2194L17.6983 44.4924C20.5761 46.0584 23.7981 46.8797 27.0741 46.8797H27.0831C37.8943 46.8797 46.6941 38.0822 46.6986 27.2709C46.7008 22.0329 44.6623 17.1077 40.9588 13.3997Z" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M29.4668 30.9453L30.3803 30.0386C31.2195 29.2061 32.547 29.1003 33.5145 29.7798C34.4505 30.4368 35.2965 31.0263 36.084 31.5753C37.335 32.4438 37.4858 34.2258 36.408 35.3013L35.6003 36.1091" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.3281 18.838L19.1359 18.0303C20.2114 16.9548 21.9934 17.1055 22.8619 18.3543C23.4086 19.1418 23.9981 19.9878 24.6574 20.9238C25.3369 21.8913 25.2334 23.2188 24.3986 24.058L23.4919 24.9715" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M35.5979 36.109C32.2656 39.4255 26.6654 36.6085 22.2441 32.185" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22.2481 32.1918C17.8269 27.7683 15.0099 22.1703 18.3264 18.838" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M23.4883 24.9716C24.206 26.1033 25.1263 27.2238 26.1658 28.2633L26.1703 28.2678C27.2098 29.3073 28.3303 30.2276 29.462 30.9453" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>

            </div>

            <div className="w-px bg-white/10 self-stretch flex overflow-hidden">
              <div className="w-full h-full translate-y-full transition-transform duration-300 bg-white/20
            group-focus-within:translate-y-0 group-[:not(:has(input:placeholder-shown))]:translate-y-0"></div>
            </div>

            <input
              type="text"
              className="w-full p-2 px-4 bg-transparent text-sm text-slate-200 placeholder-white/30 font-[Inter]
            focus:outline-none focus:border-none border-none outline-none tracking-wide font-normal"
              placeholder="Whatsapp Number"
            />
          </div>

          <div
            className="w-full bg-white/10 rounded-xl flex items-center mt-0.5 py-1.5 pl-2 group"
          >

            <div className="w-12 grid place-items-center">
              <svg className="w-7 h-7 stroke-gray-400 group-focus-within:stroke-gray-100 group-[:not(:has(input:placeholder-shown))]:stroke-gray-100 transition-colors duration-200" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.1552 35.29L20.3282 29.2735L15.0947 27.64C14.7454 27.5329 14.5491 27.1629 14.6562 26.8136C14.7161 26.6182 14.863 26.4614 15.0542 26.389L34.9689 18.7075C35.4835 18.5119 36.0592 18.7704 36.2548 19.285C36.3212 19.4596 36.3372 19.6493 36.3009 19.8325L32.9552 35.6005C32.8079 36.3009 32.1207 36.7494 31.4203 36.6021C31.2372 36.5636 31.0647 36.486 30.9144 36.3745L26.1624 32.8645L23.3612 35.5915C23.0715 35.8729 22.6086 35.8662 22.3272 35.5766C22.2485 35.4956 22.1896 35.3975 22.1552 35.29Z" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M27 47.6852C38.1838 47.6852 47.25 38.619 47.25 27.4352C47.25 16.2515 38.1838 7.18524 27 7.18524C15.8162 7.18524 6.75 16.2515 6.75 27.4352C6.75 38.619 15.8162 47.6852 27 47.6852Z" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="w-px bg-white/10 self-stretch flex overflow-hidden">
              <div className="w-full h-full translate-y-full transition-transform duration-300 bg-white/20
            group-focus-within:translate-y-0 group-[:not(:has(input:placeholder-shown))]:translate-y-0"></div>
            </div>

            <input
              type="text"
              className="w-full p-2 px-4 bg-transparent text-sm text-slate-200 placeholder-white/30 font-[Inter]
            focus:outline-none focus:border-none border-none outline-none tracking-wide font-normal"
              placeholder="Telegram Number"
            />
          </div>

          <div
            className="w-full bg-white/10 rounded-xl flex items-center mt-0.5 py-1.5 pl-2 group"
          >

            <div className="w-12 grid place-items-center">
              <svg className="w-7 h-7 stroke-gray-400 group-focus-within:stroke-gray-100 group-[:not(:has(input:placeholder-shown))]:stroke-gray-100 transition-colors duration-200" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.002 7.18524V36.4352" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M42.748 36.4352V45.4352" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M42.748 7.18524C43.9907 7.18524 44.998 8.1926 44.998 9.43524V34.1852C44.998 35.4279 43.9907 36.4352 42.748 36.4352H13.498C11.0128 36.4352 8.99805 38.45 8.99805 40.9352C8.99805 43.4205 11.0128 45.4352 13.498 45.4352" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.5 45.4353H27" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M35.998 45.4353H44.998" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M27 42.0603H36V51.0603L31.5 48.8103L27 51.0603V42.0603Z" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.99805 40.9352V11.6852C8.99805 9.19996 11.0128 7.18524 13.498 7.18524H42.748" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="w-px bg-white/10 self-stretch flex overflow-hidden">
              <div className="w-full h-full translate-y-full transition-transform duration-300 bg-white/20
            group-focus-within:translate-y-0 group-[:not(:has(input:placeholder-shown))]:translate-y-0"></div>
            </div>

            <input
              type="text"
              className="w-full p-2 px-4 bg-transparent text-sm text-slate-200 placeholder-white/30 font-[Inter]
            focus:outline-none focus:border-none border-none outline-none tracking-wide font-normal"
              placeholder="Project Name"
            />
          </div>

          <div
            className="w-full bg-white/10 rounded-xl flex items-center mt-0.5 py-1.5 pl-2 group"
          >

            <div className="w-12 grid place-items-center">
              <svg className="w-[1.35rem] h-[1.35rem] text-gray-500 group-focus-within:text-gray-100 group-[:not(:has(input:placeholder-shown))]:text-gray-100 transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
              </svg>

            </div>

            <div className="w-px bg-white/10 self-stretch flex overflow-hidden">
              <div className="w-full h-full translate-y-full transition-transform duration-300 bg-white/20
            group-focus-within:translate-y-0 group-[:not(:has(input:placeholder-shown))]:translate-y-0"></div>
            </div>

            <input
              type="text"
              className="w-full p-2 px-4 bg-transparent text-sm text-slate-200 placeholder-white/30 font-[Inter]
            focus:outline-none focus:border-none border-none outline-none tracking-wide font-normal"
              placeholder="Budget"
            />
          </div>

          <div
            className="w-full bg-white/10 rounded-xl flex items-center mt-0.5 py-1.5 pl-2 group"
          >

            <div className="w-12 grid place-items-center">
              <svg className="w-6 h-6 text-gray-500 group-focus-within:text-gray-100 group-[:not(:has(*:placeholder-shown))]:text-gray-100 transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>

            </div>

            <div className="w-px bg-white/10 self-stretch flex overflow-hidden">
              <div className="w-full h-full translate-y-full transition-transform duration-300 bg-white/20
            group-focus-within:translate-y-0 group-[:not(:has(*:placeholder-shown))]:translate-y-0"></div>
            </div>

            <textarea
              rows={5}
              className="w-full p-2 px-4 bg-transparent text-sm text-slate-200 placeholder-white/30 font-[Inter]
            focus:outline-none focus:border-none border-none outline-none tracking-wide font-normal"
              placeholder="Tell us about your project"
            ></textarea>
          </div>
        </div>



        <button
          className="mt-4 w-full max-w-xs rounded-3xl bg-[--primary-color] text-sm text-gray-50 font-[Inter]
          p-3 px-4 transition-transform duration-300 active:scale-95 shadow-md shadow-black/5"
        >
          Send Message
        </button>


      </div>

    </div>
  )
}

export default Constact