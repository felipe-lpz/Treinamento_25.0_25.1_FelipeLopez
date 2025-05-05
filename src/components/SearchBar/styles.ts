import styled from 'styled-components';
import { defaultTheme } from '../../styles/default.theme';

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: #202327;
    border-radius: 20px;
    padding: 8px 12px;
    width: 100%;
    max-width: 300px;
    position: relative;
    transition: all 0.2s ease;

    &:focus-within {
        background-color: #000;
        box-shadow: 0 0 0 1px ${defaultTheme.colors.sky9};
    }
`;

export const SearchIcon = styled.span`
    margin-right: 8px;
    color: #6e767d;
`;

export const Input = styled.input`
    background: transparent;
    border: none;
    color: #fff;
    font-size: 0.9rem;
    width: 100%;
    outline: none;

    &::placeholder {
        color: #6e767d;
    }
`;

export const ClearButton = styled.button`
    background: none;
    border: none;
    color: ${defaultTheme.colors.sky9};
    cursor: pointer;
    padding: 0;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 8px;

    &:hover {
        color: ${defaultTheme.colors.sky10};
    }
`;
