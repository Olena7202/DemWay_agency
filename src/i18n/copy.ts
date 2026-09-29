import type { ServiceGroup } from '../data/services'

export type Locale = 'uk' | 'en'

export type Copy = {
  meta: { title: string; tab: string; description: string }
  nav: {
    about: string
    services: string
    approach: string
    contact: string
    brief: string
    openMenu: string
    closeMenu: string
    aria: string
    language: string
    packages: string
  }
  hero: { titleName: string; titleAgency: string; lede: string; discuss: string; cases: string }
  why: {
    kicker: string
    titleBefore: string
    titleAccent: string
    titleAfter: string
    brand: string
    textBefore: string
    textAccent: string
    textAfter: string
    textMoreBefore: string
    textMoreAccent1: string
    textMoreMid1: string
    textMoreAccent2: string
    textMoreMid2: string
    textMoreAccent3: string
    textMoreAfter: string
    orbitHint: string
    steps: { title: string; text: string }[]
  }
  whyChoose: {
    kicker: string
    title: string
    text: string
    points: { title: string; text: string; heading: 'h3' | 'h4' }[]
  }
  servicesTeaser: {
    kicker: string
    title: string
    text: string
    catalog: string
    openTab: string
    go: string
  }
  openingOffers: {
    kicker: string
    title: string
    text: string
    includes: string
    priceLabel: string
    popular: string
    note: string
    banner: {
      text: string
      dates: string
      limit: string
      cta: string
    }
    items: {
      id: string
      icon: 'start' | 'grow' | 'rebrand' | 'system'
      label: string
      name: string
      for: string
      originalPrice: string
      price: string
      discount: string
      promo: string
      cta: string
      featured?: boolean
      items: string[]
    }[]
  }
  groups: Record<ServiceGroup, string>
  groupHeadings: Partial<Record<ServiceGroup, string>>
  clusters: Record<string, string>
  clusterLeads: Partial<Record<string, string>>
  groupLeads: Partial<Record<ServiceGroup, string>>
  teaserBlurbs: Record<ServiceGroup, string>
  catalog: {
    kicker: string
    title: string
    text: string
    tabsAria: string
    packagesAria: string
    picked: string
    quote: string
    discuss: string
    term: string
    expand: string
    collapse: string
  }
  approach: {
    kicker: string
    title: string
    steps: { title: string; text: string; heading?: 'h3' | 'h4' }[]
  }
  faq: {
    kicker: string
    title: string
    text: string
    items: { q: string; a: string }[]
  }
  contact: {
    kicker: string
    title: string
    lead: string
    text: string
    notes: [string, string]
    received: string
    reply: string
    name: string
    namePh: string
    company: string
    companyPh: string
    service: string
    task: string
    taskPh: string
    channel: string
    phone: string
    telegram: string
    email: string
    phoneLabel: string
    telegramLabel: string
    emailLabel: string
    consent: string
    send: string
    sending: string
    error: string
    sendFail: string
    fullSystem: string
    other: string
    honey: string
    privacy: string
    offer: string
    consentJoin: string
  }
  legal: {
    kicker: string
    title: string
    description: string
    updated: string
    privacyTitle: string
    privacy: { title: string; text: string }[]
    offerTitle: string
    offer: { title: string; text: string }[]
  }
  notFound: {
    kicker: string
    title: string
    text: string
    home: string
    catalog: string
  }
  footer: {
    aside: string
    services: string
    company: string
    contacts: string
    catalog: string
    mail: string
    channel: string
    channelValue: string
    format: string
    formatValue: string
    hours: string
    hoursValue: string
    rights: string
  }
}

export const copy: Record<Locale, Copy> = {
  uk: {
    meta: {
      title: 'Діджитал агенція - розробка сайту, маркетинг, SEO та реклама|DemWay',
      tab: 'DemWay agency',
      description:
        'Діджитал агентство DemWay поєднує усе необхідне для розвитку вашого бізнесу. Розробка сайту, SEO, контекстна реклама, Google Ads та email-маркетинг в одному місці. Замовляйте digital-послуги під ключ та зростайте онлайн з нами!',
    },
    nav: {
      about: 'Про нас',
      services: 'Послуги',
      approach: 'Підхід',
      contact: 'Контакти',
      brief: 'Обговорити проєкт',
      packages: 'Пакети',
      openMenu: 'Відкрити меню',
      closeMenu: 'Закрити меню',
      aria: 'Навігація',
      language: 'Мова',
    },
    hero: {
      titleName: 'DemWay -',
      titleAgency: 'digital-агенція повного циклу',
      lede: 'Перетворюємо бізнес на бренд, який знаходять, обирають і запам’ятовують. Створюємо сайт, залучаємо клієнтів та розвиваємо бізнес з нуля.',
      discuss: 'Обговорити задачу',
      cases: 'Дивитись послуги',
    },
    why: {
      kicker: 'Про нас',
      titleBefore: 'Ваш бізнес — у центрі. ',
      titleAccent: 'Digital',
      titleAfter: ' — навколо нього.',
      brand: 'DemWay',
      textBefore: ' — діджитал агентство, яке допомагає бізнесу вибудувати зрозумілу ',
      textAccent: 'digital-систему',
      textAfter: ' без необхідності самостійно розбиратися в маркетингу.',
      textMoreBefore: 'Ми поєднуємо ',
      textMoreAccent1: 'стратегію',
      textMoreMid1: ', ',
      textMoreAccent2: 'креатив',
      textMoreMid2: ' і ',
      textMoreAccent3: 'технології',
      textMoreAfter:
        ', щоб маркетингові рішення відповідали цілям бізнесу, його можливостям та бюджету.',
      orbitHint: 'Натисніть на точку — більше деталей',
      steps: [
        {
          title: 'Для кого ми працюємо',
          text: 'Бізнеси, які хочуть розвиватись онлайн, але не мають чіткого digital-плану. Як нові проєкти, так і компанії, які хочуть оновити сайт, покращити просування чи посилити маркетинг.',
        },
        {
          title: 'Від ідеї до результату',
          text: 'Не просто виконуємо окремі завдання, а формуємо чітку стратегію, визначаємо пріоритети й підбираємо маркетингові рішення, які відповідають вашим цілям та бюджету.',
        },
        {
          title: 'Ваш бізнес — у центрі. Digital — навколо нього.',
          text: 'Поєднуємо digital-інструменти так, щоб вони доповнювали одне одного та працювали на розвиток вашого бізнесу.',
        },
      ],
    },
    whyChoose: {
      kicker: 'Чому DemWay?',
      title: 'Чому обирають наше діджитал агентство',
      text: 'DemWay — це не шаблонний набір маркетингових послуг. Спочатку розбираємося в задачі бізнесу, а потім пропонуємо рішення, які мають практичний сенс і відповідають доступним ресурсам. Будуємо не сайти і стратегії. Будуємо причини обрати вас.',
      points: [
        {
          title: 'Рішення під конкретний бізнес',
          heading: 'h3',
          text: 'Ви знаєте, яким має бути ваш бізнес. Ми знаємо, як допомогти це реалізувати. Не використовуємо однаковий підхід для всіх, а враховуємо кожне важливе побажання та відкрито обговорюємо рішення.',
        },
        {
          title: 'Прозорий процес роботи',
          heading: 'h4',
          text: 'Ви розумієте, що ми робимо, навіщо це потрібно та на якому етапі перебуває проєкт. Відкрито комунікуємо щодо процесу та тримаємо вас у курсі результатів.',
        },
        {
          title: 'Орієнтація на результат',
          heading: 'h4',
          text: 'Зосереджуємося не лише на виконанні завдань, а й на тому, який результат вони приносять бізнесу.',
        },
      ],
    },
    servicesTeaser: {
      kicker: 'Послуги',
      title: 'Послуги діджитал агентства',
      text: 'Ми зібрали ключові маркетингові послуги в одному місці, щоб бізнесу не доводилося збирати діджитал по частинках. Від створення сайту та SEO-оптимізації до реклами та ремаркетингу — будуємо систему, де кожен канал працює на спільну ціль.',
      catalog: 'Увесь каталог пакетів',
      openTab: 'Відкрити вкладку «{name}» і подивитись пакети',
      go: 'Відкрити вкладку з пакетами',
    },
    openingOffers: {
      kicker: 'Пакети',
      title: 'Спеціальна пропозиція від DemWay',
      text: 'Чотири готові пакети під етап бізнесу — зі спеціальними умовами на перші проєкти.',
      includes: 'Що входить',
      priceLabel: '',
      popular: 'Популярний',
      note: 'Ціни орієнтовні та коригуються під кожен запит.\nМедіабюджет реклами, хостинг і домен — не входять у вартість.',
      banner: {
        text: 'Спеціальні умови для перших проєктів',
        dates: '01.10 – 31.10',
        limit: 'Лише 10 проєктів',
        cta: 'Дізнатися більше',
      },
      items: [
        {
          id: 'start',
          icon: 'start',
          label: 'START',
          name: 'Digital з нуля',
          for: 'Для бізнесу, який тільки запускається або хоче вибудувати ефективну digital-присутність.',
          originalPrice: '17 500 грн',
          price: '14 875 грн',
          discount: '−15%',
          promo: '+ безкоштовне налаштування Analytics',
          cta: 'Запустити проєкт',
          items: [
            'розробка сайту',
            'базова SEO-оптимізація',
            'Google Analytics',
            'налаштування Google Ads',
            'базова консультація щодо digital-стратегії',
          ],
        },
        {
          id: 'grow',
          icon: 'grow',
          label: 'GROW',
          name: 'Залучення клієнтів',
          for: 'Для бізнесу, який уже працює та хоче системно залучати нових клієнтів.',
          originalPrice: '21 000 грн',
          price: '17 850 грн',
          discount: '−15%',
          promo: '+ безкоштовний remarketing',
          cta: 'Почати зростання',
          featured: true,
          items: ['Google Ads', 'Meta Ads', 'Аналітика', 'Remarketing', 'A/B тестування'],
        },
        {
          id: 'rebrand',
          icon: 'rebrand',
          label: 'RE:BRAND',
          name: 'Оновлення digital та бренду',
          for: 'Для бізнесу, якому потрібне сучасніше позиціонування та візуальна присутність.',
          originalPrice: '13 500 грн',
          price: '12 150 грн',
          discount: '−10%',
          promo: '+ мобільна адаптація',
          cta: 'Оновити бренд',
          items: [
            'айдентика',
            'редизайн сайту',
            'мобільна адаптація',
            'SEO-оптимізація основних сторінок',
            'підготовка сайту до запуску реклами',
          ],
        },
        {
          id: 'system',
          icon: 'system',
          label: 'SYSTEM',
          name: 'Комплексна digital-система',
          for: 'Для бізнесу, який хоче об’єднати залучення, продажі та роботу з клієнтами в одну систему.',
          originalPrice: '72 000 грн',
          price: '57 600 грн',
          discount: '−20%',
          promo: '+ 1 місяць супроводу',
          cta: 'Створити систему',
          items: [
            'Сайт',
            'SEO',
            'Google Ads',
            'Instagram + Facebook Ads',
            'Email-маркетинг',
            'CRM',
            'Аналітика',
            'A/B тестування',
          ],
        },
      ],
    },
    groups: {
      Сайти: 'Сайти',
      Редизайн: 'Редизайн',
      SEO: 'SEO',
      Реклама: 'Реклама',
      Системи: 'Системи',
      Айдентика: 'Айдентика',
    },
    groupHeadings: {
      Сайти: 'Розробка сайтів',
      Редизайн: 'Редизайн',
      SEO: 'SEO',
      Реклама: 'Реклама',
      Системи: 'Системи',
      Айдентика: 'Айдентика',
    },
    clusters: {
      'Новий сайт': 'Новий сайт',
      Оновлення: 'Оновлення',
      'Редизайн сайтів': 'Редизайн сайтів',
      'SEO-просування': 'SEO-просування',
      'Google Ads': 'Google Ads',
      'Meta Ads': 'Meta Ads',
      'Email-маркетинг': 'Email-маркетинг',
      Системи: 'Системи',
      'CRM та автоматизація': 'CRM та автоматизація',
      Айдентика: 'Айдентика',
      Бренд: 'Бренд',
    },
    clusterLeads: {
      'SEO-просування':
        'Залучаємо цільових клієнтів із пошуку, підвищуємо видимість сайту та отримуємо стабільний органічний трафік без постійної оплати за кожен клік.',
      'Google Ads':
        'Налаштовуємо Google Ads для залучення цільової аудиторії та контролю рекламних витрат. Визначаємо потрібні кампанії, аудиторії та цілі, а після запуску аналізуємо дані й оптимізуємо рекламу.',
      'Meta Ads':
        'Запускаємо таргетовану рекламу в Meta для підвищення впізнаваності бренду, залучення нової аудиторії, повернення потенційних клієнтів і просування конкретних пропозицій.',
      'Email-маркетинг':
        'Створюємо комунікацію, яка нагадує про бренд, повертає аудиторію та підтримує повторні покупки. Не втрачаємо контакт із клієнтами після першої взаємодії.',
      Системи:
        'Будуємо digital-системи, які спрощують роботу з клієнтами, продажами та маркетингом. Поєднуємо інструменти так, щоб дані не залишалися окремо в різних сервісах.',
      'CRM та автоматизація':
        'Структуруємо процес роботи з потенційними клієнтами, щоб жодна заявка не губилася, а команда розуміла, на якому етапі перебуває кожен контакт.',
      Айдентика:
        'Створюємо впізнаваний візуальний образ бренду, який допомагає виділятися та послідовно працює в digital та офлайн-комунікації.',
      Бренд:
        'Створюємо цілісний образ бренду — від візуальної подачі до деталей, які допомагають компанії виділятися серед конкурентів, залишатися впізнаваною та запам’ятатись клієнтам.',
    },
    groupLeads: {
      Сайти:
        'Створюємо сайти, які не просто презентують бізнес, а допомагають досягати комерційних цілей. Розробляємо нові проєкти, оновлюємо наявні та адаптуємо їх під потреби користувачів і бізнесу.',
      Редизайн:
        'Оновлюємо сайт, коли його вигляд, структура або логіка вже не відповідають бренду та очікуванням аудиторії. Редизайн допомагає зробити сайт сучаснішим, зрозумілішим і зручнішим без втрати його основної цінності для бізнесу.',
      SEO: 'SEO — ключовий елемент успішної стратегії просування. Бути в правильному місці в правильний час — це не магія, а якісна SEO-оптимізація сайту. Аналізуємо сайт, пошуковий попит і конкурентне середовище, щоб визначити точки росту.',
      Реклама:
        'Запускаємо рекламу там, де потенційні клієнти вже шукають рішення або взаємодіють із брендами. Підбираємо рекламні канали відповідно до цілей, аудиторії та доступного бюджету.',
      Системи:
        'Будуємо digital-системи, які спрощують роботу з клієнтами, продажами та маркетингом. Поєднуємо інструменти так, щоб дані не залишалися окремо в різних сервісах.',
      Айдентика:
        'Створюємо впізнаваний візуальний образ бренду, який допомагає виділятися та послідовно працює в digital та офлайн-комунікації.',
    },
    teaserBlurbs: {
      Сайти: 'Лендінг, візитка чи каталог — сайт під заявку й запуск реклами.',
      Редизайн: 'Оновлюємо лендінг, візитку, корпоративний сайт чи каталог.',
      SEO: 'Ключові слова, метатеги і URL — базова оптимізація під пошук.',
      Реклама: 'Пошук, медійка й товари в Google, Instagram, Facebook Ads, email і A/B тести.',
      Системи: 'CRM, щоб продажі не губились між чатами.',
      Айдентика: 'Логотип і носії, які тримають бренд разом.',
    },
    catalog: {
      kicker: 'Послуги',
      title: 'Каталог пакетів',
      text: 'Оберіть напрям і пакет — склад відкриється поруч.',
      tabsAria: 'Напрями послуг',
      packagesAria: 'Пакети',
      picked: 'обраний пакет',
      quote: 'Вартість — за індивідуальним прорахунком',
      discuss: 'Обговорити пакет',
      term: 'Термін',
      expand: 'Розгорнути',
      collapse: 'Згорнути',
    },
    approach: {
      kicker: 'Підхід',
      title: 'Наш підхід до роботи',
      steps: [
        {
          title: 'Аналіз бізнесу та цілей',
          heading: 'h3',
          text: 'Вивчаємо бізнес, його аудиторію, конкурентів, поточну digital-присутність і цілі. Будуємо маркетингові рішення, які відповідають реальним потребам вашого бізнесу.',
        },
        {
          title: 'Формування digital-стратегії',
          heading: 'h4',
          text: 'Визначаємо основні цілі, точки росту та послідовність дій. Формуємо digital-стратегію, яка враховує ресурси бізнесу та потенціал кожного каналу.',
        },
        {
          title: 'Вибір каналів просування',
          heading: 'h4',
          text: 'Підбираємо канали та інструменти не за принципом «треба бути всюди», а відповідно до цільової аудиторії, цілей та бюджету.',
        },
        {
          title: 'Реалізація та запуск',
          heading: 'h3',
          text: 'Перетворюємо стратегію на конкретні дії — створюємо, налаштовуємо інструменти, запускаємо кампанії та контролюємо їхню роботу.',
        },
        {
          title: 'A/B тестування',
          heading: 'h4',
          text: 'Порівнюємо різні варіанти рекламних креативів, сторінок або комунікації, щоб визначити, які рішення краще працюють на поставлену ціль.',
        },
        {
          title: 'Оптимізація результатів',
          heading: 'h4',
          text: 'Аналізуємо отримані дані та вдосконалюємо кампанії, щоб покращувати їхню ефективність.',
        },
      ],
    },
    faq: {
      kicker: 'FAQ',
      title: 'Часті запитання',
      text: 'Коротко про запуск, строки й комунікацію. Якщо вашого питання немає — напишіть у форму, відповімо в той самий канал.',
      items: [
        {
          q: 'Як почати працювати з DemWay?',
          a: 'Розкажіть нам про свій бізнес, поточну ситуацію та завдання в формі нижче. Ми проаналізуємо запит, запропонуємо можливі рішення та визначимо оптимальний формат подальшої роботи.',
        },
        {
          q: 'Який термін реалізації проєкту?',
          a: 'Термін залежить від обсягу завдання, формату проєкту та кількості робіт. Перед стартом погоджуємо етапи й орієнтовні строки, щоб ви розуміли, коли очікувати результат. Якщо йдеться про комплексний маркетинговий супровід, це системна довгострокова робота з регулярним аналізом і коригуванням стратегії.',
        },
        {
          q: 'Як відбувається комунікація?',
          a: 'Узгоджуємо зручний для вас канал комунікації та підтримуємо звʼязок протягом усього проєкту. Важливі рішення, етапи та результати фіксуємо прозоро й зрозуміло. Ви завжди розумієте, що зараз у роботі та на якому етапі знаходиться проєкт.',
        },
        {
          q: 'Як формується бюджет?',
          a: 'Вартість залежить від завдань, обсягу робіт і складності проєкту. Спочатку визначаємо, що саме потрібно бізнесу, а потім формуємо пропозицію без навʼязування непотрібних послуг.',
        },
        {
          q: 'Є ідея, але немає чіткого розуміння, яким має бути мій бренд. Що робити?',
          a: 'Не обовʼязково приходити з готовим рішенням. Ми допоможемо структурувати ідею, визначити напрям і перетворити задум на бренд, який обирають.',
        },
        {
          q: 'Які результати очікувати від співпраці?',
          a: 'Результат залежить від обраних цілей, інструментів і стартової ситуації бізнесу. Ми визначаємо показники на початку роботи та аналізуємо динаміку, щоб розуміти, що працює, а що потребує оптимізації.',
        },
      ],
    },
    contact: {
      kicker: 'Контакти',
      title: 'Заповніть коротку форму, щоб зв’язатись з нами',
      lead: 'Є ідея, проблема або просто хочете покращити онлайн-присутність?',
      text: 'Розкажіть нам про свій проєкт — разом визначимо, з чого варто почати.',
      notes: [
        'Відповідаємо в той самий канал, який оберете.',
        'Спочатку обсяг і строки, потім цифри — без шаблонної презентації.',
      ],
      received: 'Ми вже отримали вашу заявку.',
      reply: 'Скоро зв’яжемося з вами, щоб почати вашу digital-історію',
      name: 'Імʼя *',
      namePh: 'Ваше імʼя',
      company: 'Компанія',
      companyPh: 'Назва бренду',
      service: 'Що запускаємо *',
      task: 'Задача *',
      taskPh: 'Що вже є і що має зʼявитись після запуску',
      channel: 'Оберіть канал звʼязку *',
      phone: 'Телефон',
      telegram: 'Telegram',
      email: 'Email',
      phoneLabel: 'Номер телефону *',
      telegramLabel: 'Нік у Telegram *',
      emailLabel: 'Email *',
      consent: 'Погоджуюсь на обробку даних для відповіді по запиту згідно з',
      privacy: 'політикою конфіденційності',
      offer: 'публічною офертою',
      consentJoin: 'та',
      send: 'Надіслати',
      sending: 'Надсилаємо…',
      error: 'Поля зі зірочкою обовʼязкові',
      sendFail: 'Не вдалось надіслати. Спробуйте ще раз.',
      fullSystem: 'Система під ключ',
      other: 'Інше',
      honey: 'Сайт',
    },
    legal: {
      kicker: 'Документи',
      title: 'Політика та оферта',
      description:
        'Як DemWay обробляє дані з форми та на яких умовах надає послуги.',
      updated: 'Оновлено 21 вересня 2026',
      privacyTitle: 'Політика конфіденційності',
      privacy: [
        {
          title: 'Хто обробляє дані',
          text: 'Оператор — DemWay (digital-агенція, формат Україна · онлайн). Контакт: demway.agency@gmail.com, Telegram @DemWay_Team.',
        },
        {
          title: 'Які дані збираємо',
          text: 'З форми: імʼя, компанія, обрана послуга чи пакет, опис задачі, канал відповіді та контакт (телефон, Telegram або email). На сайті зберігаємо обрану мову в браузері.',
        },
        {
          title: 'Навіщо',
          text: 'Щоб відповісти на запит, уточнити обсяг і строки, підготувати прорахунок і вести листування по проєкту. Підстава — ваша згода в формі та необхідність виконати запит до укладення договору.',
        },
        {
          title: 'Кому передаємо',
          text: 'Заявку можемо надіслати на пошту через FormSubmit і в робочий чат через Telegram. Іншим третім особам дані не продаємо і не передаємо для їхнього маркетингу.',
        },
        {
          title: 'Скільки зберігаємо',
          text: 'Поки ведемо листування і стільки, скільки потрібно для обліку послуг і вимог закону. Далі видаляємо або знеособлюємо за запитом на demway.agency@gmail.com.',
        },
        {
          title: 'Ваші права',
          text: 'Можна запитати доступ, виправлення, видалення, обмеження обробки або відкликати згоду. Це не впливає на вже надіслану відповідь, якщо вона вже пішла в роботу.',
        },
      ],
      offerTitle: 'Публічна оферта',
      offer: [
        {
          title: 'Предмет',
          text: 'DemWay пропонує послуги з сайтів, реклами, SEO, CRM та айдентики. Надсилання форми — запит на прорахунок, а не автоматичне замовлення. Договір укладається після узгодження обсягу, строків і вартості.',
        },
        {
          title: 'Вартість',
          text: 'Пакети на головній зі спеціальними умовами (−15% / −20% та бонуси) — орієнтир на зазначений період і ліміт проєктів. Каталог — склад послуг без публічної ціни: сума за індивідуальним прорахунком. Медіабюджет реклами, хостинг і домен у вартість пакетів не входять, якщо не погоджено окремо.',
        },
        {
          title: 'Строки і результат',
          text: 'Строки в каталозі орієнтовні. Фінальний план фіксуємо після консультації. Результат — погоджений обсяг робіт, не гарантія продажів чи позицій у пошуку.',
        },
        {
          title: 'Оплата і зміни',
          text: 'Порядок оплати — у рахунку або договорі. Зміни обсягу погоджуємо письмово (чат або email). Право на матеріали переходить після повної оплати відповідного етапу, якщо інше не зазначено.',
        },
        {
          title: 'Право',
          text: 'Стосунки регулює законодавство України. Спори — переговори, далі суди України за місцем реєстрації виконавця, якщо інше не вимагає закон.',
        },
      ],
    },
    notFound: {
      kicker: 'Помилка',
      title: 'Такої сторінки немає',
      text: 'Посилання застаріле або адресу введено з помилкою. Поверніться на головну або відкрийте каталог пакетів.',
      home: 'На головну',
      catalog: 'Каталог пакетів',
    },
    footer: {
      aside: 'Від контакту до угоди',
      services: 'Послуги',
      company: 'Компанія',
      contacts: 'Контакти',
      catalog: 'Увесь каталог',
      mail: 'Пошта',
      channel: 'Канал',
      channelValue: 'Telegram, телефон, email',
      format: 'Формат',
      formatValue: 'Україна · онлайн',
      hours: 'Години',
      hoursValue: 'Пн–Пт, 10:00–18:00',
      rights: 'Усі права захищені',
    },
  },
  en: {
    meta: {
      title: 'Digital agency — website development, marketing, SEO and ads | DemWay',
      tab: 'DemWay agency',
      description:
        'DemWay digital agency brings together everything you need to grow your business. Website development, SEO, contextual ads, Google Ads and email marketing in one place. Order turnkey digital services and grow online with us.',
    },
    nav: {
      about: 'About',
      services: 'Services',
      approach: 'Approach',
      contact: 'Contact',
      brief: 'Discuss a project',
      packages: 'Packages',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      aria: 'Navigation',
      language: 'Language',
    },
    hero: {
      titleName: 'DemWay -',
      titleAgency: 'full-cycle digital agency',
      lede: 'We turn a business into a brand that people find, choose and remember. We build the site, attract clients and grow the business from scratch.',
      discuss: 'Discuss the task',
      cases: 'See services',
    },
    why: {
      kicker: 'About us',
      titleBefore: 'Your business — at the center. ',
      titleAccent: 'Digital',
      titleAfter: ' — around it.',
      brand: 'DemWay',
      textBefore: ' is a digital agency that helps businesses build a clear ',
      textAccent: 'digital system',
      textAfter: ' without having to figure out marketing on their own.',
      textMoreBefore: 'We combine ',
      textMoreAccent1: 'strategy',
      textMoreMid1: ', ',
      textMoreAccent2: 'creative',
      textMoreMid2: ' and ',
      textMoreAccent3: 'technology',
      textMoreAfter:
        ' so marketing decisions match business goals, capacity and budget.',
      orbitHint: 'Tap a dot for more detail',
      steps: [
        {
          title: 'Who we work with',
          text: 'Businesses that want to grow online but do not have a clear digital plan. Both new projects and companies that want to refresh a site, improve promotion or strengthen marketing.',
        },
        {
          title: 'From idea to result',
          text: 'We do not just complete separate tasks — we shape a clear strategy, set priorities and choose marketing solutions that match your goals and budget.',
        },
        {
          title: 'Your business — at the center. Digital — around it.',
          text: 'We combine digital tools so they complement each other and work toward growing your business.',
        },
      ],
    },
    whyChoose: {
      kicker: 'Why DemWay',
      title: 'Why choose our digital agency',
      text: 'DemWay is not a template pack of marketing services. First we understand the business task, then we offer solutions that make practical sense and fit the resources you have. We don’t build websites and strategies. We build reasons to choose you.',
      points: [
        {
          title: 'Built for your business',
          heading: 'h3',
          text: 'You know what your business should be. We know how to help make it real. We do not use the same approach for everyone: we take each important request into account and discuss decisions openly.',
        },
        {
          title: 'A transparent process',
          heading: 'h4',
          text: 'You understand what we are doing, why it matters, and where the project stands. We communicate openly about the process and keep you in the loop on results.',
        },
        {
          title: 'Focused on results',
          heading: 'h4',
          text: 'We focus not only on completing tasks, but on the result those tasks bring to the business.',
        },
      ],
    },
    servicesTeaser: {
      kicker: 'Services',
      title: 'Digital agency services',
      text: 'We gathered the core marketing services in one place so a business does not have to assemble digital piece by piece. From site creation and SEO optimization to ads and remarketing — we build a system where every channel works toward a shared goal.',
      catalog: 'Full package catalog',
      openTab: 'Open the “{name}” tab and see packages',
      go: 'Open the packages tab',
    },
    openingOffers: {
      kicker: 'Packages',
      title: 'Special offer from DemWay',
      text: 'Four ready packages for your business stage — with special terms for the first projects.',
      includes: 'What’s included',
      priceLabel: '',
      popular: 'Popular',
      note: 'Prices are estimates and are adjusted to each project request.\nAd spend, hosting and domain are not included.',
      banner: {
        text: 'Special terms for the first projects',
        dates: '01.10 – 31.10',
        limit: 'Only 10 projects',
        cta: 'Learn more',
      },
      items: [
        {
          id: 'start',
          icon: 'start',
          label: 'START',
          name: 'Digital from scratch',
          for: 'For businesses that are just launching or want to build an effective digital presence.',
          originalPrice: '$390',
          price: '$332',
          discount: '−15%',
          promo: '+ free Analytics setup',
          cta: 'Launch project',
          items: [
            'website development',
            'basic SEO optimization',
            'Google Analytics',
            'Google Ads setup',
            'basic digital strategy consultation',
          ],
        },
        {
          id: 'grow',
          icon: 'grow',
          label: 'GROW',
          name: 'Client acquisition',
          for: 'For businesses that already operate and want to systematically attract new clients.',
          originalPrice: '$469',
          price: '$398',
          discount: '−15%',
          promo: '+ free remarketing',
          cta: 'Start growth',
          featured: true,
          items: ['Google Ads', 'Meta Ads', 'Analytics', 'Remarketing', 'A/B testing'],
        },
        {
          id: 'rebrand',
          icon: 'rebrand',
          label: 'RE:BRAND',
          name: 'Digital and brand refresh',
          for: 'For businesses that need more modern positioning and visual presence.',
          originalPrice: '$301',
          price: '$271',
          discount: '−10%',
          promo: '+ mobile adaptation',
          cta: 'Refresh brand',
          items: [
            'identity',
            'website redesign',
            'mobile adaptation',
            'SEO for key pages',
            'site prep for ad launch',
          ],
        },
        {
          id: 'system',
          icon: 'system',
          label: 'SYSTEM',
          name: 'Full digital system',
          for: 'For businesses that want to unite acquisition, sales and client work in one system.',
          originalPrice: '$1,607',
          price: '$1,285',
          discount: '−20%',
          promo: '+ 1 month of support',
          cta: 'Build the system',
          items: [
            'Website',
            'SEO',
            'Google Ads',
            'Instagram + Facebook Ads',
            'Email marketing',
            'CRM',
            'Analytics',
            'A/B testing',
          ],
        },
      ],
    },
    groups: {
      Сайти: 'Websites',
      Редизайн: 'Redesign',
      SEO: 'SEO',
      Реклама: 'Ads',
      Системи: 'Systems',
      Айдентика: 'Identity',
    },
    groupHeadings: {
      Сайти: 'Website development',
      Редизайн: 'Redesign',
      SEO: 'SEO',
      Реклама: 'Ads',
      Системи: 'Systems',
      Айдентика: 'Identity',
    },
    clusters: {
      'Новий сайт': 'New site',
      Оновлення: 'Refresh',
      'Редизайн сайтів': 'Website redesign',
      'SEO-просування': 'SEO promotion',
      'Google Ads': 'Google Ads',
      'Meta Ads': 'Meta Ads',
      'Email-маркетинг': 'Email marketing',
      Системи: 'Systems',
      'CRM та автоматизація': 'CRM and automation',
      Айдентика: 'Identity',
      Бренд: 'Brand',
    },
    clusterLeads: {
      'SEO-просування':
        'We attract target clients from search, raise site visibility and get steady organic traffic without paying for every click.',
      'Google Ads':
        'We set up Google Ads to attract a target audience and keep ad spend under control. We define the campaigns, audiences and goals you need, then after launch we analyse the data and optimise the ads.',
      'Meta Ads':
        'We run targeted ads in Meta to raise brand recognition, attract a new audience, bring potential clients back and promote specific offers.',
      'Email-маркетинг':
        'We build communication that reminds people of the brand, brings the audience back and supports repeat purchases. We do not lose contact with clients after the first interaction.',
      Системи:
        'We build digital systems that make work with clients, sales and marketing simpler. We connect tools so data does not sit apart in different services.',
      'CRM та автоматизація':
        'We structure how you work with potential clients so no lead is lost and the team can see which stage each contact is at.',
      Айдентика:
        'We create a recognizable visual brand that helps you stand out and works consistently in digital and offline communication.',
      Бренд:
        'We build a coherent brand image — from visual presentation to the details that help the company stand out from competitors, stay recognizable and stick in the client’s memory.',
    },
    groupLeads: {
      Сайти:
        'We create sites that do more than present the business: they help hit commercial goals. We build new projects, refresh existing ones and adapt them to user and business needs.',
      Редизайн:
        'We refresh a site when its look, structure or logic no longer match the brand and audience expectations. Redesign makes the site more modern, clearer and easier to use without losing its core value for the business.',
      SEO: 'SEO is a key part of a working promotion strategy. Being in the right place at the right time is not magic — it is solid on-site SEO. We review the site, search demand and the competitive field to find growth points.',
      Реклама:
        'We run ads where potential clients already look for a solution or engage with brands. We pick channels to match goals, audience and budget.',
      Системи:
        'We build digital systems that make work with clients, sales and marketing simpler. We connect tools so data does not sit apart in different services.',
      Айдентика:
        'We create a recognizable visual brand that helps you stand out and works consistently in digital and offline communication.',
    },
    teaserBlurbs: {
      Сайти: 'Landing, brochure or catalog — a site built for leads and ads.',
      Редизайн: 'Refresh a landing, brochure, corporate site or catalog.',
      SEO: 'Keywords, meta tags and URLs — core on-site SEO.',
      Реклама: 'Search, display and shopping in Google, Instagram and Facebook Ads, plus email and A/B tests.',
      Системи: 'CRM so sales do not get lost between chats.',
      Айдентика: 'Logo and assets that keep the brand together.',
    },
    catalog: {
      kicker: 'Services',
      title: 'Package catalog',
      text: 'Pick a direction and a package — scope opens beside it.',
      tabsAria: 'Service directions',
      packagesAria: 'Packages',
      picked: 'selected package',
      quote: 'Price — by individual quote',
      discuss: 'Discuss this package',
      term: 'Timeline',
      expand: 'Show more',
      collapse: 'Show less',
    },
    approach: {
      kicker: 'Approach',
      title: 'Our approach to work',
      steps: [
        {
          title: 'Business and goals analysis',
          heading: 'h3',
          text: 'We study the business, its audience, competitors, current digital presence and goals. We build marketing decisions that match the real needs of your business.',
        },
        {
          title: 'Building a digital strategy',
          heading: 'h4',
          text: 'We define core goals, growth points and the sequence of actions. We form a digital strategy that accounts for business resources and the potential of each channel.',
        },
        {
          title: 'Choosing promotion channels',
          heading: 'h4',
          text: 'We pick channels and tools not by the “be everywhere” rule, but according to the target audience, goals and budget.',
        },
        {
          title: 'Delivery and launch',
          heading: 'h3',
          text: 'We turn strategy into concrete actions — we create, set up tools, launch campaigns and keep their work under control.',
        },
        {
          title: 'A/B testing',
          heading: 'h4',
          text: 'We compare variants of ad creatives, pages or communication to see which decisions work better toward the stated goal.',
        },
        {
          title: 'Result optimization',
          heading: 'h4',
          text: 'We analyse the data we get and refine campaigns to improve their performance.',
        },
      ],
    },
    faq: {
      kicker: 'FAQ',
      title: 'Frequently asked questions',
      text: 'A short take on kickoff, timelines and communication. If yours is missing — write in the form and we reply in the same channel.',
      items: [
        {
          q: 'How do we start working with DemWay?',
          a: 'Tell us about your business, the current situation and the task in the form below. We will review the request, suggest possible solutions and define the best format for the next steps.',
        },
        {
          q: 'How long does a project take?',
          a: 'The timeline depends on the scope, the project format and the amount of work. Before we start we agree on stages and estimated dates so you know when to expect a result. Ongoing marketing support is long-term systemic work, with regular analysis and strategy adjustments.',
        },
        {
          q: 'How does communication work?',
          a: 'We agree on a channel that works for you and stay in touch throughout the project. Key decisions, stages and results are recorded clearly. You always know what is in progress and which stage the project is at.',
        },
        {
          q: 'How is the budget set?',
          a: 'Cost depends on the tasks, the scope of work and the complexity of the project. First we define what the business actually needs, then we make an offer without pushing extra services.',
        },
        {
          q: 'I have an idea, but no clear picture of what my brand should be. What should I do?',
          a: 'You do not need to arrive with a finished solution. We help structure the idea, set a direction and turn the concept into a brand people choose.',
        },
        {
          q: 'What results should I expect from working together?',
          a: 'The result depends on the goals you set, the tools we use and where the business starts. We define metrics at the beginning and track the dynamics so we can see what works and what needs to be optimized.',
        },
      ],
    },
    contact: {
      kicker: 'Contact',
      title: 'Fill in a short form to get in touch',
      lead: 'Have an idea, a problem, or just want to improve your online presence?',
      text: 'Tell us about your project — together we will decide where to start.',
      notes: [
        'We reply in the same channel you choose.',
        'Scope and timeline first, then numbers — no template pitch.',
      ],
      received: 'We already received your request.',
      reply: 'We’ll be in touch soon to start your digital story',
      name: 'Name *',
      namePh: 'Your name',
      company: 'Company',
      companyPh: 'Brand name',
      service: 'What we launch *',
      task: 'The task *',
      taskPh: 'What exists now and what should appear after launch',
      channel: 'Choose a contact channel *',
      phone: 'Phone',
      telegram: 'Telegram',
      email: 'Email',
      phoneLabel: 'Phone number *',
      telegramLabel: 'Telegram handle *',
      emailLabel: 'Email *',
      consent: 'I agree to data processing so you can reply to this request, as set out in the',
      privacy: 'privacy policy',
      offer: 'public offer',
      consentJoin: 'and the',
      send: 'Send',
      sending: 'Sending…',
      error: 'Fields marked with an asterisk are required',
      sendFail: 'Could not send. Please try again.',
      fullSystem: 'Turnkey system',
      other: 'Other',
      honey: 'Website',
    },
    legal: {
      kicker: 'Legal',
      title: 'Privacy and offer',
      description: 'How DemWay handles form data and the terms for our services.',
      updated: 'Updated 21 September 2026',
      privacyTitle: 'Privacy policy',
      privacy: [
        {
          title: 'Who processes the data',
          text: 'Controller: DemWay (digital agency, Ukraine · online). Contact: demway.agency@gmail.com, Telegram @DemWay_Team.',
        },
        {
          title: 'What we collect',
          text: 'From the form: name, company, chosen service or package, task description, reply channel and contact (phone, Telegram or email). The site stores the language choice in your browser.',
        },
        {
          title: 'Why',
          text: 'To reply to the request, clarify scope and timeline, prepare a quote and continue project correspondence. Legal basis: consent in the form and steps needed to handle a pre-contract enquiry.',
        },
        {
          title: 'Who we share with',
          text: 'We may send the request by email via FormSubmit and to our work chat via Telegram. We do not sell data or pass it to others for their marketing.',
        },
        {
          title: 'How long we keep it',
          text: 'For as long as we correspond and as required for service records and the law. After that we delete or anonymise it on request to demway.agency@gmail.com.',
        },
        {
          title: 'Your rights',
          text: 'You can ask for access, correction, deletion, restriction, or withdraw consent. That does not undo a reply already sent if work has started.',
        },
      ],
      offerTitle: 'Public offer',
      offer: [
        {
          title: 'Subject',
          text: 'DemWay offers websites, ads, SEO, CRM and identity work. Sending the form is a quote enquiry, not an automatic order. A contract is formed after we agree scope, timeline and price.',
        },
        {
          title: 'Price',
          text: 'Homepage packages with special terms (−15% / −20% and bonuses) are a guide for the stated period and project limit. The catalog lists scope without a public price: the sum is by individual quote. Ad spend, hosting and domain are not included unless agreed separately.',
        },
        {
          title: 'Timeline and result',
          text: 'Catalog timelines are estimates. The final plan is locked after a consultation. You get the agreed scope of work, not a guarantee of sales or search rankings.',
        },
        {
          title: 'Payment and changes',
          text: 'Payment terms appear on the invoice or contract. Scope changes are agreed in writing (chat or email). Rights in the materials pass after full payment of the relevant stage unless stated otherwise.',
        },
        {
          title: 'Law',
          text: 'Ukrainian law applies. Disputes: talks first, then Ukrainian courts at the contractor’s place of registration unless the law requires otherwise.',
        },
      ],
    },
    notFound: {
      kicker: 'Error',
      title: 'This page is missing',
      text: 'The link is outdated or the address has a typo. Go home or open the package catalog.',
      home: 'Go home',
      catalog: 'Package catalog',
    },
    footer: {
      aside: 'From contact to deal',
      services: 'Services',
      company: 'Company',
      contacts: 'Contact',
      catalog: 'Full catalog',
      mail: 'Email',
      channel: 'Channel',
      channelValue: 'Telegram, phone, email',
      format: 'Format',
      formatValue: 'Ukraine · online',
      hours: 'Hours',
      hoursValue: 'Mon–Fri, 10:00–18:00',
      rights: 'All rights reserved',
    },
  },
}
