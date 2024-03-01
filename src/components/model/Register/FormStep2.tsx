import React from "react";
import { Field } from "../../types/Field/Field";
import FormModel from "../Form/FormModel/FormModel";
import { z } from "zod";
import { FormActions, useForm } from "../../context/FormContext";


const schema = z.object({

  
  cep: z.string().min(8,"Cep is inválid!"),

  city: z.string().min(2, "City can't be empty!"),
  
  state: z.string().min(2, "State can't be empty"),

  street: z.string().min(3, "Street can't be empty"),

  complement: z.string().min(2, "Complement can't be empty"),

  number: z.string().max(10).optional(),

});

type Step2Data = {

  cep: string;
  city: string;
  state: string;
  street: string;
  number: string;
  district: string;
  complement: string;


}

const fields: Field[] = [
  { type: "text", placeholder: "CEP", name: "cep",  },
  { type: "text", placeholder: "Cidade", name: "city", },
  { type: "text", placeholder: "Estado", name: "state", },
  { type: "text", placeholder: "Bairro", name: "street",},
  { type: "text", placeholder: "Complemento", name: "complement", },
  // { type: "text", placeholder: "Complemento", name: "district", },
  { type: "text", placeholder: "Número", name: "number", }
];

const FormStep2: React.FC = () => {


  const {dispatch,state} = useForm();

  const handleSubmit = (data:Step2Data) => {


    const district = "District"
    const { cep, city, state,street ,number,complement } = data;

    dispatch({

      type: FormActions.setStep2,
      payload: { cep, city, state, street, number, district, complement },

    });


  }



  return (
    
    <FormModel 
      schema={schema}
      classname="md:grid md:grid-cols-2 gap-4 sm:flex sm:flex-col"
      location="/step3" 
      buttonText="proximo" 
      fields={fields} 
      onSubmit={handleSubmit}
      

    />

  );
}

export default FormStep2;
