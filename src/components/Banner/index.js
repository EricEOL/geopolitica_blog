import styled from 'styled-components';

export const BannerStyle = styled.div`
    width: 100%;
    height: 25vh;

    /*background-image: url("https://images.unsplash.com/photo-1576185850227-1f72b7f8d483?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1420&q=80");*/
    background-size: cover;
    background-position: center;

    background-image:
        linear-gradient(transparent, #FFFFFF),
        url("https://images.unsplash.com/photo-1576185850227-1f72b7f8d483?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1420&q=80");

`;

function Banner() {
    return (
        <BannerStyle />
    );
};

export default Banner;