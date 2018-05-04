import fetch from 'isomorphic-unfetch';
import { Layout, PostLink, Styled } from '../components';
import loadDB from '../lib/load-db';

const Index = ({ stories }) => (
  <Layout>
    <Styled.H1>Hacker News - Latest</Styled.H1>
    <Styled.UL>
      {stories.map(story => <PostLink key={story.id} {...story} />)}
    </Styled.UL>
  </Layout>
);

Index.getInitialProps = async () => {
  const db = await loadDB();

  const ids = await db.child('topstories').once('value');
  let stories = await Promise.all(
    ids
      .val()
      .slice(0, 10)
      .map(id =>
        db
          .child('item')
          .child(id)
          .once('value')
      )
  );
  stories = stories.map(s => s.val());
  return { stories };
};

export default Index;
