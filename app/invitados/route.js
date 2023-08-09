import { createKysely } from '@vercel/postgres-kysely';
import { NextResponse } from 'next/server'

const db = createKysely();

export async function POST(request) {
  const { id, name, going, logged, number, email, replace } = await request.json()
  debugger
  console.log("❤️", id, name, going, logged, number, email, "❤️");
  try {
    if (replace) {
      const operation = await db.updateTable('invitados').set({ name, logged, going, number, email }).where("id", "=", id).executeTakeFirst()
      console.log("🔥", operation, "🔥")
    }
    else {
      const operation = await db.insertInto('invitados').values({ id, name, logged, going, number, email }).execute()
      console.log("🔥", operation, "🔥")
    }
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 })
  }
  return NextResponse.json({ status: 200 })
}
