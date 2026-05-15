import { mergeClasses } from 'minimal-shared/utils';
import scrollbarClasses from '@/layout/dashboard/components/scrollbar/utils';
import type ScrollbarProps from '@/layout/dashboard/components/scrollbar/types';
import ScrollbarRoot from '@/layout/dashboard/components/scrollbar/styles';

function Scrollbar({
    sx,
    ref,
    children,
    className,
    slotProps,
    fillContent = true,
    ...other
}: ScrollbarProps) {
    return (
        <ScrollbarRoot
            scrollableNodeProps={{ ref }}
            clickOnTrack={false}
            fillContent={fillContent}
            className={mergeClasses([scrollbarClasses.root, className])}
            sx={[
                {
                    '& .simplebar-wrapper': slotProps?.wrapperSx as React.CSSProperties,
                    '& .simplebar-content-wrapper': slotProps?.contentWrapperSx as React.CSSProperties,
                    '& .simplebar-content': slotProps?.contentSx as React.CSSProperties,
                },
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
            {...other}
        >
            {children}
        </ScrollbarRoot>
    );
}

export default Scrollbar;