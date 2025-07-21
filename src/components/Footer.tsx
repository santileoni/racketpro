import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      {/* Main footer content */}
      <div className="container py-12 lg:py-16">
        {/* Logo section */}
        <div className="mb-12 lg:mb-16">
          <div className="max-w-xs">
            <Image
              src="/images/company-logo@2x.png"
              alt="Racket Professional Organization"
              width={240}
              height={64}
              className="h-auto w-full"
            />
          </div>
        </div>

        {/* Navigation sections */}
        <nav className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Learn Section */}
          <section>
            <h3 className="mb-4 text-lg font-extrabold tracking-wide lg:text-xl">LEARN</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/memberships"
                  className="text-sm font-light transition-colors hover:text-brand-orange lg:text-base"
                >
                  Memberships
                </Link>
              </li>
              <li>
                <Link
                  href="/training"
                  className="text-sm font-light transition-colors hover:text-brand-orange lg:text-base"
                >
                  Training & Education
                </Link>
              </li>
              <li>
                <Link
                  href="/instructors"
                  className="text-sm font-light transition-colors hover:text-brand-orange lg:text-base"
                >
                  Instructors
                </Link>
              </li>
            </ul>
          </section>

          {/* About Us Section */}
          <section>
            <h3 className="mb-4 text-lg font-extrabold tracking-wide lg:text-xl">ABOUT US</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm font-light transition-colors hover:text-brand-orange lg:text-base"
                >
                  About RPO
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-sm font-light transition-colors hover:text-brand-orange lg:text-base"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-sm font-light transition-colors hover:text-brand-orange lg:text-base"
                >
                  News & Events
                </Link>
              </li>
            </ul>
          </section>

          {/* Support Section */}
          <section>
            <h3 className="mb-4 text-lg font-extrabold tracking-wide lg:text-xl">SUPPORT</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/orders"
                  className="text-sm font-light transition-colors hover:text-brand-orange lg:text-base"
                >
                  Orders
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-sm font-light transition-colors hover:text-brand-orange lg:text-base"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm font-light transition-colors hover:text-brand-orange lg:text-base"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </section>

          {/* Connect With Us Section */}
          <section>
            <h3 className="mb-4 text-lg font-extrabold tracking-wide lg:text-xl">CONNECT WITH US</h3>
            <div className="flex items-center space-x-6">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded bg-white">
                  <svg className="h-5 w-5 text-brand-navy" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
                aria-label="Follow us on Facebook"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded bg-white">
                  <svg className="h-5 w-5 text-brand-navy" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
                aria-label="Follow us on YouTube"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded bg-white">
                  <svg className="h-5 w-5 text-brand-navy" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
              </Link>
            </div>
          </section>
        </nav>
      </div>

      {/* Bottom section with legal links */}
      <div className="border-t border-white/10">
        <div className="container py-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center lg:flex-row lg:space-y-0">
            {/* Legal links */}
            <nav aria-label="Legal links">
              <ul className="flex flex-wrap items-center justify-center gap-6 lg:gap-12">
                <li>
                  <Link href="/terms" className="text-sm font-light text-gray-300 transition-colors hover:text-white">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-sm font-light text-gray-300 transition-colors hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-sm font-light text-gray-300 transition-colors hover:text-white">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Supported by JOOLA */}
            <div className="flex items-center space-x-2 lg:pl-12">
              <div className="h-4 w-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                  <g clipPath="url(#clip0_21960_75292)">
                    <path
                      d="M17.2447 15.8578L9.49353 0.951351C9.28758 0.592315 8.77256 0.583613 8.55468 0.935559L6.9806 3.97383C6.9806 3.97383 6.73984 4.32384 6.91485 4.69577C7.08985 5.0677 10.8314 12.3155 10.8314 12.3155C10.9078 12.4653 10.7988 12.6429 10.6306 12.6429H7.36026C7.19041 12.6429 7.07664 12.4682 7.14497 12.3129L8.22046 10.2409C8.22046 10.2409 8.5115 9.69424 7.83339 9.69424H4.51891C4.16406 9.69424 3.88528 9.83154 3.70608 10.1761L0.749351 15.8697C0.552107 16.2339 0.815744 16.6768 1.23022 16.6768H16.7706C17.1909 16.6768 17.4536 16.2226 17.2447 15.8578Z"
                      fill="#DBE123"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_21960_75292">
                      <rect width="16.6352" height="16" fill="white" transform="translate(0.682617 0.676758)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="text-sm font-light text-gray-300">
                Supported by <span className="font-semibold text-white">JOOLA</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
