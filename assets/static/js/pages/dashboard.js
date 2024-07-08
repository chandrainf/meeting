var optionsProfileVisit = {
  annotations: {
    position: "back",
  },
  dataLabels: {
    enabled: false,
  },
  chart: {
    type: "bar",
    height: 300,
  },
  fill: {
    opacity: 1,
  },
  plotOptions: {},
  series: [
    {
      name: "Kiosk",
      data: [60, 63, 43, 66, 47, 68, 78, 62, 55, 70, 30, 50],
    },
  ],
  colors: "#435ebe",
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
};

//Chart Total Keseluruhan Transaksi

var totalKeseluruhanTransaksi = {
  series: [
    {
      name: "Cetak Serifikat",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 70, 88, 90],
    },
    {
      name: "Cerifikasi Sentuh Tanahku",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 90, 88, 77],
    },
    
  ],
  chart: {
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"],
  },
  
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return " " + val + " Transaksi";
      },
    },
  },
};

// Statistik Waktu Transaksi
var statistikWaktuTransaksi = {
  series: [{
  name: 'Verifikasi Sentuh Tanahku',
  data: [31, 40, 28, 51, 42, 109, 100, 11, 32, 45, 32, 34, 52, 41, 66]
}, {
  name: 'Cetak Sertifikat',
  data: [11, 32, 45, 32, 34, 52, 41,31, 40, 28, 51, 42, 109, 100, 55]
}],
  chart: {
  height: 350,
  type: 'area'
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
},
xaxis: {
  type: 'datetime',
  categories: 
  ["2018-09-19T07:00:00.000Z", "2018-09-19T08:00:00.000Z", "2018-09-19T09:00:00.000Z", "2018-09-19T10:00:00.000Z", "2018-09-19T11:00:00.000Z", "2018-09-19T12:00:00.000Z", "2018-09-19T13:00:00.000Z", "2018-09-19T14:00:00.000Z", "2018-09-19T15:00:00.000Z", "2018-09-19T16:00:00.000Z", "2018-09-19T17:00:00.000Z", "2018-09-19T18:00:00.000Z", "2018-09-19T19:00:00.000Z", "2018-09-19T20:00:00.000Z", "2018-09-19T21:00:00.000Z"]
},
tooltip: {
  x: {
    format: 'dd/MM/yy HH:mm'
  },
},
};




let optionsVisitorsProfile = {
  series: [70, 30],
  labels: ["Male", "Female"],
  colors: ["#435ebe", "#55c6e8"],
  chart: {
    type: "donut",
    width: "100%",
    height: "350px",
  },
  legend: {
    position: "bottom",
  },
  plotOptions: {
    pie: {
      donut: {
        size: "30%",
      },
    },
  },
};

var optionsEurope = {
  series: [
    {
      name: "series1",
      data: [310, 800, 600, 430, 540, 340, 605, 805, 430, 540, 340, 605],
    },
  ],
  chart: {
    height: 80,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  colors: ["#5350e9"],
  stroke: {
    width: 2,
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2018-09-19T00:00:00.000Z",
      "2018-09-19T01:30:00.000Z",
      "2018-09-19T02:30:00.000Z",
      "2018-09-19T03:30:00.000Z",
      "2018-09-19T04:30:00.000Z",
      "2018-09-19T05:30:00.000Z",
      "2018-09-19T06:30:00.000Z",
      "2018-09-19T07:30:00.000Z",
      "2018-09-19T08:30:00.000Z",
      "2018-09-19T09:30:00.000Z",
      "2018-09-19T10:30:00.000Z",
      "2018-09-19T11:30:00.000Z",
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
    },
  },
  show: false,
  yaxis: {
    labels: {
      show: false,
    },
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
};

let optionsAmerica = {
  ...optionsEurope,
  colors: ["#008b75"],
};
let optionsIndonesia = {
  ...optionsEurope,
  colors: ["#dc3545"],
};

var chartProfileVisit = new ApexCharts(
  document.querySelector("#chart-profile-visit"),
  optionsProfileVisit
);

//Total Keseluruhan Transaksi
var chartTotalKeseluruhanTransaksi = new ApexCharts(
  document.getElementById("chart-total-keseluruhan-transaksi"),
  totalKeseluruhanTransaksi
);

//Statistik Waktu Transaksi

var statistikWaktuTransaksi = new ApexCharts(
  document.getElementById("statistik-waktu-transaksi"),
  statistikWaktuTransaksi
);

var chartVisitorsProfile = new ApexCharts(
  document.getElementById("chart-visitors-profile"),
  optionsVisitorsProfile
);
var chartEurope = new ApexCharts(
  document.querySelector("#chart-europe"),
  optionsEurope
);
var chartAmerica = new ApexCharts(
  document.querySelector("#chart-america"),
  optionsAmerica
);
var chartIndonesia = new ApexCharts(
  document.querySelector("#chart-indonesia"),
  optionsIndonesia
);

chartIndonesia.render();
chartAmerica.render();
chartEurope.render();
chartProfileVisit.render();
chartVisitorsProfile.render();
chartTotalKeseluruhanTransaksi.render();
statistikWaktuTransaksi.render();
