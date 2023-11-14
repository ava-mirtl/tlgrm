import { useRef, useState, useEffect } from "react";
import Chart from "chart.js/auto";
import Header from '../../components/Header';
import styles from './activity.module.scss';


function Activity({data}){
  const chart = useRef(null);
  const percentages = Object.values(data.activity).map(day => day.percentage);
  const views = useRef(null);
  
  useEffect(() => {
    if (views.current) {
        const ctx = views.current.getContext("2d");
        const data = {
            labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб','Вс'],
            datasets: [
                {
                    label: "",
                    data: percentages,
                    backgroundColor: "#3182CE",
                    hoverBackgroundColor: "#38A169",
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1,
                },
            ],
        };
        if (chart.current) {
            chart.current.destroy();
        }
        const options = {
            plugins: {
                tooltip: {
                    callbacks: {
                        title: function (context) {
                            const value = context[0].raw;
                            
                            return `👁 ${value}%)`;
                        },
                        label: function (context) {
                            return ``;
                        },
                    },
                },
                legend: {
                    display: false,
                },
            },
            scales: {
              x: {
                ticks: {
                  callback: function(value, index) {
                    return `${value}(/n)${percentages[index]}%`;
                  },
                },
                
              },
              y:{
                ticks: {
                  beginAtZero: true,
                  max: 100,
                },
              }
            },   
        };

        chart.current = new Chart(ctx, {
            type: "bar",
            data: data,
            options: options,
        });
    }}, []);

  return (
    <div className={styles.wrapper}>
        <Header/>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1>Вовлеченность аудитории</h1>
            <p className={styles.thin_title}>{data.login}</p>
            <div className={styles.chart_card}>
                        <div className={styles.chart}>
                            <p className={styles.thin_title}>Процентные значения</p>
                            <canvas ref={views}></canvas>
                        </div>
                    </div>
          </div>
          </div>
    </div>
  )
}
export default Activity;