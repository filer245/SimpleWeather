import Search from "./search";
import Title from "./title";



export default function MainPage({setter, getcity, gettemp, getclouds}){

    const f = setter;
    const g = getcity;
    const t = gettemp;
    const c = getclouds;

    return (
        <div className="flex  flex-col h-screen justify-center items-center">
            <div className="flex flex-col md:flex-row md:justify-between 
            xl:justify-center h-screen md:items-center justify-center 
            items-center my-7 md:mx-10 transition-all duration-[2000]">
                <Title />
                <Search setter={f} getcity={g} gettemp={t} getclouds={c}/>
            </div>
        </div>


        
    )
}