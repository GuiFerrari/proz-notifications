import { NotificationsContextProvider } from '@/contexts/NotificationsContext';
import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Proz Educação - Cursos Técnicos e Profissionalizantes',
  description: 'Nossos cursos técnico são focados na prática e no que o mercado mais precisa. Encontre a unidade mais próxima de você e vem ser Proz! Conheça!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NotificationsContextProvider>
          {children}
        </NotificationsContextProvider>
      </body>
    </html>
  )
}
