import styled from 'styled-components';
import { defaultTheme } from '../../styles/default.theme';

interface ButtonProps {
    $variant?: 'primary' | 'secondary' | 'outline';
    $size?: 'sm' | 'md' | 'lg';
    $fullWidth?: boolean;
}

// Funções auxiliares refatoradas para usar defaultTheme diretamente
const getBackgroundColor = (props: { $variant?: string }) => {
    const variant = props.$variant || 'primary';

    if (variant === 'primary') {
        return defaultTheme.colors.sky9;
    }
    if (variant === 'secondary') {
        return '#333';
    }
    return 'transparent';
};

const getTextColor = (props: { $variant?: string }) => {
    const variant = props.$variant || 'primary';

    if (variant === 'outline') {
        return '#1DA1F2';
    }
    return '#fff';
};

const getBorder = (props: { $variant?: string }) => {
    const variant = props.$variant || 'primary';

    if (variant === 'outline') {
        return '1px solid #1DA1F2';
    }
    return 'none';
};

const getPadding = (props: { $size?: string }) => {
    const size = props.$size || 'md';

    if (size === 'sm') {
        return '6px 16px';
    }
    if (size === 'md') {
        return '10px 20px';
    }
    return '12px 24px';
};

const getFontSize = (props: { $size?: string }) => {
    const size = props.$size || 'md';

    if (size === 'sm') {
        return '0.9rem';
    }
    if (size === 'md') {
        return '1rem';
    }
    return '1.1rem';
};

const getWidth = (props: { $fullWidth?: boolean }) => {
    if (props.$fullWidth) {
        return '100%';
    }
    return 'auto';
};

const getHoverBackgroundColor = (props: { $variant?: string }) => {
    const variant = props.$variant || 'primary';

    if (variant === 'primary') {
        return defaultTheme.colors.sky10;
    }
    if (variant === 'secondary') {
        return '#444';
    }
    return 'rgba(29, 161, 242, 0.1)';
};

export const Button = styled.button<ButtonProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => getBackgroundColor(props)};
    color: ${(props) => getTextColor(props)};
    border: ${(props) => getBorder(props)};
    border-radius: 50px;
    padding: ${(props) => getPadding(props)};
    font-size: ${(props) => getFontSize(props)};
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.2s ease;
    outline: none;
    width: ${(props) => getWidth(props)};

    &:hover {
        background-color: ${(props) => getHoverBackgroundColor(props)};
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
    }
`;
