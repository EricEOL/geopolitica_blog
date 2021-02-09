import styled, { keyframes } from 'styled-components';
import Menu from '../../src/components/Menu';
import Loading from '../../src/components/Loading';
import dbposts from '../../dbposts.json';
import Link from 'next/link';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 100%;
    height: 94vh;

    background-color: ${({ theme }) => theme.colors.mainBg};

    @media (max-width: 768px) {
        height: 100%;
    }

`

Container.General = styled.div`
    width: 100%;
    text-align: center;

    padding: 20px;

    font-size: 20px;
    font-weight: 700;

    color: #2EDC8D;

    button {
        width: 150px;
        height: 40px;

        outline: none;

        margin-top: 16px;

        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;

        border: none;
        border-radius: 8px;

        cursor: pointer;

        transition: 0.2s;

        &:hover {
        background: #2EDC8D;

        box-shadow: 0 0 5px #2EDC8D,
                    0 0 25px #2EDC8D
        }
    }
`

Container.Content = styled.div`
    display: flex; 
    align-items: center;
    justify-content: space-evenly;
    
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;

        padding: 8px;
    }
`

Container.Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 25%;
    height: 60vh;

    border-radius: 8px;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: 
        linear-gradient(transparent, ${({ theme }) => theme.colors.mainBg}), 
        url(${({ backgroundImage }) => backgroundImage});

    border-bottom: 1px solid transparent;
    border-image: linear-gradient(to right, #2EDC8D , ${({ theme }) => theme.colors.mainBg});
    border-image-slice: 1;
    
    opacity: 0.7;
    cursor: pointer;

    color: ${({ theme }) => theme.colors.contrastText};

    h2 {
        margin-bottom: 8px;
    }

    strong, span {
        font-size: 12px;

        opacity: 0.7;
    }

    transition: 0.2s;

    &:hover {
        transform: scale(1.1);

        border-bottom: 2px solid transparent;
        border-image: linear-gradient(to left, #2EDC8D , ${({ theme }) => theme.colors.mainBg});
        border-image-slice: 1;

        opacity: 1;

        @media (max-width: 768px) {
            z-index: 1;
        }
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;

        width: 90%;

        margin-bottom: 24px;
    }
`

function PostCards() {
    return (
        <>
            <Container>
                <Container.General>Os mais recentes</Container.General>

                <Container.Content>
                    {dbposts.posts.map((post, index) => {
                        
                        if(index <= 2) {
                        return (
                        <Link key={index} href={`/blog/${post.id}___${post.title}`}>
                        <Container.Card
                            backgroundImage={post.imageUrl}>
                            <div style={{ display: 'flex', flexDirection: 'column', margin: '4px', width: '80%' }}>
                                <h2>{post.title}</h2>

                                <strong>{`Por: ${post.author}`}</strong>
                                <span>{`Em: ${post.date}`}</span>
                            </div>
                        </Container.Card>
                        </Link>
                    )}})}
                </Container.Content>

                <Container.General><Link href="/blog/all_posts"><button>Quero ler outros</button></Link></Container.General>
            </Container>
        </>
    )
}

const screenStates = {
    LOADING: 'LOADING',
    BLOG: 'BLOG',
}

function lastPosts() {
    const [screenState, setScreenState] = React.useState(screenStates.LOADING);

    function handleChangePageState() {
        setScreenState(screenStates.BLOG);
    }

    React.useEffect(() => {
        setTimeout(() => {
            setScreenState(screenStates.BLOG);
        }, 7 * 1000)
    }, [screenState]);

    return (
        <>
            <Menu />
            {screenState === screenStates.LOADING && (
                <>
                    <Loading />
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: '100%',
                    }}>
                        <button
                            style={{
                                right: 1,
                                backgroundColor: '#000',
                                color: '#fff',
                                width: '100px',
                                height: '30px',
                                fontSize: '12px',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: 'pointer'
                            }}
                            onClick={handleChangePageState}>PULAR
                        </button>
                    </div>
                </>
            )}
            {screenState === screenStates.BLOG && <PostCards />}
        </>
    )
}

export default lastPosts;