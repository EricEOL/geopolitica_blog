import Menu from '../src/components/Menu';
import ContainerPosts from '../src/components/ContainerPosts';
import Banner from '../src/components/Banner';
import Post from '../src/components/Post';


export default function Home() {
  return (
    <>
      <Menu />
      <Banner />
      <ContainerPosts>
        <Post title="Israel e suas peculiaridades" />
      </ContainerPosts>
    </>
  )
}
