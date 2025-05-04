import React from 'react';
import * as S from './styles';

interface InputProps {
    label?: string;
    placeholder?: string;
    type?: 'text' | 'email' | 'password';
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

const Input: React.FC<InputProps> = ({
    label,
    placeholder,
    type = 'text',
    value,
    onChange,
    error
}) => {
    return (
        <S.Container>
            {label && <S.Label>{label}</S.Label>}
            <S.Input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                hasError={!!error}
            />
            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
        </S.Container>
    );
};

export default Input;
