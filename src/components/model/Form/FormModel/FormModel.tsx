import { useForm } from 'react-hook-form';
import Button from '../../Button/Button';
import InputModel from '../../Input/InputDefault';
import { Field } from '../../../types/Field/Field';
import { useNavigate } from 'react-router-dom';
import { Schema } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import TextModel from '../../Text/Text';
import { ReactNode } from 'react';

type FormModelProps = {
    children?: ReactNode;
    buttonText: string;
    onSubmit(data: any): void;
    fields: Field[];
    classname?: string;
    location: string;
    schema: Schema;
};

const FormModel: React.FC<FormModelProps> = ({
    children,
    buttonText,
    fields,
    classname,
    onSubmit,
    location,
    schema,
}) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'all',
        criteriaMode: 'all',
        resolver: zodResolver(schema),
    });

    const navigate = useNavigate();

    const submitForm = (data: any) => {
        navigate(location);
        onSubmit(data);
    };

    return (
        <form className={classname ?? 'flex flex-col gap-5'} onSubmit={handleSubmit(submitForm)}>
            {fields &&
                fields.map((field, index) => (
                    <div key={index}>
                        <InputModel
                            type={field.type}
                            placeholder={field.placeholder}
                            register={register}
                            name={field.name}
                            onChange={field.onChange}
                            label={field.label}
                            minLength={field.minLength}
                            maxLength={field.maxLength}
                        />
                        {(errors[field.name] && (
                            <TextModel addons="mt-3" color="text-red-600" content={errors[field.name]?.message} />
                        ))}
                    </div>
                ))}
                
            {children}

            {buttonText && <Button text={buttonText} />}
        </form>
    );
};

export default FormModel;
