// extendThemeTypes.d.ts
import type {} from '@mui/lab/themeAugmentation';
import type {} from '@mui/material/themeCssVarsAugmentation';
import type { FontStyleExtend } from '@/theme/core/typography';
import type { CustomShadows } from '@/theme/core/customShadows/customShadows';
import type {
    GreyExtend,
    TypeTextExtend,
    CommonColorsExtend,
    PaletteColorExtend,
    TypeBackgroundExtend,
} from '@/theme/core/palette';

declare module '@mui/material/styles' {
  interface Color extends GreyExtend {}
  interface TypeText extends TypeTextExtend {}
  interface CommonColors extends CommonColorsExtend {}
  interface TypeBackground extends TypeBackgroundExtend {}
  interface PaletteColor extends PaletteColorExtend {}
  interface SimplePaletteColorOptions extends Partial<PaletteColorExtend> {}

  interface TypographyVariants extends FontStyleExtend {}
  interface TypographyVariantsOptions extends Partial<FontStyleExtend> {}

  interface Theme {
    customShadows: CustomShadows;
  }

  interface ThemeOptions {
    customShadows?: CustomShadows;
  }

  interface ThemeVars {
    customShadows: CustomShadows;
    typography: Theme['typography'];
    transitions: Theme['transitions'];
  }
}