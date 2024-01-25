import { NextRequest, NextResponse } from "next/server";
import db from "@/prisma/client";
import { notFound, RouteParams } from "../../constants";

const getById = async (id: string) => await db.user.findUnique({
    where: {
        id: parseInt(id)
    }
})

export async function GET(
    _: NextRequest,
    {params}: RouteParams
) {
    const user = await getById(params.id)
    if (!user) return notFound()

    return NextResponse.json(user)
}

export async function PUT(
    request: NextRequest,
    {params}: RouteParams
) {
    const user = await getById(params.id)
    if (!user) return notFound()
    
    return NextResponse.json(user);
}

export async function DELETE(_: NextRequest, { params }: RouteParams) {
    const user = await db.user.delete({
        where: {
            id: parseInt(params.id)
        }
    })
    
    return NextResponse.json(user)
}
