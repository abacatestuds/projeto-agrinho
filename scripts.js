document.addEventListener('DOMContentLoaded', function() {
  const btnProseguir = document.getElementById('proseguir');
  const eventsContainer = document.getElementById('events-container');
  const eventList = document.getElementById('event-list');

  const events = [
    {
      title: 'Expo 2025 – Osaka, Japão',
      date: '13 de abril a 13 de outubro de 2025',
      location: 'Osaka, Japão',
      description: 'A Expo 2025 em Osaka reunirá países de todo o mundo para discutir e apresentar soluções inovadoras para os desafios globais, incluindo sustentabilidade, tecnologia e qualidade de vida.',
      imageUrl: 'https://via.placeholder.com/800x400.png?text=Expo+2025+Osaka'
    },
    {
      title: 'Dia Internacional da Diversidade Biológica',
      date: '22 de maio de 2025',
      location: 'Global',
      description: 'Comemoração sancionada pela ONU para promover a biodiversidade e discutir temas como agricultura sustentável, mudanças climáticas e segurança alimentar.',
      imageUrl: 'https://via.placeholder.com/800x400.png?text=Dia+Internacional+da+Diversidade+Biol%C3%B3gica'
    },
    {
      title: 'Acampamento Terra Livre (ATL)',
      date: '22 a 26 de abril de 2025',
      location: 'Brasília, DF',
      description: 'Maior evento indígena do Brasil, reunindo diversas etnias para discutir direitos, cultura e meio ambiente.',
      imageUrl: 'https://via.placeholder.com/800x400.png?text=Acampamento+Terra+Livre'
    },
    {
      title: 'Bienal Internacional de Curitiba',
      date: 'Anual (próxima edição em 2025)',
      location: 'Curitiba, PR',
      description: 'Maior evento de arte contemporânea do sul do Brasil, com exposições, circuitos culturais e atividades educativas.',
      imageUrl: 'https://via.placeholder.com/800x400.png?text=Bienal+Internacional+de+Curitiba'
    },
    {
      title: 'Dia Mundial das Cidades',
      date: '31 de outubro de 2025',
      location: 'Global',
      description: 'Comemoração da ONU para promover cidades sustentáveis e discutir urbanização e desenvolvimento urbano sustentável.',
      imageUrl: 'https://via.placeholder.com/800x400.png?text=Dia+Mundial+das+Cidades'
    },
    {
      title: 'Projeto Reexistir 2025',
      date: '2025',
      location: 'Brasil',
      description: 'Seminário internacional com o tema "Reexistir no mundo contemporâneo: interpretar, conservar e transformar", focado em arquitetura, urbanismo e sustentabilidade.',
      imageUrl: 'https://via.placeholder.com/800x400.png?text=Projeto+Reexistir+2025'
    },
    {
      title: 'Semana Nacional do Meio Ambiente',
      date: '1 a 5 de junho de 2025',
      location: 'Brasil',
      description: 'Semana dedicada à conscientização ambiental, com atividades como palestras, plantios e ações educativas em todo o país.',
      imageUrl: 'https://econsulting.com.br/wp-content/uploads/2023/05/semana-meio-ambiente.jpg'
    }
  ];

  btnProseguir.addEventListener('click', function() {
    eventsContainer.classList.remove('hidden');
    events.forEach(event => {
      const li = document.createElement('li');
      li.innerHTML = `
        <img src="${event.imageUrl}" alt="${event.title}">
        <h3>${event.title}</h3>
        <p><strong>Data:</strong> ${event.date}</p>
        <p><strong>Local:</strong> ${event.location}</p>
        <p>${event.description}</p>
      `;
      eventList.appendChild(li);
    });
  });
});