import styled from 'styled-components';

export const PostStyle = styled.div`
    display: flex;
    flex-direction: column;

    padding: 12px;

    h2 {
        font-size: 20px;
        font-weight: bold;

        color: ${({theme})=> theme.colors.primary};
    }
`;

PostStyle.Header = styled.header`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`; 

function Post({title}) {
    return (
        <PostStyle>
            <PostStyle.Header>
                <h2>{title}</h2>
            </PostStyle.Header>
        </PostStyle>
    )
}

export default Post;