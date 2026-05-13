import './globals.css';

export const metadata = {
  title: 'Fermah Simulator',
  description: 'Proactive vs Reactive Infrastructure',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
      }
