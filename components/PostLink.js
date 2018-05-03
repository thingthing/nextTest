import Link from 'next/link';
import * as Styled from './StyledComponents';

const PostLink = ({ id, title }) => (
  <Styled.LI>
    <Link href={`/post?id=${id}`} as={`/p/${id}`}>
      <Styled.A>{title}</Styled.A>
    </Link>
  </Styled.LI>
);

export default PostLink;
