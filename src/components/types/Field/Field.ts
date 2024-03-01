
import { FieldValues, UseFormRegister } from 'react-hook-form';


export type Field = {
    type: string;
    placeholder?: string;
    name: string;
    minLength?: number;
    maxLength?: number;
    label?: string;
    register?: UseFormRegister<FieldValues>;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
};
