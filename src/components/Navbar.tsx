"use client";

import NavLinks from "./NavLinks";
import Logo from "./Logo";
import Button from "./Button";
import { Popover } from "@headlessui/react";
import Link from "next/link";
import { TbMenu2 } from "react-icons/tb";
import { IoIosArrowUp } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { ENG_navLinks } from "@/constants/EnglishPage";
import { useState, useEffect } from "react";
import Dropdown from "@/components/Dropdown";

const MobileNavLinks = (prop: { children: any; href: string }) => {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 tracking-tight text-slate-700 z-0"
      href={prop.href}
    >
      {prop.children}
    </Popover.Button>
  );
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 50);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <header
      className={`w-full sticky z-50 top-0 bg-slate-50 ${
        isScrolled && "shadow-xl shadow-sky-100"
      }`}
    >
      <nav>
        <div className="flex static pt-3 pb-3 items-center justify-between text-slate-700 bg-opacity-50 bg-white max-w-full mx-auto px-10">
          <div className="relative z-30">
            <Logo />
          </div>
          <div className="hidden md:flex md:gap-10 items-center">
            <NavLinks />
          </div>
          <div className="flex gap-10 z-30">
            <Dropdown />
            <Button href="#" text="中" />
            <Button href="#" text="Dark mode" />
          </div>
          <Popover className="md:hidden">
            {({ open }) => (
              <>
                <Popover.Button
                  className="relative z-30 -m-2 inline-flex items-center rounded-lg stroke-slate-900 p-3 hover:bg-gray-200/50 hover:stroke-slate-600 active:stroke-slate-900 [&:not(:focus-visible)]:focus-outline-none outline-none"
                  aria-labelledby="Toggle site navigation"
                >
                  {({ open }) =>
                    open ? (
                      <IoIosArrowUp className="text-2xl" />
                    ) : (
                      <TbMenu2 className="text-2xl" />
                    )
                  }
                </Popover.Button>
                <AnimatePresence initial={false}>
                  {open && (
                    <>
                      <Popover.Overlay
                        static
                        as={motion.div}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-10 bg-slate-300/60 backdrop:blur"
                      />
                      <Popover.Panel
                        static
                        as={motion.div}
                        initial={{ opacity: 0, y: -24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{
                          opacity: 0,
                          y: -24,
                          transition: { duration: 0.2 },
                        }}
                        className="absolute inset-x-0 top-0 z-10 origin-top rounded-b-2xl bg-slate-50/60 px-6 pb-6 pt-24 shadow-2xl shadow-slate-900/20"
                      >
                        <div className="space-y-4">
                          {ENG_navLinks.map(({ _id, title, href }) => (
                            <MobileNavLinks
                              href={href}
                              children={title}
                              key={_id}
                            />
                          ))}
                        </div>
                      </Popover.Panel>
                    </>
                  )}
                </AnimatePresence>
              </>
            )}
          </Popover>

          {/* <div className="items-center font-semibold">
            <ul className="flex items-center gap-x-8 pr-3">
              <li>
                <Link href="/#projects" className="bg-slate-300 bg-opacity-50 rounded p-1 hover:text-sky-500">
                    <h2 className="">
                        Projects
                    </h2>
                </Link>
              </li>
              <a
                href="#"
                className="bg-slate-300 bg-opacity-50 rounded p-1 hover:text-sky-500"
              >
                文
              </a>
              <li>
                <a
                  href="#"
                  className="bg-slate-300 bg-opacity-50 rounded p-1 hover:text-sky-500"
                >
                  Dark Mode
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
    </header>
  );
}
