import Bounded from '@/components/Bounded';
import StarGrid from '@/components/StarGrid';
import { Content, isFilled } from '@prismicio/client';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import {
   PrismicRichText,
   PrismicText,
   SliceComponentProps,
} from '@prismicio/react';
import clsx from 'clsx';

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
   return (
      <Bounded
         data-slice-type={slice.slice_type}
         data-slice-variation={slice.variation}
         className="text-center"
      >
         <div className="relative">
            <StarGrid />
            {isFilled.richText(slice.primary.heading) && (
               <h1 className="text-balance text-5xl font-medium md:text-7xl">
                  <PrismicText field={slice.primary.heading} />
               </h1>
            )}

            {isFilled.richText(slice.primary.body) && (
               <div className="mx-auto mt-6 max-w-md text-balance text-slate-300">
                  <PrismicRichText field={slice.primary.body} />
               </div>
            )}

            {isFilled.link(slice.primary.button_link) && (
               <PrismicNextLink
                  className={clsx(
                     'relative inline-flex h-fit w-fit rounded-full border border-blue-100/20 bg-blue-200/10 px-4 py-2 text-blue-200 outline-none ring-yellow-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-yellow-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-yellow-200/40 hover:text-yellow-300 after:hover:bg-opacity-15 focus:ring-2',
                     'mt-8',
                  )}
                  field={slice.primary.button_link}
               >
                  {slice.primary.button_label}
               </PrismicNextLink>
            )}

            {isFilled.image(slice.primary.image) && (
               <div className="glass-container mt-16 w-fit">
                  <div className="absolute inset-0 -z-10 bg-purple-500/30 blur-2xl filter" />
                  <PrismicNextImage field={slice.primary.image} />
               </div>
            )}
         </div>
      </Bounded>
   );
};

export default Hero;
