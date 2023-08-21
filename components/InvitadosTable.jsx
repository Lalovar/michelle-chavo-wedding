"use client";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import LinearProgress from "@mui/material/LinearProgress";

export default function InvitadosTable() {
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [rowSelectionModel, setRowSelectionModel] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [invitesToDelete, setInvitesToDelete] = React.useState([]);
  const columns = [
    { field: "name", headerName: "Nombre", flex: 1, minWidth: 250 },
    { field: "going", headerName: "Asistencia", flex: 1, minWidth: 150 },
    { field: "email", headerName: "Email", flex: 1, minWidth: 250 },
    { field: "number", headerName: "Teléfono", flex: 1, minWidth: 200 },
    {
      field: "logged",
      headerName: "Actualizado",
      flex: 1,
      minWidth: 250,
    },
  ];

  const fetchRowData = () => {
    setLoading(true);
    fetch("lista-de-invitados/api").then((res) => {
      res
        .json()
        .then((r) => {
          setRows(r.res);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  };

  React.useEffect(fetchRowData, []);


  const DeleteToolbar = ({ selectedRows, allRows }) => {
    const handleDelete = () => {
      setOpen(true);
      const matches = allRows.filter((row) => {
        return selectedRows.includes(row.id);
      });
      setInvitesToDelete(matches);
    };
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        <Button
          onClick={() => handleDelete()}
          color="error"
          variant="contained"
          size="small"
          disabled={!selectedRows.length}
        >
          Eliminar seleccionados
        </Button>
      </Box>
    );
  };

  return (
    <>
      <AlertDialog
        invitesToDelete={invitesToDelete}
        open={open}
        setOpen={setOpen}
        setLoading={setLoading}
        fetchRowData={fetchRowData}
        setRows={setRows}
      />
      <DataGrid
        columns={columns}
        rows={rows}
        hideFooter
        checkboxSelection
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setRowSelectionModel(newRowSelectionModel);
        }}
        rowSelectionModel={rowSelectionModel}
        loading={loading}
        slots={{
          loadingOverlay: LinearProgress,
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
  );
}

function AlertDialog({
  invitesToDelete,
  open,
  setOpen,
  setLoading,
  fetchRowData,
  setRows
}) {
  const handleConfirm = () => {
    setOpen(false);
    setLoading(true);
    const ids = invitesToDelete.map((invites) => invites.id);
    const body = JSON.stringify({ ids });

    fetch("lista-de-invitados/api", {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        setRows([])
      })
      .finally(() => {
        fetchRowData()
      });
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">
        {"Remover invitaciones seleccionadas"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Deseas remover las siguientes invitaciones?
          <ol style={{ marginLeft: "20px" }}>
            {invitesToDelete.map((invite) => {
              return <li key={invite.id}>{invite.name}</li>;
            })}
          </ol>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleConfirm} autoFocus color="error">
          Eliminar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
