import styled from 'styled-components';

const MenuStyle = styled.div`
    display: flex;
    align-items: center;

    width: 100%;

    font-size: 15px;

    padding: 12px;

    background-color: ${({theme})=> theme.colors.mainBg};
`

export default function Menu() {
    return (
        <MenuStyle>
            <h1>GeopolíticaBlog</h1>
        </MenuStyle>
    );
};