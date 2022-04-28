var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Зря ты ищешь родная меня','Я так скучаю','В сигаретном дыму','Прощай',],
    datasets: [
      {
        label: 'Просмотры',
        backgroundColor: '#8CC78A',
        borderColor: '#8CC78A',
        data: [220.5, 274.5, 127.4, 197.9],
      },
      {
        label: 'Лайки',
        backgroundColor: '#4B8EC4',
        borderColor: '#4B8EC4',
        data: [3.2, 2.8, 1.5, 2.6],
      },
      {
        label: 'Дизлайки',
        backgroundColor: '#CB6465',
        borderColor: '#CB6465',
        data: [51, 50, 32, 27],
      },
      {
        label: 'Комментарии',
        backgroundColor: '#E18B0D',
        borderColor: '#E18B0D',
        data: [99, 142, 69, 77],
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const green = document.querySelector('.green');

function colorChart(color) { /*Смена цвета графика*/
    for (let index = 0; index < myChart.data.datasets.length; index++) {
        myChart.data.datasets[0].backgroundColor = color;
        console.log(myChart.data.datasets[0].backgroundColor)
        myChart.update();
    }
}

red.addEventListener('click', (event) => {
    colorChart('red')
})
blue.addEventListener('click', (event) => {
    colorChart('blue')
})
green.addEventListener('click', (event) => {
    colorChart('green')
})
