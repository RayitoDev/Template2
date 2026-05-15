import { Dispatch, SetStateAction } from 'react';

type FileUploadProps = {
  label: string;
  index: number;
  file?: File[];
  setFile: Dispatch<SetStateAction<Record<number, File[]>>>;
  errors?: Record<number, boolean>;
  helperTexts?: Record<number, string>;
  multiple?: boolean;
  showTooltip?: boolean;
  tooltipTitle?: string | null;
};

export default FileUploadProps;