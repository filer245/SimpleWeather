export default function Clouds({clouds}){

    const cloud = clouds;

    return(
        <section className="ml-6 flex flex-col justify-center items-center">
            {cloud==0?<h2>Soleado</h2>: cloud<=50?<h2>Alguna nube</h2>: cloud<=99.99?<h2>Día nublado </h2>:cloud==100?<h2>Día gris</h2>: <p></p>}
            {cloud==0?<h2>🌞😎</h2>: cloud<=50?<h2>🌞☁</h2>: cloud<=99.99?<h2>⛅⛅</h2>:cloud==100?<h2>☁☁☁</h2>: <p></p>}
        </section>
    );
}