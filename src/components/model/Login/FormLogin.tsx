import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextModel from '../Text/Text';
import { Field } from '../../types/Field/Field';
import FormModel from '../Form/FormModel/FormModel';
import { z } from 'zod';
import { loginController } from '../../controller/LoginController/loginController';

type LoginActions = {
    email: string;
    password: string;
}

let location = '';

const schema = z.object({
    email: z.string().email('Wrong email or invalid'),
    password: z.string().min(8, 'Senha is required'),
});

const FormLogin: React.FC = () => {

    
    const fields: Field[] = [
        { type: "email", placeholder: "Digite seu email", name: "email"},
        { type: "password", placeholder: "Senha", name: "password"}
    ];

    async function handleSubmit (data: LoginActions) {
        const { email, password } = data;
        const status = await loginController(email, password);

        if (status.error) {
            
        } else {
            location = '/Home';
        }
    }

    const formFooter = (
        <div className="flex flex-col gap-7 my-5">
            <a
                className="w-full text-center p-5 font-medium border border-black 
                rounded-xl hover:bg-black hover:text-white text-heading-blue-secondary text-2xl flex justify-center gap-2"
                href=""
            >
                <img src="/Google.svg" className="w-7" alt="Google Icon" /> Continue with Google 
            </a>
            <TextModel 
                color='gray-600'
                content={
                    <>
                        Não tem conta ainda?{' '}
                        <Link className="hover:underline" to="/step1">Cadastre-se</Link>
                    </>
                } 
            />
        </div>
    );

    return (
        <>
            <FormModel 
                schema={schema} 
                location={location} 
                buttonText='Login' 
                fields={fields} 
                onSubmit={handleSubmit}
            />
            <hr className='my-5' />
            {formFooter}
        </>
    );
}

export default FormLogin;
