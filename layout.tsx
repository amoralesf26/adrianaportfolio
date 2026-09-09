import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Adriana Francia Higinio | Asistente veterinaria',
  description:
    'CV profesional bilingüe de Adriana Francia Higinio, asistente veterinaria especializada en clínica de animales menores.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
