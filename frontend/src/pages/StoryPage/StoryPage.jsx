import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import User from "../../components/User";
import moment from 'moment';
import VideoPlayer from "../../components/VideoPlayer";
import Chart from "chart.js/auto";
import Header from "../../components/Header";
import eye from "../../assets/icons/BsFillEyeFill.svg";
import heart from "../../assets/icons/IoHeartSharp.svg";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import styles from "./story.module.scss";

function StoryPage({ data }) {
    const { id } = useParams();
    const story = data[id];
    console.log(story);
    const [extension, setExtension] = useState('img');   
    const views = useRef(null);
    const chart = useRef(null);
    const premium = useRef(null);
    const premiumChart = useRef(null);
    const sexChart = useRef(null);
    const sex = useRef(null);
    const chartViews = Object.values(story.views_per_hour);

    
  function checkFileType(path) {
    const fileType = path.split(".").pop().toLowerCase();
      if (["jpg", "jpeg", "png", "gif"].includes(fileType)) {
      setExtension("img");
    } else if (["mp4", "avi", "mov"].includes(fileType)) {
      setExtension("video");
    } else {
      console.log("Это неподдерживаемый тип файла");
    }
  }
  useEffect(() => {
    checkFileType(story.path);
  },[])

    useEffect(() => {
        if (views.current) {
            const ctx = views.current.getContext("2d");
            const data = {
                labels: Object.keys(story.views_per_hour),
                datasets: [
                    {
                        label: "",
                        data: chartViews,
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
                                const percentage = +(
                                    (value * 100) /
                                    +story.views
                                ).toFixed(1);
                                return `👁 ${value} (${percentage}%)`;
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
                        grid: {
                            display: false,
                        },
                    },
                    y: {
                        beginAtZero: true,
                        max: Math.max(...chartViews),
                        grid: {
                            color: "rgba(0, 0, 0, 0.1)",
                        },
                    },
                },
            };

            chart.current = new Chart(ctx, {
                
                type: "bar",
                data: data,
                options: options,
            });
        }

        const premiumX = story.people.filter((el) => el.premium == true);

        if (premium.current) {
            const doug = premium.current.getContext("2d");
            const data = {
                datasets: [
                    {
                        label: "",
                        data: [
                            premiumX.length,
                            story.people.length - premiumX.length,
                        ],
                        backgroundColor: ["#48BB78", "#3182CE"],
                        hoverOffset: 4,
                    },
                ],
                labels: [
                    `Premium (${premiumX.length})`,
                    `Обычные (${story.people.length - premiumX.length})`,
                ],
            };
            const options = {
                plugins: {
                    legend: {
                        position: "bottom",
                        labels: {
                          padding: 20,
                            boxWidth: 10,
                            usePointStyle: true,
                            generateLabels: function (chart) {
                                const data = chart.data;
                                if (
                                    data.labels.length &&
                                    data.datasets.length
                                ) {
                                    return data.labels.map(function (
                                        label,
                                        index
                                    ) {
                                        const dataset = data.datasets[0];
                                        const backgroundColor =
                                            dataset.backgroundColor[index];
                                        const pointStyle = "circle";

                                        return {
                                            text: label,
                                            fillStyle: backgroundColor,
                                            strokeStyle: backgroundColor,
                                            pointStyle: pointStyle,
                                            index: index,
                                        };
                                    });
                                }
                                return [];
                            },
                        },
                    },
                    datalabels: {
                      color: 'white',
                      formatter: function(value) {
                        const item = (value*100/story.people.length).toFixed(0)+`%`;
                        return item
                      }
                    
                  },
                  tooltip: {
                    callbacks: {
                        title: function (context) {
                            const value = context[0].label.slice(0,8)+": "+ context[0].label.slice(9, -1);
                           
                            return value;
                        },
                        label: function (context) {
                            return ``;
                        },
                    },
                },
              },
      };
            if (premiumChart.current) {
                premiumChart.current.destroy();
            }
            premiumChart.current = new Chart(doug, {
              plugins: [ChartDataLabels],
                type: "doughnut",
                data: data,
                options: options,
            });
        }

        const man = story.people.filter((el) => el.sex === "man").length;
        const woman = story.people.filter((el) => el.sex === "woman").length;
        const some = story.people.length - man - woman;

        if (sex.current) {
            const sexctx = sex.current.getContext("2d");
            const data = {
                datasets: [
                    {
                        label: "",
                        data: [man, woman, some],
                        backgroundColor: ["#3182CE", "#ED64A6", "#ECC94B"],
                        hoverOffset: 4,
                    },
                ],
                labels: [`Мужчины`, `Женщины`, `Не определено`],
            };
            const options = {
              
                plugins: {
                    legend: {
                        position: "bottom",
                        labels: {
                            padding: 20,
                            boxWidth: 10,
                            usePointStyle: true,
                            generateLabels: function (chart) {
                                const data = chart.data;
                                if (
                                    data.labels.length &&
                                    data.datasets.length
                                ) {
                                    return data.labels.map(function (
                                        label,
                                        index
                                    ) {
                                        const dataset = data.datasets[0];
                                        const backgroundColor =
                                            dataset.backgroundColor[index];
                                        const pointStyle = "circle";

                                        return {
                                            text: label,
                                            fillStyle: backgroundColor,
                                            strokeStyle: backgroundColor,
                                            pointStyle: pointStyle,
                                            index: index,
                                        };
                                    });
                                }
                                return [];
                            },
                        }},
                          datalabels: {
                            color: 'white',
                            formatter: function(value) {
                              const item = (value*100/story.people.length).toFixed(0)+`%`;
                              return item
                            },
                            center:true,
                          
                        },
                        tooltip: {
                          callbacks: {
                              title: function (context) {
                                  const value = context[0].label+": "+ context[0].raw;
                      
                                  return value;
                              },
                              label: function (context) {
                                  return ``;
                              },
                          },
                      },
                    },
            };

            if (sexChart.current) {
                sexChart.current.destroy();
            }
            sexChart.current = new Chart(sexctx, {
              plugins: [ChartDataLabels],
                type: "doughnut",
                data: data,
                options: options,
            });
        }
    }, [story]);

    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.story}>                    


                      <div className={styles.img} 
                      style={extension === "video" 
                      ? { position: 'relative' } 
                      : {background: `url(${process.env.PUBLIC_URL}${story.path})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                          {extension === "video" &&
                          <VideoPlayer videoUrl = {process.env.PUBLIC_URL + story.path}/>}
                      </div>

                        <div className={styles.cards}>
                            <div className={styles.card}>
                                <div className={styles.card_header}>
                                    {story.status == "active" ? (
                                        <>
                                            <div
                                                className={styles.label_active}
                                            >
                                                Активная
                                            </div>
                                            <div className={styles.thin_title}>
                                                Закончится через {story.rest}
                                            </div>
                                        </>
                                    ) : (
                                        <div className={styles.label_archive}>
                                            Архив
                                        </div>
                                    )}
                                </div>
                                <div className={styles.info}>
                                    <div>
                                        <p className={styles.thin_title}>
                                            Дата публикации
                                        </p>
                                        <p className={styles.bold}>
                                            {moment(story.date).format('DD.MM.YY')}
                                        </p>
                                    </div>
                                    
                                    <div>
                                        <p className={styles.thin_title}>
                                            Время публикации
                                        </p>
                                        <p className={styles.bold}>
                                        {moment(story.date).format('HH:mm')}
                                        </p>
                                    </div>

                                    <div>
                                        <p className={styles.thin_title}>
                                            Срок публикации
                                        </p>
                                        <p className={styles.bold}>
                                            {story.duration}
                                        </p>
                                    </div>
                                </div>
                                
                                <p className={styles.thin_title}>Описание</p>
                                
                                    {story.content=="none"?<p className={styles.describtion}>Нет описания</p>:<p className={styles.describtion}>{story.content}</p>}
                                
                            </div>
                            <div className={styles.card_bottom}>
                                <div className={styles.views}>
                                    <p className={styles.thin_title}>
                                        Просмотров
                                    </p>
                                    <p className={styles.bold}>
                                        <img
                                            className={styles.icon}
                                            src={eye}
                                            alt="глаз"
                                        />
                                        {story.views}
                                    </p>
                                </div>

                                <div className={styles.views}>
                                    <p className={styles.thin_title}>Лайков</p>
                                    <p className={styles.bold}>
                                        <img
                                            className={styles.icon}
                                            src={heart}
                                            alt="сердце"
                                        />
                                        {story.likes}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.title}>Просмотры по часам</div>
                    <div className={styles.chart_card}>
                        <div className={styles.chart}>
                            <p className={styles.thin_title}>
                                Срок публикации: {story.duration} часов
                            </p>
                            <canvas ref={views}></canvas>
                        </div>
                    </div>
                    <div className={styles.charts_container}>
                        <div className={styles.chart_card}>
                            <div className={styles.doughnut}>
                                <p className={styles.title}>Распределение</p>
                                <p className={styles.thin_title}>
                                    {story.people.length} аккаунтов
                                </p>
                                <canvas ref={premium}></canvas>
                                <p className={styles.doughnut_center}>
                                    {story.people.length}
                                </p>
                            </div>
                        </div>
                        <div className={styles.chart_card}>
                            <div className={styles.doughnut}>
                                <p className={styles.title}>Пол аудитории</p>
                                <p className={styles.thin_titlex}>
                                    {story.people.length} аккаунтов
                                </p>
                                <canvas ref={sex}></canvas>
                                <p className={styles.doughnut_center}>
                                    {story.people.length}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.title}>Вашу stories посмотрели</div>
                    <div className={styles.users_box}>
                    
                    {story.people.filter((el) => el.like === 1).map((el, i) => (
                        <User
                            key={i}
                            path={`${process.env.PUBLIC_URL + el.path}`}
                            like={el.like}
                            username={el.name?el.name:el.login}
                            status={ moment(el.date[0].date).format('DD.MM.YY [в] HH:mm')}
                        />
                    ))}
                    {story.people.filter((el) => el.like === 0).map((el, i) => (
                        <User
                            key={i}
                            path={`${process.env.PUBLIC_URL + el.path}`}
                            like={el.like}
                            username={el.name?el.name:el.login}
                            status={ moment(el.date[0].date).format('DD.MM.YY [в] HH:mm')}
                        />
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoryPage;