var ctx = document.getElementById('doughnut').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'doughnut',

  data:{
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
    datasets: [{
        label: 'Mes',
        data: [17, 15, 10, 17, 12, 15, 16],
        backgroundColor: [
            'rgba(41, 155, 91, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(120, 46, 139, 1)'
        ],
        borderColor: [
            'rgba(41, 155, 91, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(120, 46, 139, 1)'
        ],
        borderWidth: 1
    }]
},

options: {
    responsive: true 
  }
});