import {Inter, Bebas_Neue} from 'next/font/google'
import "./globals.css";

const inter = Inter({
  weight:["100","200","300","400","500","600","700","800","900"],
  subsets: ["latin"],
  variable: "--font-inter",
})

const bebasNeu = Bebas_Neue({
  weight:["400"],
  subsets: ["latin"],
  variable: "--font-bebas",
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${inter.variable} ${bebasNeu.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
