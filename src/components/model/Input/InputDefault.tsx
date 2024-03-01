
import TextModel from '../Text/Text';
import { Field } from '../../types/Field/Field';
import React from 'react';

const InputModel: React.FC<Field> = ({ 
    placeholder, 
    type, 
    register, 
    name,
    minLength, 
    maxLength, 
    label, 
    onChange,
}) => {
    
  

    return (
        <div>
            <TextModel content={label ?? ''} />
            <input

                {...(register && register(name))}
                placeholder={placeholder}
                type={type}
                minLength={minLength}
                maxLength={maxLength}
                name={name}
                onChange={onChange} 

                className={`block w-full p-4 
                border-transparent rounded-lg 
                bg-gray-50 focus:primary-green focus:border-primary-green dark:bg-gray-700 
                dark:placeholder-gray-400 dark:text-white dark:focus:primary-green
                dark:focus:border-primary-green font-semibold placeholder:text-2xl py-6 text-gray-400 
                mt-2 text-2xl outline-0`}
            />
        </div>
    );
};

export default InputModel;
