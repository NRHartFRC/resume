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
    data: [70,10,25,10,25],
    fill: true,
    backgroundColor: 'rgba(255, 180, 20, 0.2)',
    borderColor: 'rgb(255, 165, 0)',
    pointBackgroundColor: 'rgb(100, 100, 100)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }]
};

const frontendconfig = {
  type: 'radar',
  data: frontenddata,
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
  document.getElementById('frontendskillset'),
  frontendconfig
);
