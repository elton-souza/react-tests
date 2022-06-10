import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react'
import App, { calcularNovoSaldo } from './App';

describe('Componente Principal', () => { // descrição
    describe('Quando eu abro o app do banco', () => {
        it('o nome do banco é exibido', () => { // função que realiza o teste
            render(<App />) //Renderiza o componente
            expect(screen.getByText('ByteBank')).toBeInTheDocument(); //screen referencia o componente que foi renderizado
        })
        it('o saldo é exibido', () => {
            render(<App />)
            expect(screen.getByText('Saldo:')).toBeInTheDocument();
        })
    })
    describe('Quando realizo uma transação', () => {
        it('Saque', () => {
            const valores = {
                transacao: 'saque',
                valor: 50
            }
            const novoSaldo = calcularNovoSaldo(valores, 150)
            expect(novoSaldo).toBe(100)
        });
        it('A transação do saque deve ser realizada', () => {
            const { getByText, getByTestId, getByLabelText } = render(<App />);

            const saldo = getByText('R$ 1000');
            const transacao = getByLabelText('Saque');
            const valor = getByTestId('valor')
            const botaoTransacao = getByText('Realizar operação')

            expect(saldo.textContent).toBe('R$ 1000');

            fireEvent.click(transacao, { target: { value: 'saque' } });
            fireEvent.change(valor, { target: { value: 10 } })
            fireEvent.click(botaoTransacao)

            expect(saldo.textContent).toBe('R$ 990')
        })
    })

})