import type { Metadata } from "next";
import {jura} from '../app/Fonts';
import "./globals.css";
import Nav from "./components/Nav";
import 'remixicon/fonts/remixicon.css';

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chapsol Networks",
  description: "Empower Your Business With Intuitive Software Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  
  

  return (
    <html lang="en">
      <body className={jura.className}>
          <Nav />

        <div className=" pt-24">
          {children}
        </div>
         
        </body>
    </html>
  );
}
