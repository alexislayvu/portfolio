import localFont from 'next/font/local';
import './globals.css';

const NTR = localFont({
  src: '../public/fonts/NTR-Regular.ttf',
  display: 'swap',
});

export const metadata = {
  title: 'Alexis Lay Vu',
  description: 'Aspiring Software Engineer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={NTR.className}>{children}</body>
    </html>
  );
}
