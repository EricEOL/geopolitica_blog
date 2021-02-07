import styled from 'styled-components';
import { motion } from 'framer-motion';

export const LoadingContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 80vh;
`

LoadingContainer.AnimatedRetangle = styled.div`
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Big Shoulders Display', cursive;
    font-size: 35px;

    /* background-color: #333; */

    opacity: 0;
`

function Loading() {

    return (
        <LoadingContainer>
            {/*             <LoadingContainer.AnimatedRetangle
                as={motion.div}
                transition={{ repeat: Infinity, duration: 2 }}
                animate={{
                    opacity: [0, 1, 1, 1, 0],
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    backgroundColor: ["#333","#333", "#682", "#333", "#333"],
                }}
            >VOCÊ</LoadingContainer.AnimatedRetangle> */}
            <LoadingContainer.AnimatedRetangle
                as={motion.div}
                transition={{ duration: 1.5 }}
                animate={{
                    opacity: [0, 1, 0],
                    scale: [1, 2, 1],
                    rotate: [2,-2,2,-2,2,-2,2,-2]
                }}
            >VOCÊ</LoadingContainer.AnimatedRetangle>
            
            <LoadingContainer.AnimatedRetangle
                as={motion.div}
                transition={{ delay: 1.2, duration: 1.5 }}
                animate={{
                    opacity: [0, 1, 0],
                    scale: [1, 2, 1],
                    rotate: [2,-2,2,-2,2,-2,2,-2]
                }}
            >ESTÁ PRESTES</LoadingContainer.AnimatedRetangle>
            
            <LoadingContainer.AnimatedRetangle
                as={motion.div}
                transition={{ delay: 2.4, duration: 1.5 }}
                animate={{
                    opacity: [0, 1, 0],
                    scale: [1, 2, 1],
                    rotate: [2,-2,2,-2,2,-2,2,-2]
                }}
            >A CONHECER</LoadingContainer.AnimatedRetangle>
            
            <LoadingContainer.AnimatedRetangle
                as={motion.div}
                transition={{ delay: 3.8, duration: 1.5 }}
                animate={{
                    opacity: [0, 1, 0],
                    scale: [1, 2, 1],
                    rotate: [2,-2,2,-2,2,-2,2,-2]
                }}
            >TUDO SOBRE</LoadingContainer.AnimatedRetangle>

            <LoadingContainer.AnimatedRetangle
                as={motion.div}
                transition={{ delay: 5.0, duration: 1.5 }}
                animate={{
                    opacity: [0, 1, 0],
                    scale: [1, 4],
                    rotate: [2,-2,2,-2,2,-2,2,-2]
                }}
            >O NOSSO MUNDO!</LoadingContainer.AnimatedRetangle>
        
        </LoadingContainer>
    )
}

export default Loading;