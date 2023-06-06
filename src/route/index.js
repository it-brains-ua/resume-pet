// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',

  salary: '$600 в місяць',

  address: 'Моя адреса - моя країна, яка зветься Україна!',
}

var footer = {
  social: {
    email: {
      text: 'ivan@mail.com',
      href: 'mailto:ivan@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linked: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {
    page: {
      title: 'Welcome to resume lesson',
    },
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: ' Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.',
      },

      experience: {
        title: 'Other experience',
        text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics ( tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.',
      },
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 7,
          isTop: true,
        },
        {
          name: 'Handlebar',
          point: 3,
          isTop: true,
        },
        {
          name: 'VS Code',
          point: 4,
          isTop: false,
        },
        {
          name: 'Git',
          point: 4,
        },
        {
          name: 'Terminal',
          point: 9,
        },
        {
          name: 'NPM',
          point: 3,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],

      hobbies: [
        {
          name: 'Computer repair',
          isMain: true,
        },
        {
          name: 'Sci-Fi',
          isMain: true,
        },
        {
          name: 'Cycling',
          isMain: true,
        },
        {
          name: 'Hi-Tech',
          isMain: true,
        },
        {
          name: 'Cars',
          isMain: false,
        },
      ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      educations: [
        {
          name: 'NTU "KPI", Automatics and Instrument making',
          isEnd: true,
        },
        {
          name: '2008 Driving license, Category B',
          isEnd: true,
        },
        {
          name: '2014 Source-IT courses, “QA and Testing”',
          isEnd: true,
        },
        {
          name: '2023 IT Brains courses, "FullStack JS Developer"',
          isEnd: false,
        },
      ],

      certificates: [
        {
          name: 'Диплом',
          id: 0364,
        },
        {
          name: 'Пластикова картка',
          id: 0785,
        },
        {
          name: 'Сертифікат',
          id: 3907,
        },
      ],
    },

    footer,
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
