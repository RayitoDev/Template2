import type { Shadows } from '@mui/material/styles';
import { grey } from '@/theme/core/palette';
import type { ThemeColorSchemeProps } from '@/theme/types';
import createShadows from '@/theme/core/shadows/utils';

const shadows: Partial<Record<ThemeColorSchemeProps, Shadows>> = {
    light: createShadows(grey['500Channel']),
    dark: createShadows(grey['500Channel']), 
};

export default shadows;