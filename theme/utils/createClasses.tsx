import { themeConfig } from '@/theme/base';

function createClasses(className: string): string {
    return `${themeConfig.classesPrefix}__${className}`;
}

export default createClasses;