
import AppRoutes from "./client/routes";
import { FormProvider } from "./components/context/FormContext";




function App() {



  return (

    <section className="w-full h-screen">
      
      <FormProvider>

            <AppRoutes />
            
      </FormProvider>

    </section>

  );
}

export default App;
