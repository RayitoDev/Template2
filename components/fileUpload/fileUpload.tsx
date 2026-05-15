'use client';
import { useRef, ChangeEvent } from 'react';
import { Box, Button, Typography, Tooltip, IconButton, FormHelperText } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import VisuallyHiddenInput from '@/components/fileUpload/styles';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useToast } from '@/hooks';
import FileUploadProps from '@/components/fileUpload/types';

function FileUpload({
    label,
    index,
    file = [],
    setFile,
    errors = {},
    helperTexts = {},
    multiple = false,
    showTooltip = false,
    tooltipTitle = null,
}: FileUploadProps) {
    const showToast = useToast();
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files ? Array.from(event.target.files) : [];
        const maxSize = 1024 * 1024; 

        const invalidFiles = files.filter((file) => file.size > maxSize);

        if (invalidFiles.length > 0) {
            showToast({
                message: 'El tamaño máximo permitido es de 1MB',
                position: 'top-right',
                type: 'info',
            });
            if (inputRef.current) {
                inputRef.current.value = '';
            }
            return;
        }

        setFile((prev) => ({
            ...prev,
            [index]: multiple ? [...(prev[index] || []), ...files] : files,
        }));
    };

    const handleRemoveFile = () => {
        setFile((prev) => ({
            ...prev,
            [index]: [],
        }));
    };

    return (
        <Box display="flex" flexDirection="column" gap={1}>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                sx={{ flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}
            >
                <Box display="flex" alignItems="center">
                    {showTooltip && tooltipTitle && (
                        <Tooltip title={tooltipTitle} arrow>
                            <IconButton sx={{ mr: 1 }}>
                                <HelpOutlineIcon />
                            </IconButton>
                        </Tooltip>
                    )}
                    <Typography variant="subtitle1">{label}</Typography>
                </Box>
                <Box
                    display="flex"
                    gap={1}
                    sx={{ flexDirection: { xs: 'column', sm: 'row' }, flexWrap: 'wrap' }}
                >
                    <Button
                        component="label"
                        size="medium"
                        variant="contained"
                        color="primary"
                        startIcon={<CloudUploadIcon />}
                        sx={{ width: { xs: '100%', sm: 'auto' } }}
                    >
                        {multiple
                            ? file.length > 0
                                ? `${file.length} archivo(s) seleccionado(s)`
                                : 'Adjuntar documento'
                            : file.length > 0
                                ? file[0].name
                                : 'Adjuntar documento'}
                        <VisuallyHiddenInput
                            ref={inputRef}
                            type="file"
                            onChange={handleFileChange}
                            accept="application/pdf"
                            multiple={multiple}
                        />
                    </Button>
                    {file.length > 0 && (
                        <>
                            <Button
                                size="medium"
                                type="button"
                                variant="contained"
                                color="inherit"
                                onClick={handleRemoveFile}
                                sx={{ width: { xs: '100%', sm: 'auto' } }}
                            >
                Q               uitar
                            </Button>
                            <Button
                                size="medium"
                                type="button"
                                variant="contained"
                                color="success"
                                onClick={() => window.open(URL.createObjectURL(file[0]), '_blank')}
                                sx={{ width: { xs: '100%', sm: 'auto' } }}
                            >
                                Ver PDF
                            </Button>
                        </>
                    )}
                </Box>
            </Box>
            {errors[index] && <FormHelperText error>{helperTexts[index]}</FormHelperText>}
        </Box>
    );
}

export default FileUpload;
