import styled from 'styled-components';

export const ContainerPostsStyle = styled.main`
    display: flex;
    justify-content: center;
    width: 100%;

    padding-bottom: 24px;

    border-radius: 4px;

    h1 {
        /* text-align: center; */
        margin-bottom: 16px;

        color: ${({ theme }) => theme.colors.primary}
    }
`

function ContainerPosts({ children }) {
    return (
        <ContainerPostsStyle>
            {children}
        </ContainerPostsStyle>
    )
}

export default ContainerPosts;