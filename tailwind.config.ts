import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                lightblue: {
                    light: '#F2F8FE',
                    DEFAULT: '#90C6FA',
                    dark: '#2E94f6',
                },
                yellow: {
                    light: '#FCF5C9',
                    DEFAULT: '#F8E467',
                    dark: '#EECF0B',
                },
                blue: {
                    light: '#68ABD9',
                    DEFAULT: '#2C7AAF',
                    dark: '#18415D',
                },
                sand: {
                    light: '#FFF',
                    DEFAULT: '#F5E5DD',
                    dark: '#DEA98E',
                },
                tan: {
                    light: '#FFF',
                    DEFAULT: '#EAC2B1',
                    dark: '#D48361',
                },
            },
        },
    },
    plugins: [],
};
export default config;
