import { FC } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import { FormHelperText } from '@mui/material';
import type FileInputProps from '@/components/fileInput/types';
import { useTheme } from '@mui/material';

registerPlugin(FilePondPluginFileValidateType);

const FileInput: FC<FileInputProps> = ({
    required,
    error,
    helperText,
    filePondRef,
    file,
    setFile,
    multiple,
    maxFiles,
    acceptedFileTypes,
    label,
    onaddfile,
    onremovefile,
    stepper = false,
    index = null
}) => {
    const theme = useTheme();

    return (
        <div className={theme.palette.mode === 'dark' ? 'dark' : ''}>
            <FilePond
                ref={filePondRef}
                files={file}
                onupdatefiles={stepper ? (files) => {
                    setFile(prevData => ({
                        ...prevData,
                        [index ?? '']: files
                    }));
                } : setFile}
                allowMultiple={multiple}
                maxFiles={maxFiles}
                labelIdle={label}
                labelFileTypeNotAllowed="Archivo de tipo no válido"
                fileValidateTypeLabelExpectedTypes="Se espera {allButLastType} o {lastType}"
                allowFileTypeValidation={true}
                acceptedFileTypes={acceptedFileTypes}
                onaddfile={(error, file) => onaddfile(error, file)}
                onremovefile={(error, file) => onremovefile(error, file)}
                required={required}
            />
            {error && <FormHelperText sx={{ color: '#FF5630' }}>{helperText}</FormHelperText>}
        </div>
    );
};

export default FileInput;
