import styled from 'styled-components';

interface ContainerProps {
    $isOpen: boolean;
}

export const Container = styled.nav<ContainerProps>`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 280px;
    background-color: #171717;
    border-right: 1px solid #333;
    display: flex;
    flex-direction: column;
    transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '-100%')});
    transition: transform 0.3s ease;
    z-index: 1000;

    @media (max-width: 768px) {
        transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '-100%')});
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid #333;
`;

export const LogoContainer = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CloseButton = styled.button`
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 1.2rem;
    padding: 8px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
`;

export const Menu = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    flex: 1;
    padding: 8px 0;
`;

export const MenuItem = styled.a`
    display: flex;
    align-items: center;
    padding: 12px 24px;
    color: #fff;
    text-decoration: none;
    font-size: 1.1rem;
    transition: background-color 0.2s ease;
    font-weight: 400;

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
`;

export const MenuIcon = styled.span`
    margin-right: 16px;
    font-size: 1.2rem;
    width: 24px;
    text-align: center;
`;

export const MenuLabel = styled.span`
    font-size: 1.1rem;
`;

export const PiuButton = styled.button`
    background-color: ${({ theme }) => theme.colors.indigo9};
    color: white;
    border: none;
    border-radius: 28px;
    padding: 12px 0;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    margin: 16px 24px;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: ${({ theme }) => theme.colors.indigo10};
    }
`;
