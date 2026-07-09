"use client";

const numbers = [
{
country:"USA",
service:"Telegram",
price:"1.5 USDC"
},
{
country:"UK",
service:"WhatsApp",
price:"2 USDC"
},
{
country:"Canada",
service:"Google",
price:"1.2 USDC"
}
];


export default function NumbersPage(){

function buy(){
alert("Connect wallet and payment coming");
}


return (

<main className="min-h-screen bg-black text-white p-6">

<h1 className="text-3xl font-bold mb-6">
Available Numbers
</h1>


<div className="grid gap-4">

{numbers.map((n,i)=>(

<div
key={i}
className="bg-zinc-900 rounded-xl p-5"
>

<h2 className="text-xl">
{n.country}
</h2>

<p>{n.service}</p>

<p className="mt-2">
{n.price}
</p>


<button
onClick={buy}
className="mt-4 bg-white text-black rounded-xl px-5 py-2"
>
Buy Now
</button>


</div>

))}

</div>


</main>

)

}
