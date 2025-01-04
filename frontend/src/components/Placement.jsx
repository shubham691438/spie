import React from 'react';
import Chart from 'react-apexcharts';

const Placement = () => {
    return (
        <div className="mt-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            <h2 className='text-6xl font-bold text-white'>Placement Summary</h2>

            <section className="bg-white dark:bg-gray-900">
                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                    <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-yellow-300">
                        <div className="flex flex-col items-center justify-center">
                            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">200+</dt>
                            <dd className="font-light text-gray-500 dark:text-gray-400">Companies</dd>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">8.26</dt>
                            <dd className="font-light text-gray-500 dark:text-gray-400">Average CTC</dd>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">14.1</dt>
                            <dd className="font-light text-gray-500 dark:text-gray-400">Highest Ctc</dd>
                        </div>
                    </dl>
                </div>
            </section>

            <div className="mt-6">
                <div style={{ height: '420px' }}> {/* Explicit height for pie chart container */}
                    <Chart options={chartOptions} series={chartOptions.series} type="pie" height="100%" />
                </div>
            </div>

            <div className='flex justify-around'>
                <div className='mt-6'>
                    <div className="max-w-lg w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
                        <div className="flex justify-between">
                            <div>
                                <p className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
                                    Average Placement Percentage
                                </p>
                            </div>
                        </div>
                        <Chart options={options} series={series} type="area" height="200" />
                        <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
                            <div className="flex justify-between items-center pt-5">
                                <button
                                    id="dropdownDefaultButton"
                                    data-dropdown-toggle="lastDaysdropdown"
                                    data-dropdown-placement="bottom"
                                    className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
                                    type="button"
                                >
                                    Last 5 Years
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-6'>
                    <div className="max-w-lg w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
                        <div className="flex justify-between">
                            <div>
                                <p className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
                                    Average CTC (Cost to Company)
                                </p>
                            </div>
                        </div>
                        <Chart options={options} series={series} type="area" height="200" />
                        <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
                            <div className="flex justify-between items-center pt-5">
                                <button
                                    id="dropdownDefaultButton"
                                    data-dropdown-toggle="lastDaysdropdown"
                                    data-dropdown-placement="bottom"
                                    className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
                                    type="button"
                                >
                                    Last 5 Years
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           
        </div>
    );
};

export default Placement;

const options = {
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
            data: [6418, 6456, 6526, 6356, 95.56],
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
const series = [
    {
        name: "Placement Percentage",
        data: [ 6418, 6456, 6526, 6356, 95.56],
    },
];

const chartOptions = {
    series: [52.8, 26.8, 20.4,29,20],
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
