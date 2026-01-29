// "use server";
// import { auth } from "../auth/auth";
// import { headers } from "next/headers";
// import { redirect } from "next/navigation";
// import prisma from "../db";

// export const requireAuth = async () => {
//   const headersList = await headers();
//   const session = await auth.api.getSession({ headers: headersList });

//   if (!session) redirect("/");

//   const user = await prisma.user.findUnique({
//     where: { id: session.user.id },
//     select: { githubInstallationId: true },
//   });

//   if (!user) redirect("/");
//   const currentUrl = headersList.get("x-url") || "";
//   const isReturningFromGithub = currentUrl.includes("installation_id=");
//   if (!user.githubInstallationId && !isReturningFromGithub) {
//     redirect("https://github.com/apps/code-mantis-ai/installations/new");
//   }

//   return session;
// };
// export const requireUnAuth = async () => {
//   const session = await auth.api.getSession({ headers: await headers() });
//   if (session) {
//     redirect("/dashboard");
//   }
//   return session;
// };
