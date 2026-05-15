import type { Theme } from '@mui/material/styles';
import { createTheme as createMuiTheme } from '@mui/material/styles';
import shadows from '@/theme/core/shadows';
import { palette } from '@/theme/core/palette';
import { themeConfig } from '@/theme/base';
import { components } from '@/theme/core/components';
import { typography } from '@/theme/core/typography';
import customShadows from '@/theme/core/customShadows';
import type { ThemeOptions, CreateThemeProps } from '@/theme/types';

const baseTheme: ThemeOptions = {
    colorSchemes: {
        light: {
            palette: palette.light,
            shadows: shadows.light,
            customShadows: customShadows.light,
        },
        dark: {
            palette: palette.dark,
            shadows: shadows.dark,
            customShadows: customShadows.dark
        },
    }
};

function createTheme({ themeOverrides = {}, colorScheme = 'light' }: CreateThemeProps = {}): Theme {
    const colorSchemeOptions = baseTheme.colorSchemes?.[colorScheme];
    const theme = createMuiTheme({
        palette: colorSchemeOptions?.palette,
        shadows: colorSchemeOptions?.shadows,
        customShadows: colorSchemeOptions?.customShadows,
        components,
        typography,
        shape: { borderRadius: 8 },
        cssVariables: themeConfig.cssVariables,
    }, themeOverrides);

    return theme;
}

export default createTheme;