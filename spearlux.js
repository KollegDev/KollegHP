//Spearlux Theme
module.exports = {
    theme: {
        extend: {
            colors: {
                white: "#E0E0E0",
                black: "#464646",
                red: "#FF645A"
            },
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
            },
            keyframes: {
                blink: {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0 },
                }
            },
            animation: {
                blink: 'blink 1s step-end infinite',
            }
        }
    }
}