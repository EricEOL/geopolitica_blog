import styled from 'styled-components';

export const ContainerFavoritePostsStyle = styled.div`
    display: flex;
    flex-direction: column;

    width: 20%;

    text-align: center;
`


function ContainerFavoritePosts() {
 return (
    <ContainerFavoritePostsStyle>
     <h1>Favoritos</h1>
    </ContainerFavoritePostsStyle>
 )
}

export default ContainerFavoritePosts;