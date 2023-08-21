import addData from "@/firebase/addData";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { id, name, going, logged, number, email } = await request.json();

  try {
    const { result, error } = await addData("invitados", String(id), {
      name: name,
      going: going === "true" ? true : false,
      logged,
      phone: number ?? "",
      email: email ?? "",
    });
    return NextResponse.json({ status: 200, result, error });
  } catch (err) {
    console.log("🖕🖕🖕", err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
