import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface FAQ {
  question: string
  answer: string
}

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [showAuth, setShowAuth] = useState(false)
  const [authTab, setAuthTab] = useState<"login" | "register">("register")
  const [newsletter, setNewsletter] = useState("")
  const [newsletterSent, setNewsletterSent] = useState(false)
  const [formSent, setFormSent] = useState(false)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const openLogin = () => { setAuthTab("login"); setShowAuth(true) }
  const openRegister = () => { setAuthTab("register"); setShowAuth(true) }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newsletter.trim()) setNewsletterSent(true)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSent(true)
  }

  const navLinks = [
    { label: "Отдых", anchor: "features" },
    { label: "Активности", anchor: "journey" },
    { label: "Размещение", anchor: "journey" },
    { label: "Вопросы", anchor: "faq" },
    { label: "Контакты", anchor: "contact" },
  ]

  const faqs: FAQ[] = [
    {
      question: "Что можно делать на базе отдыха?",
      answer:
        "На базе РекаКама вас ждут рыбалка на Каме, сплавы на байдарках и катамаранах, баня, мангальные зоны, пешие прогулки по лесу и отдых у костра. Летом — купание и водные развлечения, зимой — подлёдная рыбалка и лыжные прогулки.",
    },
    {
      question: "Что входит в стоимость проживания?",
      answer:
        "В стоимость включены проживание в уютных домиках или глэмпинге, доступ к береговой зоне, мангальная площадка, парковка и Wi-Fi. Рыболовное снаряжение, катамараны и баня доступны за дополнительную плату или в рамках пакетных предложений.",
    },
    {
      question: "Подходит ли база для семей с детьми?",
      answer:
        "Конечно! База РекаКама отлично подходит для семейного отдыха. Здесь есть безопасный берег для купания, детская площадка и множество активностей для детей. Рыбалка особенно нравится детям — незабываемые впечатления для всей семьи.",
    },
    {
      question: "Как забронировать отдых?",
      answer:
        "Оставьте заявку через форму на сайте или напишите нам напрямую. Мы уточним даты, количество гостей и предпочтения. Бронирование подтверждается предоплатой 30% — это гарантирует ваше место на выбранные даты.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1920&q=90)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/85" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
          >
            <Icon name="Waves" size={20} />
            <span className="font-medium">РекаКама</span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.anchor)}
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={openLogin}
              className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
            >
              Войти
            </button>
            <Button onClick={() => scrollTo("contact")} className="bg-white text-black hover:bg-white/90 rounded-full px-6">
              Забронировать
            </Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div id="hero" className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium">База отдыха на берегу реки Камы</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">Отдых у живой воды.</h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            Уютная база отдыха РекаКама на берегу Камы — рыбалка, сплавы, баня и тишина леса. Идеальное место для тех, кто хочет вырваться из города и перезарядиться.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button
              size="lg"
              onClick={() => scrollTo("contact")}
              className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 text-lg"
            >
              Забронировать отдых
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("journey")}
              className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
            >
              Смотреть программу
            </Button>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="ShieldCheck" size={16} />
            <span className="text-sm font-medium">Безопасный семейный отдых</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                icon: "Fish",
                title: "Рыбалка на Каме",
                desc: "Богатые рыбные места прямо у базы. Снасти в аренду.",
                img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
              },
              {
                icon: "ShieldCheck",
                title: "Безопасность",
                desc: "Оборудованный берег, спасательные средства, опытный персонал.",
                img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
              },
              {
                icon: "Wallet",
                title: "Всё включено",
                desc: "Домики, мангал, парковка и берег — в одной цене.",
                img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=600&q=80",
              },
              {
                icon: "TreePine",
                title: "Живая природа",
                desc: "Сосновый бор, чистый воздух и звёздное небо над рекой.",
                img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl overflow-hidden ring-1 ring-white/15 bg-black/20 backdrop-blur group cursor-pointer"
                onClick={() => scrollTo("contact")}
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-black/30 ring-1 ring-white/20 mb-4">
                    <Icon name={card.icon} size={20} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Ваш отдых на РекаКама</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                От заезда до прощального костра — вот как выглядит идеальный отдых на Каме.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  num: "01.",
                  title: "Заезд и размещение",
                  desc: "Заселяетесь в уютный домик прямо на берегу Камы. Свежий воздух, вид на воду — никаких городских забот.",
                  img: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?w=600&q=80",
                },
                {
                  num: "02.",
                  title: "Утренняя рыбалка",
                  desc: "Туман над рекой, поплавок на воде. Кама щедра на щуку, судака и леща — берём снасти и на берег!",
                  img: "https://images.unsplash.com/photo-1490682143684-14369e18dce8?w=600&q=80",
                },
                {
                  num: "03.",
                  title: "Активный день",
                  desc: "Сплав на байдарке, купание, прогулки по лесным тропам или шезлонг с книгой — выбирайте свой темп.",
                  img: "https://images.unsplash.com/photo-1472745942893-4b9f730c7668?w=600&q=80",
                },
                {
                  num: "04.",
                  title: "Вечер у костра",
                  desc: "Мангал, уха из свежевыловленной рыбы, звёздное небо над Камой. Такие вечера запоминаются навсегда.",
                  img: "https://images.unsplash.com/photo-1475483768296-6163e08872a1?w=600&q=80",
                },
              ].map((phase) => (
                <div key={phase.num} className="rounded-2xl bg-white/5 ring-1 ring-white/10 overflow-hidden flex flex-col">
                  <div className="h-40 overflow-hidden">
                    <img
                      src={phase.img}
                      alt={phase.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <div className="text-2xl font-bold text-white/40 mb-3">{phase.num}</div>
                    <h3 className="text-lg font-semibold mb-3">{phase.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                onClick={() => scrollTo("contact")}
                className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-4 text-lg font-semibold"
              >
                Проверить свободные даты
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="relative z-10 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",
              "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?w=600&q=80",
              "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80",
              "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=600&q=80",
            ].map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-square ring-1 ring-white/10">
                <img src={src} alt="Природа Камы" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Частые вопросы
                </h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty mb-8">
                  Всё, что нужно знать перед поездкой на базу РекаКама: от активностей до условий бронирования.
                </p>
                <Button
                  onClick={() => scrollTo("contact")}
                  className="bg-white text-black hover:bg-white/90 rounded-full px-8"
                >
                  Остались вопросы? Напишите нам
                </Button>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      <Icon name={openFaq === index ? "Minus" : "Plus"} size={20} />
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur overflow-hidden">
            {/* Top banner image */}
            <div className="h-56 relative">
              <img
                src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1400&q=80"
                alt="Кама"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70 flex items-end p-10">
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-balance">Забронируйте отдых</h2>
              </div>
            </div>

            <div className="p-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Form */}
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                {formSent ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="CheckCircle" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Заявка отправлена!</h3>
                    <p className="text-gray-600">Мы свяжемся с вами в течение часа для подтверждения бронирования.</p>
                    <button
                      onClick={() => setFormSent(false)}
                      className="mt-6 text-sm text-gray-400 hover:text-gray-600 underline"
                    >
                      Отправить ещё одну заявку
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
                    <form onSubmit={handleFormSubmit} className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium mb-2">Имя</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                          placeholder="Ваше имя"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Телефон</label>
                        <input
                          type="tel"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                          placeholder="+7 (___) ___-__-__"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Пожелания</label>
                        <textarea
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                          placeholder="Даты, количество гостей, особые пожелания..."
                        />
                      </div>
                      <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-3 text-base">
                        Отправить заявку
                      </Button>
                    </form>
                  </>
                )}
              </div>

              {/* Info */}
              <div className="space-y-8">
                <p className="text-xl text-white/90 leading-relaxed text-pretty">
                  Готовы ответить на все вопросы и подобрать лучшие даты для вашего отдыха. Отвечаем быстро!
                </p>

                <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-teal-500 flex items-center justify-center text-white text-xl font-bold">
                      К
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Команда РекаКама</h4>
                      <p className="text-gray-500 text-sm">Менеджер по бронированию</p>
                    </div>
                  </div>
                  <a
                    href="mailto:info@rekakama.ru"
                    className="flex items-center justify-center gap-2 w-full bg-black text-white hover:bg-gray-800 transition-colors rounded-lg py-3 font-medium"
                  >
                    <Icon name="Mail" size={16} />
                    Написать нам
                  </a>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: "Fish", text: "Рыбалка круглый год" },
                    { icon: "Waves", text: "Прямой выход к реке Каме" },
                    { icon: "Users", text: "Отдых для семей и компаний" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3 text-white/80">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 ring-1 ring-white/20 flex items-center justify-center">
                        <Icon name={item.icon} size={16} />
                      </div>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              <div className="lg:col-span-2">
                <button onClick={() => scrollTo("hero")} className="flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity">
                  <Icon name="Waves" size={24} />
                  <span className="text-xl font-semibold">РекаКама</span>
                </button>
                <p className="text-white/80 leading-relaxed text-pretty">
                  База отдыха на берегу реки Камы — место, где природа встречается с уютом. Рыбалка, сплавы, баня и живой воздух сосновых лесов.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ОТДЫХ</h3>
                <ul className="space-y-3">
                  {[
                    { label: "Размещение", anchor: "journey" },
                    { label: "Рыбалка", anchor: "features" },
                    { label: "Активности", anchor: "journey" },
                    { label: "Фотогалерея", anchor: "journey" },
                  ].map((item) => (
                    <li key={item.label}>
                      <button onClick={() => scrollTo(item.anchor)} className="text-white/70 hover:text-white transition-colors text-sm">
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">О БАЗЕ</h3>
                <ul className="space-y-3">
                  {[
                    { label: "О нас", anchor: "features" },
                    { label: "Инфраструктура", anchor: "journey" },
                    { label: "Как добраться", anchor: "contact" },
                    { label: "Отзывы", anchor: "faq" },
                  ].map((item) => (
                    <li key={item.label}>
                      <button onClick={() => scrollTo(item.anchor)} className="text-white/70 hover:text-white transition-colors text-sm">
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ПОДДЕРЖКА</h3>
                <ul className="space-y-3">
                  {[
                    { label: "Контакты", anchor: "contact" },
                    { label: "Бронирование", anchor: "contact" },
                    { label: "Вопросы и ответы", anchor: "faq" },
                    { label: "Правила", anchor: "faq" },
                  ].map((item) => (
                    <li key={item.label}>
                      <button onClick={() => scrollTo(item.anchor)} className="text-white/70 hover:text-white transition-colors text-sm">
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div className="border-t border-white/10 pt-12 mb-12">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4">Новости и акции базы</h3>
                {newsletterSent ? (
                  <p className="text-white/60 text-sm">Вы подписаны! Будем присылать лучшие предложения.</p>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
                    <input
                      type="email"
                      required
                      value={newsletter}
                      onChange={(e) => setNewsletter(e.target.value)}
                      placeholder="Введите ваш email"
                      className="flex-1 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/20 border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                    />
                    <Button type="submit" className="bg-white text-black hover:bg-white/90 rounded-lg px-6 h-[50px]">
                      Подписаться
                    </Button>
                  </form>
                )}
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <p className="text-white/60 text-sm text-center">© 2026 РекаКама — База отдыха на реке Кама</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      {showAuth && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowAuth(false)} />
          <div className="relative w-full max-w-md bg-[#0f1419] ring-1 ring-white/20 rounded-3xl p-8 shadow-2xl">
            <button
              onClick={() => setShowAuth(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Icon name="X" size={16} />
            </button>

            <div className="flex items-center gap-2 mb-8">
              <Icon name="Waves" size={20} />
              <span className="font-semibold text-lg">РекаКама</span>
            </div>

            <div className="flex gap-1 bg-white/5 rounded-xl p-1 mb-8">
              <button
                onClick={() => setAuthTab("login")}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${authTab === "login" ? "bg-white text-black" : "text-white/60 hover:text-white"}`}
              >
                Войти
              </button>
              <button
                onClick={() => setAuthTab("register")}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${authTab === "register" ? "bg-white text-black" : "text-white/60 hover:text-white"}`}
              >
                Зарегистрироваться
              </button>
            </div>

            {authTab === "register" ? (
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowAuth(false) }}>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Имя</label>
                  <input type="text" required placeholder="Ваше имя" className="w-full px-4 py-3 rounded-xl bg-white/5 ring-1 ring-white/20 text-white placeholder:text-white/40 focus:ring-2 focus:ring-white/40 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Телефон</label>
                  <input type="tel" placeholder="+7 (___) ___-__-__" className="w-full px-4 py-3 rounded-xl bg-white/5 ring-1 ring-white/20 text-white placeholder:text-white/40 focus:ring-2 focus:ring-white/40 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Email</label>
                  <input type="email" required placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl bg-white/5 ring-1 ring-white/20 text-white placeholder:text-white/40 focus:ring-2 focus:ring-white/40 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Пароль</label>
                  <input type="password" required placeholder="Придумайте пароль" className="w-full px-4 py-3 rounded-xl bg-white/5 ring-1 ring-white/20 text-white placeholder:text-white/40 focus:ring-2 focus:ring-white/40 focus:outline-none" />
                </div>
                <Button type="submit" className="w-full bg-white text-black hover:bg-white/90 rounded-xl py-3 text-base mt-2">
                  Создать аккаунт
                </Button>
              </form>
            ) : (
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowAuth(false) }}>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Email</label>
                  <input type="email" required placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl bg-white/5 ring-1 ring-white/20 text-white placeholder:text-white/40 focus:ring-2 focus:ring-white/40 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Пароль</label>
                  <input type="password" required placeholder="Ваш пароль" className="w-full px-4 py-3 rounded-xl bg-white/5 ring-1 ring-white/20 text-white placeholder:text-white/40 focus:ring-2 focus:ring-white/40 focus:outline-none" />
                </div>
                <Button type="submit" className="w-full bg-white text-black hover:bg-white/90 rounded-xl py-3 text-base mt-2">
                  Войти
                </Button>
                <p className="text-center text-white/50 text-sm">
                  Нет аккаунта?{" "}
                  <button type="button" onClick={() => setAuthTab("register")} className="text-white hover:underline">
                    Зарегистрироваться
                  </button>
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Index
