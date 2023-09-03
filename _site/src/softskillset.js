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
    data: [95,90,90,85,90,100,90,85,95,90],
    fill: true,
    backgroundColor: 'rgba(130, 0, 130, 0.2)',
    borderColor: 'rgb(130, 0, 25)',
    pointBackgroundColor: 'rgb(255, 0, 255)',
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
  document.getElementById('softskillset'),
  softconfig
);
