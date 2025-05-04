import styled from 'styled-components';

interface MainContentProps {
    $sidebarOpen: boolean;
}

export const AppLayout = styled.div`
    display: flex;
    min-height: 100vh;
    background-color: #000;
    color: #fff;
`;

export const MainContent = styled.main<MainContentProps>`
    flex: 1;
    margin-left: ${({ $sidebarOpen }) => ($sidebarOpen ? '280px' : '0')};
    transition: margin-left 0.3s ease;
    min-width: 0;
    border-right: 1px solid #333;

    @media (max-width: 1200px) {
        margin-left: 0;
    }
`;

export const Header = styled.header`
    position: sticky;
    top: 0;
    background-color: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid #333;
    z-index: 10;
`;

export const HeaderInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
`;

export const HeaderTitle = styled.h1`
    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;
`;

export const SearchContainer = styled.div`
    @media (max-width: 600px) {
        display: none;
    }
`;

export const NewPiuSection = styled.section`
    border-bottom: 1px solid #333;
`;

export const NewPiuContainer = styled.div`
    display: flex;
    padding: 12px 16px;
`;

export const AvatarContainer = styled.div`
    margin-right: 12px;

    .avatar {
        border-radius: 50%;
        width: 40px;
        height: 40px;
    }
`;

export const NewPiuForm = styled.form`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const NewPiuTextarea = styled.textarea`
    background: transparent;
    border: none;
    outline: none;
    color: #fff;
    font-size: 1.2rem;
    resize: none;
    min-height: 120px;
    margin-bottom: 12px;

    &::placeholder {
        color: #6e767d;
    }
`;

export const NewPiuActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #333;
    padding-top: 12px;
`;

export const CharCount = styled.span`
    color: #6e767d;
    font-size: 0.9rem;
`;

export const SearchResults = styled.div`
    padding: 12px 16px;
    border-bottom: 1px solid #333;
    color: #fff;
    font-size: 0.9rem;
    font-weight: 500;
`;

export const NoResults = styled.div`
    margin-top: 8px;
    color: #6e767d;
    font-style: italic;
`;

export const FeedContainer = styled.div`
    /* Feed container styles */
`;
