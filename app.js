async function find(){
let l=document.getElementById('line').value;
let b=document.getElementById('brigade').value;
document.getElementById('out').innerHTML=
`<b>Linia ${l} / Brygada ${b}</b><br><br>
🚍 Nr taborowy: oczekiwanie na API ZTP<br>
📍 GPS: oczekiwanie na Vehicle Positions<br>
🗺 Mapa: przygotowana<br>
📢 Komunikaty: przygotowane`;
}
