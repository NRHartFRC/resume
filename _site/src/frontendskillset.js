// import Chart from 'chart.js/auto';

const frontenddata = {
  labels: [
    'HTML/CSS/SASS',
    'Redux',
    'JavaScript',
    'Node.js',
    'React',
  ],
  datasets: [{
    label: 'Frontend Skills',
    data: [60,30,25,10,40],
    fill: true,
    backgroundColor: 'rgba(130, 0, 130, 0.2)',
    borderColor: 'rgb(130, 0, 130)',
    pointBackgroundColor: 'rgb(0, 0, 0)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }]
};

const frontendconfig = {
  type: 'radar',
  data: frontenddata,
  options: {
    maintainAspectRatio: true,
    width: 200,
    height: 200,
    scales: {
      r: {
        suggestedMin: 0, // Ensures the scale starts at 0
        ticks: {
          stepSize: 20 // Adjust the step size as needed
        }
      }
    },
    elements: {
      line: {
        borderWidth: 3
      }
    }
  }
};

new Chart(
  document.getElementById('frontendskillset'),
  frontendconfig
);
