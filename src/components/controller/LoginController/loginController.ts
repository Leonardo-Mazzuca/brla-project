
import { createHttp } from "../ConectApi/conectApi";


export async function loginController(email: string, password: string) {

    const http = createHttp();

    const body = { email, password };




    try {

      const response = await http.post('/login', body, {
        withCredentials: true 
      });

      return response;


    } catch (error: any) {

      return error.response?.data || error.message;
      
      
    }

    
    
  }