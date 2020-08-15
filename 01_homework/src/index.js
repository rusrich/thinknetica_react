import ReactDOM from 'react-dom'
import React from 'react'
import {createContext} from 'react'

import App from "./App"
import AuthContext from "./AuthContext"
import './style.css'

const book = {
  'title': 'React и Redux. Функциональная веб-разработка',
  'description': 'Хотите научиться писать эффективные пользовательские интерфейсы при помощи React? Тогда вы нашли нужную книгу. Авторы расскажут, как создавать пользовательские интерфейсы при помощи этой компактной библиотеки и писать сайты, на которых можно обрабатывать огромные объемы данных без перезагрузки страниц. Также вы изучите новейшие возможности стандарта ECMAScript и функционального программирования.',
  'cover': 'https://cv9.litres.ru/pub/c/pdf-kniga/cover_330/29415793-a-benks-piter-react-i-redux-funkcionalnaya-veb-razrabotka-29415793.jpg',
  'options': {
    'pages': 336,
    'language': 'Русский',
    'progress': 4,
    'minprice': 400,
    'wishprice': 545,
    'total': 400,
    'wishtotal': 10000,
  },
  'subscribes': 31
}

const relatives = [
  {
    'id': 1,
    'title': 'Kotlin в действии',
    'cover': 'https://cv6.litres.ru/pub/c/pdf-kniga/cover_415/27069061-dmitriy-zhemerov-kotlin-v-deystvii-27069061.jpg',
    'authors': ['Дмитрий Жемеров', 'Светлана Исакова']
  },
  {
    'id': 2,
    'title': 'Разработка веб-приложений в ReactJS',
    'cover': 'https://cv8.litres.ru/pub/c/pdf-kniga/cover_415/22880082-a-horton-razrabotka-veb-prilozheniy-v-reactjs-22880082.jpg',
    'authors': ['Райан Вайс', 'Адам Хортон']
  },
  {
    'id': 3,
    'title': 'Чистый Agile. Основы гибкости',
    'cover': 'https://cv2.litres.ru/pub/c/elektronnaya-kniga/cover_415/56089520-robert-s-martin-chistyy-agile-osnovy-gibkosti.jpg',
    'authors': ['Роберт Мартин']
  },
  {
    'id': 4,
    'title': 'React в действии',
    'cover': 'https://cv3.litres.ru/pub/c/pdf-kniga/cover_415/42226735-mark-tilens-tomas-react-v-deystvii-42226735.jpg',
    'authors': ['Марк Тиленс Томас']
  },
  {
    'id': 5,
    'title': 'Изучаем Python. Программирование игр',
    'cover': 'https://cv3.litres.ru/pub/c/pdf-kniga/cover_415/29415136-erik-metiz-izuchaem-python-programmirovanie-igr-vizualizaciya-dan-29415136.jpg',
    'authors': ['Эрик Мэтиз']
  }

]

const authors = [
  {
    'name': 'Алекс Бэнкс',
    'email': 'alex@blanks.com',
    'avatar': 'https://db3pap002files.storage.live.com/y4pIrNiuZgn2To824LGvJfpopSxIZad_KqX6kTgA7xScRDkjsiKa8GtfLXocjAQ3wrYjwjPYiMQ2fGcYWb--jj0iPChe--DOfdDej7gCviSLA5KfDVzK686XHzYEChELTMI3Qt-AaEHAxAf-ba4brl-MnQ4R8y6pVEOoQKXeXfzztEvz5aeA1YP_k6gPipdP6abGVL7nsvkrd-fKKGm_lrkMc5xw3tvonibuDfLqD45nt0/alex-banks.jpg?psid=1&width=256&height=256&cropMode=center',
    'description': 'Автор книги React и Redux. Функциональная веб-разработка'
  },
  {
    'name': 'Алекс Бэнкс',
    'email': 'alex@blanks.com',
    'avatar': 'https://db3pap002files.storage.live.com/y4pIrNiuZgn2To824LGvJfpopSxIZad_KqX6kTgA7xScRDkjsiKa8GtfLXocjAQ3wrYjwjPYiMQ2fGcYWb--jj0iPChe--DOfdDej7gCviSLA5KfDVzK686XHzYEChELTMI3Qt-AaEHAxAf-ba4brl-MnQ4R8y6pVEOoQKXeXfzztEvz5aeA1YP_k6gPipdP6abGVL7nsvkrd-fKKGm_lrkMc5xw3tvonibuDfLqD45nt0/alex-banks.jpg?psid=1&width=256&height=256&cropMode=center',
    'description': 'Автор книги React и Redux. Функциональная веб-разработка'
  },
  {
    'name': 'Алекс Бэнкс',
    'email': 'alex@blanks.com',
    'avatar': 'https://db3pap002files.storage.live.com/y4pIrNiuZgn2To824LGvJfpopSxIZad_KqX6kTgA7xScRDkjsiKa8GtfLXocjAQ3wrYjwjPYiMQ2fGcYWb--jj0iPChe--DOfdDej7gCviSLA5KfDVzK686XHzYEChELTMI3Qt-AaEHAxAf-ba4brl-MnQ4R8y6pVEOoQKXeXfzztEvz5aeA1YP_k6gPipdP6abGVL7nsvkrd-fKKGm_lrkMc5xw3tvonibuDfLqD45nt0/alex-banks.jpg?psid=1&width=256&height=256&cropMode=center',
    'description': 'Автор книги React и Redux. Функциональная веб-разработка'
  },
  {
    'name': 'Алекс Бэнкс',
    'email': 'alex@blanks.com',
    'avatar': 'https://db3pap002files.storage.live.com/y4pIrNiuZgn2To824LGvJfpopSxIZad_KqX6kTgA7xScRDkjsiKa8GtfLXocjAQ3wrYjwjPYiMQ2fGcYWb--jj0iPChe--DOfdDej7gCviSLA5KfDVzK686XHzYEChELTMI3Qt-AaEHAxAf-ba4brl-MnQ4R8y6pVEOoQKXeXfzztEvz5aeA1YP_k6gPipdP6abGVL7nsvkrd-fKKGm_lrkMc5xw3tvonibuDfLqD45nt0/alex-banks.jpg?psid=1&width=256&height=256&cropMode=center',
    'description': 'Автор книги React и Redux. Функциональная веб-разработка'
  },
]

const user = {
  firstName: 'Sergey',
  lastName: 'Rebrov',
  email: 'rebrov.sv@yandex.ru',
  avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/250px-Flag_of_Russia.svg.png'
}

ReactDOM.render(
  <AuthContext.Provider value={user}>
    <App book={book} authors={authors} relatives={relatives}/>
  </AuthContext.Provider>,
  document.getElementById('root')
)
