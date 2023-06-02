
const styleProps = {
    text: {
        color:"", fontSize:"", fontWeight:"", fontFamily:"", letterSpacing:"", mt:"", mb:""
    }
}

export default function FeatureCard_1({img, text, style=styleProps}) {
    const _style = {
        text: {
            color:"", fontSize:"", fontWeight:"", fontFamily:"", letterSpacing:"", mt:"", mb:""
        }
    }

    _style.text.color = style?.text?.color || "var(--feature-card-1__text--color)"
    _style.text.fontFamily = style.text.fontFamily || "var(--feature-card-1__text--font-family)"
    _style.text.fontSize = style.text.fontSize || "var(--feature-card-1__text--font-size)"
    _style.text.fontWeight = style.text.fontWeight || "var(--feature-card-1__text--font-weight)"
    _style.text.letterSpacing = style.text.letterSpacing || "var(--feature-card-1__text--letter-spacing)"
    _style.text.mb = style.text.mb || "var(--feature-card-1__text--mb)"
    _style.text.mt = style.text.mt || "var(--feature-card-1__text--mt)"

    return (
        <div className="flex items-center gap-x-3">
            
            <img
                alt=""
                src={img}
                className="w-[2.1rem] h-[2.1rem] object-center object-cover"
            />

            <p
                style={{
                  color: _style.text.color,
                  fontFamily: _style.text.fontFamily,
                  fontSize: _style.text.fontSize,
                  fontWeight: _style.text.fontWeight,
                  letterSpacing: _style.text.letterSpacing,
                  marginBottom: _style.text.mb,
                  marginTop: _style.text.mt
                }}
                className="text-white text-sm font-normal tracking-wide"
            >
                {text}
            </p>

        </div>
    )
}