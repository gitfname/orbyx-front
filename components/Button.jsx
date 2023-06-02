
export default function Button({
    text,
    className="",
    style={fontSize, fontFamily, bg, color, fontWeight, px, py, rounded}
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
            border-none outline-none ` + className}
        >
            {text}
        </button>
    )
}