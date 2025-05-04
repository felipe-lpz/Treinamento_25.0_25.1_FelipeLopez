import styled, { css } from 'styled-components';

interface ButtonProps {
    $variant?: 'primary' | 'secondary' | 'outline';
    $size?: 'sm' | 'md' | 'lg';
    $fullWidth?: boolean;
}

export const Button = styled.button<ButtonProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme, $variant = 'primary' }) =>
        $variant === 'primary'
            ? theme.colors.indigo9
            : $variant === 'secondary'
            ? '#333'
            : 'transparent'};
    color: ${({ $variant = 'primary' }) =>
        $variant === 'outline' ? '#1DA1F2' : '#fff'};
    border: ${({ $variant = 'primary' }) =>
        $variant === 'outline' ? '1px solid #1DA1F2' : 'none'};
    border-radius: 50px;
    padding: ${({ $size = 'md' }) =>
        $size === 'sm'
            ? '6px 16px'
            : $size === 'md'
            ? '10px 20px'
            : '12px 24px'};
    font-size: ${({ $size = 'md' }) =>
        $size === 'sm' ? '0.9rem' : $size === 'md' ? '1rem' : '1.1rem'};
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.2s ease;
    outline: none;
    width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

    &:hover {
        background-color: ${({ theme, $variant = 'primary' }) =>
            $variant === 'primary'
                ? theme.colors.indigo10
                : $variant === 'secondary'
                ? '#444'
                : 'rgba(29, 161, 242, 0.1)'};
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
    }
`;
