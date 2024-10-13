import Bounded from '@/components/Bounded';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import AnimatedContent from './AnimatedContent';

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
   return (
      <Bounded
         data-slice-type={slice.slice_type}
         data-slice-variation={slice.variation}
         className="text-center"
      >
         {/* <div className="relative">
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
                  className="prismic-button-link mt-8"
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
         </div> */}
         <AnimatedContent slice={slice} />
      </Bounded>
   );
};

export default Hero;
