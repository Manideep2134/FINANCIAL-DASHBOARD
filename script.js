// Chart
const ctx = document.getElementById('chart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    datasets: [{
      data: [250, 200, 420, 310, 560, 300, 180],
      borderColor: '#4e73df',
      backgroundColor: 'rgba(78,115,223,0.1)',
      tension: 0.4,
      fill: true
    }]
  },
  options: {
    plugins: { legend: { display: false }},
    scales: { y: { beginAtZero: true }}
  }
});

// Dark Mode Toggle
document.getElementById("themeToggle").onclick = function() {
  document.body.classList.toggle("dark-mode");
};