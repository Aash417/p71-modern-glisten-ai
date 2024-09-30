import type { Content } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import {
   JSXMapSerializer,
   PrismicRichText,
   SliceComponentProps,
} from '@prismicio/react';

const components: JSXMapSerializer = {
   hyperlink: ({ node, children }) => {
      return <PrismicNextLink field={node.data}>{children}</PrismicNextLink>;
   },
   label: ({ node, children }) => {
      if (node.data.label === 'codespan') {
         return <code>{children}</code>;
      }
   },
};


type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

const RichText = ({ slice }: RichTextProps): JSX.Element => {
   return (
      <section>
         <PrismicRichText
            field={slice.primary.content}
            components={components}
         />
      </section>
   );
};

export default RichText;
