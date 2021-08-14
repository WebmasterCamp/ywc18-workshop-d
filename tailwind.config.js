module.exports = {
    mode: 'jit',
    purge: {
        preserveHtmlElements: false,
        content: ['src/**/*.[j|t]s[x]']
    },
    darkMode: 'class',
    theme: {
        fontFamily: {
            serif: ['Athiti']
        },
        extend: {
            colors: {
                primary: '#E44F39',
                'primary-white': '#FAFAFA',
                'grey-1': '#E6E6E6',
                secondary: '#E59007',
                'text-black': '#4B4B4B'
            },
            borderRadius: {
                '4xl': '32px',
                half: '50%'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms')
    ]
}
