import styled from 'styled-components';

export const PostStyle = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    padding: 12px;
    /* margin: 0 auto; */

    background-color: #fff;

    border: 1px solid ${({ theme }) => theme.colors.boxShadowColor};
    border-radius: 4px;
    box-shadow: 4px 1px 8px ${({ theme }) => theme.colors.boxShadowColor};

    h2 {
        font-size: 18px;
        font-weight: bold;

        color: ${({ theme }) => theme.colors.primary};
    }
`;

PostStyle.Header = styled.header`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

PostStyle.HeaderImg = styled.div`

    margin-right: 8px;

    img {    
        border-radius: 50%;
        width: 60px;
        height: 60px;
        border: 1px solid ${({ theme }) => theme.colors.boxShadowColor};

        object-fit: cover;
    }
`;

PostStyle.Content = styled.div`
    padding: 16px;

    text-align: justify;

    img {
        margin: 12px 0;

        width: 100%;
        max-height: 800px;

        border: 1px solid ${({ theme }) => theme.colors.boxShadowColor};
    }
`;

function PostContent({text, img, alt}) {
    return (
        <PostStyle.Content>
            <p>{text}</p>
            <img src={img} alt={alt}/>
        </PostStyle.Content>
    )
}

function PostHeaderImg({ url, alt }) {
    return (
        <PostStyle.HeaderImg>
            <img src={url} alt={alt} />
        </PostStyle.HeaderImg>
    )
}

function Post({ title, text, alt, img }) {
    return (
        <PostStyle>
            <PostStyle.Header>
                <PostHeaderImg url={"https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg"} alt={"Israel"} />
                <h2>{title}</h2>
            </PostStyle.Header>
            <PostContent text={text} alt={alt} img={img} />
        </PostStyle>
    )
}

export default Post;