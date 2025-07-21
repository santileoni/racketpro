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
  const trainingMenuRef = useRef(null);
  const aboutMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const [appMenuOpen, setAppMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [langSwitcherMenuOpen, setLangSwitcherMenuOpen] = useState(false);
  const [workshopsMenuOpen, setWorkshopsMenuOpen] = useState(false);
  const [trainingMenuOpen, setTrainingMenuOpen] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
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

  useOutsideClick(trainingMenuRef, () => {
    setTrainingMenuOpen(false);
  });

  useOutsideClick(aboutMenuRef, () => {
    setAboutMenuOpen(false);
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

  const handleTrainingMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTrainingMenuOpen(!trainingMenuOpen);
  };

  const handleAboutMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAboutMenuOpen(!aboutMenuOpen);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeAllMenus = () => {
    setWorkshopsMenuOpen(false);
    setTrainingMenuOpen(false);
    setAboutMenuOpen(false);
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

      <header className="fixed top-0 left-0 z-50 w-full pt-4 px-4 sm:px-6 lg:px-8 lg:top-8">
        <div className="bg-[#003262] rounded-full container mx-auto">
          <nav aria-label="Primary navigation">
            <div className="mx-auto py-2">
              <div className="h-16 flex items-stretch justify-between">
                {/* Left side - Brand Logo + Navigation Links */}
                <div className="flex items-center">
                  {/* Brand Logo */}
                  <div className="flex-shrink-0 mr-8">
                    <div className="text-white font-bold text-xl">
                      <Image src="/images/company-logo@2x.png" alt="RacketPro Logo" width={190} height={33} />
                    </div>
                  </div>

                  {/* Desktop Navigation */}
                  <div className="hidden md:block h-full">
                    <div className="ml-10 flex items-stretch h-full space-x-4">
                      {/* Benefits */}
                      <a
                        href="#"
                        className="text-white hover:text-orange-500 px-3 h-full flex items-center text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
                      >
                        Benefits
                      </a>

                      {/* Workshops */}
                      <a
                        href="#"
                        className="text-white hover:text-orange-500 px-3 h-full flex items-center text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
                      >
                        Workshops
                      </a>

                      {/* Training Dropdown */}
                      <div className="relative group h-full" ref={trainingMenuRef}>
                        <button
                          type="button"
                          className="text-white hover:text-orange-500 px-3 h-full flex items-center text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
                          id="training-menu-button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Training
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

                        {/* Desktop Training Dropdown */}
                        <div className="absolute top-full left-0 z-50 w-72 mt-1 bg-white rounded-lg shadow-lg transition-opacity duration-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible">
                          <div
                            className="py-4"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="training-menu-button"
                          >
                            <a
                              href="#"
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              role="menuitem"
                            >
                              <div className="font-medium">Online Training</div>
                              <div className="text-gray-500 text-xs mt-1">Learn from anywhere</div>
                            </a>
                            <a
                              href="#"
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              role="menuitem"
                            >
                              <div className="font-medium">In-Person Training</div>
                              <div className="text-gray-500 text-xs mt-1">Face-to-face instruction</div>
                            </a>
                            <a
                              href="#"
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              role="menuitem"
                            >
                              <div className="font-medium">Certification Programs</div>
                              <div className="text-gray-500 text-xs mt-1">Get certified expertise</div>
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* About us Dropdown */}
                      <div className="relative group h-full" ref={aboutMenuRef}>
                        <button
                          type="button"
                          className="text-white hover:text-orange-500 px-3 h-full flex items-center text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
                          id="about-menu-button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          About us
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

                        {/* Desktop About us Dropdown */}
                        <div className="absolute top-full left-0 z-50 w-64 mt-1 bg-white rounded-lg shadow-lg transition-opacity duration-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible">
                          <div
                            className="py-4"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="about-menu-button"
                          >
                            <a
                              href="#"
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              role="menuitem"
                            >
                              <div className="font-medium">Our Story</div>
                              <div className="text-gray-500 text-xs mt-1">Learn about our mission</div>
                            </a>
                            <a
                              href="#"
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              role="menuitem"
                            >
                              <div className="font-medium">Team</div>
                              <div className="text-gray-500 text-xs mt-1">Meet our experts</div>
                            </a>
                            <a
                              href="#"
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              role="menuitem"
                            >
                              <div className="font-medium">Contact</div>
                              <div className="text-gray-500 text-xs mt-1">Get in touch</div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Cart + Language Switcher + Login + Sign up + Mobile Menu Button */}
                <div className="flex items-center space-x-3">
                  {/* Shopping Cart Icon */}
                  <button
                    className="hidden md:flex text-white hover:text-orange-500 p-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
                    aria-label="Shopping cart"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      />
                    </svg>
                  </button>

                  {/* Language Switcher with Flag */}
                  <div className="relative flex items-center">
                    <button
                      type="button"
                      className="hidden md:flex items-center space-x-2 text-white hover:text-orange-500 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
                      id="lang-switcher-menu-button"
                      aria-haspopup="true"
                      aria-expanded={langSwitcherMenuOpen}
                      onClick={handleLangSwitcherMenuClick}
                      aria-label="Change language"
                    >
                      {/* US Flag for English */}
                      <span className="flex items-center space-x-1">
                        <span className="text-2xl">🇺🇸</span>
                        <span className="text-sm font-medium">En</span>
                        <svg
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </button>

                    {langSwitcherMenuOpen && (
                      <div
                        ref={langSwitcherMenuRef}
                        role="menu"
                        className="absolute top-full left-0 z-10 w-48 mt-1 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        aria-orientation="vertical"
                        aria-labelledby="lang-switcher-menu-button"
                      >
                        <MenuItem href={`/en/${pathname.split("/").slice(2).join("/")}`} active={locale === "en"}>
                          <span className="flex items-center space-x-2">
                            <span>🇺🇸</span>
                            <span>English</span>
                          </span>
                        </MenuItem>
                        <MenuItem href={`/de/${pathname.split("/").slice(2).join("/")}`} active={locale === "de"}>
                          <span className="flex items-center space-x-2">
                            <span>🇩🇪</span>
                            <span>Deutsch</span>
                          </span>
                        </MenuItem>
                        <MenuItem href={`/fr/${pathname.split("/").slice(2).join("/")}`} active={locale === "fr"}>
                          <span className="flex items-center space-x-2">
                            <span>🇫🇷</span>
                            <span>Français</span>
                          </span>
                        </MenuItem>
                      </div>
                    )}
                  </div>

                  {/* Log in Button */}
                  <button className="hidden md:flex btn btn-tertiary btn-small">Log in</button>

                  {/* Sign up Button */}
                  <button className="hidden md:flex btn btn-secondary btn-small">Sign up</button>

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
                  className="md:hidden absolute top-full left-0 right-0 mx-4 mt-2 bg-[#003262] rounded-2xl shadow-lg overflow-y-auto z-40 max-h-[80vh]"
                  id="mobile-menu"
                  ref={mobileMenuRef}
                >
                  <div className="px-4 pt-4 pb-6 space-y-1">
                    {/* Mobile Benefits */}
                    <a
                      href="#"
                      className="text-white hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800 focus:bg-blue-700"
                    >
                      Benefits
                    </a>

                    {/* Mobile Workshops */}
                    <a
                      href="#"
                      className="text-white hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800 focus:bg-blue-700"
                    >
                      Workshops
                    </a>

                    {/* Mobile Training Dropdown */}
                    <div>
                      <button
                        type="button"
                        className="text-white hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
                        aria-expanded={trainingMenuOpen}
                        onClick={handleTrainingMenuClick}
                      >
                        Training
                        <svg
                          className={clsx("ml-1 h-4 w-4 inline transition-transform", {
                            "rotate-180": trainingMenuOpen,
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
                      {trainingMenuOpen && (
                        <div className="pl-4 space-y-1">
                          <a
                            href="#"
                            className="text-gray-300 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-sm"
                          >
                            Online Training
                          </a>
                          <a
                            href="#"
                            className="text-gray-300 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-sm"
                          >
                            In-Person Training
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

                    {/* Mobile About us Dropdown */}
                    <div>
                      <button
                        type="button"
                        className="text-white hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
                        aria-expanded={aboutMenuOpen}
                        onClick={handleAboutMenuClick}
                      >
                        About us
                        <svg
                          className={clsx("ml-1 h-4 w-4 inline transition-transform", {
                            "rotate-180": aboutMenuOpen,
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
                      {aboutMenuOpen && (
                        <div className="pl-4 space-y-1">
                          <a
                            href="#"
                            className="text-gray-300 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-sm"
                          >
                            Our Story
                          </a>
                          <a
                            href="#"
                            className="text-gray-300 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-sm"
                          >
                            Team
                          </a>
                          <a
                            href="#"
                            className="text-gray-300 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-sm"
                          >
                            Contact
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Mobile Shopping Cart */}
                    <button className="text-white hover:bg-blue-700 hover:text-white flex items-center px-3 py-2 rounded-md text-base font-medium w-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800 focus:bg-blue-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 mr-2"
                      >
                        <path
                          d="M17.0852 13C17.8352 13 18.4952 12.59 18.8352 11.97L22.4152 5.48C22.7852 4.82 22.3052 4 21.5452 4H6.74516L5.80516 2H2.53516V4H4.53516L8.13516 11.59L6.78516 14.03C6.05516 15.37 7.01516 17 8.53516 17H20.5352V15H8.53516L9.63516 13H17.0852ZM7.69516 6H19.8452L17.0852 11H10.0652L7.69516 6ZM8.53516 18C7.43516 18 6.54516 18.9 6.54516 20C6.54516 21.1 7.43516 22 8.53516 22C9.63516 22 10.5352 21.1 10.5352 20C10.5352 18.9 9.63516 18 8.53516 18ZM18.5352 18C17.4352 18 16.5452 18.9 16.5452 20C16.5452 21.1 17.4352 22 18.5352 22C19.6352 22 20.5352 21.1 20.5352 20C20.5352 18.9 19.6352 18 18.5352 18Z"
                          fill="white"
                        />
                      </svg>
                      Shopping Cart
                    </button>

                    {/* Mobile Language Switcher */}
                    <button
                      className="text-white hover:bg-blue-700 hover:text-white flex items-center px-3 py-2 rounded-md text-base font-medium w-full text-left focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
                      onClick={handleLangSwitcherMenuClick}
                    >
                      <span className="mr-2">🇺🇸</span>
                      Language
                    </button>

                    {/* Mobile Log in */}
                    <button className="text-white hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800 focus:bg-blue-700">
                      Log in
                    </button>

                    {/* Mobile Sign up Button */}
                    <div className="pt-2">
                      <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-base font-medium w-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400">
                        Sign up
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>
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
