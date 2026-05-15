import { IconButton, Tooltip } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { HeaderSection } from '@/layout/core/components';
import { merge } from 'es-toolkit';
import { useThemeMode } from '@/theme/contexts';
import type { HeaderSectionProps } from '@/layout/core/components/headerSection/types';
import type AuthHeaderProps from '@/layout/auth/components/authHeader/types/authHeaderProps';

function AuthHeader({ layoutQuery, slotProps }: AuthHeaderProps) {
    const { mode, toggleMode } = useThemeMode();

    const headerSlotProps: HeaderSectionProps['slotProps'] = {
        container: { maxWidth: false },
    };

    const headerSlots: HeaderSectionProps['slots'] = {
        rightArea: (
            <Tooltip title="Cambiar tema">
                <IconButton onClick={toggleMode} color="inherit">
                    {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
            </Tooltip>
        ),
    };

    return (
        <HeaderSection
            disableElevation
            layoutQuery={layoutQuery}
            {...slotProps}
            slots={{ ...headerSlots, ...slotProps?.slots }}
            slotProps={merge(headerSlotProps, slotProps?.slotProps ?? {})}
            sx={[
                { position: { [layoutQuery]: 'fixed' } },
                ...(Array.isArray(slotProps?.sx) ? slotProps?.sx ?? [] : [slotProps?.sx]),
            ]}
        />
    );
}

export default AuthHeader;