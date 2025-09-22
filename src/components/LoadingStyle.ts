import styled from 'styled-components'

type LoadingDotProps = {
    loadingDot: number;
}

export const LoadingPage = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 0.3%;
    background-color: blue;
`;

export const LoadingCircle = styled.div<LoadingDotProps>`
    width: 1dvw;
    aspect-ratio: 1 / 1;
    background-color: gray;
    border-radius: 50%;
`;
