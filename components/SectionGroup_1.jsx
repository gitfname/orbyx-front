
const styleProps = {
    leftText: {
        color: "", fontSize: "", fontWeight: "", fontFamily: "", lineHeight: "", letterSpacing: ""
    },
    rightText: {
        color: "", fontSize: "", fontWeight: "", fontFamily: "", lineHeight: "", letterSpacing: ""
    }
}

export default function SectionGroup_1({dir="ltr", className, left=null, right=null, leftText="", rightText="", style=styleProps, children}) {

    const _style = {
        leftText: {
            color: "", fontSize: "", fontWeight: "", fontFamily: "", lineHeight: "", letterSpacing: ""
        },
        rightText: {
            color: "", fontSize: "", fontWeight: "", fontFamily: "", lineHeight: "", letterSpacing: ""
        }
    }

    _style.leftText.color = style?.leftText?.color || "var(--section-group-1__left-text--color)"
    _style.leftText.fontFamily = style?.leftText?.fontFamily || "var(--section-group-1__left-text--font-family)"
    _style.leftText.fontSize = style?.leftText?.fontSize || "var(--section-group-1__left-text--font-size)"
    _style.leftText.fontWeight = style?.leftText?.fontWeight || "var(--section-group-1__left-text--font-weight)"
    _style.leftText.letterSpacing = style?.leftText?.letterSpacing || "var(--section-group-1__left-text--letter-spacing)"
    _style.leftText.lineHeight = style?.leftText?.lineHeight || "--section-group-1__left-text--line-height"

    _style.rightText.color = style?.rightText?.color || "var(--section-group-1__right-text--color)"
    _style.rightText.fontFamily = style?.rightText?.fontFamily || "var(--section-group-1__right-text--font-family)"
    _style.rightText.fontSize = style?.rightText?.fontSize || "var(--section-group-1__right-text--font-size)"
    _style.rightText.fontWeight = style?.rightText?.fontWeight || "var(--section-group-1__right-text--font-weight)"
    _style.rightText.letterSpacing = style?.rightText?.letterSpacing || "var(--section-group-1__right-text--letter-spacing)"
    _style.rightText.lineHeight = style?.rightText?.lineHeight || "--section-group-1__right-text--line-height"


    return (
        <div className={"w-11/12 md:w-10/12 mx-auto mt-36 " + className} dir={dir}>

            <div className="w-full max-md:flex-col gap-4 max-md:items-start flex items-center justify-between mb-8">
                {
                    leftText
                    ?
                        <p
                            style={{
                                color: _style.leftText.color,
                                fontFamily: _style.leftText.fontFamily,
                                fontSize: _style.leftText.fontSize,
                                fontWeight: _style.leftText.fontWeight,
                                letterSpacing: _style.leftText.letterSpacing,
                                lineHeightStep: _style.leftText.lineHeight
                            }}
                        >
                            {leftText}
                        </p>
                    :
                        left
                }

                {
                    rightText
                    ?
                    <p
                        style={{
                            color: _style.rightText.color,
                            fontFamily: _style.rightText.fontFamily,
                            fontSize: _style.rightText.fontSize,
                            fontWeight: _style.rightText.fontWeight,
                            letterSpacing: _style.rightText.letterSpacing,
                            lineHeightStep: _style.rightText.lineHeight
                        }}
                        className="max-w-[44ch]"
                    >
                        {rightText}
                    </p>
                    :
                        right
                }

            </div>

            {children}

        </div>
    )
}