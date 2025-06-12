import "../app/globals.css"; // Optional if you have global styles
import Header from "@/components/Header/Header";

export const metadata = {
  title: "My App",
  description: "Website using App Router",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header />  
        <main style={{ flex: 1 }}>{children}</main>
      </body>
    </html>
  );
}
