import { mergeClasses } from 'minimal-shared/utils';
import MainRoot from '@/layout/core/components/mainSection/styles';
import layoutClasses from '@/layout/core/utils/layoutClasses';
import MainSectionProps from '@/layout/core/components/mainSection/types';

function MainSection({ children, className, sx, ...other }: MainSectionProps) {
    return (
        <MainRoot className={mergeClasses([layoutClasses.main, className])} sx={sx} {...other}>
            {children}
        </MainRoot>
    );
}

export default MainSection;