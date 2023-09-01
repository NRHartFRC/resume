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
    data: [70,55,60,20,75,30,30],
    fill: true,
    backgroundColor: 'rgba(80, 200, 0, 0.2)',
    borderColor: 'rgb(0, 200, 200)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }]
};

const backendconfig = {
  type: 'radar',
  data: backenddata,
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
  document.getElementById('backendskillset'),
  backendconfig
);
