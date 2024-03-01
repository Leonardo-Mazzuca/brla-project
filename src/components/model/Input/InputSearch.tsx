



const InputSearch: React.FC = () => {
    return (

        

        <div className="relative mt-10 w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <i className="fa-solid fa-magnifying-glass text-2xl text-gray-800"></i>
            </div>

            <input type="search" id="search" className="p-6 ps-10 text-gray-900 border-transparent
             rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 
             placeholder:text-2xl placeholder:ps-3 text-3xl flex-1 w-full 

             " placeholder="Search" required />
        </div>
 



    );
}

export default InputSearch;