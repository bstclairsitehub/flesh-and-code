'use client';

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-void border-t border-matrix/30 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-mono text-matrix tracking-widest font-bold mb-2">
              FLESH & CODE
            </p>
            <p className="text-static text-sm">
              Engineered for the Body. Built for the Network.
            </p>
          </div>

          <div>
            <p className="font-mono text-chrome text-sm font-semibold mb-3">Navigation</p>
            <ul className="space-y-2 text-static text-sm">
              <li>
                <a href="/" className="hover:text-matrix transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/shop" className="hover:text-matrix transition-colors">
                  Shop
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-matrix transition-colors">
                  Signal
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-chrome text-sm font-semibold mb-3">Connect</p>
            <ul className="space-y-2 text-static text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-matrix transition-colors"
                  onClick={(e) => e.preventDefault()}
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-matrix transition-colors"
                  onClick={(e) => e.preventDefault()}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-matrix transition-colors"
                  onClick={(e) => e.preventDefault()}
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-matrix/20 mt-8 pt-6 text-center text-static text-xs">
          <p>&copy; {new Date().getFullYear()} FLESH &amp; CODE. All rights reserved.</p>
          <p className="text-[0.65rem] text-static/40 mt-2 tracking-widest uppercase font-mono">
            Designed &amp; Developed by St. Clair Design Co.
          </p>
        </div>
      </div>
    </footer>
  );
}
