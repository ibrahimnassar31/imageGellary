import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
   title: "URL Shortener",
   description: "Create short, memorable links in seconds",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body>
            <Toaster
               richColors
               position="top-center"
             />
            {children}
         </body>
      </html>
   );
}
