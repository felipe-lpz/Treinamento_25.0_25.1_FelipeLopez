import styled from 'styled-components';
import { defaultTheme } from '../../styles/default.theme';

interface InputProps {
    hasError?: boolean;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${defaultTheme.space[4]}px;
`;

export const Label = styled.label`
    color: ${defaultTheme.colors.slate12};
    font-size: ${defaultTheme.fontSizes[2]};
    margin-bottom: ${defaultTheme.space[1]}px;
`;

export const Input = styled.input<InputProps>`
    background-color: ${defaultTheme.colors.slate6};
    border: 1px solid
        ${({ theme, hasError }) =>
            hasError ? theme.colors.red : theme.colors.slate8};
    border-radius: ${defaultTheme.radii.sm}px;
    color: ${defaultTheme.colors.slate12};
    font-size: ${defaultTheme.fontSizes[2]};
    padding: ${defaultTheme.space[1]}px ${defaultTheme.space[1]}px;
    outline: none;
    transition: all 0.2s ease;

    &::placeholder {
        color: ${defaultTheme.colors.slate10};
    }

    &:focus {
        border-color: ${defaultTheme.colors.sky9};
        box-shadow: 0 0 0 2px ${defaultTheme.colors.sky9}33;
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

export const ErrorMessage = styled.span`
    color: ${defaultTheme.colors.red}
    font-size: ${defaultTheme.fontSizes[1]};
    margin-top: ${defaultTheme.space[1]}px;
`;
