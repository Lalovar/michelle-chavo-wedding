'use client';
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import { FormGroup } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';


export default function ConfirmForm() {
    const already = JSON.parse(localStorage.getItem("inf")) || { name: null, email: null, number: null, going: null }
    const [name, setName] = React.useState(already.name);
    const [email, setEmail] = React.useState(already.email);
    const [number, setNumber] = React.useState(already.number);
    const [going, setGoing] = React.useState(already.going);
    const [disabled, setDisabled] = React.useState(!!already);
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true)
        const id = already.id ?? new Date().valueOf();
        const logged = new Date();
        const body = JSON.stringify({ id, name, logged, going, email, number, replace: !!already })
        fetch("/invitados", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body,
        }).then(() => {
            localStorage.setItem("inf", body)
            setDisabled(true)
        }).catch((err) => { console.log(err) }).finally(() => { setLoading(false) })
    }

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '90%' },
                maxWidth: '500px',
                margin: 'auto',
            }}
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <TextField id="name" label="Nombre" variant="standard" required margin="dense" value={name} onChange={e => setName(e.target.value)} disabled={disabled} />
            <FormGroup>
                <FormLabel>Datos de contacto (Opcionales)</FormLabel>
                <TextField id="number" label="Teléfono" variant="standard" type="number" value={number} onChange={e => setNumber(e.target.value)} disabled={disabled} />
                <TextField id="email" label="Email" variant="standard" type='email' value={email} onChange={e => setEmail(e.target.value)} disabled={disabled} />
            </FormGroup>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="radio"
            >
                <FormLabel id="demo-controlled-radio-buttons-group" >Asistencia</FormLabel>
                <FormControlLabel required value={true} checked={going === "true"} onChange={e => setGoing(e.target.value)} control={<Radio />} label="Asistiré" disabled={disabled} />
                <FormControlLabel required value={false} checked={going === "false"} onChange={e => setGoing(e.target.value)} control={<Radio />} label="No Asistiré" disabled={disabled} />
            </RadioGroup>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',
            }}>
                {disabled ?
                    <>
                        <Typography variant="h5" gutterBottom textAlign={"center"}>
                            ¡Te esperamos {name}!
                        </Typography>
                        <Button color="warning" variant="contained" onClick={() => setDisabled(false)} >Editar respuesta</Button>
                    </>
                    :
                    <LoadingButton type='submit' variant="contained" loading={loading}>Confirmar</LoadingButton>
                }
            </Box>
        </Box >
    )
}