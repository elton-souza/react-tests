import React from 'react';
import { render } from '@testing-library/react';
import Transacao from './Transacao';
import Transacoes from './Transacoes';

describe('Componente de transação do extrato', () => {
    it('O snapshot do componente deve permanecer sempre o mesmo', () => {

        const { container } = render(<Transacao data='08/06/2022' tipo='saque' valor='100' />)

        expect(container.firstChild).toMatchSnapshot()
    })
})

describe('Componente de lista de transações do extrato', () => {
    it('O Snapshot do componente deve permanecer sempre renderizar uma lista', () => {
        const dados = [{
            data: '08/06/2022',
            tipo: 'saque',
            valor: '100'
        },
        {
            data: '09/06/2022',
            tipo: 'deposito',
            valor: '150'
        }]
        const { container } = render(<Transacoes transacoes={dados} />)

        expect(container.firstChild).toMatchSnapshot();
    })
})