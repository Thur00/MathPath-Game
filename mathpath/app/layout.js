import "./globals.css";
import { MathJaxProvider } from "./contexts/MathJaxProvider";

export const metadata = {
  title: "MathPath",
  description: "Resoluções do jogo MathPath",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MathJaxProvider>
          {children}
        </MathJaxProvider>
      </body>
    </html>
  );
}
