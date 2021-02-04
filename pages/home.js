import Menu from '../src/components/Menu';
import ContainerPosts from '../src/components/ContainerPosts';
import Banner from '../src/components/Banner';
import ContentContainer from '../src/components/ContentContainer';
import Post from '../src/components/Post';
import ContainerFavoritePosts from '../src/components/ContainerFavoritePosts';

import db from '../dbposts.json';

export default function Blog() {
  return (
    <>
      <Menu />
      <Banner />
      <ContentContainer>
        <ContainerPosts>
          <Post title={db.posts[0].title} text={db.posts[0].text} alt={db.posts[0].title} img={db.posts[0].imageUrl}/>
        </ContainerPosts>
        <ContainerFavoritePosts />
      </ContentContainer>
    </>
  )
}
