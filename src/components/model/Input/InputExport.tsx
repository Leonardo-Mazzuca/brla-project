

const InputExport: React.FC = () => {

    return (
    <div className="relative md:w-auto w-full">

        <div className="absolute inset-y-0 flex items-center ps-3.5 pointer-events-none">
            <i className="fa-solid fa-arrow-up-from-bracket text-xl text-gray-600"></i>
        </div>

        <input type="text" className="shadow-lg border-transparent 
        text-gray-900 text-2xl plahedoler:text-2xl
         rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-6 ps-10 p-2.5"
         placeholder="Exportar" />
         
    </div>
    );
}

export default InputExport;