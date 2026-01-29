"use server";
import { auth } from "../auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import prisma from "../db";

export const requireAuth = async () => {
  const headersList = await headers();
  const session = await auth.api.getSession({ headers: headersList });

  if (!session) redirect("/");

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
  });

  if (!user) redirect("/");
  return session;
};

export const requireUnAuth = async () => {
  const session = await auth.api.getSession({ headers: await headers() });
  if (session) {
    redirect("/dashboard");
  }
  return session;
};
