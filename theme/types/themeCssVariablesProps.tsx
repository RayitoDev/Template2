import type { CssVarsThemeOptions } from '@mui/material/styles';

type ThemeCssVariablesProps = Pick<
  CssVarsThemeOptions,
  'colorSchemeSelector' | 'disableCssColorScheme' | 'cssVarPrefix' | 'shouldSkipGeneratingVar'
>;

export default ThemeCssVariablesProps;