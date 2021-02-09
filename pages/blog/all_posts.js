import styled from 'styled-components';
import Menu from '../../src/components/Menu';
import dbposts from '../../dbposts.json';
import Link from 'next/link';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 100%;
    height: 94vh;

    background-color: ${({ theme }) => theme.colors.mainBg};
`

Container.ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
    width: 70%;

    margin-top: 40px;

    @media (max-width: 768px) {
      width: 100%;

      justify-content: center;
    }

    div {
        display: flex;
        align-items: center;

        width: 48%;
        height: 80px;

        margin-top: 8px;

        border-radius: 8px;
        border-bottom: 3px solid #333;

        background: #3B6064;

        @media (max-width: 768px) {
          width: 90%;

          justify-content: center;
        }

        span {
          font-weight: 400;
          font-size: 18px;

          letter-spacing: 2px;

          color: #fff;
        }

        img {    
            margin-left: 8px;
            margin-right: 4px;
            width: 60px;
            height: 60px;

            border-radius: 50%;
            border: 1px solid ${({ theme }) => theme.colors.boxShadowColor};

            object-fit: cover;
        }

        cursor: pointer;

        transition: 0.2s;

        &:hover {
          background: #5B949A;

          span {
            color: ${({ theme }) => theme.colors.mainBg};
          }
        }
    }
`

function allPosts() {
  return (
    <>
      <Menu />
      <Container>
        <Container.ListContainer>
        {dbposts.posts.map((post, index)=>(
          <Link key={index} href={`/blog/${post.id}___${post.title}`}>
            <div>
              <img src={post.imageHeader} />
              <span>{post.title}</span>
            </div>
          </Link>
        ))}
        </Container.ListContainer>
        <div>

        </div>
      </Container>
    </>
  )
}

export default allPosts;