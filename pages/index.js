import Link from 'next/link';
import styled, { keyframes } from 'styled-components';

export const Background = styled.div`
    display: flex;
    align-items: center;

    width: 100%;
    height: 100vh;

    background-image:
        linear-gradient(transparent, #FFFFFF),
        url("https://images.unsplash.com/photo-1576185850227-1f72b7f8d483?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1420&q=80");

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;

        justify-content: space-evenly;
    }

`
const appearFromLeft = keyframes`
    from{
        opacity: 0;
        transform: translateX(-50px);
    }
    to{
        opacity: 1;
        transform: translateX(0);
    }
`

export const MainContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;

    padding: 16px;
    
    h1 {
        background-color: #000;
        color: #fff;
    
        font-size: 80px;

        padding: 4px;
        border-radius: 8px;
        border-bottom: 5px solid #2EDC8D;
        /* text-shadow: 4px 4px 16px #FFFFFF; */
    }

    h2 {
        font-weight: normal;
        text-shadow: 4px 4px 4px #FFFFFF;
        text-align: end;
    }

    animation: ${appearFromLeft} 1s;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: space-evenly;

        text-align: center;
        padding: 0;

        h1 {
            font-size: 35px;
        }
        h2 {
            font-size: 20px;
            text-align: center;
        }
    }
`;

const appearFromRight = keyframes`
    from{
        opacity: 0;
        transform: translateX(50px);
    }
    to{
        opacity: 1;
        transform: translateX(0);
    }
`

export const Button = styled.button`
    width: 300px;
    height: 60px;

    border-radius: 8px;
    border: none;

    color: #333;
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;

    outline: none;
    cursor: pointer;

    animation: ${appearFromRight} 2.5s;

    transition: 0.5s;

    &:hover {
        background: #2EDC8D;

        box-shadow: 0 0 5px #2EDC8D,
                    0 0 25px #2EDC8D,
                    0 0 50px #2EDC8D,
                    0 0 100px #2EDC8D;
    }
`

function Home() {
    return (
        <Background>
            <MainContainer>
                <div>
                    <h1>GeopolíticaBlog</h1>
                    <h2>Lugar para se inteirar de assuntos <br /> de todos os lugares do planeta</h2>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '50%'
                }}>
                    <Link href="/last_posts"><Button>Entrar</Button></Link>
                </div>
            </MainContainer>
        </Background>
    )
}

export default Home;