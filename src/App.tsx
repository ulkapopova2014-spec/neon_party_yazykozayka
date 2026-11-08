import { useEffect, useState, type ReactNode } from "react"

const glowPhoto = "/glow-party.jpg"
const friendsPhoto = "/kids-workshop.jpg"
const lightsPhoto = "/fairy-lights.jpg"

type IconName = "arrow" | "heart" | "menu" | "moon" | "shield" | "spark" | "star" | "users" | "x"

function Icon({ name, size = 24 }: { name: IconName size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    heart: (
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5a5.5 5.5 0 0 0 1-8.9Z" />
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    moon: <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />,
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />,
    spark: (
      <>
        <path d="m12 3 1.2 4.8L18 9l-4.8 1.2L12 15l-1.2-4.8L6 9l4.8-1.2L12 3Z" />
        <path d="m19 15 .6 2.4L22 18l-2.4.6L19 21l-.6-2.4L16 18l2.4-.6L19 15Z" />
      </>
    ),
    star: (
      <path d="m12 2 3 6 7 .9-5 4.8 1.3 6.8L12 17l-6.3 3.5L7 13.7 2 9l7-.9L12 2Z" />
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
      </>
    ),
    x: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      >
        {paths[name]}
      </g>
    </svg>
  )
}

function ButtonLink({
  children,
  className = "",
  href = "#registration",
}: {
  children: ReactNode
  className?: string
  href?: string
}) {
  return (
    <a className={`button-link ${className}`} href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={20} />
    </a>
  )
}

const activities = [
  {
    image: "/neon-party-poster.png",
    number: "01",
    title: "Гринч в гостях",
    text: "Встречаем огромного зелёного Гринча: фотографируемся, играем и участвуем в его проказах.",
  },
  {
    image: lightsPhoto,
    number: "02",
    title: "Языки и крафт",
    text: "Зелёный английский с Екатериной, китайский с Алисой и предновогодняя творческая мастерская.",
  },
  {
    image: glowPhoto,
    number: "03",
    title: "Неоновая вечеринка",
    text: "Главное событие вечера: неоновые огни, светящиеся аксессуары, музыка и танцы.",
  },
  {
    image: friendsPhoto,
    number: "04",
    title: "Кино и ночёвка",
    text: "Мультфильм про Гринча с попкорном, командные игры, вечерняя свечка, разговоры и завтрак утром.",
  },
]

const faqs = [
  [
    "Что нужно взять с собой?",
    "Пижаму, сменную одежду, зубную щётку и любимую небольшую вещь для сна. Полный чек-лист отправим родителям после регистрации.",
  ],
  [
    "Можно ли прийти без друга?",
    "Конечно. В начале вечера мы проводим мягкое знакомство и командные игры, чтобы каждый быстро почувствовал себя своим.",
  ],
  [
    "Будет ли возможность поспать?",
    "Да. В программе есть спокойный вечерний блок и отдельное время для сна в подготовленной зоне отдыха.",
  ],
  [
    "Как организовано питание?",
    "В стоимость входит полноценное питание: зелёный полдник, приёмы пищи в течение выезда и завтрак в воскресенье. Аллергии и ограничения уточняем заранее.",
  ],
  [
    "Кто будет находиться с детьми?",
    "С детьми едут руководители «ЯзыкоЗайки» Алиса и Екатерина. Они организуют программу и находятся рядом с ребятами на протяжении всего выезда.",
  ],
  [
    "Можно ли забрать ребёнка раньше?",
    "Да. Родители остаются на связи с координатором и могут забрать ребёнка в согласованное время.",
  ],
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = dialogOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [dialogOpen])

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="ЯзыкоЗайка — на главную">
          <span className="logo-image" aria-hidden="true" />
        </a>
        <nav className="desktop-nav" aria-label="Основная навигация">
          <a href="#program">Программа</a>
          <a href="#parents">Для родителей</a>
          <a href="#details">Детали</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="top-cta" href="#registration">
          Забронировать
        </a>
        <button
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          <Icon name={menuOpen ? "x" : "menu"} />
        </button>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Мобильная навигация">
            {[
              ["#program", "Программа"],
              ["#parents", "Для родителей"],
              ["#details", "Детали"],
              ["#faq", "Частые вопросы"],
              ["#registration", "Забронировать место"],
            ].map(([href, label]) => (
              <a href={href} key={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <section className="hero" id="top">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-copy">
          <p className="eyebrow lime">
            <span /> 28–29 ноября · парк-отель «Чайка»
          </p>
          <h1>
            Неоновое пати
            <br />
            <em>у Гринча!</em>
          </h1>
          <p className="hero-lead">
            Настоящая Green Party: всё зелёное, немного хулиганское и с большой
            порцией гринчевских проказ. Почти целые сутки приключений вместе с
            «ЯзыкоЗайкой».
          </p>
          <div className="hero-actions">
            <ButtonLink>Хочу на ночёвку</ButtonLink>
            <a className="text-link" href="#program">
              Смотреть программу <span>↓</span>
            </a>
          </div>
          <div className="hero-notes">
            <span>
              <Icon name="moon" size={18} /> 28 ноября · 12:00
            </span>
            <span>
              <Icon name="spark" size={18} /> 29 ноября · 11:00
            </span>
            <span>
              <Icon name="users" size={18} /> 7–14 лет
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="poster-frame">
            <img
              src="/neon-party-poster.png"
              alt="Неоновое пати у Гринча — ночёвка от ЯзыкоЗайки 28–29 ноября"
            />
            <span className="poster-sticker">
              Green
              <br />
              Party!
            </span>
          </div>
        </div>
      </section>

      <section className="hook">
        <div className="section-heading light">
          <p className="eyebrow pink">
            <span /> Одна ночь — целая история
          </p>
          <h2>
            А что, если выходные станут <em>приключением?</em>
          </h2>
        </div>
        <div className="hook-grid">
          {[
            [
              "Настоящий Гринч",
              "Ростовая кукла, фотографии, игры и зелёные проказы.",
              "spark",
            ],
            [
              "Новые друзья",
              "Тёплое знакомство и командные приключения.",
              "users",
            ],
            [
              "Два языка",
              "Живые занятия английским и китайским без скучных парт.",
              "star",
            ],
            [
              "Ночь не как дома",
              "Неоновая вечеринка, кино, свечка и уютная ночёвка.",
              "moon",
            ],
          ].map(([title, text, icon]) => (
            <article className="mini-card" key={title}>
              <span className="icon-box">
                <Icon name={icon as IconName} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="program" id="program">
        <div className="section-heading">
          <p className="eyebrow violet">
            <span /> Программа ночи
          </p>
          <h2>
            Скучать <em>точно</em>
            <br />
            не придётся
          </h2>
          <p>
            Гринч решил испортить ночёвку, но мы так просто не сдадимся: впереди
            языки, творчество, кино, командные игры и главное событие — Green
            Party.
          </p>
        </div>
        <div className="activities">
          {activities.map((activity) => (
            <article className="activity-card" key={activity.number}>
              <img src={activity.image} alt="" />
              <div className="activity-number">{activity.number}</div>
              <div className="activity-copy">
                <h3>{activity.title}</h3>
                <p>{activity.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="parents" id="parents">
        <div className="parents-photo">
          <img
            src={friendsPhoto}
            alt="Дети вместе выполняют творческое командное задание"
          />
          <div className="photo-badge">
            <Icon name="heart" /> Можно прийти
            <br />
            без друга
          </div>
        </div>
        <div className="parents-copy">
          <p className="eyebrow lime">
            <span /> Родителям — спокойно
          </p>
          <h2>
            Дети отдыхают.
            <br />
            <em>Мы всё продумали.</em>
          </h2>
          <p className="parents-lead">
            Это полноценный выезд в лагерном формате. С детьми едут руководители
            «ЯзыкоЗайки» Алиса и Екатерина: они организуют программу и находятся
            рядом с ребятами весь выезд.
          </p>
          <div className="care-list">
            {[
              [
                "Алиса и Екатерина рядом",
                "Руководители школы сопровождают детей с момента заезда и до встречи с родителями.",
              ],
              [
                "Проживание и питание",
                "Дети живут в парк-отеле, получают полноценное питание и завтракают перед выездом.",
              ],
              [
                "Связь с родителями",
                "Координатор остаётся на связи, а важные особенности уточняем заранее.",
              ],
            ].map(([title, text], index) => (
              <div className="care-item" key={title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="benefits-title">
          <p className="eyebrow pink">
            <span /> Весело и с пользой
          </p>
          <h2>
            После этой ночи
            <br />
            ребёнок станет
            <br />
            <em>немного смелее</em>
          </h2>
        </div>
        <div className="benefit-cloud">
          {[
            "Новые знакомства",
            "Самостоятельность",
            "Живой английский",
            "Уверенность в себе",
            "Командная работа",
            "Яркие воспоминания",
          ].map((item, index) => (
            <span className={`benefit-pill pill-${index + 1}`} key={item}>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="details" id="details">
        <div className="details-intro">
          <p className="eyebrow lime">
            <span /> Всё по полочкам
          </p>
          <h2>
            Что нужно знать
            <br />
            <em>до регистрации</em>
          </h2>
          <p>
            Поехать могут все желающие, не только ученики школы. Ехать с другом
            необязательно: командные игры помогают быстро познакомиться и найти
            компанию.
          </p>
        </div>
        <div className="details-data">
          <dl className="facts">
            <div>
              <dt>Дата</dt>
              <dd>
                28–29 ноября <small>суббота и воскресенье</small>
              </dd>
            </div>
            <div>
              <dt>Время</dt>
              <dd>
                12:00–11:00 <small>заезд 28 ноября, выезд 29 ноября</small>
              </dd>
            </div>
            <div>
              <dt>Место</dt>
              <dd>
                Парк-отель «Чайка» <small>Пионерская Долина, 4</small>
              </dd>
            </div>
            <div>
              <dt>Возраст</dt>
              <dd>
                7–14 лет <small>можно не быть учеником школы</small>
              </dd>
            </div>
            <div>
              <dt>Стоимость</dt>
              <dd>
                3 900 ₽ <small>за весь выезд</small>
              </dd>
            </div>
            <div>
              <dt>Связь</dt>
              <dd>
                <a href="tel:+79646005777">+7 (964) 600-57-77</a>
                <small>запись и любые вопросы</small>
              </dd>
            </div>
          </dl>
          <div className="included">
            <h3>В стоимость входят</h3>
            <ul>
              <li>проживание в парк-отеле;</li>
              <li>полноценное питание;</li>
              <li>английский и китайский языки;</li>
              <li>вся развлекательная программа;</li>
              <li>сопровождение руководителей школы.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="faq" id="faq">
        <div className="section-heading">
          <p className="eyebrow violet">
            <span /> FAQ
          </p>
          <h2>
            Вы спрашивали —<br />
            <em>мы отвечаем</em>
          </h2>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <details key={question}>
              <summary>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {question}
                <b>+</b>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="registration" id="registration">
        <div className="reg-stars" aria-hidden="true">
          <Icon name="spark" size={34} />
          <Icon name="spark" size={20} />
        </div>
        <p className="eyebrow lime">
          <span /> Самая зелёная ночёвка осени
        </p>
        <h2>
          Гринч уже строит планы.
          <br />
          <em>А вы с нами?</em>
        </h2>
        <p>
          Ночёвка открыта для всех ребят 7–14 лет. Позвоните администратору —
          ответим на вопросы и запишем ребёнка.
        </p>
        <button
          className="button-link reg-button"
          type="button"
          onClick={() => setDialogOpen(true)}
        >
          <span>Записаться на ночёвку</span>
          <Icon name="arrow" size={20} />
        </button>
        <small>28–29 ноября · 3 900 ₽ · парк-отель «Чайка»</small>
      </section>

      <footer>
        <a
          className="brand footer-brand"
          href="#top"
          aria-label="ЯзыкоЗайка — на главную"
        >
          <span className="logo-image" aria-hidden="true" />
        </a>
        <p>Языковая школа, где учиться интересно</p>
        <a href="#top">Наверх ↑</a>
      </footer>

      {dialogOpen && (
        <div
          className="dialog-backdrop"
          role="presentation"
          onMouseDown={() => setDialogOpen(false)}
        >
          <section
            className="dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="dialog-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="dialog-close"
              aria-label="Закрыть"
              onClick={() => setDialogOpen(false)}
              type="button"
            >
              <Icon name="x" />
            </button>
            <span className="dialog-icon">
              <Icon name="spark" size={32} />
            </span>
            <h2 id="dialog-title">Запись уже открыта</h2>
            <p>
              Позвоните администратору «ЯзыкоЗайки» по номеру{" "}
              <strong>+7 (964) 600-57-77</strong>. Ответим на вопросы и
              забронируем место.
            </p>
            <a className="button-link dialog-button" href="tel:+79646005777">
              <span>Позвонить</span>
              <Icon name="arrow" size={20} />
            </a>
          </section>
        </div>
      )}
    </main>
  )
}
