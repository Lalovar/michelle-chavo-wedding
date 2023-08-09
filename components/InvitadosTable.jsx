"use client"
import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import LinearProgress from '@mui/material/LinearProgress';
import { createKysely } from '@vercel/postgres-kysely';

const deleteInvitados = (selectedRows) => {
    const db = createKysely();
    return db.deleteFrom('invitados').where("id", "in",).execute();
}

export default function InvitadosTable({ rows }) {
    const [rowSelectionModel, setRowSelectionModel] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [invitesToDelete, setInvitesToDelete] = React.useState([]);
    const columns = [
        { field: 'name', headerName: 'Nombre', flex: 1, minWidth: 250, },
        { field: 'going', headerName: 'Asistencia', flex: 1, minWidth: 150 },
        { field: 'email', headerName: 'Email', flex: 1, minWidth: 250 },
        { field: 'number', headerName: 'Number', flex: 1, minWidth: 200 },
        { field: 'logged', headerName: 'Fecha de confirmación ', flex: 1, minWidth: 250 },
        { field: 'actions', headerName: 'Acciones ', flex: 1, minWidth: 250 },
    ];

    const DeleteToolbar = ({ selectedRows, allRows }) => {
        const handleDelete = () => {
            setOpen(true);
            const matches = allRows.filter(row => {
                return selectedRows.includes(row.id)
            })
            setInvitesToDelete(matches)
        }
        return (
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '100%' }}>
                <Button onClick={() => handleDelete()} color="error" variant="contained" size="small">Eliminar seleccionados</Button>
            </Box>
        )
    }

    return (
        <>
            <AlertDialog invitesToDelete={invitesToDelete} open={open} setOpen={setOpen} />
            <DataGrid columns={columns}
                rows={rows}
                hideFooter
                checkboxSelection
                onRowSelectionModelChange={(newRowSelectionModel) => {
                    setRowSelectionModel(newRowSelectionModel);
                }}
                rowSelectionModel={rowSelectionModel}
                // slots={{
                //     loadingOverlay: LinearProgress,
                // }}
                // loading={true}
                slots={{
                    toolbar: DeleteToolbar,
                }}
                slotProps={{
                    toolbar: {
                        selectedRows: rowSelectionModel,
                        allRows: rows,
                    },
                }}
            />
        </>
    )
}

function AlertDialog({ invitesToDelete, open, setOpen }) {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle id="alert-dialog-title">
                {"Remover invitaciones seleccionadas"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Deseas remover las siguientes invitaciones?
                    {invitesToDelete.map(invite => {
                        return (
                            <div key={invite.id}>{invite.name}</div>
                        )
                    })
                    }
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button onClick={handleClose} autoFocus color="error">
                    Eliminar
                </Button>
            </DialogActions>
        </Dialog>
    );
}