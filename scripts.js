// Agrinho2025.eventList.js
Agrinho2025.eventList.init = function() {
  const events = [
    {
      title: 'Show Rural Coopavel',
      date: '10 a 14 de fevereiro de 2025',
      location: 'Cascavel, Paraná',
      description: 'Um dos maiores eventos do agronegócio no Brasil, com foco em tecnologias e inovações do campo.',
      imageUrl: 'https://via.placeholder.com/800x400.png?text=Show+Rural+Coopavel'
    },
    // Adicione os outros eventos aqui
  ];

  const container = document.getElementById('events-container');
  events.forEach(event => {
    const eventElement = document.createElement('div');
    eventElement.classList.add('event');
    eventElement.innerHTML = `
      <img src="${event.imageUrl}" alt="${event.title}">
      <h2>${event.title}</h2>
      <p class="date">${event.date}</p>
      <p class="location">${event.location}</p>
      <p>${event.description}</p>
    `;
    container.appendChild(eventElement);
  });
};