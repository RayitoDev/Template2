import type {
    Shadows,
    ColorSystemOptions,
    CssVarsThemeOptions,
    ThemeOptions as MuiThemeOptions
} from '@mui/material/styles';
import type CustomShadowsProps from '@/theme/core/customShadows/types';
import type { ThemeColorSchemeProps, ThemeCssVariablesProps } from '@/theme/types';

type ColorSchemeOptionsExtended = ColorSystemOptions & {
  shadows?: Shadows;
  customShadows?: CustomShadowsProps;
};

type ThemeOptions = Omit<MuiThemeOptions, 'components'> &
  Pick<CssVarsThemeOptions, 'defaultColorScheme' | 'components'> & {
    colorSchemes?: Partial<Record<ThemeColorSchemeProps, ColorSchemeOptionsExtended>>;
    cssVariables?: ThemeCssVariablesProps;
};

export default ThemeOptions;