import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as S from './styles';
import logo from '../../../public/assets/images/logo.png';

interface SidebarProps {
    isOpen?: boolean;
    onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen = true, onClose }) => {
    const menuItems = [
        { icon: '🏠', label: 'Home', href: '/' },
        { icon: '🔍', label: 'Explore', href: '/explore' },
        { icon: '🔔', label: 'Notifications', href: '/notifications' },
        { icon: '💬', label: 'Messages', href: '/messages' },
        { icon: '👤', label: 'Profile', href: '/profile' },
        { icon: '⚙️', label: 'Settings', href: '/settings' }
    ];

    return (
        <S.Container $isOpen={isOpen}>
            <S.Header>
                <S.LogoContainer>
                    <Image
                        src={logo}
                        alt="PiuPiuwer Logo"
                        width={40}
                        height={40}
                        unoptimized
                    />
                </S.LogoContainer>
                {onClose && <S.CloseButton onClick={onClose}>X</S.CloseButton>}
            </S.Header>

            <S.Menu>
                {menuItems.map((item) => (
                    <Link
                        href={item.href}
                        key={item.href || `menu-item-${item.label}`}
                        passHref
                    >
                        <S.MenuItem as="a">
                            <S.MenuIcon>{item.icon}</S.MenuIcon>
                            <S.MenuLabel>{item.label}</S.MenuLabel>
                        </S.MenuItem>
                    </Link>
                ))}
            </S.Menu>

            <S.PiuButton>Piu</S.PiuButton>
        </S.Container>
    );
};

export default Sidebar;
