import { render, screen } from '@testing-library/react'; 
import React from 'react'
import App from './App';

describe('Componente Principal', () => { // descrição
    it('Mostrar o nome do banco', () => { // função que realiza o teste

        render(<App />) //Renderiza o componente
        
        expect(screen.getByText('ByteBank')).toBeInTheDocument(); //screen referencia o componente que foi renderizado
    })
})