import { varAlpha } from 'minimal-shared/utils';
import { info, error, common, primary, success, warning, secondary } from '@/theme/core/palette';
import type CustomShadowsProps from '@/theme/core/customShadows/types';
import { createShadowColor } from '@/theme/core/customShadows/utils';

function createCustomShadows(colorChannel: string, mode: 'light' | 'dark' = 'light'): CustomShadowsProps {
    const lightAlpha = 0.16;
    const darkAlpha = 0.24;

    const alpha = mode === 'light' ? lightAlpha : darkAlpha;

    return {
        z1: `0 1px 2px 0 ${varAlpha(colorChannel, alpha)}`,
        z4: `0 4px 8px 0 ${varAlpha(colorChannel, alpha)}`,
        z8: `0 8px 16px 0 ${varAlpha(colorChannel, alpha)}`,
        z12: `0 12px 24px -4px ${varAlpha(colorChannel, alpha)}`,
        z16: `0 16px 32px -4px ${varAlpha(colorChannel, alpha)}`,
        z20: `0 20px 40px -4px ${varAlpha(colorChannel, alpha)}`,
        z24: `0 24px 48px 0 ${varAlpha(colorChannel, alpha)}`,
        dialog: `-40px 40px 80px -8px ${varAlpha(common.blackChannel, 0.24)}`,
        card: `0 0 2px 0 ${varAlpha(colorChannel, 0.2)}, 0 12px 24px -4px ${varAlpha(colorChannel, alpha)}`,
        dropdown: `0 0 2px 0 ${varAlpha(colorChannel, 0.24)}, -20px 20px 40px -4px ${varAlpha(colorChannel, alpha)}`,
        primary: createShadowColor(primary.mainChannel),
        secondary: createShadowColor(secondary.mainChannel),
        info: createShadowColor(info.mainChannel),
        success: createShadowColor(success.mainChannel),
        warning: createShadowColor(warning.mainChannel),
        error: createShadowColor(error.mainChannel)
    };
}

export default createCustomShadows;