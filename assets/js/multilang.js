    var arrLang = {
      'en': {
        'title': 'JOHAN GORODOVOY',
        'games': 'Games',
        'about': 'About',
        'contact': 'Contact',
        'nameParagraph': 'My name is Johan.',
            'subParagraph': 'Currently live in Russia and study at university. I am fond of photo, video editing, UI design, sound design and gamedev.',
        'contactQuote': 'Contact me via email',
        'send':'Send Email',
        'support':'Support me',
        'mdcTitle':'Mountain Dew Crusader',
        'mdcDescription':'A story about creativity and meaning of life.',
        'jlwTitle':'Just a little walk',
        'jlwDescription':'Just a little night walk.',
        'jlwQuote':'Do you remember your last dream?',
        'soon':'Soon...',
        'frozen':"The project is frozen. Wait for news.",
        'jlwDate':"02.xx.2023",

      },
      'rus': {
        'title': 'ЙОХАН ГОРОДОВОЙ',
        'games': 'Игры',
        'about': 'Про меня',
        'contact': 'Связь',
        'nameParagraph': 'Меня зовут Йохан.',
        'subParagraph': 'Сейчас проживаю в России и учусь в университете. Увлекаюсь фото, видеомонтажем,UI дизайном, звуковым дизайном и разработкой игр.',
        'contactQuote': 'Свяжитесь через имейл',
        'send':'Отправить',
        'support':'Поддержать',
        'mdcTitle':'Маунтин Дью Крусейдер',
        'mdcDescription':'История о творчестве и смысле жизни.',
        'jlwTitle':'Небольшая прогулка',
        'jlwDescription':'Просто маленькая ночная прогулка',
        'jlwQuote':'Вы помните ваш последний сон?',
        'soon':'Скоро...',
        'frozen':"Проект заморожен. Ждите новостей.",
        'jlwDate':"xx.02.2023",
      }
    };

    // Process translation
    $(function() {
      $('.translate').click(function() {
        var lang = $(this).attr('id');
        
        $('.lang').each(function(index, item) {
          //$(this).placeholder(arrLang[lang]  
          $(this).text(arrLang[lang][$(this).attr('key')]);
        });
      });
    });