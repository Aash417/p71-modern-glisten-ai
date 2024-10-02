'use client';

import WordMark from '@/components/WordMark';
import { Content } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import clsx from 'clsx';
import Link from 'next/link';

type NavBarProps = {
   settings: Content.SettingsDocument;
};

export default function NavBar({ settings }: Readonly<NavBarProps>) {
   return (
      <nav aria-label="Main" className="px-4 py-4 md:px-6 md:py-6">
         <div className="mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center">
            <Link href="/">
               <WordMark />
               <span className="sr-only">Glisten.ai home page</span>
            </Link>

            <ul className="flex gap-6">
               {settings.data.navigation.map((item) => {
                  if (item.cta_button) {
                     return (
                        <PrismicNextLink
                           key={item.label}
                           field={item.link}
                           className={clsx(
                              'relative inline-flex h-fit w-fit rounded-full border border-blue-100/20 bg-blue-200/10 px-4 py-2 text-blue-200 outline-none ring-yellow-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-yellow-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-yellow-200/40 hover:text-yellow-300 after:hover:bg-opacity-15 focus:ring-2',
                           )}
                        >
                           {item.label}
                        </PrismicNextLink>
                     );
                  }

                  return (
                     <li key={item.label}>
                        <PrismicNextLink
                           field={item.link}
                           className="inline-flex min-h-11 items-center"
                        >
                           {item.label}
                        </PrismicNextLink>
                     </li>
                  );
               })}
            </ul>
         </div>
      </nav>
   );
}
