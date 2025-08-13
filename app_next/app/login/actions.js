"use server";

import { importJWK, SignJWT } from "jose";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";


export async function Login(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (email !== "non@gmail.com" && password !== "1234") {
    return { message: "Login Fail" };
  }

  const secretJWK = {
    kty: "oct",
    k: process.env.JOSE_SECRET,
  };

  const secretKey = await importJWK(secretJWK, 'HS256')

  const token = await new SignJWT({ email })
  .setProtectedHeader({ alg: 'HS256'})
  .setIssuedAt()
  .setExpirationTime('2h')
  .sign(secretKey)

  cookies().set('token', token)

  redirect('/manage')
}
