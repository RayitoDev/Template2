import { grey } from '@/theme/core/palette';
import type { ThemeColorSchemeProps } from '@/theme/types';
import type CustomShadowsProps from '@/theme/core/customShadows/types';
import { createCustomShadows } from '@/theme/core/customShadows/utils';

const customShadows: Partial<Record<ThemeColorSchemeProps, CustomShadowsProps>> = {
    light: createCustomShadows(grey['500Channel'], 'light'),
    dark: createCustomShadows(grey['500Channel'], 'dark'),
};

export default customShadows;