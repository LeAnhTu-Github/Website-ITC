import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import LoginModal from "./components/Modals/LoginModal";
import RegisterModal from "./components/Modals/RegisterModal";
import Footer from "./components/Footer";
import getCurrentUser from "./actions/getCurrentUser";
import ToasterProvider from "./providers/ToasterProvider";
import Providers from "./components/Provider";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  weight: "500",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "ITC - CLUB",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={nunito.className}>
        <Providers>
          <ToasterProvider />
          <Navbar currentUser={currentUser} />
          <LoginModal />
          <RegisterModal />
          <div className="pt-28 pb-20"> {children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
