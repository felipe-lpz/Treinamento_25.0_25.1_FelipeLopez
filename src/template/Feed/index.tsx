import React, { useState, KeyboardEvent, useMemo } from 'react';
import Image from 'next/image';
import Sidebar from '../../components/Sidebar';
import Button from '../../components/Button';
import Piu, { PiuData } from '../../components/Piu';
import ScrollTopButton from '../../components/ScrollTopButton';
import SearchBar from '../../components/SearchBar';
import * as S from './styles';
import tralalaero from '../../../public/assets/images/tralalaero.jpeg';

const mockPius: PiuData[] = [
    {
        id: '1',
        author: {
            name: 'Bombardilo Crocodilo',
            username: 'brainrot_italiano',
            avatar: 'https://media.printables.com/media/prints/1224224/images/9178270_c3f5024a-ea2c-4655-a0fb-f4e0bf256783_10cf6be6-8ee2-43dd-b95e-82514e0f301c/thumbs/inside/1280x960/jpeg/img_4257.webp'
        },
        content: 'Olá, acabei de me cadastrar no PiuPiuwer! Que animação 🎉',
        timestamp: new Date(Date.now() - 3600000),
        likes: 24,
        comments: 5,
        repius: 8
    },
    {
        id: '2',
        author: {
            name: 'Joãozinho do Liriralala',
            username: 'joaosantos',
            avatar: 'https://tr.rbxcdn.com/180DAY-3cb6495000a39eb5ff4878ea1812f8b9/420/420/Hat/Webp/noFilter'
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
            name: 'Pedro Main Volibear',
            username: 'main_voli_rage_quitter',
            avatar: 'https://i.pinimg.com/564x/67/c3/c3/67c3c3e4247e739fdfc1b43765607b26.jpg'
        },
        content:
            'Alguém sabe como usar todas as funcionalidades do PiuPiuwer? Tem muita coisa legal aqui!',
        timestamp: new Date(Date.now() - 10800000),
        likes: 8,
        comments: 12,
        repius: 3
    }
];

const FeedTemplate: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [newPiuText, setNewPiuText] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

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
    }, [searchQuery]);

    const handleSubmitPiu = (e?: React.FormEvent) => {
        if (e) e.preventDefault();

        if (newPiuText.trim()) {
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
                                src={tralalaero}
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
                        Resultados para `&quot;`{searchQuery}`&quot;` (
                        {filteredPius.length})
                        {filteredPius.length === 0 && (
                            <S.NoResults>Nenhum piu encontrado</S.NoResults>
                        )}
                    </S.SearchResults>
                )}

                <S.FeedContainer>
                    {filteredPius.map((piu) => (
                        <Piu key={piu.id} data={piu} />
                    ))}
                </S.FeedContainer>
            </S.MainContent>

            {/* Botão para voltar ao topo da página */}
            <ScrollTopButton />
        </S.AppLayout>
    );
};

export default FeedTemplate;
