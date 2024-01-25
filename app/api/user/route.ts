import { NextRequest, NextResponse } from "next/server";

import db from "@/prisma/client";

import {  Prisma, User } from "@prisma/client";

export async function POST(request: NextRequest) {
  // do validation

  const body: Prisma.UserCreateInput = await request.json()

  const user: Prisma.UserCreateInput = {
    email: body.email
  }

  const created = await db.user.create({
    data: user
  })
    
  return NextResponse.json(created)
}

export async function GET(request: NextRequest) {
  // do validation

  const users = await db.user.findMany()
    
  return NextResponse.json(users)
}