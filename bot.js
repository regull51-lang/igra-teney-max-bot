const { Bot, Keyboard } = require('@maxhub/max-bot-api');

const bot = new Bot(process.env.BOT_TOKEN);

const menu = Keyboard.inlineKeyboard([
  [
    Keyboard.button.callback('🎬 Портфолио', 'portfolio')
  ],
  [
    Keyboard.button.callback('💎 Услуги и цены', 'prices')
  ],
  [
    Keyboard.button.callback('💬 Обсудить проект', 'contact')
  ]
]);

bot.command('hello', (ctx) => {
  return ctx.reply(
    'Добро пожаловать в «ИГРУ ТЕНЕЙ».\n\n' +
    'Здесь можно посмотреть наши работы, выбрать направление и обсудить свой проект.',
    { attachments: [menu] }
  );
});

bot.action('portfolio', (ctx) => {
  const portfolioMenu = Keyboard.inlineKeyboard([
  [Keyboard.button.callback('🎬 Свадьба как кино', 'wedding_cinema')],
  [Keyboard.button.callback('🎭 Кинопортреты', 'cinemaportraits')],
  [Keyboard.button.callback('◈ AI для брендов', 'ai_brands')]
]);

  return ctx.reply(
    'Выберите направление портфолио:',
    { attachments: [portfolioMenu] }
  );
});
bot.action('wedding_cinema', (ctx) => {
  const weddingMenu = Keyboard.inlineKeyboard([
    [Keyboard.button.link('🎬 Смотреть тизер', 'https://max.ru/channel_igra_tenei/AaBfeqZWAKw')],
    [Keyboard.button.callback('← Назад в портфолио', 'portfolio')]
  ]);

  return ctx.reply(
    'СВАДЬБА КАК КИНО\n\n' +
    'Персональная история вашей пары, превращённая в собственное кино.\n\n' +
    'От приглашения и тизера до Love Story, которая становится частью свадебного дня.',
    { attachments: [weddingMenu] }
  );
});

bot.action('cinemaportraits', (ctx) => {
  const cinemaportraitsMenu = Keyboard.inlineKeyboard([
    [Keyboard.button.link('🎬 Смотреть кинопортрет', 'https://max.ru/channel_igra_tenei/AaD_AYoubXU')],
    [Keyboard.button.callback('← Назад в портфолио', 'portfolio')]
  ]);

  return ctx.reply(
    'КИНОПОРТРЕТЫ\n\n' +
    'Персональная визуальная история, в которой человек становится героем собственного кино.\n\n' +
    'Образ, пространство, свет, движение и музыка объединяются в одну атмосферу.',
    { attachments: [cinemaportraitsMenu] }
  );
});bot.action('ai_brands', (ctx) => {
  const aiBrandsMenu = Keyboard.inlineKeyboard([
    [Keyboard.button.link('🎬 Смотреть работы', 'https://max.ru/channel_igra_tenei/AaEJSNznRGA')],
    [Keyboard.button.callback('← Назад в портфолио', 'portfolio')]
  ]);

  return ctx.reply(
    'AI ДЛЯ БРЕНДОВ\n\n' +
    'Рекламные визуальные истории для брендов и компаний.\n\n' +
    'Продукт, образ, пространство, свет и движение объединяются в единый рекламный мир.',
    { attachments: [aiBrandsMenu] }
  );
});

const contactMenu = Keyboard.inlineKeyboard([
  [Keyboard.button.callback('🎬 Свадьба как кино', 'contact_wedding')],
  [Keyboard.button.callback('🎭 Кинопортреты', 'contact_portraits')],
  [Keyboard.button.callback('◈ AI для брендов', 'contact_brands')]
]);

function showContact(ctx) {
  return ctx.reply(
    'ОБСУДИТЬ ПРОЕКТ\n\n' +
    'Выберите направление:',
    { attachments: [contactMenu] }
  );
}

// Кнопка «Обсудить проект» в главном меню
bot.action('contact', showContact);
bot.action('contact_wedding', (ctx) => {
  const weddingContactMenu = Keyboard.inlineKeyboard([
    [Keyboard.button.link('📖 Подробнее о проекте', 'https://vk.ru/@igra_tenei_ai-svadba-kak-kino')],
    [Keyboard.button.callback('← Назад', 'contact')]
  ]);

  return ctx.reply(
    'СВАДЬБА КАК КИНО\n\n' +
    'Персональная свадебная история, созданная как настоящее кино.\n\n' +
    'Можем обсудить вашу идею прямо здесь, в чате MAX.',
    { attachments: [weddingContactMenu] }
  );
});

bot.action('contact_portraits', (ctx) => {
  const portraitsContactMenu = Keyboard.inlineKeyboard([
    [Keyboard.button.link('📖 Подробнее о проекте', 'https://vk.ru/@igra_tenei_ai-inogda-odnoi-fotografii-nedostatochno')],
    [Keyboard.button.callback('← Назад', 'contact')]
  ]);

  return ctx.reply(
    'КИНОПОРТРЕТЫ\n\n' +
    'Персональная визуальная история, в которой вы становитесь героем собственного кино.\n\n' +
    'Можем обсудить ваш образ и идею прямо здесь, в чате MAX.',
    { attachments: [portraitsContactMenu] }
  );
});

bot.action('contact_brands', (ctx) => {
  const brandsContactMenu = Keyboard.inlineKeyboard([
    [Keyboard.button.callback('← Назад', 'contact')]
  ]);

  return ctx.reply(
    'AI ДЛЯ БРЕНДОВ\n\n' +
    'Рекламные ролики и визуальные истории для брендов, компаний и продуктов.\n\n' +
    'Расскажите немного о задаче — что нужно показать, какой формат и длительность ролика. Можем обсудить проект прямо здесь, в чате MAX.',
    { attachments: [brandsContactMenu] }
  );
});
const weddingPricesMenu = Keyboard.inlineKeyboard([
  [Keyboard.button.callback('🎬 Премьера — 50 000 ₽', 'price_premiere')],
  [Keyboard.button.callback('🎞 История — 100 000–130 000 ₽', 'price_story')],
  [Keyboard.button.callback('🎬 Режиссёрская версия — 150 000–200 000 ₽', 'price_director')]
]);

const pricesMenu = Keyboard.inlineKeyboard([
  [Keyboard.button.callback('🎬 Свадьба как кино', 'prices_wedding')],
  [Keyboard.button.callback('🎭 Кинопортреты — 7 900 ₽', 'prices_portraits')],
  [Keyboard.button.callback('◈ AI для брендов — 500 ₽ / сек', 'prices_brands')]
]);

function showPrices(ctx) {
  return ctx.reply(
    'УСЛУГИ И ЦЕНЫ\n\n' +
    'Выберите направление:',
    { attachments: [pricesMenu] }
  );
}
bot.action('prices_wedding', (ctx) => {
  return ctx.reply(
    'СВАДЬБА КАК КИНО\n\n' +
    'Выберите формат проекта:',
    { attachments: [weddingPricesMenu] }
  );
});
bot.action('prices_portraits', (ctx) => {
  const backMenu = Keyboard.inlineKeyboard([
    [Keyboard.button.callback('← Назад к услугам', 'prices')]
  ]);

  return ctx.reply(
    'КИНОПОРТРЕТЫ — 7 900 ₽\n\n' +
    'В результате вы получаете:\n' +
    '• 10–12 готовых фотографий\n' +
    '• ролик-кинопортрет',
    { attachments: [backMenu] }
  );
});
bot.action('prices_brands', (ctx) => {
  const backMenu = Keyboard.inlineKeyboard([
    [Keyboard.button.callback('← Назад к услугам', 'prices')]
  ]);

  return ctx.reply(
    'AI ДЛЯ БРЕНДОВ\n\n' +
    'Рекламные ролики и визуальные истории для брендов и компаний.\n\n' +
    'Стоимость — 500 ₽ за 1 секунду готового видео.',
    { attachments: [backMenu] }
  );
});

// Кнопка «Услуги и цены» в главном меню
bot.action('prices', showPrices);

// Переход по кнопке «Цены» из поста в канале
bot.on('bot_started', (ctx) => {
  const payload = ctx.startPayload ?? ctx.update?.payload;

  if (payload === 'prices') {
    return showPrices(ctx);
  }

  if (payload === 'contact') {
    return showContact(ctx);
  }

  return ctx.reply(
    'Добро пожаловать в «ИГРУ ТЕНЕЙ».\n\n' +
    'Здесь можно посмотреть наши работы, выбрать направление и обсудить свой проект.',
    { attachments: [menu] }
  );
});

bot.action('price_premiere', (ctx) => {
  const backMenu = Keyboard.inlineKeyboard([
    [Keyboard.button.callback('← Назад к пакетам', 'prices_wedding')]
  ]);

  return ctx.reply(
    'ПРЕМЬЕРА — 50 000 ₽\n\n' +
    '• Персональное свадебное приглашение\n' +
    '• Короткий Reels для социальных сетей',
    { attachments: [backMenu] }
  );
});

bot.action('price_story', (ctx) => {
  const backMenu = Keyboard.inlineKeyboard([
    [Keyboard.button.callback('← Назад к пакетам','prices_wedding')]
  ]);

  return ctx.reply(
    'ИСТОРИЯ — 100 000–130 000 ₽\n\n' +
    '• Персональное свадебное приглашение\n' +
    '• Тизер\n' +
    '• Love Story\n' +
    '• Reels\n' +
    '• Визуальные материалы для свадебного дня',
    { attachments: [backMenu] }
  );
});

bot.action('price_director', (ctx) => {
  const backMenu = Keyboard.inlineKeyboard([
    [Keyboard.button.callback('← Назад к пакетам', 'prices_wedding')]
  ]);

  return ctx.reply(
    'РЕЖИССЁРСКАЯ ВЕРСИЯ — 150 000–200 000 ₽\n\n' +
    '• Расширенный персональный фильм\n' +
    '• Несколько глав одной истории\n' +
    '• Индивидуальные постеры\n' +
    '• Эксклюзивные локации и визуальные миры\n' +
    '• Материалы для свадебного дня и социальных сетей\n' +
    '• Полное сопровождение проекта',
    { attachments: [backMenu] }
  );
});
bot.hears('weddinginvite', async (ctx) => {
  try {
    const fs = require('fs');

    const uploadData = JSON.parse(
      fs.readFileSync('./upload.json', 'utf8')
    );

    const videoToken = uploadData.token;

    await ctx.api.raw.post('messages', {
      query: {
        chat_id: -72360821202197
      },
      body: {
        text:
          'СВАДЬБА КАК КИНО\n\n' +
          'Персональное приглашение, созданное как часть вашей собственной свадебной истории.',
        attachments: [
          {
            type: 'video',
            payload: {
              token: videoToken
            }
          },
          {
            type: 'inline_keyboard',
            payload: {
              buttons: [
                [
                  {
                    type: 'link',
                   text: '🎬 Смотреть портфолио',
                   url: 'https://vk.ru/igra_tenei_ai'
                  }
                ],
                [
                  {
                    type: 'link',
                    text: '💎 Цены',
                    url: 'https://max.ru/se14171993_bot?start=prices'
                  }
                ],
                [
                  {
                    type: 'link',
                    text: '💬 Обсудить проект',
                    url: 'https://max.ru/se14171993_bot?start=contact'
                  }
                ]
              ]
            }
          }
        ]
      }
    });

    return ctx.reply('Видео-приглашение опубликовано в канале.');
  } catch (error) {
    console.error('Ошибка публикации:', error);
    return ctx.reply('Не удалось опубликовать видео.');
  }
});
bot.hears('portraitpost', async (ctx) => {
  try {
    const fs = require('fs');

    const uploadData = JSON.parse(
      fs.readFileSync('./portrait-upload.json', 'utf8')
    );

    const videoToken = uploadData.token;

    await ctx.api.raw.post('messages', {
      query: {
        chat_id: -72360821202197
      },
      body: {
        text:
          'КИНОПОРТРЕТЫ\n\n' +
          '«Пока город живёт»\n\n' +
          'Персональная визуальная история, в которой человек становится героем собственного кино.',
        attachments: [
          {
            type: 'video',
            payload: {
              token: videoToken
            }
          },
          {
            type: 'inline_keyboard',
            payload: {
              buttons: [
                [
                  {
                    type: 'link',
                    text: '🎬 Смотреть портфолио',
                    url: 'https://vk.ru/igra_tenei_ai'
                  }
                ],
                [
                  {
                    type: 'link',
                    text: '💎 Цены',
                    url: 'https://max.ru/se14171993_bot?start=prices'
                  }
                ],
                [
                  {
                    type: 'link',
                    text: '💬 Обсудить проект',
                    url: 'https://max.ru/se14171993_bot?start=contact'
                  }
                ]
              ]
            }
          }
        ]
      }
    });

    return ctx.reply('Кинопортрет «Пока город живёт» опубликован в канале.');
  } catch (error) {
    console.error('Ошибка публикации кинопортрета:', error);
    return ctx.reply('Не удалось опубликовать кинопортрет.');
  }
});

bot.hears('brandpost', async (ctx) => {
  try {
    const fs = require('fs');

    const uploadData = JSON.parse(
      fs.readFileSync('./brand-upload.json', 'utf8')
    );

    const videoToken = uploadData.token;

    await ctx.api.raw.post('messages', {
      query: {
        chat_id: -72360821202197
      },
      body: {
        text:
          'AI ДЛЯ БРЕНДОВ\n\n' +
          'Рекламная визуальная история для fashion-бренда.\n\n' +
          'Продукт, образ, пространство и движение объединяются в единый визуальный мир.',
        attachments: [
          {
            type: 'video',
            payload: {
              token: videoToken
            }
          },
          {
            type: 'inline_keyboard',
            payload: {
              buttons: [
                [
                  {
                    type: 'link',
                    text: '🎬 Смотреть портфолио',
                    url: 'https://vk.ru/igra_tenei_ai'
                  }
                ],
                [
                  {
                    type: 'link',
                    text: '💎 Цены',
                    url: 'https://max.ru/se14171993_bot?start=prices'
                  }
                ],
                [
                  {
                    type: 'link',
                    text: '💬 Обсудить проект',
                    url: 'https://max.ru/se14171993_bot?start=contact'
                  }
                ]
              ]
            }
          }
        ]
      }
    });

    return ctx.reply('Пост AI для брендов опубликован в канале.');
  } catch (error) {
    console.error('Ошибка публикации AI для брендов:', error);
    return ctx.reply('Не удалось опубликовать пост AI для брендов.');
  }
});
bot.start();