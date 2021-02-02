import styled from 'styled-components';

const MenuStyle = styled.header`
    display: flex;
    align-items: center;

    width: 100%;

    font-size: 8px;

    padding: 12px;
    
    background-color: ${({theme})=> theme.colors.mainBg};

    h1 {
        color: ${({theme})=> theme.colors.contrastText};
    }
`;

export default function Menu() {
    return (
        <MenuStyle>
            <h1>GeopolíticaBlog</h1>
        </MenuStyle>
    );
};