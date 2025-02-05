


const xbarras = ["2017", "2018", "2019", "2020", "2021"];
const ybarras  = [0, 0.04, 0.06, 0.01, 0.06];
const barrasColor = ["#6b8efb", "#f29978","#c6f278","#2f3d67","#2f673b"];

new Chart("barras", {
  type: "bar",
  data: {
    labels: xbarras ,
    datasets: [{
      backgroundColor: barrasColor,
      data: ybarras 
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      
    }
  }
});

/**___________________________________________________________ */

const xtorta = ["2017", "2018", "2019", "2020", "2021"];
const ytorta  = [0, 0.04, 0.06, 0.01, 0.06]; 
const tortaColor = ["#b91d47","#00aba9","#2b5797","#e8c3b9","#1e7145"];

new Chart("torta", {
  type: "pie",
  data: {
    labels: xtorta ,
    datasets: [{
      backgroundColor: tortaColor,
      data: ytorta 
    }]
  },
  options: {
    title: {
      display: true,
      
    }
  }
});

/**_____________________________________________________________ */


const xlinea = ["2017", "2018", "2019", "2020", "2021"];
const ylinea = [0, 0.04, 0.06, 0.01, 0.06];

new Chart("linea", {
  type: "line",
  data: {
    labels: xlinea,
    datasets: [{
      fill: true,
      lineTension: 0,
      backgroundColor: "rgba(0, 255, 106, 0.5)",
      borderColor: "rgba(0, 255, 106, 1)",
      data: ylinea
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 0, max:0.10}}],
    }
  }
});

/**_____________________________________________________________ */

const xarea = ["2017", "2018", "2019", "2020", "2021"];
const yarea = [0, 0.04, 0.06, 0.01, 0.06];

new Chart("area", {
  type: "line",
  data: {
    labels: xarea,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0, 38, 255, 1)",
      borderColor: "rgba(0, 4, 255, 0.1)",
      data: yarea
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 0, max:0.10}}],
    }
  }
});



