import React from 'react';
import Image from 'next/image';
import * as S from './styles';

export interface PiuData {
    id: string;
    author: {
        name: string;
        username: string;
        avatar: string;
    };
    content: string;
    timestamp: Date;
    likes: number;
    comments: number;
    repius: number;
}

interface PiuProps {
    data: PiuData;
    onLike?: () => void;
    onComment?: () => void;
    onRepiu?: () => void;
}

const Piu: React.FC<PiuProps> = ({ data, onLike, onComment, onRepiu }) => {
    const formatTimeAgo = (date: Date) => {
        const now = new Date();
        const diffInSeconds = Math.floor(
            (now.getTime() - date.getTime()) / 1000
        );

        if (diffInSeconds < 60) return `${diffInSeconds}s`;
        if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m`;
        if (diffInSeconds < 86400)
            return `${Math.floor(diffInSeconds / 3600)}h`;
        return `${Math.floor(diffInSeconds / 86400)}d`;
    };

    return (
        <S.Container>
            <S.AvatarContainer>
                <Image
                    src={data.author.avatar}
                    alt={data.author.name}
                    width={40}
                    height={40}
                    className="avatar"
                    unoptimized
                />
            </S.AvatarContainer>

            <S.Content>
                <S.Header>
                    <S.AuthorInfo>
                        <S.AuthorName>{data.author.name}</S.AuthorName>
                        <S.Username>@{data.author.username}</S.Username>
                        <S.Dot>·</S.Dot>
                        <S.Timestamp>
                            {formatTimeAgo(data.timestamp)}
                        </S.Timestamp>
                    </S.AuthorInfo>
                </S.Header>

                <S.PiuText>{data.content}</S.PiuText>

                <S.Actions>
                    <S.ActionButton onClick={onComment}>
                        <S.CommentIcon>💬</S.CommentIcon>
                        <S.ActionCount>{data.comments}</S.ActionCount>
                    </S.ActionButton>

                    <S.ActionButton onClick={onRepiu}>
                        <S.RepiuIcon>🔄</S.RepiuIcon>
                        <S.ActionCount>{data.repius}</S.ActionCount>
                    </S.ActionButton>

                    <S.ActionButton onClick={onLike}>
                        <S.LikeIcon>❤️</S.LikeIcon>
                        <S.ActionCount>{data.likes}</S.ActionCount>
                    </S.ActionButton>
                </S.Actions>
            </S.Content>
        </S.Container>
    );
};

export default Piu;
