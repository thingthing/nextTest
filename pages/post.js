import fetch from 'isomorphic-unfetch';
// import { withRouter } from 'next/router';

import { Layout } from '../components';

const Post = ({ name, summary, image }) => (
  <Layout>
    <h1>{name}</h1>
    <p>{summary.replace(/<[/]?p>/g, '')}</p>
    <img src={image.medium} />
  </Layout>
);

Post.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  //   await new Promise(resolve =>
  //     setTimeout(() => {
  //       console.log('timeout end');
  //       resolve();
  //     }, 2000)
  //   );
  console.log(`Fetched show: ${show.name}`);

  return show;
};

export default Post;
