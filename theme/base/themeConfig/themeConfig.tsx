import type ThemeConfigProps from '@/theme/base/themeConfig/types';

const themeConfig: ThemeConfigProps = {
    classesPrefix: 'minimal',
    fontFamily: {
        primary: 'Inter',
        secondary: 'Poppins',
    },
    palette: {
        primary: {
            lighter: '#D1FAE5',
            light: '#6EE7B7',
            main: '#10B981',
            dark: '#047857',
            darker: '#064E3B',
            contrastText: '#FFFFFF',
        },

        secondary: {
            lighter: '#FFEDD5',
            light: '#FDBA74',
            main: '#F97316',
            dark: '#C2410C',
            darker: '#7C2D12',
            contrastText: '#FFFFFF',
        },
        info: {
            lighter: '#E0F2FE',
            light: '#7DD3FC',
            main: '#0EA5E9',
            dark: '#0369A1',
            darker: '#0C4A6E',
            contrastText: '#FFFFFF',
        },
        success: {
            lighter: '#DCFCE7',
            light: '#86EFAC',
            main: '#22C55E',
            dark: '#15803D',
            darker: '#166534',
            contrastText: '#FFFFFF',
        },
        warning: {
            lighter: '#FEF9C3',
            light: '#FDE68A',
            main: '#EAB308',
            dark: '#B68400',
            darker: '#A16207',
            contrastText: '#1C1917',
        },
        error: {
            lighter: '#FEE2E2',
            light: '#FCA5A5',
            main: '#EF4444',
            dark: '#B91C1C',
            darker: '#7F1D1D',
            contrastText: '#FFFFFF',
        },
        grey: {
            '50': '#F9FAFB',
            '100': '#F3F4F6',
            '200': '#E5E7EB',
            '300': '#D1D5DB',
            '400': '#9CA3AF',
            '500': '#6B7280',
            '600': '#4B5563',
            '700': '#374151',
            '800': '#1F2937',
            '900': '#111827',
        },
        common: {
            black: '#000000',
            white: '#FFFFFF'
        }
    },
    cssVariables: {
        cssVarPrefix: '',
        colorSchemeSelector: 'data-color-scheme',
    },
};

export default themeConfig;