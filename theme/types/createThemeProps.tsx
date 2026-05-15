import type { ThemeOptions, ThemeColorSchemeProps } from '@/theme/types';

type CreateThemeProps = {
    themeOverrides?: ThemeOptions;
    colorScheme?: ThemeColorSchemeProps;
};

export default CreateThemeProps;