import { NextResponse } from "next/server"

export function middleware(req, event) {
    console.log("Entrou")
    NextResponse.next()
}