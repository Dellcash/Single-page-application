export const planetChartData = {
  type: "bar",
  data: {
    labels: ["تیر", "زهره", "زمین", "ماه", "مشتری", "زحل", "اورانوس", "نپتون"],
    datasets: [
      {
        label: "تعداد ماه ها",
        type: "line",
        data: [0, 99, 46, 2, 79, 12, 27, 74],
        backgroundColor: "rgba(54,73,93,.5)",
        borderColor: "#36495d",
        borderWidth: 3
      },
      {
        label: "جرم سیاره ای (نسبت به خورشید x 10^-6)",
        type: "bar",
        data: [0.166, 2.081, 46.003, 0.323, 10.792, 285.886, 43.662, 51.514],
        backgroundColor: "rgba(71, 183,132,.5)",
        borderColor: "#47b784",
        borderWidth: 3
      }
    ]
  },
  options: {
    responsive: true,
    lineTension: 1,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            padding: 25
          }
        }
      ]
    }
  }
};

export default planetChartData;