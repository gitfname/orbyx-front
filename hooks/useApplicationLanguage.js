
export default function useApplicationLanguage() {
    const localStorage_lang = localStorage.getItem("application-lang")
    const lang = import.meta.env.VITE_SUPPORTED_LANGS.split(".").findIndex(v => v===localStorage_lang) !== -1 ? localStorage_lang : "en" 
    const dir = import.meta.env.VITE_LTR_LANGS.split(".").findIndex(v => v===lang) !== -1 ? "ltr" : 'rtl'
    return {
        lang,
        dir,
        "classname": dir === "ltr" ? "txet-left" : "text-right"
    }
}