import type { CommonColors } from '@mui/material/styles';
import type { ThemeCssVariablesProps } from '@/theme/types';
import type { PaletteColorNoChannels } from '@/theme/core/palette';

type ThemeConfigProps = {
    classesPrefix: string;
    cssVariables: ThemeCssVariablesProps;
    fontFamily: Record<'primary' | 'secondary', string>;
    palette: Record<
        'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error',
        PaletteColorNoChannels
    > & {
        common: Pick<CommonColors, 'black' | 'white'>;
        grey: Record<
            '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900',
            string
        >;
    };
};

export default ThemeConfigProps;