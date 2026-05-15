'use client';
import { mergeClasses } from 'minimal-shared/utils';
import { LayoutRoot, LayoutSidebarContainer, layoutSectionVars } from '@/layout/core/components/layoutSection/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import layoutClasses from '@/layout/core/utils/layoutClasses';
import type LayoutSectionProps from '@/layout/core/components/layoutSection/types';

function LayoutSection({
    sx,
    cssVars,
    children,
    footerSection,
    headerSection,
    sidebarSection,
    className,
    ...other
}: LayoutSectionProps) {
    const inputGlobalStyles = (
        <GlobalStyles styles={(theme) => ({ body: { ...layoutSectionVars(theme), ...cssVars } })} />
    );

    return (
        <>
            {inputGlobalStyles}

            <LayoutRoot
                id="root__layout"
                className={mergeClasses([layoutClasses.root, className])}
                sx={sx}
                {...other}
            >
                {sidebarSection ? (
                    <>
                        {sidebarSection}
                        <LayoutSidebarContainer className={layoutClasses.sidebarContainer}>
                            {headerSection}
                            {children}
                            {footerSection}
                        </LayoutSidebarContainer>
                    </>
                ) : (
                    <>
                        {headerSection}
                        {children}
                        {footerSection}
                    </>
                )}
            </LayoutRoot>
        </>
    );
}

export default LayoutSection;