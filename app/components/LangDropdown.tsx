import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";

const MenuItem = (props: { href: string; text: string }) => {
  return (
    <Menu.Item>
        <Link
          href={props.href}
          className="block px-3 py-2 text-sm text-text0 hover:text-sky4 hover:bg-slate1 rounded-md"
        >
          {props.text}
        </Link>
    </Menu.Item>
  );
};

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-lg bg-white px-3 py-2 text-sm text-text0 ring-1 ring-inset ring-slate2 hover:bg-slate1 hover:text-sky4">
          Language
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-min origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-slate2 ring-opacity-5 focus:outline-none bg-slate0">
          <div className="py-1">
            <MenuItem href="#" text="English"/>
            <MenuItem href="#" text="中文"/>
            <MenuItem href="#" text="Spanish"/>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
