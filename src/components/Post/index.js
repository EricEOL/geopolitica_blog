import styled from 'styled-components';
import parse from 'html-react-parser';
import leftArrow from '../../assets/leftArrow.png';
import Image from 'next/image';
import Link from 'next/link';

export const PostStyle = styled.div`
    display: flex;
    flex-direction: column;

    width: 70%;
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

    @media (max-width: 768px) {
        width: 95%;
    }
`;

PostStyle.Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
        font-size: 30px;
    }
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

function PostContent({ text, img, alt }) {
    return (
        <PostStyle.Content>
            <p>{parse(text)}</p>
            <img src={img} alt={alt} />
        </PostStyle.Content>
    )
}

function PostHeaderImg({ headerUrl, alt }) {
    return (
        <PostStyle.HeaderImg>
            <img src={headerUrl} alt={alt} />
        </PostStyle.HeaderImg>
    )
}

function Post({ title, text, alt, img, headerUrl }) {
    return (
        <PostStyle>
            <PostStyle.Header>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <PostHeaderImg headerUrl={headerUrl} alt={"Israel"} />
                    <h2>{title}</h2>
                </div>
                <div style={{cursor: 'pointer'}}>
                    <Link href="/blog/all_posts">
                        <Image src={leftArrow} width={30} height={30} />
                    </Link>
                </div>
            </PostStyle.Header>
            <PostContent text={text} alt={alt} img={img} />
        </PostStyle>
    )
}

export default Post;