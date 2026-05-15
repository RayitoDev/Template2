import { GridColDef, GridPaginationModel, GridSortModel, GridFilterModel } from '@mui/x-data-grid';

type DataTableProps = {
  loading: boolean;
  rows: string[];
  columns: GridColDef[];
  paginationModel: GridPaginationModel;
  pageSizeOptions: number[];
  onPaginationModelChange: (model: GridPaginationModel) => void;
  onSortModelChange: (model: GridSortModel) => void;
  onFilterModelChange: (model: GridFilterModel) => void;
  total: number;
};

export default DataTableProps;