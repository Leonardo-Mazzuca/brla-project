

import { useContext, useReducer, createContext, ReactNode  } from "react";
import { State } from '../types/State/State';


type Action = {
    type: FormActions;
    payload: any;
}

type ContextType = {
    state: State
    dispatch: (action: Action) => void
}

type FormProviderProps = {
    children: ReactNode
}


const FormContext = createContext<ContextType | undefined>(undefined);

const initialData: State = {

        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        cpf: '803.687.480-65',
        birthDate: '2005-Oct-21',
        taxIdType: 'CPF',
    
        address: {
          cep: '',
          city: '',
          state: '',
          street: '',
          number: '',
          district: '',
          complement: ''
        },
    
       // cnpj: '',

    

}

export enum FormActions {


    setStep1,
    setStep2,
    setStep3,
    setStep4,



}

const formReducer = (state: State, action: Action) => {
    switch (action.type) {
        case FormActions.setStep1:
            return {
                ...state,
                fullName: action.payload.fullName,
                email: action.payload.email,
                phone: action.payload.phone,
            };

        case FormActions.setStep2:
            return {
                ...state,
                address: {
                    cep: action.payload.cep,
                    city: action.payload.city,
                    state: action.payload.state,
                    street: action.payload.street,
                    number: action.payload.number,
                    district: action.payload.district,
                    complement: action.payload.complement
                }
            };


        case FormActions.setStep3:
                return {
                    ...state,
                    password: action.payload.password,
                    confirmPassword: action.payload.confirmPassword
                };

        case FormActions.setStep4:
            return { ...state, token: action.payload.token };


        default:
            return state;
    }
};
    
   


export const FormProvider = ({children}: FormProviderProps) => {

    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = {state, dispatch};

    return (

        <FormContext.Provider value={value}>

            {children}

        </FormContext.Provider>

    )

}


export const useForm = () => {
    const context = useContext(FormContext);

    if(context===undefined) {
        throw new Error('useForm precisa ser usado dentro do form provider')
    }

    return context;
}


