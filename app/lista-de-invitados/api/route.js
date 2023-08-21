import deleteData from "@/firebase/deleteData";
import getData from "@/firebase/getData";
import { NextResponse } from "next/server";

const refineRows = (invitados) => {
  return invitados?.map((invitado) => {
    console.log("🇩🇪🇩🇪🇩🇪🇩🇪🇩🇪".invitado);
    const offset = -6;
    const d = new Date(invitado.logged);
    const utc = d.getTime() + d.getTimezoneOffset() * 60000;
    const nd = new Date(utc + 3600000 * offset);

    return {
      id: invitado.id,
      name: invitado.name,
      going: invitado.going ? "✅" : "❌",
      email: invitado.email,
      number: invitado.phone,
      logged: nd.toLocaleDateString() + " " + nd.toLocaleTimeString(),
      actions: 1,
    };
  });
};

export async function GET() {
  try {
    const { result } = await getData("invitados");
    return NextResponse.json({ status: 200, res: refineRows(result) });
  } catch (err) {
    return NextResponse.json({ error: err, status: 500, res: [] });
  }
}

export async function POST(request) {
  const { ids } = await request.json();

  try {
    ids.forEach(async (id) => {
      await deleteData("invitados", id);
    });
    return NextResponse.json({ status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err, status: 500, res: [] });
  }
}
