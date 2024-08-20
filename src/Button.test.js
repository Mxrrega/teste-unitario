import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Componente Botão', () => {

    it('Se está logado', () => {
        render(<Button usuario={true} />);
        const buttonElement = screen.getByText('Logout');
        expect(buttonElement).toBeInTheDocument();
    });

    it('Se não está logado', () => {
        render(<Button usuario={false} />);
        const buttonElement = screen.getByText('Login');
        expect(buttonElement).toBeInTheDocument();
    });

    it('Se user é nulo', () => {
        render(<Button usuario={null} />);
        const buttonElement = screen.getByText('Login');
        expect(buttonElement).toBeInTheDocument();
    });

    it('Se user é vazio', () => {
        render(<Button usuario="" />);
        const buttonElement = screen.getByText('Login');
        expect(buttonElement).toBeInTheDocument();
    });

     it('Se user está preenchido', () => {
         render(<Button usuario={0} />);
         const buttonElement = screen.getByText('Login');
         expect(buttonElement).toBeInTheDocument();
     });

     it('Se user está preenchido com 1', () => {
         render(<Button usuario={1} />);
         const buttonElement = screen.getByText('Logout');
         expect(buttonElement).toBeInTheDocument();
     });

    it( "Se o user é falso e a class esta certa", () => {
        render( <Button usuario={false} /> )
        const buttonElement = screen.getByRole('button');
        expect( buttonElement ).toHaveAttribute( "class" , "blue" );
    });

    it( "Se o user é falso e a class esta certa", () => {
        render( <Button usuario={true} /> )
        const buttonElement = screen.getByRole('button');
        expect( buttonElement ).toHaveAttribute( "class" , "red" );
    });
    
    it( "Quantas vezes clicou", async () => {
        render( <Button usuario={true}/>);
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        await waitFor(() => {
            expect(buttonElement).toHaveClass('Active');
        });     
    });
});
