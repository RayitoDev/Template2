'use client';
import { Box, ListItem, ListItemButton } from '@mui/material';
import { Logo } from '@/components';
import { Scrollbar, UserPopover } from '@/layout/dashboard/components';
import { varAlpha } from 'minimal-shared/utils';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import type NavContentProps from '@/layout/dashboard/components/dashboardNav/navContent/types';

function NavContent({ data, slots, sx }: NavContentProps) {
    const pathname = usePathname();
    const normalizedPathname = pathname.replace(/\/$/, '');

    return (
        <>
            <Logo />
            {slots?.topArea}
            <UserPopover sx={{ my: 2 }} />
            <Scrollbar fillContent>
                <Box
                    component="nav"
                    sx={[
                        {
                            display: 'flex',
                            flex: '1 1 auto',
                            flexDirection: 'column',
                        },
                        ...(Array.isArray(sx) ? sx : [sx]),
                    ]}
                >
                    <Box
                        component="ul"
                        sx={{
                            gap: 0.5,
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        {data.map((item) => {
                            const normalizedItemPath = item.path.endsWith('/') ? item.path : `${item.path}/`;

                            return (
                                <ListItem disableGutters disablePadding key={item.title}>
                                    <ListItemButton
                                        disableGutters
                                        component={Link}
                                        href={item.path}
                                        sx={[
                                            (theme) => ({
                                                pl: 2,
                                                py: 1,
                                                gap: 2,
                                                pr: 1.5,
                                                borderRadius: 0.75,
                                                typography: 'body2',
                                                fontWeight: 'fontWeightMedium',
                                                color: theme.vars.palette.text.secondary,
                                                minHeight: 44,
                                                ...(normalizedItemPath === `${normalizedPathname}/` && {
                                                    fontWeight: 'fontWeightSemiBold',
                                                    color: theme.palette.mode === 'dark' ? theme.vars.palette.warning.dark : theme.vars.palette.primary.main,
                                                    bgcolor: varAlpha(theme.palette.mode === 'dark' ? theme.palette.warning.darkChannel : theme.vars.palette.primary.mainChannel, 0.08),
                                                    '&:hover': {
                                                        bgcolor: varAlpha(theme.palette.mode === 'dark' ? theme.palette.warning.darkChannel : theme.vars.palette.primary.mainChannel, 0.16),
                                                    },
                                                }),
                                            }),
                                        ]}
                                    >
                                        <Box component="span" sx={{ width: 24, height: 24 }}>
                                            {item.icon}
                                        </Box>
                                        <Box component="span" sx={{ flexGrow: 1 }}>
                                            {item.title}
                                        </Box>
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </Box>
                </Box>
            </Scrollbar>
            {slots?.bottomArea}
        </>
    );
}

export default NavContent;