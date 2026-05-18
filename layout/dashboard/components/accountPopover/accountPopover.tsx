'use client';
import { useState, useCallback, MouseEvent, useEffect } from 'react';
import { Box, Button, Avatar, Popover, Divider, MenuList, Typography, IconButton, FormControlLabel, Switch } from '@mui/material';
import MenuItem, { menuItemClasses } from '@mui/material/MenuItem';
import type AccountPopoverProps from '@/layout/dashboard/components/accountPopover/types';
import { usePathname, useRouter } from 'next/navigation';
import { useThemeMode } from '@/theme/contexts';
import {useAuth} from '@/hooks/useAuth';

function AccountPopover({ data = [], sx, ...other }: AccountPopoverProps) {
    const router = useRouter();
    const pathname = usePathname();
    const [openPopover, setOpenPopover] = useState<HTMLButtonElement | null>(null);
    const [initials, setInitials] = useState('');
    const { mode, toggleMode } = useThemeMode();
    const { user, logout } = useAuth(); /*En un proyecto real esto debería ser: const { user, token, fetchLogout } = useAuth({
        middleware:'auth'
    });*/

    const getName = () => {
        if(user && Object.keys(user).length > 0 && Object.keys(user?.data).length > 0) {
            return user?.data?.user.name;
        } else {
            //En un proyecto real esto debería ser: return ''. Se agregó el nombre únicamente porque eFirma no consume ninguna API.
            return 'Texto de Ejemplo';
        };
    };

    const getInitials = () => {
        const name = getName();
        if(name != '') {
            const nameParts = name.split(' ');
            const initials = nameParts.length > 1 ? `${nameParts[0][0]}${nameParts[1][0]}` : `${nameParts[0][0]}`;
            setInitials(initials);
        };
    };

    const handleOpenPopover = useCallback((event: MouseEvent<HTMLButtonElement>) => {
        setOpenPopover(event.currentTarget);
    }, []);

    const handleClosePopover = useCallback(() => {
        setOpenPopover(null);
    }, []);

    const handleClickItem = (path: string) => {
        handleClosePopover();
        router.push(path);
    };

    const logoutUser = () => {
        if(user) {
            logout();
        }
    };

    useEffect(() => {
        getInitials();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initials]);

    return (
        <>
            <IconButton
                onClick={handleOpenPopover}
                sx={{
                    p: '2px',
                    width: 40,
                    height: 40,
                    background: (theme) =>
                        `conic-gradient(${theme.vars.palette.primary.light}, ${theme.vars.palette.warning.light}, ${theme.vars.palette.primary.light})`,
                    ...sx,
                }}
                {...other}
            >
                <Avatar
                    alt={initials}
                >
                    {initials}
                </Avatar>
            </IconButton>

            <Popover
                open={!!openPopover}
                anchorEl={openPopover}
                onClose={handleClosePopover}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                slotProps={{
                    paper: {
                        sx: { width: 200 },
                    },
                }}
            >
                <Box sx={{ p: 2, pb: 1.5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="subtitle2" noWrap>
                        {getName()}
                    </Typography>
                </Box>
                {data.length > 0 && (
                    <>
                        <Divider sx={{ borderStyle: 'dashed' }} />

                        <MenuList
                            disablePadding
                            sx={{
                                p: 1,
                                gap: 0.5,
                                display: 'flex',
                                flexDirection: 'column',
                                [`& .${menuItemClasses.root}`]: {
                                    px: 1,
                                    gap: 2,
                                    borderRadius: 0.75,
                                    color: 'text.secondary',
                                    '&:hover': { color: 'text.primary' },
                                    [`&.${menuItemClasses.selected}`]: {
                                        color: 'text.primary',
                                        bgcolor: 'action.selected',
                                        fontWeight: 'fontWeightSemiBold',
                                    },
                                },
                            }}
                        >
                            {data.map((option) => (
                                <MenuItem
                                    key={option.label}
                                    selected={option.href === pathname}
                                    onClick={() => handleClickItem(option.href)}
                                >
                                    {option.icon}
                                    {option.label}
                                </MenuItem>
                            ))}
                        </MenuList>
                    </>
                )}

                <Divider sx={{ borderStyle: 'dashed' }} />

                <Box sx={{ px: 2, py: 1, display: 'flex', justifyContent: 'center' }}>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={mode === 'dark'}
                                onChange={toggleMode}
                            />
                        }
                        label="Modo oscuro"
                        labelPlacement="end"
                    />
                </Box>

                <Divider sx={{ borderStyle: 'dashed' }} />

                <Box sx={{ p: 1 }}>
                    <Button
                        fullWidth
                        onClick={logoutUser}
                        color={mode === 'dark' ? 'warning' : 'primary'}
                        size="large"
                        variant="text"
                    >
                        Cerrar sesión
                    </Button>
                </Box>
            </Popover>
        </>
    );
}

export default AccountPopover;