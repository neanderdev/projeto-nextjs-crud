import { ReactNode } from 'react';

interface BotaoProps {
    cor: 'green' | 'blue' | 'gray';
    className?: string;
    onClick?: () => void;
    children: ReactNode;
}

export default function Botao({ cor, className, onClick, children }: BotaoProps) {
    return (
        <button
            className={`bg-gradient-to-r from-${cor}-400 to-${cor}-700 text-white px-4 py-2 rounded-md ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
