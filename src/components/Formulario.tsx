import { useState } from 'react';

import Entrada from './Entrada';
import Botao from './Botao';

import Cliente from '../core/Cliente';

interface FormularioProps {
    cliente: Cliente;
}

export default function Formulario({ cliente }: FormularioProps) {
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
                <Botao cor='blue' className='mr-2'>
                    {
                        id
                            ? 'Alterar'
                            : 'Salvar'
                    }
                </Botao>

                <Botao cor='gray'>
                    Cancelar
                </Botao>
            </div>
        </div>
    );
}
