import marked from 'marked';
import dynamic from 'next/dynamic';

import { Layout, Styled } from '../components';

const Highlight = dynamic(import('react-highlight'));

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: true,
});

const text = `
This is a mardown show test
Yes. We can have a [link](/).
And we can have a title as well.

### Like this

And here's the content.

~~~js
export default () => (
  <div>
    <p>Next.js is great!</p>
  </div>
)
~~~
`;

export default () => (
  <Layout>
    <Styled.H1>About this project</Styled.H1>
    <Highlight innerHTML>{marked(text)}</Highlight>
  </Layout>
);
