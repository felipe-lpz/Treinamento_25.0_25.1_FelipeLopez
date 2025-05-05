import styled from 'styled-components';
import { defaultTheme } from '../../styles/default.theme';

export const Container = styled.div`
    display: flex;
    padding: 12px 16px;
    border-bottom: 1px solid #333;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: rgba(255, 255, 255, 0.03);
    }
`;

export const AvatarContainer = styled.div`
    margin-right: 12px;

    .avatar {
        border-radius: 50%;
        width: 40px;
        height: 40px;
    }
`;

export const Content = styled.div`
    flex: 1;
    min-width: 0;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 4px;
`;

export const AuthorInfo = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

export const AuthorName = styled.span`
    font-weight: 700;
    color: #fff;
    margin-right: 4px;
`;

export const Username = styled.span`
    color: #6e767d;
`;

export const Dot = styled.span`
    color: #6e767d;
    margin: 0 4px;
`;

export const Timestamp = styled.span`
    color: #6e767d;
`;

export const PiuText = styled.p`
    color: #fff;
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 12px;
    word-wrap: break-word;
`;

export const Actions = styled.div`
    display: flex;
    justify-content: flex-start;
    max-width: 425px;
`;

export const ActionButton = styled.button`
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    color: #6e767d;
    padding: 8px 12px;
    margin-right: 40px;
    border-radius: 50px;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
        color: ${defaultTheme.colors.sky9};
    }
`;

export const ActionCount = styled.span`
    font-size: 0.9rem;
    margin-left: 6px;
`;

export const CommentIcon = styled.span`
    font-size: 1.2rem;
`;

export const RepiuIcon = styled.span`
    font-size: 1.2rem;
`;

export const LikeIcon = styled.span`
    font-size: 1.2rem;
`;
