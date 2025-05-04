import React, { useState, useEffect } from 'react';
import * as S from './styles';

const ScrollTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Mostrar o botão apenas quando o usuário rolar para baixo
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Função para rolar para o topo
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <S.Button
            onClick={scrollToTop}
            $isVisible={isVisible}
            aria-label="Rolar para o topo"
            title="Rolar para o topo"
        >
            ↑
        </S.Button>
    );
};

export default ScrollTopButton;
