import type { NextRequest } from 'next/server'
import { createSchema } from '@/app/lib/actions'

export async function GET(request: NextRequest) {
  try {
    const result = await createSchema();
    return Response.json({ result })
  } catch (e) {
    console.log(e)
  }
}
