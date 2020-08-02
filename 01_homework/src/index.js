import ReactDOM from 'react-dom'
import React from 'react'

import App from "./App";

const book = {
  'title': 'React и Redux. Функциональная веб-разработка',
  'description': 'Хотите научиться писать эффективные пользовательские интерфейсы при помощи React? Тогда вы нашли нужную книгу. Авторы расскажут, как создавать пользовательские интерфейсы при помощи этой компактной библиотеки и писать сайты, на которых можно обрабатывать огромные объемы данных без перезагрузки страниц. Также вы изучите новейшие возможности стандарта ECMAScript и функционального программирования.',
  'cover': 'https://cv9.litres.ru/pub/c/pdf-kniga/cover_330/29415793-a-benks-piter-react-i-redux-funkcionalnaya-veb-razrabotka-29415793.jpg',
  'pages': 336,
  'language': 'Русский',
  'progress': 4,
  'minprice': 400,
  'wishprice': 545,
  'total': 400,
  'wishtotal': 10000
}

const author = {
  'name': 'Алекс Бэнкс',
  'email': 'alex@blanks.com',
  'avatar': 'https://db3pap002files.storage.live.com/y4pIrNiuZgn2To824LGvJfpopSxIZad_KqX6kTgA7xScRDkjsiKa8GtfLXocjAQ3wrYjwjPYiMQ2fGcYWb--jj0iPChe--DOfdDej7gCviSLA5KfDVzK686XHzYEChELTMI3Qt-AaEHAxAf-ba4brl-MnQ4R8y6pVEOoQKXeXfzztEvz5aeA1YP_k6gPipdP6abGVL7nsvkrd-fKKGm_lrkMc5xw3tvonibuDfLqD45nt0/alex-banks.jpg?psid=1&width=256&height=256&cropMode=center',
  'description': 'Автор книги React и Redux. Функциональная веб-разработка'
}

ReactDOM.render(
  <div>
    <App book = { book } author = { author }  />
  </div>,
  document.getElementById('root')
)
