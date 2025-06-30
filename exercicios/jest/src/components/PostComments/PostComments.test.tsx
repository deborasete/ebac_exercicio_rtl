import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);

        // eslint-disable-next-line testing-library/no-debugging-utils
        screen.debug();
        const input = screen.getByTestId('comentario-input') as HTMLTextAreaElement
        const botao = screen.getByTestId('comentario-botao')

        fireEvent.change(input, { target: { value: 'Comentário 1' } })
        fireEvent.click(botao)

        fireEvent.change(input, { target: { value: 'Comentário 2' } })
        fireEvent.click(botao)

        const lista = screen.getByTestId('lista-comentarios')

        expect(lista).toHaveTextContent('Comentário 1')
        expect(lista).toHaveTextContent('Comentário 2')
    });
});