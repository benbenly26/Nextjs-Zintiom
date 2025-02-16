import { Poppins } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "@/components/Layout/Layout";
import { Toaster } from "sonner";

const mons = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Zintiom | Digital Engineering Services & Solutions for Enterprise Digital Growth",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={mons.className}>
        <div>
          <Toaster position="top-center" richColors duration={3000} />
        </div>
        <AppRouterCacheProvider>
          <Layout>{children}</Layout>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
