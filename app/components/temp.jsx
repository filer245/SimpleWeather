import Clouds from './clouds';

export default function Temp({temp, clouds}){

    if (temp<15){
        return(
            <div className='bg-gray-800 text-3xl md:text-5xl transition-all duration-1000 border-blue-400 border-4 flex p-5 rounded-xl justify-between' >
                {temp==0? <h1 className='text-3xl'>{temp} ❄ ni frío ni caloh👨‍🦳</h1>: <h1>{temp}{temp<10?" ❄":" 🌡️"}</h1>}
                <Clouds clouds={clouds}/>
            </div>
        );
    }
    return(
        <div className='bg-orange-800 text-3xl md:text-5xl transition-all duration-1000 border-red-600 border-4 flex p-5 rounded-xl justify-between' >
            {temp==0? <h1 className='text-3xl'>{temp} ❄ ni frío ni caloh👨‍🦳</h1>: <h1>{temp}{temp<10?" ❄":" 🌡️"}</h1>}
            <Clouds clouds={clouds}/>
        </div>
    );
}