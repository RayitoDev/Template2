/* eslint-disable @next/next/no-img-element */
import { mergeClasses } from 'minimal-shared/utils';
import Link from 'next/link';
import useLogo from '@/components/logo/hooks';
import LogoRoot from '@/components/logo/styles';
import logoClasses from '@/components/logo/utils';
import type LogoProps from '@/components/logo/types';

function Logo({
    sx,
    disabled,
    className,
    href = '/',
    ...other
}: LogoProps) {
    const { logo } = useLogo();

    return (
        <LogoRoot
            component={Link}
            href={href}
            aria-label="Logo"
            underline="none"
            className={mergeClasses([logoClasses.root, className])}
            sx={[
                { width: '100%', height: 'auto' },
                ...(Array.isArray(sx) ? sx : [sx]),
                ...(disabled ? [{ pointerEvents: 'none' }] : []),
            ]}
            {...other}
        >
            <img src={logo} alt="Logo" />
        </LogoRoot>
    );
}

export default Logo;
