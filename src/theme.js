import { extendTheme } from '@chakra-ui/react';

const colors = {
    brand: {
        primary: '#74C7E5',    // Azul claro
        secondary: '#FFC7D7',  // Rosado
        accent: '#FFEB94',     // Amarillo
        dark: '#454545',       // Texto oscuro
        light: '#FFFFFF',      // Texto claro
    },
};

const fonts = {
    heading: "'Poppins', sans-serif",
    body: "'Poppins', sans-serif",
};

const theme = extendTheme({
    colors,
    fonts,
    styles: {
        global: {
            body: {
                bg: 'white',
                color: 'brand.dark',
            },
        },
    },
    components: {
        Button: {
            baseStyle: {
                fontWeight: 'bold',
                borderRadius: 'md',
            },
            variants: {
                primary: {
                    bg: 'brand.primary',
                    color: 'white',
                    _hover: {
                        bg: 'brand.primary',
                        opacity: 0.8,
                    },
                },
                secondary: {
                    bg: 'brand.secondary',
                    color: 'brand.dark',
                    _hover: {
                        bg: 'brand.secondary',
                        opacity: 0.8,
                    },
                },
                accent: {
                    bg: 'brand.accent',
                    color: 'brand.dark',
                    _hover: {
                        bg: 'brand.accent',
                        opacity: 0.8,
                    },
                },
            },
        },
    },
});

export default theme;