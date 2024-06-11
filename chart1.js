var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',

  data:{
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
    datasets: [{
        label: 'Mes',
        data: [12, 19, 3, 5, 2, 3, 8],
        backgroundColor: [
            'rgba(85, 85, 85, 1)'
        ],
        borderColor: [
            'rgb(41, 155, 99)'
        ],
        borderWidth: 1
    }]
},
options: {
  responsive: true 
  }
});