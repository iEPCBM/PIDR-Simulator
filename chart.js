const labels = [];
const datapoints_proc = [];
const datapoints_pidr = [];
const datapoints_sval = [];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Значение процесса',
      data: datapoints_proc,
      borderColor: "#FF0000",
      fill: false,
      tension: 0.4,
      pointRadius: 0
    },
    {
      label: 'Значение ПИДР',
      data: datapoints_pidr,
      borderColor: "#0000FF",
      fill: false,
      tension: 0.4,
      pointRadius: 0
    },
    {
      label: 'Значение задатки',
      data: datapoints_sval,
      borderColor: "#00FF00",
      fill: false,
      tension: 0.4,
      pointRadius: 0
    }
  ]
};

let plt_config = {
    type: 'line',
    data: data,
    options: {
        animation: false,
        responsive: true,
        plugins: {
        title: {
            display: true,
            text: 'ПИДР-ский график'
        },
        },
        interaction: {
            intersect: false,
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Value'
                }
            }
        }
    },
};