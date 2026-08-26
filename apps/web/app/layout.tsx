import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PideTuCoche.eu | Tu próximo coche, bajo pedido",
  description: "Buscamos, revisamos y entregamos tu próximo vehículo de ocasión.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
