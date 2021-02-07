import Link from 'next/link';
import styled from 'styled-components';

const MenuStyle = styled.header`
    display: flex;
    align-items: center;
    height: 6vh;

    position: relative;

    width: 100%;

    font-size: 8px;

    padding: 12px;
    
    background-color: ${({theme})=> theme.colors.mainBg};

    h1 {
        cursor: pointer;
        color: ${({theme})=> theme.colors.contrastText};
    }

    border-bottom: 1px solid transparent;
    border-image: linear-gradient(to right, #2EDC8D , ${({theme})=> theme.colors.mainBg});
    border-image-slice: 1;
`;

export default function Menu() {
    return (
        <MenuStyle>
            <Link href="/"><h1>GeopolíticaBlog</h1></Link>
        </MenuStyle>
    );
};