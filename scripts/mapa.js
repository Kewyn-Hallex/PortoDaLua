 // Coordenadas do seu evento (exemplo: Hotel Porto da Lua em Praia do Forte, BA)
 var latitude = -0.6321950048050308;
 var longitude = -47.63376181788584;

 // Inicializa o mapa
 var map = L.map('map').setView([latitude, longitude], 15);

 // Adiciona o mapa base
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; OpenStreetMap contributors'
 }).addTo(map);

 // Adiciona um marcador
 L.marker([latitude, longitude]).addTo(map)
     .bindPopup('Hotel Porto da Lua')
     .openPopup();

     //-0.6321950048050308, -47.63376181788584