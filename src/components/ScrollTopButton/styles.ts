import styled from 'styled-components';

interface ButtonProps {
    $isVisible: boolean;
}

export const Button = styled.button<ButtonProps>`
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.indigo9};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
    transform: ${({ $isVisible }) => ($isVisible ? 'scale(1)' : 'scale(0.8)')};

    &:hover {
        background-color: ${({ theme }) => theme.colors.indigo10};
        transform: ${({ $isVisible }) =>
            $isVisible ? 'scale(1.1)' : 'scale(0.8)'};
    }
`;
