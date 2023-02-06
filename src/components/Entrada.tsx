interface EntradaProps {
    texto: string;
    tipo?: 'text' | 'number';
    valor: any;
    somenteLeitura?: boolean;
    valorMudou?: (valor: any) => void;
    className?: string;
}

export default function Entrada({
    texto,
    tipo = 'text',
    valor,
    somenteLeitura = false,
    valorMudou,
    className,
}: EntradaProps) {
    return (
        <div className={`flex flex-col ${className}`}>
            <label className='mb-2'>
                {texto}
            </label>

            <input
                type={tipo}
                value={valor}
                readOnly={somenteLeitura}
                className={`border border-purple-500 rounded-lg focus:outline-none bg-gray-100 px-4 py-2 ${somenteLeitura ? '' : 'focus:bg-white'}`}
                onChange={e => valorMudou!(e.target.value)}
            />
        </div>
    );
}
