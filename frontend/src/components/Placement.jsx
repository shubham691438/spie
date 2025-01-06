import React from 'react';
import { useState } from 'react';
import Chart from 'react-apexcharts';

const Placement = () => {
  const [selectedBatch, setSelectedBatch] = useState('all');
  
    const batchData = {
      all: {
        coreNonCore: {
          Core: 38.1, // Aggregate percentage (average of 2024 and 2023 data for demonstration)
          NonCore: 61.9,
        },
        ctc: {
          "> 14 lpa": 4.65,
          "12 - 14 lpa": 4.65,
          "10 - 12 lpa": 29.65,
          "8 - 10 lpa": 22.1,
          "<= 10 lpa": 35.95,
        },
      },
      "2024": {
        coreNonCore: {
          Core: 51.2,
          NonCore: 48.8,
        },
        ctc: {
          "> 14 lpa": 9.3,
          "12 - 14 lpa": 9.3,
          "10 - 12 lpa": 9.3,
          "8 - 10 lpa": 44.2,
          "<= 5 lpa": 27.9,
        },
      },
      "2023": {
        coreNonCore: {
          Core: 25,
          NonCore: 75,
        },
        ctc: {
          "<= 10 lpa": 35,
          "> 20 lpa ": 2.5,
          "15 - 20 lpa": 2.5,
          "12 - 15 lpa": 10,
          "10 - 12 lpa": 50,
        },
      },
      // Add other batches if needed
    };
  
    const handleBatchChange = (e) => {
      setSelectedBatch(e.target.value);
    };
  
    const selectedData = batchData[selectedBatch] || batchData["all"];
  
    const coreNonCoreData = selectedData.coreNonCore;
    const ctcData = selectedData.ctc;
  
    const coreNonCoreOptions = {
      chart: {
        height: 350,
        type: 'pie',
      },
      labels: Object.keys(coreNonCoreData),
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: '100%',
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
      tooltip: {
        y: {
          formatter: (value) => `${value}%`,
        },
      },
    };
  
    const ctcOptions = {
      chart: {
        height: 350,
        type: 'pie',
      },
      labels: Object.keys(ctcData),
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: '100%',
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
      tooltip: {
        y: {
          formatter: (value) => `${value}%`,
        },
      },
    };


  return (
    <div className="mt-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center">Placement Summary</h2>

  {/* Summary Section */}
  <section className="bg-white dark:bg-gray-900 mt-12 mb-12">
    <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
      <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-yellow-300">
        <div className="flex flex-col items-center justify-center">
          <dt className="mb-2 text-2xl sm:text-3xl md:text-4xl font-extrabold">200+</dt>
          <dd className="font-light text-gray-500 dark:text-gray-400">Companies</dd>
        </div>
        <div className="flex flex-col items-center justify-center">
          <dt className="mb-2 text-2xl sm:text-3xl md:text-4xl font-extrabold">8.26</dt>
          <dd className="font-light text-gray-500 dark:text-gray-400">Average CTC</dd>
        </div>
        <div className="flex flex-col items-center justify-center">
          <dt className="mb-2 text-2xl sm:text-3xl md:text-4xl font-extrabold">14.1</dt>
          <dd className="font-light text-gray-500 dark:text-gray-400">Highest CTC</dd>
        </div>
      </dl>
    </div>
  </section>

  {/* Pie Chart */}
  <div className="m-6">
        <div className="h-[300px] sm:h-[350px] lg:h-[420px]">
          <Chart options={chartOptions} series={chartOptions.series} type="pie" height="100%" />
        </div>
      </div>

  {/* Filter Section */}
  <div className="text-xl font-medium text-gray-300 mr-4 mb-12">
    <label htmlFor="batchSelect" className="text-lg font-semibold text-gray-700 dark:text-white mr-4">
      Filter by Batch
    </label>
    <select
      id="batchSelect"
      value={selectedBatch}
      onChange={handleBatchChange}
      className="p-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:text-white"
    >
      <option value="all">All</option>
      <option value="2024">2020-24</option>
      <option value="2023">2019-23</option>
      {/* Add more batches if needed */}
    </select>
  </div>

  {/* Pie Charts Section */}
  <div className="mt-12 flex flex-wrap justify-center gap-12">
    {/* Core vs Non-Core Pie Chart */}
    <div className="flex-1 w-full sm:w-[45%] lg:w-[30%] max-w-[400px]">
      <Chart
        options={coreNonCoreOptions}
        series={Object.values(coreNonCoreData)}
        type="pie"
        height={350}
      />
    </div>

    {/* CTC Pie Chart */}
    <div className="flex-1 w-full sm:w-[45%] lg:w-[30%] max-w-[400px]">
      <Chart
        options={ctcOptions}
        series={Object.values(ctcData)}
        type="pie"
        height={350}
      />
    </div>
  </div>

  {/* Dual Area Charts */}
  <div className="flex flex-col lg:flex-row justify-around gap-12 mt-12">
    <div className="flex-1 bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
        Average Placement Percentage
      </p>
      <Chart options={optionsPercentage} series={seriesPercentage} type="area" height={200} />
      <div className="flex justify-center pt-5">
        <button
          className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          type="button"
        >
          Last 5 Years
        </button>
      </div>
    </div>
    <div className="flex-1 bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
        Average CTC (Cost to Company)
      </p>
      <Chart options={optionsAverage} series={seriesAverage} type="area" height={200} />
      <div className="flex justify-center pt-5">
        <button
          className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          type="button"
        >
          Last 5 Years
        </button>
      </div>
    </div>
  </div>
</div>

  );
};

export default Placement;




const optionsPercentage = {
    chart: {
        height: "100%",
        maxWidth: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
            enabled: false,
        },
        toolbar: {
            show: false,
        },
    },
    tooltip: {
        enabled: true,
        x: {
            show: false,
        },
    },
    fill: {
        type: "gradient",
        gradient: {
            opacityFrom: 0.55,
            opacityTo: 0,
            shade: "#1C64F2",
            gradientToColors: ["#1C64F2"],
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: 6,
    },
    grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
            left: 2,
            right: 2,
            top: 0,
        },
    },
    series: [
        {
            name: "Placement Percentage",
            data: [ 89.47, 86.1, 97.6, 97.61, 95.56],
            color: "#1A56DB",
        },
    ],
    xaxis: {
        categories: ["2020", "2021", "2022", "2023", "2024"],
        labels: {
            show: true,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        show: true,
    },
};

const optionsAverage = {
  chart: {
      height: "100%",
      maxWidth: "100%",
      type: "area",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
          enabled: false,
      },
      toolbar: {
          show: false,
      },
  },
  tooltip: {
      enabled: true,
      x: {
          show: false,
      },
  },
  fill: {
      type: "gradient",
      gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: "#1C64F2",
          gradientToColors: ["#1C64F2"],
      },
  },
  dataLabels: {
      enabled: false,
  },
  stroke: {
      width: 6,
  },
  grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
          left: 2,
          right: 2,
          top: 0,
      },
  },
  series: [
      {
          name: "Average",
          data: [ 6.72, 8.74, 10.17, 11.37, 8.26],
          color: "#1A56DB",
      },
  ],
  xaxis: {
      categories: ["2020", "2021", "2022", "2023", "2024"],
      labels: {
          show: true,
      },
      axisBorder: {
          show: false,
      },
      axisTicks: {
          show: false,
      },
  },
  yaxis: {
      show: true,
  },
};
const seriesPercentage = [
    {
        name: "Placement Percentage",
        data: [ 89.47, 86.1, 97.6, 97.61, 95.56],
    },
];
const seriesAverage = [
  {
      name: "Placement Avearege",
      data: [ 6.72, 8.74, 10.17, 11.37, 8.26],
  },
];

const chartOptions = {
    series: [ 54.5, 9, 11.36, 13.63, 11.36],
    colors: ["#1C64F2", "#16BDCA", "#9061F9"],
    chart: {
        height: 420,
        width: "100%",
        type: "pie",
    },
    stroke: {
        colors: ["white"],
    },
    plotOptions: {
        pie: {
            labels: {
                show: true,
            },
            size: "100%",
            dataLabels: {
                offset: -25,
            },
        },
    },
    labels: ["Manufacturing", "Supply Chain", "SDE", "Data And analytics","others"],
    dataLabels: {
        enabled: true,
        style: {
            fontFamily: "Inter, sans-serif",
        },
    },
    legend: {
        position: "bottom",
        fontFamily: "Inter, sans-serif",
    },
    yaxis: {
        labels: {
            formatter: function (value) {
                return value + "%";
            },
        },
    },
    xaxis: {
        labels: {
            formatter: function (value) {
                return value + "%";
            },
        },
        axisTicks: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
    },
};