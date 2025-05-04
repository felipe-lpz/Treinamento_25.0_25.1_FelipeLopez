import React, { useState, KeyboardEvent, useMemo } from 'react';
import Image from 'next/image';
import Sidebar from '../../components/Sidebar';
import Button from '../../components/Button';
import Piu, { PiuData } from '../../components/Piu';
import ScrollTopButton from '../../components/ScrollTopButton';
import SearchBar from '../../components/SearchBar';
import * as S from './styles';

const FeedTemplate: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [newPiuText, setNewPiuText] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    // Mock data para os pius
    const mockPius: PiuData[] = [
        {
            id: '1',
            author: {
                name: 'Maria Silva',
                username: 'mariasilva',
                avatar: 'https://via.placeholder.com/48'
            },
            content:
                'Olá, acabei de me cadastrar no PiuPiuwer! Que animação 🎉',
            timestamp: new Date(Date.now() - 3600000),
            likes: 24,
            comments: 5,
            repius: 8
        },
        {
            id: '2',
            author: {
                name: 'João Santos',
                username: 'joaosantos',
                avatar: 'https://via.placeholder.com/48'
            },
            content:
                'Primeira vez usando o PiuPiuwer e já estou adorando a interface dark mode! 🌙',
            timestamp: new Date(Date.now() - 7200000),
            likes: 15,
            comments: 3,
            repius: 2
        },
        {
            id: '3',
            author: {
                name: 'Pedro Lima',
                username: 'pedrolima',
                avatar: 'https://via.placeholder.com/48'
            },
            content:
                'Alguém sabe como usar todas as funcionalidades do PiuPiuwer? Tem muita coisa legal aqui!',
            timestamp: new Date(Date.now() - 10800000),
            likes: 8,
            comments: 12,
            repius: 3
        }
    ];

    // Filtra os pius com base na query de pesquisa
    const filteredPius = useMemo(() => {
        if (!searchQuery.trim()) return mockPius;

        return mockPius.filter(
            (piu) =>
                piu.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                piu.author.name
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                piu.author.username
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
        );
    }, [mockPius, searchQuery]);

    const handleSubmitPiu = (e?: React.FormEvent) => {
        if (e) e.preventDefault();

        if (newPiuText.trim()) {
            console.log('Novo piu:', newPiuText);
            setNewPiuText('');
        }
    };

    // Função para lidar com o pressionamento de teclas no textarea
    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        // Posta o piu quando pressionar Enter (sem shift, para permitir quebras de linha)
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmitPiu();
        }
    };

    return (
        <S.AppLayout>
            <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />

            <S.MainContent $sidebarOpen={isSidebarOpen}>
                <S.Header>
                    <S.HeaderInner>
                        <S.HeaderTitle>Home</S.HeaderTitle>
                        <S.SearchContainer>
                            <SearchBar
                                onSearch={setSearchQuery}
                                placeholder="Pesquisar pius..."
                            />
                        </S.SearchContainer>
                    </S.HeaderInner>
                </S.Header>

                <S.NewPiuSection>
                    <S.NewPiuContainer>
                        <S.AvatarContainer>
                            <Image
                                src="https://via.placeholder.com/48"
                                alt="User"
                                width={40}
                                height={40}
                                className="avatar"
                                unoptimized
                            />
                        </S.AvatarContainer>
                        <S.NewPiuForm onSubmit={handleSubmitPiu}>
                            <S.NewPiuTextarea
                                placeholder="O que está acontecendo?"
                                value={newPiuText}
                                onChange={(e) => setNewPiuText(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                            <S.NewPiuActions>
                                <S.CharCount>
                                    {newPiuText.length}/280
                                </S.CharCount>
                                <Button
                                    type="submit"
                                    disabled={!newPiuText.trim()}
                                >
                                    Piu
                                </Button>
                            </S.NewPiuActions>
                        </S.NewPiuForm>
                    </S.NewPiuContainer>
                </S.NewPiuSection>

                {searchQuery && (
                    <S.SearchResults>
                        Resultados para "{searchQuery}" ({filteredPius.length})
                        {filteredPius.length === 0 && (
                            <S.NoResults>Nenhum piu encontrado</S.NoResults>
                        )}
                    </S.SearchResults>
                )}

                <S.FeedContainer>
                    {filteredPius.map((piu) => (
                        <Piu
                            key={piu.id}
                            data={piu}
                            onLike={() => console.log('Liked:', piu.id)}
                            onComment={() => console.log('Comment:', piu.id)}
                            onRepiu={() => console.log('Repiu:', piu.id)}
                        />
                    ))}
                </S.FeedContainer>
            </S.MainContent>

            {/* Botão para voltar ao topo da página */}
            <ScrollTopButton />
        </S.AppLayout>
    );
};

export default FeedTemplate;
