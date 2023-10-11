const timelineContainer = document.getElementById('timeline-container');

const events = [
  { year: '1978', description: 'Kobe Bryant is born in Philadelphia, PA.' },
  { year: '1996', description: 'Kobe enters the NBA as the 13th overall pick.' },
  // Add more events here
];

events.forEach(event => {
  const eventElement = document.createElement('div');
  eventElement.className = 'event';
  eventElement.innerHTML = `
    <div class="year">${event.year}</div>
    <div class="description">${event.description}</div>
  `;
  timelineContainer.appendChild(eventElement);
});
