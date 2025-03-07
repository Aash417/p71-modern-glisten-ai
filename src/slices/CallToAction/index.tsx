import Bounded from '@/components/Bounded';
import { Content } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import { PrismicText, SliceComponentProps } from '@prismicio/react';
import PlainLogo from './PlainLogo';

export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
   return (
      <Bounded
         data-slice-type={slice.slice_type}
         data-slice-variation={slice.variation}
         className="relative py-32 text-center font-medium md:py-40"
      >
         <div className="glow absolute -z-10 aspect-square w-full max-w-sm rounded-full bg-blue-500/50 blur-[160px] filter" />

         <div className="glass-container rounded-lg bg-gradient-to-b from-slate-800 to-slate-900 p-4 md:rounded-xl">
            <PlainLogo />
         </div>

         <div className="mt-8 max-w-xl text-balance text-5xl">
            <PrismicText field={slice.primary.heading} />
         </div>

         <PrismicNextLink
            field={slice.primary.button_link}
            className="prismic-button-link mt-8"
         >
            {slice.primary.button_text || 'Learn More'}
         </PrismicNextLink>
      </Bounded>
   );
};

export default CallToAction;
