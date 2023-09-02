// import Chart from 'chart.js/auto';

const controlsdata = {
  labels: [
    'FactoryTalk View Studio ME',
    'Studio 5000',
    'Ladder Logic',
    'PanelView Plus',
    'Networking',
    'PS Bits',
    'PS Words'
  ],
  datasets: [{
    label: 'Controls Skills',
    data: [80,90,90,80,40,90,80],
    fill: true,
    backgroundColor: 'rgba(255, 255, 132, 0.2)',
    borderColor: 'rgb(255, 200, 0)',
    pointBackgroundColor: 'rgb(0, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }]
};

const controlsconfig = {
  type: 'radar',
  data: controlsdata,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    width: 600,
    height: 600,
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
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 24, // Adjust the font size as needed
            style: 'normal', // Adjust the font style (normal, italic, oblique)
            weight: 'bold' // Adjust the font weight (normal, bold)
          }
        }
      }
    }
  }
};

new Chart(
  document.getElementById('controlsskillset'),
  controlsconfig
);
