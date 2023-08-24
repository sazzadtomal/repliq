import './globals.css'
import Store from '@/Store/Store'
import App from '@/components/App/App'


export const metadata = {
  title: 'Repliq',
  description: 'An Ecommerce with Admin Dash',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <App>{children}</App>
      </body>
    </html>
  )
}
