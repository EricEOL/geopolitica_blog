import styled, { keyframes } from 'styled-components';
import Menu from '../src/components/Menu';
import Loading from '../src/components/Loading';
import dbposts from '../dbposts.json';

export const ContainerCards = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
    width: 100%;
    height: 94vh;

    background-color: ${({theme})=> theme.colors.mainBg};

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;

        height: 100%;

        padding: 8px;
    }
`

ContainerCards.Card = styled.div`
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
        linear-gradient(transparent, ${({theme})=> theme.colors.mainBg}), 
        url(${({ backgroundImage }) => backgroundImage});

    border-bottom: 1px solid transparent;
    border-image: linear-gradient(to right, #2EDC8D , ${({theme})=> theme.colors.mainBg});
    border-image-slice: 1;
    
    opacity: 0.7;
    cursor: pointer;

    color: ${({theme})=> theme.colors.contrastText};

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
        border-image: linear-gradient(to left, #2EDC8D , ${({theme})=> theme.colors.mainBg});
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
        <ContainerCards>
        {dbposts.posts.map(post=>(
            <ContainerCards.Card backgroundImage={post.imageUrl}>
                    <div style={{display: 'flex', flexDirection: 'column', margin: '4px', width: '80%' }}>
                        <h2>{post.title}</h2>

                        <strong>{`Por: ${post.author}`}</strong>
                        <span>{`Em: ${post.date}`}</span>
                    </div>
            </ContainerCards.Card>
        ))}
        </ContainerCards>
    )
}

const screenStates = {
    LOADING: 'LOADING',
    BLOG: 'BLOG',
}

function lastPosts() {
    const [screenState, setScreenState] = React.useState(screenStates.LOADING);
    
    React.useEffect(()=>{
        setTimeout(()=>{
            setScreenState(screenStates.BLOG);
        }, 2 * 1000)
    }, []);

    return (
        <>
            <Menu />
            {screenState === screenStates.LOADING && <Loading/>}
            {screenState === screenStates.BLOG && <PostCards/>}
        </>
    )
}

export default lastPosts;