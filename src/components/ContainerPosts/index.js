import styled from 'styled-components';

export const ContainerPostsStyle = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;

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
            <h1>Últimas Matérias</h1>
            {children}
        </ContainerPostsStyle>
    )
}

export default ContainerPosts;