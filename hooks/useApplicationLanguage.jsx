import { useEffect, useState, createContext } from "react"

const initial = {
    "lang": "en",
    "dir": "ltr",
    "classname": "text-left"
}

export const ApplicationLanguageContetx = createContext(initial)

export const ApplicationLanguageProvider = ({children}) => {
    const [language, setLanguage] = useState(initial)

    useEffect(
        () => {
            const localStorage_lang = localStorage.getItem("application-lang")
            const lang = import.meta.env.VITE_SUPPORTED_LANGS.split(".").findIndex(v => v===localStorage_lang) !== -1 ? localStorage_lang : "en" 
            const dir = import.meta.env.VITE_LTR_LANGS.split(".").findIndex(v => v===lang) !== -1 ? "ltr" : 'rtl'
            setLanguage(
                {
                    lang,
                    dir,
                    "classname": dir === "ltr" ? "txet-left" : "text-right",
                }
            )
        },
        []
    )

    const _setLanguage = (value) => {
        localStorage.setItem("application-lang", value.lang)
        setLanguage(value)
    }

    return <ApplicationLanguageContetx.Provider value={[language, _setLanguage]}>
        {children}
    </ApplicationLanguageContetx.Provider>
}

export function useApplicationLanguage() {
}