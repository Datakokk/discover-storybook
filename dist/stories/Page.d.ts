/// <reference types="react" />
import './page.css';
export interface PageProps {
    user?: {
        name: 'Almu';
    };
    onLogin: () => void;
    onLogout: () => void;
    onCreateAccount: () => void;
}
export declare const Page: ({ user, onLogin, onLogout, onCreateAccount }: PageProps) => JSX.Element;
