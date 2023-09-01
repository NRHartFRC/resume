// import Chart from 'chart.js/auto';

const softdata = {
  labels: [
    'Problem Solving',
    'Communicating',
    'Leadership',
    'Mentoring',
    'Adaptability',
    'Critical Thinking',
    'Motivated',
    'Teamwork',
    'Creative',
    'Listening',
  ],
  datasets: [{
    label: 'Soft Skills',
    data: [95,90,80,85,90,100,90,85,95,90],
    fill: true,
    backgroundColor: 'rgba(130, 0, 130, 0.2)',
    borderColor: 'rgb(130, 0, 25)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }]
};

const softconfig = {
  type: 'radar',
  data: softdata,
  options: {
    responsive: true,
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
  document.getElementById('softskillset'),
  softconfig
);
