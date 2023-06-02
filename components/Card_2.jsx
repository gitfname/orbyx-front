

const stypeProps = {
    card: {
        w:"", h:"", px:"", py:"", borderRadius:"", bg:""
    },
    title: {
        color: "", fontSize: "", fontWeight: "", fontFamily: "", letterSpacing: "", mt: "", mb: "", lineHeight: ""
    },
    subtitle: {
        color: "", fontSize: "", fontWeight: "", fontFamily: "", letterSpacing: "", mt: "", mb: "", lineHeight: ""
    }
}

export default function Card_2({title, subtitle, img, style=stypeProps, className=""}) {

    const stypeProps = {
        card: {
            w:"", h:"", px:"", py:"", borderRadius:"", bg:''
        },
        title: {
            color: "", fontSize: "", fontWeight: "", fontFamily: "", letterSpacing: "", mt: "", mb: "", lineHeight: ""
        },
        subtitle: {
            color: "", fontSize: "", fontWeight: "", fontFamily: "", letterSpacing: "", mt: "", mb: "", lineHeight: ""
        }
    }

    const _style = stypeProps

    _style.card.w = style?.card?.w || "var(--card_2--w)"
    _style.card.h = style?.card?.h || "var(--card_2--h)"
    _style.card.px = style?.card?.px || "var(--card_2--px)"
    _style.card.py = style?.card?.py || "var(--card_2--py)"
    _style.card.borderRadius = style?.card?.borderRadius || "var(--card_2--border-radius)"
    _style.card.bg = style?.card?.bg || "var(--card_2--bg)"

    _style.title.color = style?.title?.color || "var(--vard_2__title--color)"
    _style.title.fontFamily = style?.title?.fontFamily || "var(--vard_2__title--font-family)"
    _style.title.fontSize = style?.title?.fontSize || "var(--vard_2__title--font-size)"
    _style.title.fontWeight = style?.title?.fontWeight || "var(--vard_2__title--font-weight)"
    _style.title.letterSpacing = style?.title?.letterSpacing || "var(--vard_2__title--letter-spacing)"
    _style.title.lineHeight = style?.title?.lineHeight || "var(--vard_2__title--line-height)"
    _style.title.mb = style?.title?.mb || "var(--vard_2__title--mb)"
    _style.title.mt = style?.title?.mt || "var(--vard_2__title--mt)"

    _style.subtitle.color = style?.subtitle?.color || "var(--vard_2__subtitle--color)"
    _style.subtitle.fontFamily = style?.subtitle?.fontFamily || "var(--vard_2__subtitle--font-family)"
    _style.subtitle.fontSize = style?.subtitle?.fontSize || "var(--vard_2__subtitle--font-size)"
    _style.subtitle.fontWeight = style?.subtitle?.fontWeight || "var(--vard_2__subtitle--font-weight)"
    _style.subtitle.letterSpacing = style?.subtitle?.letterSpacing || "var(--vard_2__subtitle--letter-spacing)"
    _style.subtitle.lineHeight = style?.subtitle?.lineHeight || "var(--vard_2__subtitle--line-height)"
    _style.subtitle.mb = style?.subtitle?.mb || "var(--vard_2__subtitle--mb)"
    _style.subtitle.mt = style?.subtitle?.mt || "var(--vard_2__subtitle--mt)"


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
            className="flex flex-col"
        >

            <div className="p-4">
                <p
                    style={{
                        color: _style.title.color,
                        fontFamily: _style.title.fontFamily,
                        fontSize: _style.title.fontSize,
                        fontWeight: _style.title.fontWeight,
                        letterSpacing: _style.title.letterSpacing,
                        lineHeight: _style.title.lineHeight,
                        marginBottom: _style.title.mb,
                        marginTop: _style.title.mt
                    }}
                >
                    {title}
                </p>
                <p
                    style={{
                        color: _style.subtitle.color,
                        fontFamily: _style.subtitle.fontFamily,
                        fontSize: _style.subtitle.fontSize,
                        fontWeight: _style.subtitle.fontWeight,
                        letterSpacing: _style.subtitle.letterSpacing,
                        lineHeight: _style.subtitle.lineHeight,
                        marginBottom: _style.subtitle.mb,
                        marginTop: _style.subtitle.mt
                    }}
                >
                    {subtitle}
                </p>
            </div>

            <img
                alt=""
                src={img}
                className="h-auto w-72 object-center object-cover mt-auto block mx-auto"
            />

        </div>
    )
}