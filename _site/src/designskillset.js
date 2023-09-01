// import Chart from 'chart.js/auto';

const designdata = {
  labels: [
    'SolidWorks',
    'AutoDesk Inventor',
    'AutoCAD',
    'Catia',
    'eDrawings',
    'Adobe Acrobat',
    'OnShape',
    'Fusion 360'
  ],
  datasets: [{
    label: 'Design Skills',
    data: [98,75,75,65,90,95,80,60],
    fill: true,
    backgroundColor: 'rgba(50, 99, 50, 0.2)',
    borderColor: 'rgb(20, 0, 130)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }]
};

const designconfig = {
  type: 'radar',
  data: designdata,
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
  document.getElementById('designskillset'),
  designconfig
);
