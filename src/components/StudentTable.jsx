import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Nom', width: 130 },
    { field: 'age', headerName: 'Âge', type: 'number', width: 90 },
    { field: 'gender', headerName: 'Genre', width: 110, valueGetter: (value) => value === 'Male' ? 'Masculin' : 'Féminin' },
    { field: 'grade', headerName: 'Note', width: 90 },
    { field: 'branche', headerName: 'Filière', width: 160 },
];

const paginationModel = { page: 0, pageSize: 5 };

const StudentTable = ({ data }) => {
    if (!data || data.length === 0) {
        return <div style={{ textAlign: 'center', padding: '2rem' }}>Aucune donnée disponible.</div>;
    }

    return (
        <div className="table-wrapper" style={{ maxWidth: '1080px', padding: '1rem', marginRight: '2rem', marginBottom: '2rem' }}>
            <h2 style={{ marginBottom: '1.2rem', color: '#535bf2', fontWeight: 700 }}>Liste des Étudiants</h2>
            <Paper sx={{ height: 400, width: '100%', padding: '1rem', borderRadius: '1px' }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    sx={{
                        border: 0,
                        '& .MuiDataGrid-cell': {
                            fontStyle: 'italic',
                            fontWeight: 700,
                            color: '#333'
                        },
                        '& .MuiDataGrid-columnHeaders': {
                            color: '#535bf2',
                            fontStyle: 'italic',
                            fontWeight: 700,


                        }
                    }}
                    localeText={{
                        noRowsLabel: 'Aucune donnée',
                        columnMenuLabel: 'Menu',
                        columnMenuShowColumns: 'Afficher les colonnes',
                        columnMenuFilter: 'Filtrer',
                        columnMenuHideColumn: 'Masquer la colonne',
                        columnMenuUnsort: 'Annuler le tri',
                        columnMenuSortAsc: 'Trier par ordre croissant',
                        columnMenuSortDesc: 'Trier par ordre décroissant',
                        footerRowSelected: (count) => `${count.toLocaleString()} ligne(s) sélectionnée(s)`,
                        MuiTablePagination: {
                            labelRowsPerPage: 'Lignes par page:',
                            labelDisplayedRows: ({ from, to, count }) => `${from}–${to} sur ${count !== -1 ? count : `plus de ${to}`}`,
                        },
                    }}
                />
            </Paper>
        </div>
    );
};

export default StudentTable;