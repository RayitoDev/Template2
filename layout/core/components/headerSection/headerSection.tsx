import { useScrollOffsetTop } from 'minimal-shared/hooks';
import { mergeClasses } from 'minimal-shared/utils';
import { HeaderRoot, HeaderContainer, HeaderCenterArea } from '@/layout/core/components/headerSection/styles';
import type { Theme } from '@mui/material/styles';
import layoutClasses from '@/layout/core/utils/layoutClasses';
import type { HeaderSectionProps } from '@/layout/core/components/headerSection/types';

function HeaderSection({
    sx,
    slots,
    slotProps,
    className,
    disableElevation,
    layoutQuery = 'md',
    ...other
}: HeaderSectionProps) {
    const { offsetTop: isOffset } = useScrollOffsetTop();

    return (
        <HeaderRoot
            position="sticky"
            color="transparent"
            isOffset={isOffset}
            disableElevation={disableElevation}
            className={mergeClasses([layoutClasses.header, className])}
            sx={[
                (theme: Theme) => ({
                    ...(isOffset && {
                        '--color': `var(--offset-color, ${theme.vars.palette.text.primary})`,
                    }),
                }),
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
            {...other}
        >
            <HeaderContainer layoutQuery={layoutQuery} {...slotProps?.container}>
                {slots?.leftArea}
                <HeaderCenterArea {...slotProps?.centerArea}>{slots?.centerArea}</HeaderCenterArea>
                {slots?.rightArea}
            </HeaderContainer>
        </HeaderRoot>
    );
}

export default HeaderSection;