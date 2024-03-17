import ReactMarkdown, { Options } from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeRaw from 'rehype-raw';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export const MarkdownComponent = ({ children, ...props }: Options) => (
  <ReactMarkdown
    rehypePlugins={[rehypeRaw]}
    components={{
      code({ children }) {
        return (
          <SyntaxHighlighter
            showLineNumbers
            children={String(children)}
            language='javascript'
            style={vscDarkPlus}
          />
        );
      },
      img({ src, ...props }) {
        return (
          <Zoom>
            <img width='100%' src={src} {...props} />
          </Zoom>
        );
      }
    }}
    {...props}
  >
    {children}
  </ReactMarkdown>
);
