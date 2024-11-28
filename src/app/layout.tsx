import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { ThemeProvider } from "./provider";
const inter = Inter( { subsets: [ "latin" ] } );

export const metadata: Metadata = {
  title: "BMS Co.",
  description: "هوشمندسازی برای همه",
};

export default function RootLayout ( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> )
{
  return (
    <html lang="en" dir="rtl" >
      <body className={ inter.className }>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          { children }
        </ThemeProvider>
      </body>
    </html>

  );
}
