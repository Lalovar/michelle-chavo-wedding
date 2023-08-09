import InvitadosTable from '@/components/InvitadosTable';
import Typography from '@mui/material/Typography';
import { createKysely } from '@vercel/postgres-kysely';

const fetchInvitados = () => {
  const db = createKysely();
  return db.selectFrom('invitados').selectAll().execute();
}

export default async function Page() {
  const invitados = await fetchInvitados()
  const refinedRows = invitados.map((invitado) => {
    const offset = -6
    const d = new Date(invitado.logged)
    const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    const nd = new Date(utc + (3600000 * offset));

    return {
      id: invitado.id,
      name: invitado.name,
      going: invitado.going ? "✅" : "❌",
      email: invitado.email,
      number: invitado.number,
      logged: nd.toLocaleDateString() + " " + nd.toLocaleTimeString(),
      actions: 1
    }
  })
  console.log("🌍🌍🌍🌍🌍",refinedRows)
  return (
    <main className={"some"}>
      <Typography variant="h5" gutterBottom textAlign={"center"}>
        lista de invitados
      </Typography>
      <InvitadosTable rows={refinedRows} />
    </main>
  )
}
