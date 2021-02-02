import styled from 'styled-components';

export const ContentContainerStyle = styled.main`
    display: flex;

    padding: 8px;

    background-image: linear-gradient(to bottom, #FFFFFF, ${({theme})=> theme.colors.secondary});

    h1 {
        font-size: 25px;
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;

function ContentContainer({ children }) {
    return (
        <ContentContainerStyle>
            {children}
        </ContentContainerStyle>
    )
}

export default ContentContainer;