




const InputDate: React.FC = () => {
    return (
        
    <div className="relative flex-1 md:w-auto w-full">

        <div className="absolute inset-y-0 flex items-center ps-3.5 pointer-events-none">
            <i className="fa-regular fa-calendar"></i>
        </div>

        <input datepicker-format="mm/yy" id="card-expiration-input" type="text" className="shadow-lg 
        border-transparent text-gray-900 text-2xl plahedoler:text-2xl
         rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full py-6 ps-10 p-2.5
          text-gray-600 w-full"
         placeholder="Filtrar por data" />
         
    </div>
    );
}

export default InputDate;