//Pasos para consumir datos de un API (JS puro)

//1.Para donde voy (URI del servidor)

const URI="https://api.spotify.com/v1/artists/128ftF9X7Kd7Di2fq3wYVs/top-tracks?market=us"

//2.Permisos
const TOKEN="Bearer BQDj-66RfftqPnvvgPTsTbK8eYuXorSvrTuRnBGFRDk-hJYGYg4Sp5mchG-jjuUdTRQSXebx0p5m8RbtFS41K-LA29eXfGtQ0EtNKWe3u96GdtwR_uHPQZoVOM-NbSmmBDpxXamqOx6bapwrRaOBbxKKG5j1spM"

//3.metodos y cuerpo de la peticion
let parametrosPeticion={
    method:"GET",
    headers:{Authorization:TOKEN}
}
//4.Consumo el API
fetch(URI,parametrosPeticion)
.then(respuesta=>respuesta.json())

.then(respuestaJSON=>console.log(respuestaJSON.tracks))

.catch(respuestaERROR=>console.log(respuestaERROR))

array.forEach(element =>  {
    
});