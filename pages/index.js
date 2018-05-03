import fetch from 'isomorphic-unfetch';
import { Layout, PostLink, Styled } from '../components';

const Index = ({ shows }) => (
  <Layout>
    <Styled.H1>Batman TV Shows</Styled.H1>
    <Styled.UL>
      {shows.map(({ show: { id, name } }) => (
        <PostLink key={id} id={id} title={name} />
      ))}
    </Styled.UL>
  </Layout>
);

Index.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data,
  };
};

export default Index;
