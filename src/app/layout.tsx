import Header from '@/components/Header';
import './globals.css';
import ChannelsSidebar from '@/components/ChannelsSidebar';

export const metadata = {
  title: 'CTV',
  description: 'Twitch inspired layout',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <main className='flex overflow-hidden grow'>
          <ChannelsSidebar />
          {children}
        </main>
      </body>
    </html>
  );
}
