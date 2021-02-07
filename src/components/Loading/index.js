import styled from 'styled-components';
import { motion } from 'framer-motion';

export const LoadingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 94vh;
`

LoadingContainer.AnimatedRetangle = styled.div`
    width: 50px;
    height: 50px;

    background-color: #333;

    opacity: 0;
`

function Loading(){
    return (
        <LoadingContainer>
            <LoadingContainer.AnimatedRetangle
                as={motion.div}
                transition={{ repeat: Infinity, duration: 2 }}
                animate={{
                    opacity: [0, 1, 1, 1, 0],
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    backgroundColor: ["#333","#333", "#682", "#333", "#333"]
                }}
            />
        </LoadingContainer>
    )
}

export default Loading;