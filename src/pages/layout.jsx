
import Navbar from './components/NavBar'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main> 
          <Navbar />
          {children} 
        </main>
      </body>
    </html>
  )
}
