import Bounded from '@/components/Bounded';
import { Content } from '@prismicio/client';
import {
   PrismicRichText,
   PrismicText,
   SliceComponentProps,
} from '@prismicio/react';
import Image from 'next/image';
import {
   FaCloudflare,
   FaDigitalOcean,
   FaFigma,
   FaFly,
   FaGithub,
   FaNpm,
} from 'react-icons/fa';
import AnimatedContent from './AnimatedContent';
import StarBackground from './StarBackground';
import background from './background.jpg';

export type IntegrationsProps = SliceComponentProps<Content.IntegrationsSlice>;
const icons = {
   digitalocean: <FaDigitalOcean />,
   cloudflare: <FaCloudflare />,
   npm: <FaNpm />,
   github: <FaGithub />,
   figma: <FaFigma />,
   fly: <FaFly />,
};
const Integrations = ({ slice }: IntegrationsProps): JSX.Element => {
   return (
      <Bounded
         data-slice-type={slice.slice_type}
         data-slice-variation={slice.variation}
         className="relative overflow-hidden"
      >
         <Image
            src={background}
            alt="bg image"
            fill
            className="object-cover"
            quality={90}
         />
         <StarBackground />

         <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl">
               <PrismicText field={slice.primary.heading} />
            </h2>

            <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
               <PrismicRichText field={slice.primary.body} />
            </div>

            <AnimatedContent slice={slice} />
         </div>
      </Bounded>
   );
};

export default Integrations;
