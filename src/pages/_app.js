import '@/styles/globals.css'
import MainLayout from '@/layout/main'

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}
