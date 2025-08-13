import { NextResponse } from "next/server";
import { importJWK, jwtVerify } from "jose";
import { cookies } from "next/headers";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  try {
    const token = request.cookies.get('token').value;

    const secretJWK = {
      kty: "oct",
      k: process.env.JOSE_SECRET,
    };

    const secretKey = await importJWK(secretJWK, "HS256");
    const { payload } = await jwtVerify(token, secretKey);

    if(payload.email !== "non@gmail.com"){
      throw new Error("email incorrect")
    }

    console.log(payload)
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/manage/:path*",
};
