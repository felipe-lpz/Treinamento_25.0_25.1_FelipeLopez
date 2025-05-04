import React from 'react';
import * as S from './styles';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    disabled = false,
    onClick,
    type = 'button'
}) => {
    return (
        <S.Button
            $variant={variant}
            $size={size}
            $fullWidth={fullWidth}
            disabled={disabled}
            onClick={onClick}
            type={type}
        >
            {children}
        </S.Button>
    );
};

export default Button;
