import InvitadosTable from "@/components/InvitadosTable";
import Typography from "@mui/material/Typography";

export default async function Page() {
  return (
    <main className={"some"}>
      <Typography variant="h5" gutterBottom textAlign={"center"}>
        lista de invitados
      </Typography>
      <InvitadosTable />
    </main>
  );
}
