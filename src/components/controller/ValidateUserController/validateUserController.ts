import { createHttp } from "../ConectApi/conectApi";

export async function validateUserController (email: string, token: string) {


    const http = createHttp();

    const body = {email, token};

    console.log(body)
    
    try {

        const response = await http.patch('/validate', body);
  
        console.log("Usuario cadastrado")
        return response;
  
      } catch (error: any) {
  
        console.error('Error during user validation:', error.response?.data || error.message);

        return error.response?.data || error.message;
        
      }


}