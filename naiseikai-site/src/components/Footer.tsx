import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[rgba(100,80,200,0.2)] bg-[rgba(5,5,15,0.85)] backdrop-blur-sm pb-56">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <p className="font-serif text-xl font-semibold mb-1"
              style={{ color: '#bf5fff', textShadow: '0 0 10px rgba(191,95,255,0.5)' }}>
              内省界
            </p>
            <p className="text-xs text-text-faint leading-relaxed">
              The Naiseikai Universe<br />
              A world of introspection.<br />
              Set in Neo-Japan 2100+.<br />
              This Universe is constantly expanding....<br />
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs uppercase tracking-widest text-text-faint font-mono mb-3">Navigation</p>
            <ul className="space-y-2 text-sm text-text-muted">
              <li><Link to="/" className="hover:text-[#00e5ff] transition-colors duration-150">Home</Link></li>
              <li><Link to="/universe" className="hover:text-[#00e5ff] transition-colors duration-150">Universe Overview</Link></li>
              <li><Link to="/lore" className="hover:text-[#00e5ff] transition-colors duration-150">Lore & Timeline</Link></li>
              <li><Link to="/titles" className="hover:text-[#00e5ff] transition-colors duration-150">Titles & Stories</Link></li>
              <li><Link to="/songbook" className="hover:text-[#00e5ff] transition-colors duration-150">Songbook</Link></li>
            </ul>
          </div>

          {/* External */}
          <div>
            <p className="text-xs uppercase tracking-widest text-text-faint font-mono mb-3">Author</p>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>
                <a href="https://www.alarkiusej.com" target="_blank" rel="noopener noreferrer"
                  className="hover:text-[#00e5ff] transition-colors duration-150">
                  AlarkiusEJ.com ↗
                </a>
              </li>
              <li><Link to="/author" className="hover:text-[#00e5ff] transition-colors duration-150">Author's Note</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[rgba(100,80,200,0.15)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-text-faint">
            © All Rights Reserved · KarasuEJ / Alarkius Elvya Jay ·{' '}
            <a href="https://www.alarkiusej.com" className="hover:text-[#00e5ff] transition-colors">alarkiusej.com</a>
          </p>
          <p className="text-xs text-text-faint italic">
            "This is not the world you know. This is The World of Introspection."
          </p>
        </div>
      </div>
    </footer>
  )
}
