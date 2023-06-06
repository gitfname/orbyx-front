export default function getText(obj, lang=null) {

    let localStorage_lang = localStorage.getItem("application-lang")
    if(!localStorage_lang) {
        localStorage.setItem("application-lang", "en")
        localStorage_lang = "en"
    }
    else if(import.meta.env.VITE_SUPPORTED_LANGS.split('.').findIndex(v => v === localStorage_lang) === -1) {
        localStorage.setItem("application-lang", "en")
        localStorage_lang = "en"
    }

    const _lang = lang ? lang : localStorage_lang

    if(obj?.[_lang]) {
        return obj?.[_lang]
    }
    return obj?.["en"]
}