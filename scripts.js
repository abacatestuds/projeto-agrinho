const events = [
    { name: "Festa da Cultura Paranaense", date: "20 de maio de 2025", location: "Curitiba, PR", image: "https://via.placeholder.com/300x200", link: "https://prefeitura.curitiba.pr.gov.br" },
    { name: "Festival Gaúcho de Tradições", date: "15 de junho de 2025", location: "Porto Alegre, RS", image: "https://via.placeholder.com/300x200", link: "https://prefeitura.portoalegre.rs.gov.br" },
    { name: "Mostra Cultural Catarinense", date: "10 de julho de 2025", location: "Florianópolis, SC", image: "https://via.placeholder.com/300x200", link: "https://prefeitura.florianopolis.sc.gov.br" }
];

const welcomeScreen = document.getElementById('welcomeScreen');
const mainContent = document.getElementById('mainContent');
const eventsContainer = document.getElementById('eventsContainer');
const searchBar = document.getElementById('searchBar');

function proceed() {
    welcomeScreen.style.display = 'none';
    mainContent.style.display = 'block';
    loadEvents(events);
}

function loadEvents(eventList) {
    eventsContainer.innerHTML = '';
    eventList.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('event-card');

        eventCard.innerHTML = `
            <img src="${event.image}" alt="${event.name}">
            <div class="info">
                <h3>${event.name}</h3>
                <p>${event.date} - ${event.location}</p>
                <a href="${event.link}" target="_blank">Saiba Mais</a>
            </div>
        `;

        eventsContainer.appendChild(eventCard);
    });
}

function filterEvents() {
    const query = searchBar.value.toLowerCase();
    const filteredEvents = events.filter(event => 
        event.location.toLowerCase().includes(query)
    );
    loadEvents(filteredEvents);
}