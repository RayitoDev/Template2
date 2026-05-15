'use client';
import { useState, useEffect } from 'react';
import { Box, Avatar } from '@mui/material';
import type UserPopoverProps from '@/layout/dashboard/components/userPopover/types';
import {useAuth} from '@/hooks/useAuth';

function UserPopover({ sx }: UserPopoverProps) {
    const [initials, setInitials] = useState('');
    const { user } = useAuth(); 

    const getName = () => {
        if(user && Object.keys(user).length > 0 && Object.keys(user?.data).length > 0) {
            return user?.data.user?.name;
        } else {
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
    
    useEffect(() => {
        getInitials();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initials]);

    return (
        <Box
            sx={{
                pl: 2,
                py: 3,
                gap: 1.5,
                pr: 1.5,
                width: 1,
                borderRadius: 1.5,
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                bgcolor: (theme) => theme.palette.action.hover,
                ...sx,
            }}
        >
            <Avatar alt={initials}>
                {initials}
            </Avatar>

            <Box
                sx={{
                    ml: 1.5,
                    display: 'flex',
                    alignItems: 'center',
                    typography: 'body2',
                    fontWeight: 'fontWeightSemiBold',
                    gap: 1,
                }}
            >
                {getName()}
            </Box>
        </Box>
    );
}

export default UserPopover;