import styled from 'styled-components';

export const ContainerPostsStyle = styled.div`
    display: flex;
    flex-direction: column;

    width: 80%;
    padding: 12px;

    margin: 12px auto;

    background-color: ${({theme})=> theme.colors.secondary};
    box-shadow: 1px 1px 16px ${({theme})=> theme.colors.boxShadowColor};
    border-radius: 4px;
`

function ContainerPosts({children}) {
    return (
        <ContainerPostsStyle>
            {children}
        </ContainerPostsStyle>
    )
}

export default ContainerPosts;