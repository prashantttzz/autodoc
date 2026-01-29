import { requireAuth } from "@/lib/auth/auth-utils";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await requireAuth();
  return (
    <html lang="en"  suppressHydrationWarning>
      <body>
        <div className="md:flex">         
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
