import { Box } from '@mui/material';
import { Logo } from '@/components';
import { MainSection } from '@/layout/core/components';
import AuthContent from '@/layout/auth/components/authContent';
import { usePageCurrentContext } from '@/layout/auth/contexts/usePageCurrentContext';
import type AuthMainProps from '@/layout/auth/components/authMain/types';

function AuthMain({ layoutQuery, slotProps, children }: AuthMainProps) {
    const { namePageCurrent } = usePageCurrentContext();

    return (
        <MainSection
            {...slotProps?.main}
            sx={[
                (theme) => ({
                    alignItems: 'center',
                    p: theme.spacing(3, 2, 10, 2),
                    [theme.breakpoints.up(layoutQuery)]: {
                        justifyContent: 'center',
                        p: theme.spacing(10, 0, 10, 0),
                    },
                }),
                ...(Array.isArray(slotProps?.main?.sx) ? slotProps?.main?.sx ?? [] : [slotProps?.main?.sx]),
            ]}
        >
            <Box
                sx={(theme) => ({
                    width: '100%',
                    maxWidth: 603,
                    bgcolor: theme.vars.palette.background.paper,
                    borderRadius: 2,
                    p: { xs: 2, sm: 3 },
                    mb: { xs: 3, sm: 4 },
                    boxShadow: theme.shadows[1],
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                })}
            >
                <Logo sx={{ width: '100%', height: 'auto', mb: { xs: 2, sm: 1 } }} />
                <Box
                    component="h1"
                    sx={{
                        fontSize: { xs: '1rem', sm: '1.25rem' },
                        fontWeight: 600,
                        textAlign: 'center',
                        color: 'text.primary',
                        px: 2,
                        wordBreak: 'break-word',
                    }}
                >
                    {namePageCurrent}
                </Box>
            </Box>
            <AuthContent {...slotProps?.content}>{children}</AuthContent>
        </MainSection>
    );
}

export default AuthMain;