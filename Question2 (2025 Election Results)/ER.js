const ctx = document.getElementById('electionChart').getContext('2d');
const electionChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['DAD', 'PPP', 'CCCC', 'MCD'],
        datasets: [{
            label: 'Election Results',
            data: [45, 5, 27, 23],
            backgroundColor: [
                '#FF6384', // DAD
                '#36A2EB', // PPP
                '#FFCE56', // CCCC
                '#4BC0C0'  // MCD
            ],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: '2025 Election Results'
            }
        }
    }
});