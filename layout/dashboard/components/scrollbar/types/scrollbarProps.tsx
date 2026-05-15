import { ComponentProps } from 'react';
import type { Theme, SxProps } from '@mui/material/styles';
import type { SimpleBarProps } from 'simplebar-react';

type ScrollbarProps = SimpleBarProps &
  ComponentProps<'div'> & {
    sx?: SxProps<Theme>;
    fillContent?: boolean;
    slotProps?: {
      wrapperSx?: SxProps<Theme>;
      contentSx?: SxProps<Theme>;
      contentWrapperSx?: SxProps<Theme>;
    };
  };

export default ScrollbarProps;