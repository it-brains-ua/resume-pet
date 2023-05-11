// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {
    title: 'Pet resume',
    name: {
      firstname: 'Eugene',
      lastname: 'Nechiporuk',
    },
    position: 'Junior Fullstack JS Developer',
    sallary: '600$ в місяц',
    address: 'Solomyanska sq. 7, Kyiv, Ukraine',
    summary: {
      title: 'Summary',
      text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
        work on a new project I learn the domain and try to understand the idea of the project. Good team
        player, every colleague is a friend to me.`,
    },
    otherexp: {
      title: 'Other experience',
      text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.`,
    },
    social: {
      email: {
        text: 'chip@example.com',
        href: 'mailto:chip@example.com',
      },
      phone: {
        text: '+380977541536',
        href: 'tel:+380977541536',
      },
      linkedin: {
        text: 'LinkedIn',
        href: 'https://www.linkedin.com/in/chip22294/',
      },
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
      title: 'Summary',
    },

    header: {
      name: {
        firstname: 'Eugene',
        lastname: 'Nechiporuk',
      },
      position: 'Junior Fullstack JS Developer',
      sallary: '600$ в місяц',
      address: 'Solomyanska sq. 7, Kyiv, Ukraine',
    },

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
          work on a new project I learn the domain and try to understand the idea of the project. Good team
          player, every colleague is a friend to me.`,
      },
      otherexp: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
            tournament position, goals etc), analyzing by simple mathematics models and preparing probability
            for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer: {
      social: {
        email: {
          text: 'chip@example.com',
          href: 'mailto:chip@example.com',
        },
        phone: {
          text: '+380977541536',
          href: 'tel:+380977541536',
        },
        linkedin: {
          text: 'LinkedIn',
          href: 'https://www.linkedin.com/in/chip22294/',
        },
      },
    },
  })
})

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    page: {
      title: 'Skills',
    },

    header: {
      name: {
        firstname: 'Eugene',
        lastname: 'Nechiporuk',
      },
      position: 'Junior Fullstack JS Developer',
      sallary: '600$ в місяц',
      address: 'Solomyanska sq. 7, Kyiv, Ukraine',
    },

    main: {
      skills: [
        'IT Management',
        'Databases',
        'Web Development',
        'Customer Relationship Management (CRM)',
        'Technical Documentation',
        'IT Outsourcing',
        'Electrical Engineering',
        'Instalation',
        'PHP',
        'PHP Applications',
        'PhpMyAdmin',
        'MySQL',
        'Microsoft SQL Server',
        'Borland Delphi',
        'Statistical Data Analysis',
        'Reporting',
        'LAN-WAN',
        'Operating Systems',
        'Windows Server',
        'Linux Server',
        'Help Desk Support',
        'Microsoft Office',
        'Software Installation',
        'Local Area Network (LAN)',
        'Hardware',
        'Technical Support',
        'Customer Service',
        'Student Counseling',
        'Teaching',
        'Self Learning',
        'Communication',
        'Training',
        'Time Management',
        'Phone Etiquette',
        'Cognitive Flexibility',
        'Teamwork',
        'Organization Skills',
        'Ability to correctly formulate questions',
        'Sociability',
      ],
    },

    footer: {
      social: {
        email: {
          text: 'chip@example.com',
          href: 'mailto:chip@example.com',
        },
        phone: {
          text: '+380977541536',
          href: 'tel:+380977541536',
        },
        linkedin: {
          text: 'LinkedIn',
          href: 'https://www.linkedin.com/in/chip22294/',
        },
      },
    },
  })
  //                  ↑↑ сюди вводимо JSON дані
})

router.get('/education', function (req, res) {
  res.render('education', {
    page: {
      title: 'Education',
    },

    header: {
      name: {
        firstname: 'Eugene',
        lastname: 'Nechiporuk',
      },
      position: 'Junior Fullstack JS Developer',
      sallary: '600$ в місяц',
      address: 'Solomyanska sq. 7, Kyiv, Ukraine',
    },

    main: {
      educations: ['NPU im. Dragomanova', 'School #250'],
    },

    footer: {
      social: {
        email: {
          text: 'chip@example.com',
          href: 'mailto:chip@example.com',
        },
        phone: {
          text: '+380977541536',
          href: 'tel:+380977541536',
        },
        linkedin: {
          text: 'LinkedIn',
          href: 'https://www.linkedin.com/in/chip22294/',
        },
      },
    },
  })
})
// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
