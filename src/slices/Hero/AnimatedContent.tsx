'use client';
import StarGrid from '@/components/StarGrid';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import { useGSAP } from '@gsap/react';
import { Content, isFilled } from '@prismicio/client';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { PrismicRichText, PrismicText } from '@prismicio/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function AnimatedContent({
   slice,
}: Readonly<{
   slice: Content.HeroSlice;
}>) {
   const container = useRef(null);
   const prefersReducedMotion = usePrefersReducedMotion();
   gsap.registerPlugin(useGSAP);

   useGSAP(
      () => {
         if (prefersReducedMotion) {
            gsap.set(
               '.hero__heading, .hero__body, .hero__button, .hero__image, .hero__glow',
               { opacity: 1 },
            );
            return;
         }

         const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

         tl.fromTo(
            '.hero__heading',
            { scale: 0.5 },
            { scale: 1, opacity: 1, duration: 1.4 },
         );
         tl.fromTo(
            '.hero__body',
            { y: 20 },
            { y: 0, opacity: 1, duration: 1.2 },
            '-=0.6',
         );
         tl.fromTo(
            '.hero__button',
            { scale: 1.5 },
            { scale: 1, opacity: 1, duration: 1.3 },
            '-=0.8',
         );
         tl.fromTo(
            '.hero__image',
            { y: 100 },
            { y: 0, opacity: 1, duration: 1.3 },
            '+=0.3',
         );
         tl.fromTo(
            '.hero__glow',
            { scale: 0.5 },
            { scale: 1, opacity: 1, duration: 1.8 },
            '-=1',
         );
      },
      { scope: container },
   );

   return (
      <div className="relative" ref={container}>
         <StarGrid />
         {isFilled.richText(slice.primary.heading) && (
            <h1 className="hero__heading text-balance text-5xl font-medium opacity-0 md:text-7xl">
               <PrismicText field={slice.primary.heading} />
            </h1>
         )}

         {isFilled.richText(slice.primary.body) && (
            <div className="hero__body mx-auto mt-6 max-w-md text-balance text-slate-300 opacity-0">
               <PrismicRichText field={slice.primary.body} />
            </div>
         )}

         {isFilled.link(slice.primary.button_link) && (
            <PrismicNextLink
               className="hero__button prismic-button-link mt-8 opacity-0"
               field={slice.primary.button_link}
            >
               {slice.primary.button_label}
            </PrismicNextLink>
         )}

         {isFilled.image(slice.primary.image) && (
            <div className="hero__image glass-container mt-16 w-fit opacity-0">
               <div className="hero__glow absolute inset-0 -z-10 bg-purple-500/30 opacity-0 blur-2xl filter" />
               <PrismicNextImage field={slice.primary.image} />
            </div>
         )}
      </div>
   );
}
