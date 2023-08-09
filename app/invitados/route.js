import { createKysely } from '@vercel/postgres-kysely';
import { NextResponse } from 'next/server'

export async function POST(request) {
  const { id, name, going, logged, number, email, replace } = await request.json()
  try {
    const db = createKysely();
    if (replace) {
      const operation = await db.updateTable('invitados').set({ name, logged, going, number, email }).where("id", "=", id).executeTakeFirst()
    }
    else {
      const operation = await db.insertInto('invitados').values({ id, name, logged, going, number, email }).execute()
    }
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 })
  }
  return NextResponse.json({ status: 200 })
}
