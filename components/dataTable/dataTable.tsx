import { DataGrid } from '@mui/x-data-grid';
import { esES } from '@mui/x-data-grid/locales';
import Box from '@mui/material/Box';
import type DataTableProps from '@/components/dataTable/types/dataTableProps';

function DataTable({
    loading,
    rows,
    columns,
    paginationModel,
    pageSizeOptions,
    onPaginationModelChange,
    onSortModelChange,
    onFilterModelChange,
    total,
}: DataTableProps) {
    return (
        <Box sx={{ overflowX: 'auto' }}>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    loading={loading}
                    rows={rows}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={pageSizeOptions}
                    onPaginationModelChange={onPaginationModelChange}
                    onSortModelChange={onSortModelChange}
                    onFilterModelChange={onFilterModelChange}
                    rowCount={total}
                    paginationMode="server"
                    sortingMode="server"
                    filterMode="server"
                    localeText={esES.components.MuiDataGrid.defaultProps.localeText}
                    disableRowSelectionOnClick
                    disableColumnSelector
                />
            </Box>
        </Box>
    );
}

export default DataTable;
