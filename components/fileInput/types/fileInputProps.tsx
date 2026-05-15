import { Dispatch, SetStateAction, RefObject } from 'react';
import { FilePond } from 'react-filepond';
import { ActualFileObject, FilePondFile, FilePondInitialFile } from 'filepond';

type FileInputProps = {
  required: boolean;
  error: boolean;
  helperText: string | null;
  filePondRef: RefObject<FilePond | null> | null;
  file: (string | Blob | ActualFileObject | FilePondInitialFile)[];
  setFile: Dispatch<SetStateAction<FilePondFile[]>>; 
  multiple: boolean;
  maxFiles: number;
  acceptedFileTypes: string[];
  label: string;
  onaddfile: (error: unknown, file: FilePondFile) => void;
  onremovefile: (error: unknown, file: FilePondFile) => void;
  stepper?: boolean;
  index?: number | string | null;
};
export default FileInputProps;
