import type { Theme, Components } from '@mui/material/styles';
import { varAlpha } from 'minimal-shared/utils';
import SvgIcon from '@mui/material/SvgIcon';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { getMainColor } from '@/theme/utils';

const MuiTableRow: Components<Theme>['MuiTableRow'] = {
    styleOverrides: {
        head: ({ theme }) => ({
            '& .MuiTableCell-root': {
                backgroundColor: getMainColor(theme),
                color: theme.vars.palette.common.white,
            },
        }),
    },
};

const MuiAvatar: Components<Theme>['MuiAvatar'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            backgroundColor: getMainColor(theme),
            color: theme.vars.palette.common.white,
        }),
    },
};

const MuiDataGrid = { 
    styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
            '--DataGrid-containerBackground': getMainColor(theme),
            '& .MuiDataGrid-columnHeaders': {
                color: theme.vars.palette.common.white,
                '& .MuiSvgIcon-root': {
                    color: theme.vars.palette.common.white,
                },
            },
        }),
    },
};

const MuiCircularProgress: Components<Theme>['MuiCircularProgress'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            color: getMainColor(theme),
        }),
    },
};

const MuiStepIcon: Components<Theme>['MuiStepIcon'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            color: theme.vars.palette.grey[600],
            '&.Mui-active': {
                color: getMainColor(theme),
            },
            '&.Mui-completed': {
                color: theme.palette.mode === 'dark' ? theme.vars.palette.success.dark : theme.vars.palette.success.main,
            },
        }),
    },
};

const MuiBackdrop: Components<Theme>['MuiBackdrop'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            backgroundColor: varAlpha(theme.vars.palette.grey['900Channel'], 0.8),
        }),
        invisible: {
            background: 'transparent',
        },
    },
};

const MuiButton: Components<Theme>['MuiButton'] = {
    defaultProps: {
        disableElevation: true,
    },
    styleOverrides: {
        containedInherit: ({ theme }) => ({
            color: theme.vars.palette.common.white,
            backgroundColor: getMainColor(theme),
            '&:hover': {
                color: theme.vars.palette.common.white,
                backgroundColor: getMainColor(theme),
            },
        }),
        sizeLarge: {
            minHeight: 48,
        },
    },
};

const MuiCard: Components<Theme>['MuiCard'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            zIndex: 0,
            position: 'relative',
            boxShadow: theme.vars.customShadows.card,
            borderRadius: Number(theme.shape.borderRadius) * 2,
        }),
    },
};

const MuiCardHeader: Components<Theme>['MuiCardHeader'] = {
    defaultProps: {
        titleTypographyProps: { variant: 'h6' },
        subheaderTypographyProps: { variant: 'body2' },
    },
    styleOverrides: {
        root: ({ theme }) => ({
            padding: theme.spacing(3, 3, 0),
        }),
    },
};

const MuiInputLabel: Components<Theme>['MuiInputLabel'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            '&.Mui-focused': {
                color: getMainColor(theme),
            },
        }),
    },
};

const MuiOutlinedInput: Components<Theme>['MuiOutlinedInput'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            [`& .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: varAlpha(getMainColor(theme), 0.24),
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: getMainColor(theme),
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: getMainColor(theme),
            },
            '&.Mui-error': {
                [`& .${outlinedInputClasses.notchedOutline}`]: {
                    borderColor: theme.palette.mode === 'dark' ? theme.vars.palette.error.dark : theme.vars.palette.error.light,
                },
            },
        })
    },
};

const MuiSelect: Components<Theme>['MuiSelect'] = {
    styleOverrides: {
        icon: ({ theme }) => ({
            color: varAlpha(getMainColor(theme), 0.24),
            '&:hover': {
                color: getMainColor(theme),
            },
            '&.Mui-focused': {
                color: getMainColor(theme),
            },
        }),
    },
};

const MuiAutocomplete: Components<Theme>['MuiAutocomplete'] = {
    styleOverrides: {
        endAdornment: ({ theme }) => ({
            '& .MuiSvgIcon-root': {
                color: varAlpha(getMainColor(theme), 0.24),
                '&:hover': {
                    color: getMainColor(theme),
                },
                '&.Mui-focused': {
                    color: getMainColor(theme),
                },
            },
        }),
    },
};

const MuiInputAdornment: Components<Theme>['MuiInputAdornment'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            '&.MuiInputAdornment-root': {
                '& .MuiSvgIcon-root': {
                    color: varAlpha(getMainColor(theme), 0.24),
                    '&:hover': {
                        color: getMainColor(theme),
                    },
                    '&.Mui-focused': {
                        color: getMainColor(theme),
                    },
                },
            },
        }),
    },
};

const MuiRadio: Components<Theme>['MuiRadio'] = {
    defaultProps: {
        size: 'small',
        icon: (
            <SvgIcon>
                <path
                    d="M12 2C13.9778 2 15.9112 2.58649 17.5557 3.6853C19.2002 4.78412 20.4819 6.3459 21.2388 8.17317C21.9957 10.0004 22.1937 12.0111 21.8079 13.9509C21.422 15.8907 20.4696 17.6725 19.0711 19.0711C17.6725 20.4696 15.8907 21.422 13.9509 21.8079C12.0111 22.1937 10.0004 21.9957 8.17317 21.2388C6.3459 20.4819 4.78412 19.2002 3.6853 17.5557C2.58649 15.9112 2 13.9778 2 12C2 6.477 6.477 2 12 2ZM12 3.5C9.74566 3.5 7.58365 4.39553 5.98959 5.98959C4.39553 7.58365 3.5 9.74566 3.5 12C3.5 14.2543 4.39553 16.4163 5.98959 18.0104C7.58365 19.6045 9.74566 20.5 12 20.5C14.2543 20.5 16.4163 19.6045 18.0104 18.0104C19.6045 16.4163 20.5 14.2543 20.5 12C20.5 9.74566 19.6045 7.58365 18.0104 5.98959C16.4163 4.39553 14.2543 3.5 12 3.5Z"
                    fill="currentColor"
                />
            </SvgIcon>
        ),
        checkedIcon: (
            <SvgIcon>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8Z"
                    fill="currentColor"
                />
            </SvgIcon>
        ),
    },
    styleOverrides: {
        root: ({ theme }) => ({
            color: varAlpha(getMainColor(theme), 0.24),
            '&:hover': {
                color: getMainColor(theme),
            },
            '&.Mui-checked': {
                color: getMainColor(theme),
            },
        }),
        checked: ({ theme }) => ({
            color: getMainColor(theme),
        }),
    },
};

const MuiFormLabel: Components<Theme>['MuiFormLabel'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            '&.Mui-focused': {
                color: getMainColor(theme),
            },
        }),
    },
};

const MuiPaper: Components<Theme>['MuiPaper'] = {
    defaultProps: { elevation: 0 },
    styleOverrides: {
        root: { backgroundImage: 'none' },
        outlined: ({ theme }) => ({
            borderColor: varAlpha(theme.vars.palette.grey['500Channel'], 0.16),
        }),
    },
};

const MuiTableCell: Components<Theme>['MuiTableCell'] = {
    styleOverrides: {
        head: ({ theme }) => ({
            fontSize: theme.typography.pxToRem(14),
            color: theme.vars.palette.text.secondary,
            fontWeight: theme.typography.fontWeightSemiBold,
            backgroundColor: theme.vars.palette.background.neutral,
        }),
    },
};

const MuiMenuItem: Components<Theme>['MuiMenuItem'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            ...theme.typography.body2,
        }),
    },
};

const MuiLink: Components<Theme>['MuiLink'] = {
    defaultProps: { underline: 'hover' },
};

const MuiFormControlLabel: Components<Theme>['MuiFormControlLabel'] = {
    styleOverrides: {
        label: ({ theme }) => ({
            ...theme.typography.body2,
        }),
    },
};

const MuiCheckbox: Components<Theme>['MuiCheckbox'] = {
    defaultProps: {
        size: 'small',
        icon: (
            <SvgIcon>
                <path d="M17.9 2.318A5 5 0 0 1 22.895 7.1l.005.217v10a5 5 0 0 1-4.783 4.995l-.217.005h-10a5 5 0 0 1-4.995-4.783l-.005-.217v-10a5 5 0 0 1 4.783-4.996l.217-.004h10Zm-.5 1.5h-9a4 4 0 0 0-4 4v9a4 4 0 0 0 4 4h9a4 4 0 0 0 4-4v-9a4 4 0 0 0-4-4Z" />
            </SvgIcon>
        ),
        checkedIcon: (
            <SvgIcon>
                <path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm-1.625 7.255-4.13 4.13-1.75-1.75a.881.881 0 0 0-1.24 0c-.34.34-.34.89 0 1.24l2.38 2.37c.17.17.39.25.61.25.23 0 .45-.08.62-.25l4.75-4.75c.34-.34.34-.89 0-1.24a.881.881 0 0 0-1.24 0Z" />
            </SvgIcon>
        ),
        indeterminateIcon: (
            <SvgIcon>
                <path d="M17,2 C19.7614,2 22,4.23858 22,7 L22,7 L22,17 C22,19.7614 19.7614,22 17,22 L17,22 L7,22 C4.23858,22 2,19.7614 2,17 L2,17 L2,7 C2,4.23858 4.23858,2 7,2 L7,2 Z M15,11 L9,11 C8.44772,11 8,11.4477 8,12 C8,12.5523 8.44772,13 9,13 L15,13 C15.5523,13 16,12.5523 16,12 C16,11.4477 15.5523,11 15,11 Z" />
            </SvgIcon>
        ),
    },
    styleOverrides: {
        root: ({ theme }) => ({
            color: varAlpha(theme.vars.palette.primary.mainChannel, 0.24),
            '&:hover': {
                color: getMainColor(theme),
            },
            '&.Mui-checked': {
                color: getMainColor(theme),
            },
        }),
        checked: ({ theme }) => ({
            color: getMainColor(theme),
        }),
    },
};

const MuiTooltip: Components<Theme>['MuiTooltip'] = {
    styleOverrides: {
        tooltip: ({ theme }) => ({
            backgroundColor: theme.vars.palette.grey[800],
        }),
        arrow: ({ theme }) => ({
            color: theme.vars.palette.grey[800],
        }),
    },
};

const MuiTypography: Components<Theme>['MuiTypography'] = {
    styleOverrides: {
        paragraph: ({ theme }) => ({
            marginBottom: theme.spacing(2),
        }),
        gutterBottom: ({ theme }) => ({
            marginBottom: theme.spacing(1),
        }),
    },
};

const MuiInputBase: Components<Theme>['MuiInputBase'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            '& input[type="date"]::-webkit-calendar-picker-indicator, \
                    input[type="time"]::-webkit-calendar-picker-indicator, \
                    input[type="datetime-local"]::-webkit-calendar-picker-indicator, \
                    input[type="month"]::-webkit-calendar-picker-indicator, \
                    input[type="week"]::-webkit-calendar-picker-indicator': {
                filter: theme.palette.mode === 'dark' ? 'invert(1) brightness(2)' : 'invert(0) brightness(1)',
                cursor: 'pointer',
            }
        })
    },
};

const MuiSwitch: Components<Theme>['MuiSwitch'] = {
    styleOverrides: {
        switchBase: ({ theme }) => ({
            color: varAlpha(getMainColor(theme), 0.24),
            '&:hover': {
                backgroundColor: varAlpha(getMainColor(theme), 0.08),
            },
            '&.Mui-checked': {
                color: getMainColor(theme),
                '&:hover': {
                    backgroundColor: varAlpha(getMainColor(theme), 0.08),
                },
            },
        }),
        track: ({ theme }) => ({
            backgroundColor: varAlpha(getMainColor(theme), 0.24),
            '.Mui-checked &': {
                backgroundColor: getMainColor(theme),
                opacity: 1,
            },
        }),
        thumb: {
            boxShadow: 'none',
        },
    },
};

const MuiTab: Components<Theme>['MuiTab'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            '&.Mui-selected': {
                color: getMainColor(theme),
            }
        })
    },
};

const MuiTabs: Components<Theme>['MuiTabs'] = {
    styleOverrides: {
        indicator: ({ theme }) => ({
            backgroundColor: getMainColor(theme),
        })
    },
};

const MuiPickersDay = { 
    styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
            '&.Mui-selected': {
                backgroundColor: getMainColor(theme),
                color: theme.palette.common.white,
                '&:hover': {
                    backgroundColor: getMainColor(theme),
                },
                '&:focus': {
                    backgroundColor: getMainColor(theme),
                },
            },
        }),
    },
};

const MuiMultiSectionDigitalClockSection = { 
    styleOverrides: {
        item: ({ theme }: { theme: Theme }) => ({
            '&.Mui-selected': {
                backgroundColor: getMainColor(theme),
                color: theme.palette.common.white,
                '&:hover': {
                    backgroundColor: getMainColor(theme),
                },
            },
        }),
    },
};

export const components = {
    MuiTableRow,
    MuiAvatar,
    MuiDataGrid,
    MuiCircularProgress,
    MuiStepIcon,
    MuiCard,
    MuiLink,
    MuiPaper,
    MuiButton,
    MuiBackdrop,
    MuiMenuItem,
    MuiCheckbox,
    MuiTableCell,
    MuiCardHeader,
    MuiInputLabel,
    MuiSelect,
    MuiAutocomplete,
    MuiInputAdornment,
    MuiRadio,
    MuiFormLabel,
    MuiOutlinedInput,
    MuiFormControlLabel,
    MuiTooltip,
    MuiTypography,
    MuiInputBase,
    MuiSwitch,
    MuiTab,
    MuiTabs,
    MuiPickersDay,
    MuiMultiSectionDigitalClockSection
};