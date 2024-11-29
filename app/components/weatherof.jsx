import Temp from './temp';
import Svg from './svg';

export default function WeatherOf({setter, city, temp, clouds}){
    function handleclick(){
        setter('home')
    }
    
    return (
        <main>
            <button onClick={handleclick} className="m-5 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span className="relative font-sans px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Back
                </span>
            </button>
            
            <div className="flex flex-col h-full m-5 items-center">
                
                
                <h1 className='flex text-[60px] font-bold justify-center transition-all duration-1000 text-6xl mb-20 
                mt-14 items-center'>{city}</h1>

                <section className='w-[300px] md:transition-all md:duration-[900ms] md:w-[700px] duration-[900ms] transition-all '>
                    <Temp temp={temp} clouds={clouds}/>
                </section>
                
                
            </div>
        </main>
    );
}