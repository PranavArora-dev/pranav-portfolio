/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import pranavp1 from "./assets/pranavp1.png";


const NAV_ITEMS: string[] = [];
const SOCIAL_ITEMS = ['Linkedin', 'GitHub', 'LeetCode'];

const BG_IMAGE_URL =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260729_022513_486985a2-ac8c-4278-91a8-071dcd9fcaff.png&w=1280&q=85';

const PORTRAIT_CUTOUT_URL =
  'https://stone-expand-60400629.figma.site/_assets/v11/8da570354e86aa0d44ac3e4aa335a72c8e750d68.png';

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <main className="relative h-[100dvh] w-full overflow-hidden bg-black select-none font-hn text-cream">
      {/* 1. Background image (full-bleed, behind everything, z-0 default) */}
      <img
        src={BG_IMAGE_URL}
        alt=""
        className="absolute inset-0 h-full w-full object-cover anim-fade-in"
      />

      {/* 2. Marquee name (z-10, behind cutout portrait) */}
      <section
        className="absolute inset-x-0 top-[16vh] sm:top-[14vh] z-10 overflow-hidden pointer-events-none anim-fade-up"
        style={{ animationDelay: '500ms' }}
        aria-label="Pranav Arora"
      >
        <div className="marquee flex w-max whitespace-nowrap font-hn text-[12vh] sm:text-[26vh] leading-none text-cream tracking-tight">
          <span className="pr-[6vw]">Pranav &mdash; Arora&nbsp;</span>
          <span className="pr-[6vw]">Pranav &mdash; Arora&nbsp;</span>
        </div>
      </section>

      {/* 3. Horizontal cream rule (z-10, above footer) */}
      <div className="absolute inset-x-6 sm:inset-x-10 bottom-[5.5rem] sm:bottom-28 z-10 h-0.5 bg-cream anim-line" />

      {/* 4. Front portrait (cutout overlay, above marquee, z-20, pointer-events none) */}
      <img
        src={pranavp1}
        alt="Portrait"
        className="absolute inset-0 translate-x-1 scale-[1.02] sm:translate-x-3 sm:scale-[1.05] h-full w-full object-contain pointer-events-none anim-rise-in z-20"
      />

      {/* 5. Header (chrome, z-30) */}
      <header className="absolute inset-x-0 top-0 z-30 flex items-start justify-between px-6 pt-6 sm:px-10 sm:pt-8">
        {/* Brand / logo link */}
        <a
          href={`${import.meta.env.BASE_URL}about.html`}
          className="font-hn text-lg tracking-wide text-cream anim-fade-up block focus:outline-none"
          style={{ animationDelay: '800ms' }}
        >
          About me 
        </a>

        {/* Desktop right cluster: Year, Nav, Socials */}
        <div className="hidden sm:flex items-start gap-16 lg:gap-24">

          {/* Nav column */}
          <nav className="flex flex-col gap-0.5 text-sm font-hn" aria-label="Site Navigation">
            {NAV_ITEMS.map((item, index) => (
              <a
                key={item}
                href="#"
                className="text-cream anim-fade-up hover:opacity-60 transition-opacity duration-300 focus:outline-none"
                style={{ animationDelay: `${1000 + index * 80}ms` }}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Social column */}
          <div className="flex flex-col gap-0.5 text-sm font-hn">
           {SOCIAL_ITEMS.map((item, index) => ( <a
           key={item}
           href={
      item === 'Linkedin'
        ? 'https://linkedin.com/in/pranav-arora-3b8a08342/'
        : item === 'GitHub'
        ? 'https://github.com/PranavArora-dev'
        : 'https://leetcode.com/u/UFrbBVlNVO/'
      }
        target="_blank"
        rel="noopener noreferrer"
        className="text-cream anim-fade-up
        hover:opacity-60 transition-opacity
        duration-300 focus:outline-none"
        style={{ animationDelay: `${1150 + index *
          80}ms` }}
  >
    {item}
  </a>
))}
          </div>
        </div>

        {/* Mobile-only hamburger button (z-50) */}
        <button
          type="button"
          onClick={toggleDrawer}
          aria-label={isDrawerOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isDrawerOpen}
          className="sm:hidden z-50 h-10 w-10 flex items-center justify-center -mr-2 -mt-2 anim-fade-up cursor-pointer focus:outline-none"
          style={{ animationDelay: '900ms' }}
        >
          <div className="relative h-4 w-6 flex flex-col justify-between">
            <span
              className={`h-[2px] w-6 bg-cream rounded-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] origin-center ${
                isDrawerOpen ? 'translate-y-[7px] rotate-45' : 'translate-y-0 rotate-0'
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-cream rounded-full transition-opacity duration-300 ${
                isDrawerOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-cream rounded-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] origin-center ${
                isDrawerOpen ? '-translate-y-[7px] -rotate-45' : 'translate-y-0 rotate-0'
              }`}
            />
          </div>
        </button>
      </header>

      {/* 6. Footer (Desktop: sm:z-10, Mobile: z-30) */}
      <footer className="absolute inset-x-0 bottom-0 z-30 sm:z-10 flex items-end justify-between px-6 pb-5 sm:px-10 sm:pb-8 text-xs sm:text-sm leading-relaxed font-hn text-cream pointer-events-auto">
        <div className="absolute right-6 bottom-2 sm:right-10 sm:bottom-1">
          © 2026
          </div>
        {/* Footer left: three lines */}
        <div
          className="flex flex-col anim-fade-up"
          style={{ animationDelay: '1400ms' }}
        >
          <p>Full Stack Developer</p>
          <p>DSA & Problem Solving</p>
          <p>Building for the Web</p>
        </div>

        {/* Footer right: right-aligned homage */}
        <div
          className="flex flex-col items-end text-right anim-fade-up"
          style={{ animationDelay: '1550ms' }}
        >
          <p>A homage to</p>
          <p className="portfolio-name">Pranav's Portfolio</p>
        </div>
      </footer>

      {/* 7. Mobile Drawer (sm:hidden, z-40) */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-500 sm:hidden ${
          isDrawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeDrawer}
        aria-hidden={!isDrawerOpen}
      />

      <aside
        className={`fixed top-0 right-0 bottom-0 z-40 w-[80%] max-w-sm bg-[#141414] px-8 py-10 transition-transform duration-600 ease-[cubic-bezier(0.76,0,0.24,1)] sm:hidden flex flex-col justify-between text-cream shadow-2xl ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile Navigation"
      >
        {/* Close button with Lucide X icon */}
        <button
          type="button"
          onClick={closeDrawer}
          aria-label="Close navigation"
          className={`absolute right-6 top-6 text-cream transition-all duration-300 cursor-pointer p-1 focus:outline-none ${
            isDrawerOpen
              ? 'rotate-0 opacity-100 delay-300'
              : 'rotate-90 opacity-0 pointer-events-none'
          }`}
        >
          <X size={26} strokeWidth={1.5} />
        </button>

        {/* Top section: Site Index */}
        <div className="pt-8">
          <p
            className={`uppercase tracking-[0.2em] text-cream/50 text-xs font-hn transition-all duration-500 ease-out ${
              isDrawerOpen
                ? 'translate-y-0 opacity-100 delay-[250ms]'
                : 'translate-y-4 opacity-0'
            }`}
          >
            Site Index
          </p>

          <nav className="mt-6 flex flex-col gap-4 font-hn text-4xl leading-tight">
            {NAV_ITEMS.map((item, index) => (
              <a
                key={item}
                href="#"
                onClick={closeDrawer}
                className={`text-cream hover:opacity-60 transition-all duration-500 ease-out focus:outline-none ${
                  isDrawerOpen
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-6 opacity-0'
                }`}
                style={{
                  transitionDelay: isDrawerOpen
                    ? `${300 + index * 80}ms`
                    : '0ms',
                }}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom section: Find Me */}
        <div className="pb-4">
          <p
            className={`uppercase tracking-[0.2em] text-cream/50 text-xs font-hn transition-all duration-500 ease-out ${
              isDrawerOpen
                ? 'translate-y-0 opacity-100 delay-[500ms]'
                : 'translate-y-4 opacity-0'
            }`}
          >
            Find Me
          </p>

          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-hn text-sm">
           {SOCIAL_ITEMS.map((item, index) => (
  <a
    key={item}
    href={
      item === 'Linkedin'
        ? 'https://linkedin.com/in/pranav-arora-3b8a08342/'
        : item === 'GitHub'
        ? 'https://github.com/PranavArora-dev'
        : 'https://leetcode.com/u/UFrbBVlNVO/'
    }
    target="_blank"
    rel="noopener noreferrer"
    onClick={closeDrawer}
                className={`text-cream hover:opacity-60 transition-all duration-500 ease-out focus:outline-none ${
                  isDrawerOpen
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                }`}
                style={{
                  transitionDelay: isDrawerOpen
                    ? `${550 + index * 60}ms`
                    : '0ms',
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </aside>
    </main>
  );
}
