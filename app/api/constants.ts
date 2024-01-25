import { NextResponse } from "next/server";

export const notFound = () => NextResponse.json({ error: "Not Found !" }, { status: 404 });

// types

export type RouteParams = { params: { id: string } }