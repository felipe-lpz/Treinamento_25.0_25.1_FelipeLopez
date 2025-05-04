import styled from 'styled-components';

interface InputProps {
    hasError?: boolean;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${({ theme }) => theme.space[4]}px;
`;

export const Label = styled.label`
    color: ${({ theme }) => theme.colors.slate12};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin-bottom: ${({ theme }) => theme.space[1]}px;
`;

export const Input = styled.input<InputProps>`
    background-color: ${({ theme }) => theme.colors.slate6};
    border: 1px solid
        ${({ theme, hasError }) =>
            hasError ? theme.colors.red : theme.colors.slate8};
    border-radius: ${({ theme }) => theme.radii.sm}px;
    color: ${({ theme }) => theme.colors.slate12};
    font-size: ${({ theme }) => theme.fontSizes.md};
    padding: ${({ theme }) => `${theme.space[2]}px ${theme.space[3]}px`};
    outline: none;
    transition: all 0.2s ease;

    &::placeholder {
        color: ${({ theme }) => theme.colors.slate10};
    }

    &:focus {
        border-color: ${({ theme }) => theme.colors.indigo9};
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.indigo9}33;
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

export const ErrorMessage = styled.span`
    color: ${({ theme }) => theme.colors.red};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    margin-top: ${({ theme }) => theme.space[1]}px;
`;
