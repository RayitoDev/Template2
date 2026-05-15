import { varAlpha } from 'minimal-shared/utils';

function createShadowColor(colorChannel: string): string {
    return `0 8px 16px 0 ${varAlpha(colorChannel, 0.24)}`;
}

export default createShadowColor;