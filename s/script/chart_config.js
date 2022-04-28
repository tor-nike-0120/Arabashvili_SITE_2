const labels = [
  'Русский язык',
  'Литература',
  'Алгебра',
  'Геометрия',
];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Иванов',
      backgroundColor: 'rgb(0, 0, 255)',
      borderColor: 'rgb(0, 0, 255)',
      data: [4.8, 4.1, 4.7, 4.2],
    },
    {
      label: 'Петров',
      backgroundColor: 'rgb(120, 219, 226)',
      borderColor: 'rgb(255, 99, 132)',
      data: [4.2, 4.3, 3.8, 3.2],
    },
    {
      label: 'Сидоров',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [5, 5, 4.9, 5],
    }
  ]
};

const config = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

var myChart = new Chart(
    document.getElementById('myChart'),
    config
);
