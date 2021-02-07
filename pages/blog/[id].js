import dbposts from '../../dbposts.json';
import Menu from '../../src/components/Menu';
import ContainerPosts from '../../src/components/ContainerPosts';
import Banner from '../../src/components/Banner';
import ContentContainer from '../../src/components/ContentContainer';
import Post from '../../src/components/Post';
import ContainerFavoritePosts from '../../src/components/ContainerFavoritePosts';

export default function UniquePost({ post }) {
    return (
        <>
            <Menu />
            <Banner />
            <ContentContainer>
                <ContainerPosts>
                    <Post
                        title={post.title}
                        text={post.text}
                        alt={post.title}
                        img={post.imageUrl}
                        headerUrl={post.imageHeader}
                    />
                </ContainerPosts>
            </ContentContainer>
        </>
    )
}

export async function getServerSideProps(context) {

    const [postId, postTitle] = context.query.id.split('___')
    console.log(postId);

    const post = dbposts.posts.find(post => post.id === postId);

    return {
        props: {
            post
        },
    }
}