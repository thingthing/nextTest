import fetch from 'isomorphic-unfetch';

import loadDB from '../lib/load-db';
import { Layout, Styled } from '../components';

const Post = ({ item: { name, url, summary, image } }) => (
  <Layout>
    <Styled.H1>{name}</Styled.H1>
    {url && (
      <Styled.P>
        URL:{' '}
        <Styled.A target="_blank" href={url}>
          {url}
        </Styled.A>
      </Styled.P>
    )}
    {summary && <Styled.P>{summary.replace(/<[/]?p>/g, '')}</Styled.P>}
    {image && <img src={image.medium} />}
  </Layout>
);

Post.getInitialProps = async ({ query: { id } }) => {
  const db = await loadDB();
  let item = await db
    .child('item')
    .child(id)
    .once('value');
  item = item.val();

  return { item };
};

export default Post;
