// import Chart from 'chart.js/auto';

const backenddata = {
  labels: [
    'Python',
    'LabView',
    'Java',
    'Ruby',
    'C',
    'C++',
    'Solidity'
  ],
  datasets: [{
    label: 'Backend Skills',
    data: [70,55,55,20,60,30,30],
    fill: true,
    backgroundColor: 'rgba(80, 200, 0, 0.2)',
    borderColor: 'rgb(0, 200, 200)',
    pointBackgroundColor: 'rgb(10, 20, 255)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }]
};

const backendconfig = {
  type: 'radar',
  data: backenddata,
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
  document.getElementById('backendskillset'),
  backendconfig
);
