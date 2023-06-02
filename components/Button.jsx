
export default function Button({
    text,
    className="",
    style={fontSize, fontFamily, bg, color, fontWeight, px, py, rounded},
    left, right
}) {
    return (
        <button
            style={{
                fontSize: style.fontSize,
                fontFamily: style.fontFamily,
                backgroundColor: style.bg,
                color: style.color,
                fontWeight: style.fontWeight,
                paddingInline: style.px,
                paddingBlock: style.py,
                borderRadius: style.rounded
            }}
            className={`cursor-pointer active:scale-95 transition-all duration-300
            border-none outline-none flex items-center justify-center gap-x-2 ` + className}
        >
            {left}
            {text}
            {right}
        </button>
    )
}