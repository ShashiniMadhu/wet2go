import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="footer">
      <Logo />
      <p>© {new Date().getFullYear()} Wet2Go. Pack Wet. Travel Fresh.</p>
    </footer>
  )
}
