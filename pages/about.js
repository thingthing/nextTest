import Markdown from 'react-markdown';

import { Layout, Styled } from '../components';

const text = `
This is a mardown show test
Yes. We can have a [link](/).
And we can have a title as well.

### Like this

And here's the content.
`;

export default () => (
  <Layout>
    <Styled.H1>About this project</Styled.H1>
    <div className="markdown">
      <Markdown source={text} />
    </div>
    <style jsx global>{`
      .markdown {
        font-family: 'Arial';
      }

      .markdown a {
        text-decoration: none;
        color: blue;
      }

      .markdown a:hover {
        opacity: 0.6;
      }

      .markdown h3 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
      }
    `}</style>
  </Layout>
);
