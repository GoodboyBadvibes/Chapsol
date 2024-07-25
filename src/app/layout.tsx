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
      <body className={jura.className} style={{maxWidth:'1440px', margin:'auto',position:'relative'}}>
        <div className="fixed w-full left-0" style={{zIndex:'999'}}>
          <Nav />
        </div>
          

        <div className=" pt-24">
          {children}
        </div>
         
        </body>
    </html>
  );
}
