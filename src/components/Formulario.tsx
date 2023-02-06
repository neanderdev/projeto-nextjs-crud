import { useState } from 'react';

import Entrada from './Entrada';
import Botao from './Botao';

import Cliente from '../core/Cliente';

interface FormularioProps {
    cliente: Cliente;
    clienteMudou: (cliente: Cliente) => void;
    cancelado: () => void;
}

export default function Formulario({ cliente, clienteMudou, cancelado }: FormularioProps) {
    const id = cliente?.id;

    const [nome, setNome] = useState(cliente?.nome ?? '');
    const [idade, setIdade] = useState(cliente?.idade ?? 0);

    return (
        <div>
            {
                id
                    ? (
                        <Entrada
                            texto='Código'
                            valor={id}
                            somenteLeitura
                            className='mb-5'
                        />
                    )
                    : false
            }

            <Entrada
                texto='Nome'
                valor={nome}
                valorMudou={setNome}
                className='mb-5'
            />

            <Entrada
                tipo='number'
                texto='Idade'
                valor={idade}
                valorMudou={setIdade}
            />

            <div className='mt-3 flex justify-end'>
                <Botao
                    cor='blue'
                    className='mr-2'
                    onClick={() => clienteMudou(new Cliente(nome, Number(idade), id))}
                >
                    {
                        id
                            ? 'Alterar'
                            : 'Salvar'
                    }
                </Botao>

                <Botao
                    cor='gray'
                    onClick={cancelado}
                >
                    Cancelar
                </Botao>
            </div>
        </div>
    );
}
