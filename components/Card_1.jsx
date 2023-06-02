
const styleProps = {
    card: {
        w:"", h:"", px:"", py:"",
        borderRadius:"", bg:""
    },
    img: {
        w: "", h: ""
    },
    title: {
        fontSize:"", fontWeight:"", fontFamily:"", color:"", letterSpacing:"", mb:"", mt:"", px:"", py:""
    },
    subtitle: {
        fontSize:"", fontWeight:"", fontFamily: "", color:"", letterSpacing:"", mb:"", mt:"", px:"", py:"", lineHeight:""
    }
}

export default function Card_1({
    img,
    title,
    subtitle,
    style=styleProps
}) {

    const styleProps = {
        card: {
            w:"", h:"", px:"", py:"",
            borderRadius:"", bg:""
        },
        img: {
            w: "", h: ""
        },
        title: {
            fontSize:"", fontWeight:"", fontFamily:"", color:"", letterSpacing:"", mb:"", mt:"", px:"", py:""
        },
        subtitle: {
            fontSize:"", fontWeight:"", fontFamily: "", color:"", letterSpacing:"", mb:"", mt:"", px:"", py:"", lineHeight:""
        }
    }

    // default values
    const _style = styleProps

    _style.card.w = style?.card?.w || "var(--card_1--w)"
    _style.card.h = style?.card?.h || "var(--card_1--h)"
    _style.card.px = style?.card?.px || "var(--card_1--px)"
    _style.card.py = style?.card?.py || "var(--card_1--py)"
    _style.card.borderRadius = style?.card?.borderRadius || "var(--card_1--border-radius)"
    _style.card.bg = style?.card?.bg || "var(--card_1--bg)"

    _style.img.w = style?.img?.w || "var(--card_1__img--w)"
    _style.img.w = style?.img?.h || "var(--card_1__img--h)"

    _style.title.color = style?.title?.color || "var(--card_1__title--color)"
    _style.title.fontSize = style?.title?.fontSize || "var(--card_1__title--font-size)"
    _style.title.fontWeight = style?.title?.fontWeight || "var(--card_1__title--font-weight)"
    _style.title.letterSpacing = style?.title?.letterSpacing || "var(--card_1__title--letter-spacing)"
    _style.title.fontFamily = style?.title?.fontFamily || "var(--card_1__title--font-family)"

    _style.subtitle.color = style?.subtitle?.color || "var(--card_1__subtitle--color)"
    _style.subtitle.fontSize = style?.subtitle?.fontSize || "var(--card_1__subtitle--font-size)"
    _style.subtitle.fontWeight = style?.subtitle?.fontWeight || "var(--card_1__subtitle--font-weight)"
    _style.subtitle.letterSpacing = style?.subtitle?.letterSpacing || "var(--card_1__subtitle--letter-spacing)"
    _style.subtitle.fontFamily = style?.subtitle?.fontFamily || "var(--card_1__subtitle--font-family)"


    return (
        <div
            style={{
                width: _style.card.w,
                height: _style.card.h,
                paddingInline: _style.card.px,
                paddingBlock: _style.card.py,
                borderRadius: _style.card.borderRadius,
                backgroundColor: _style.card.bg
            }}
        >
            <img
                alt=""
                src={img}
                style={{
                    width: _style.img.w,
                    height: _style.img.h
                }}
                className="object-center object-cover block"
            />

            <p
                style={{
                    color: _style.title.color,
                    fontFamily: _style.title.fontFamily,
                    fontSize: _style.title.fontSize,
                    letterSpacing: _style.title.letterSpacing,
                    fontWeight: _style.title.fontWeight
                }}
                className="uppercase mt-5"
            >
                {title}
            </p>

            <p
                style={{
                    fontSize: _style.subtitle.fontSize,
                    fontFamily: _style.subtitle.fontFamily,
                    color: _style.subtitle.color,
                    fontWeight: _style.subtitle.fontWeight,
                    letterSpacing: _style.subtitle.letterSpacing,
                    lineHeight: _style.subtitle.lineHeight
                }}
            >
                {subtitle}
            </p>

        </div>
    )

}