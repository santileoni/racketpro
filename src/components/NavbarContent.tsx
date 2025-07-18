"use client";

import React, { useState, useCallback, useRef, forwardRef } from "react";
import { IntlProvider, FormattedMessage } from "react-intl";
import clsx from "clsx";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import useOutsideClick from "@/hooks/useOutsideClick";
import { User, Locale } from "@/lib/definitions";

interface Props {
  user: User;
  locale: Locale;
  messages: Record<string, string>;
}

export default function NavbarContent({ user, locale, messages }: Props) {
  const pathname = usePathname();

  const appMenuRef = useRef(null);
  const userMenuRef = useRef(null);
  const langSwitcherMenuRef = useRef(null);
  const workshopsMenuRef = useRef(null);
  const coursesMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const [appMenuOpen, setAppMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [langSwitcherMenuOpen, setLangSwitcherMenuOpen] = useState(false);
  const [workshopsMenuOpen, setWorkshopsMenuOpen] = useState(false);
  const [coursesMenuOpen, setCoursesMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useOutsideClick(appMenuRef, () => {
    setAppMenuOpen(false);
  });

  useOutsideClick(userMenuRef, () => {
    setUserMenuOpen(false);
  });

  useOutsideClick(langSwitcherMenuRef, () => {
    setLangSwitcherMenuOpen(false);
  });

  useOutsideClick(workshopsMenuRef, () => {
    setWorkshopsMenuOpen(false);
  });

  useOutsideClick(coursesMenuRef, () => {
    setCoursesMenuOpen(false);
  });

  useOutsideClick(mobileMenuRef, () => {
    setMobileMenuOpen(false);
  });

  const handleAppMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAppMenuOpen(!appMenuOpen);
  };

  const handleUserMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setUserMenuOpen(!userMenuOpen);
  };

  const handleLangSwitcherMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setLangSwitcherMenuOpen(!langSwitcherMenuOpen);
  };

  const handleWorkshopsMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setWorkshopsMenuOpen(!workshopsMenuOpen);
  };

  const handleCoursesMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCoursesMenuOpen(!coursesMenuOpen);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeAllMenus = () => {
    setWorkshopsMenuOpen(false);
    setCoursesMenuOpen(false);
    setLangSwitcherMenuOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <IntlProvider locale={locale} messages={messages}>
      {/* Skip Links */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-gray-900 px-4 py-2 rounded-md font-medium z-[60] focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Skip to main content
      </a>
      <a
        href="#nav-end"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-40 bg-white text-gray-900 px-4 py-2 rounded-md font-medium z-[60] focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Skip navigation
      </a>

      <header className="sticky top-0 left-0 z-50 w-full bg-[#003262] border-b border-gray-700">
        <nav aria-label="Primary navigation">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-16 flex items-stretch justify-between">
              {/* Left side - Brand Logo + Navigation Links */}
              <div className="flex items-center">
                {/* Brand Logo Placeholder */}
                <div className="flex-shrink-0 mr-8">
                  <div className="text-white font-bold text-xl">
                    {/* Brand logo will be placed here */}
                    <Image src="/images/company-logo@2x.png" alt="Logo" width={100} height={100} />
                  </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:block h-full">
                  <div className="ml-10 flex items-stretch h-full space-x-4">
                    {/* Workshops Dropdown */}
                    <div className="relative group h-full" ref={workshopsMenuRef}>
                      <button
                        type="button"
                        className="text-white hover:text-orange-500 px-3 h-full flex items-center text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
                        id="workshops-menu-button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Workshops
                        <svg
                          className="ml-1 h-4 w-4 inline"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </button>

                      {/* Desktop Workshops Dropdown - shown on focus-within and hover */}
                      <div className="fixed left-0 right-0 top-16 w-full bg-white shadow-lg transition-opacity duration-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible z-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                          <div
                            className="py-6"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="workshops-menu-button"
                          >
                            {/* Skip link within dropdown */}
                            <a
                              href="#nav-about"
                              className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:right-4 bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium z-[70] focus:outline-none focus:ring-2 focus:ring-white"
                            >
                              Skip to About
                            </a>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <a
                                href="#"
                                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                                role="menuitem"
                              >
                                <div className="font-medium">Beginner Workshops</div>
                                <div className="text-gray-500 text-xs mt-1">Perfect for getting started</div>
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                                role="menuitem"
                              >
                                <div className="font-medium">Advanced Workshops</div>
                                <div className="text-gray-500 text-xs mt-1">For experienced practitioners</div>
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                                role="menuitem"
                              >
                                <div className="font-medium">Weekend Workshops</div>
                                <div className="text-gray-500 text-xs mt-1">Intensive weekend sessions</div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* About */}
                    <a
                      href="#"
                      id="nav-about"
                      className="text-white hover:text-orange-500 px-3 h-full flex items-center text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
                    >
                      About
                    </a>

                    {/* Courses Dropdown */}
                    <div className="relative group h-full" ref={coursesMenuRef}>
                      <button
                        type="button"
                        className="text-white hover:text-orange-500 px-3 h-full flex items-center text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
                        id="courses-menu-button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Courses
                        <svg
                          className="ml-1 h-4 w-4 inline"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </button>

                      {/* Desktop Courses Dropdown - shown on focus-within and hover */}
                      <div className="fixed left-0 right-0 top-16 w-full bg-white shadow-lg transition-opacity duration-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible z-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                          <div
                            className="py-6"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="courses-menu-button"
                          >
                            {/* Skip link within dropdown */}
                            <a
                              href="#nav-contact"
                              className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:right-4 bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium z-[70] focus:outline-none focus:ring-2 focus:ring-white"
                            >
                              Skip to Contact Us
                            </a>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <a
                                href="#"
                                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                                role="menuitem"
                              >
                                <div className="font-medium">Online Courses</div>
                                <div className="text-gray-500 text-xs mt-1">Learn from anywhere</div>
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                                role="menuitem"
                              >
                                <div className="font-medium">In-Person Courses</div>
                                <div className="text-gray-500 text-xs mt-1">Face-to-face learning</div>
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                                role="menuitem"
                              >
                                <div className="font-medium">Certification Programs</div>
                                <div className="text-gray-500 text-xs mt-1">Get certified expertise</div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Contact Us */}
                    <a
                      href="#"
                      id="nav-contact"
                      className="text-white hover:text-orange-500 px-3 h-full flex items-center text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>

              {/* Right side - Language Switcher + CTA + Mobile Menu Button */}
              <div className="flex items-center space-x-4 mr-4">
                {/* Login Link */}
                <a
                  href="#"
                  id="nav-login"
                  className="hidden md:flex text-white hover:text-orange-500 px-3 py-2 items-center text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
                >
                  Log In
                </a>

                {/* CTA Button */}
                <button className="hidden md:flex btn btn-secondary my-2">Get Started</button>

                {/* Language Switcher */}
                <div className="relative flex items-center">
                  <button
                    type="button"
                    className="rounded-full p-2 text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
                    id="lang-switcher-menu-button"
                    aria-haspopup="true"
                    aria-expanded={langSwitcherMenuOpen}
                    onClick={handleLangSwitcherMenuClick}
                    aria-label="Change language"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                      />
                    </svg>
                  </button>

                  {langSwitcherMenuOpen && (
                    <Menu ref={langSwitcherMenuRef} aria-labelledby="lang-switcher-menu-button">
                      <MenuItem href={`/en/${pathname.split("/").slice(2).join("/")}`} active={locale === "en"}>
                        <FormattedMessage id="common.language-switcher" values={{ locale: "en" }} />
                      </MenuItem>
                      <MenuItem href={`/de/${pathname.split("/").slice(2).join("/")}`} active={locale === "de"}>
                        <FormattedMessage id="common.language-switcher" values={{ locale: "de" }} />
                      </MenuItem>
                      <MenuItem href={`/fr/${pathname.split("/").slice(2).join("/")}`} active={locale === "fr"}>
                        <FormattedMessage id="common.language-switcher" values={{ locale: "fr" }} />
                      </MenuItem>
                    </Menu>
                  )}
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center">
                  <button
                    type="button"
                    className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800 p-2"
                    aria-controls="mobile-menu"
                    aria-expanded={mobileMenuOpen}
                    onClick={handleMobileMenuToggle}
                    aria-label="Toggle mobile menu"
                  >
                    <span className="sr-only">Open main menu</span>
                    {!mobileMenuOpen ? (
                      <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    ) : (
                      <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
              <div
                className="md:hidden absolute top-full left-0 w-full h-screen bg-[#003262] overflow-y-auto z-40"
                id="mobile-menu"
                ref={mobileMenuRef}
              >
                <div className="px-4 pt-4 pb-6 space-y-1 border-t border-blue-700">
                  {/* Mobile Workshops Dropdown */}
                  <div>
                    <button
                      type="button"
                      className="text-white hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
                      aria-expanded={workshopsMenuOpen}
                      onClick={handleWorkshopsMenuClick}
                    >
                      Workshops
                      <svg
                        className={clsx("ml-1 h-4 w-4 inline transition-transform", {
                          "rotate-180": workshopsMenuOpen,
                        })}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                    {workshopsMenuOpen && (
                      <div className="pl-4 space-y-1">
                        <a
                          href="#"
                          className="text-gray-300 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-sm"
                        >
                          Beginner Workshops
                        </a>
                        <a
                          href="#"
                          className="text-gray-300 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-sm"
                        >
                          Advanced Workshops
                        </a>
                        <a
                          href="#"
                          className="text-gray-300 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-sm"
                        >
                          Weekend Workshops
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Mobile About */}
                  <a
                    href="#"
                    className="text-white hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800 focus:bg-blue-700"
                  >
                    About
                  </a>

                  {/* Mobile Courses Dropdown */}
                  <div>
                    <button
                      type="button"
                      className="text-white hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
                      aria-expanded={coursesMenuOpen}
                      onClick={handleCoursesMenuClick}
                    >
                      Courses
                      <svg
                        className={clsx("ml-1 h-4 w-4 inline transition-transform", {
                          "rotate-180": coursesMenuOpen,
                        })}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                    {coursesMenuOpen && (
                      <div className="pl-4 space-y-1">
                        <a
                          href="#"
                          className="text-gray-300 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-sm"
                        >
                          Online Courses
                        </a>
                        <a
                          href="#"
                          className="text-gray-300 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-sm"
                        >
                          In-Person Courses
                        </a>
                        <a
                          href="#"
                          className="text-gray-300 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-sm"
                        >
                          Certification Programs
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Mobile Contact Us */}
                  <a
                    href="#"
                    className="text-white hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800 focus:bg-blue-700"
                  >
                    Contact Us
                  </a>

                  {/* Mobile Login Link */}
                  <a
                    href="#"
                    className="text-white hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800 focus:bg-blue-700"
                  >
                    Log In
                  </a>

                  {/* Mobile CTA Button */}
                  <div className="pt-6">
                    <button className="btn btn-secondary w-full">Get Started</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* Navigation end marker for skip link */}
      <div id="nav-end" className="sr-only" tabIndex={-1}></div>
    </IntlProvider>
  );
}

interface MenuProps {
  align?: "left" | "right";
  children: React.ReactNode;
  [x: string]: any;
}

const Menu = forwardRef<HTMLDivElement, MenuProps>(function Menu({ align = "right", children, ...rest }, ref) {
  return (
    <div
      ref={ref}
      role="menu"
      className={clsx(
        "absolute z-10 w-48 mt-2 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
        { "left-0": align === "left", "right-0": align === "right" }
      )}
      aria-orientation="vertical"
      tabIndex={-1}
      {...rest}
    >
      {children}
    </div>
  );
});

interface MenuItemProps {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}

function MenuItem({ href, active, children }: MenuItemProps) {
  return (
    <Link
      href={href}
      tabIndex={-1}
      role="menuitem"
      className={clsx("block px-4 py-2 text-label-medium text-gray-700 hover:bg-gray-200", { "bg-gray-200": active })}
    >
      {children}
    </Link>
  );
}
