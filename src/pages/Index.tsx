import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface FAQ {
  question: string
  answer: string
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [showAuth, setShowAuth] = useState(false)
  const [authTab, setAuthTab] = useState<"login" | "register">("register")

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const openLogin = () => { setAuthTab("login"); setShowAuth(true) }
  const openRegister = () => { setAuthTab("register"); setShowAuth(true) }

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
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="Waves" size={20} />
            <span className="font-medium text-balance">РекаКама</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {["Отдых", "Активности", "Размещение", "Вопросы", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={openLogin}
              className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
            >
              Войти
            </button>
            <Button onClick={openRegister} className="bg-white text-black hover:bg-white/90 rounded-full px-6">Забронировать</Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          {/* Badge */}
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium">База отдыха на берегу реки Камы</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">Отдых у живой воды.</h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            Уютная база отдыха РекаКама на берегу Камы — рыбалка, сплавы, баня и тишина леса. Идеальное место для тех, кто хочет вырваться из города и перезарядиться.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 text-lg">
              Забронировать отдых
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
            >
              Смотреть программу
            </Button>
          </div>

          {/* Footer Note */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="ShieldCheck" size={16} />
            <span className="text-sm font-medium">Безопасный семейный отдых</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Fishing */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Fish" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Рыбалка на Каме</h3>
              <p className="text-white/80 leading-relaxed">Богатые рыбные места прямо у базы. Снаряжение в аренду.</p>
            </div>

            {/* Safety */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="ShieldCheck" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Безопасность</h3>
              <p className="text-white/80 leading-relaxed">Оборудованный берег, спасательные средства, опытный персонал.</p>
            </div>

            {/* All-Inclusive */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Wallet" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Всё включено</h3>
              <p className="text-white/80 leading-relaxed">Домики, мангал, парковка и берег — в одной цене.</p>
            </div>

            {/* Nature */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="TreePine" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Живая природа</h3>
              <p className="text-white/80 leading-relaxed">Сосновый бор, чистый воздух и звёздное небо над рекой.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Ваш отдых на РекаКама</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                От заезда до прощального костра — вот как выглядит идеальный отдых на Каме.
              </p>
            </div>

            {/* Journey Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Phase 1 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">01.</div>
                  <h3 className="text-xl font-semibold mb-4">Заезд и размещение</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Заселяетесь в уютный домик или глэмпинг прямо на берегу Камы. Свежий воздух, вид на воду — и никаких городских забот.
                  </p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">02.</div>
                  <h3 className="text-xl font-semibold mb-4">Утренняя рыбалка</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Ранний подъём, туман над рекой, поплавок на воде. Кама щедра на щуку, судака и леща — берём снасти и на берег!
                  </p>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">03.</div>
                  <h3 className="text-xl font-semibold mb-4">Активный день</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Сплав на байдарке, купание, прогулки по лесным тропам или просто шезлонг с книгой у воды — выбирайте свой темп.
                  </p>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">04.</div>
                  <h3 className="text-xl font-semibold mb-4">Вечер у костра</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Мангал, уха из свежевыловленной рыбы, звёздное небо над Камой. Такие вечера запоминаются на всю жизнь.
                  </p>
                </div>
              </div>
            </div>

            {/* Check Availability Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-4 text-lg font-semibold"
              >
                Проверить свободные даты
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Title and Description */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Частые вопросы
                </h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Всё, что нужно знать перед поездкой на базу РекаКама: от активностей до условий бронирования.
                </p>
              </div>

              {/* Right Column - FAQ Accordion */}
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
                      {openFaq === index ? (
                        <Icon name="Minus" size={20} />
                      ) : (
                        <Icon name="Plus" size={20} />
                      )}
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
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Забронируйте отдых</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Contact Form */}
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Пожелания
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Даты, количество гостей, особые пожелания..."
                    />
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-3 font-normal text-base">
                    Отправить заявку
                  </Button>
                </form>
              </div>

              {/* Right Column - Contact Info */}
              <div className="space-y-8">
                <div>
                  <p className="text-xl text-white/90 leading-relaxed text-pretty">
                    Готовы ответить на все вопросы и подобрать лучшие даты для вашего отдыха. Отвечаем быстро!
                  </p>
                </div>

                {/* Profile Card */}
                <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-teal-500 flex items-center justify-center text-white text-2xl font-bold">
                      К
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Команда РекаКама</h4>
                      <p className="text-gray-600">Менеджер по бронированию</p>
                    </div>
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg flex items-center justify-center gap-2 py-3">
                    <Icon name="Mail" size={16} />
                    Написать нам
                  </Button>
                </div>

                {/* Highlights */}
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
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <Icon name="Waves" size={24} />
                  <span className="text-xl font-semibold">РекаКама</span>
                </div>
                <p className="text-white/80 leading-relaxed text-pretty">
                  База отдыха на берегу реки Камы — место, где природа встречается с уютом. Рыбалка, сплавы, баня и живой воздух сосновых лесов.
                </p>
              </div>

              {/* Expedition Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ОТДЫХ</h3>
                <ul className="space-y-3">
                  {["Размещение", "Рыбалка", "Активности", "Фотогалерея"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">О БАЗЕ</h3>
                <ul className="space-y-3">
                  {["О нас", "Инфраструктура", "Как добраться", "Отзывы"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ПОДДЕРЖКА</h3>
                <ul className="space-y-3">
                  {["Контакты", "Бронирование", "Вопросы и ответы", "Правила"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="border-t border-white/10 pt-12 mb-12">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4">Новости и акции базы</h3>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Введите ваш email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/20 backdrop-blur border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                  />
                  <Button className="bg-white text-black hover:bg-white/90 rounded-lg px-6 h-[50px]">Подписаться</Button>
                </div>
              </div>
            </div>

            {/* Sub-footer */}
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
            {/* Close */}
            <button
              onClick={() => setShowAuth(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Icon name="X" size={16} />
            </button>

            {/* Logo */}
            <div className="flex items-center gap-2 mb-8">
              <Icon name="Waves" size={20} />
              <span className="font-semibold text-lg">РекаКама</span>
            </div>

            {/* Tabs */}
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
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Имя</label>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 ring-1 ring-white/20 text-white placeholder:text-white/40 focus:ring-2 focus:ring-white/40 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 ring-1 ring-white/20 text-white placeholder:text-white/40 focus:ring-2 focus:ring-white/40 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 ring-1 ring-white/20 text-white placeholder:text-white/40 focus:ring-2 focus:ring-white/40 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Пароль</label>
                  <input
                    type="password"
                    placeholder="Придумайте пароль"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 ring-1 ring-white/20 text-white placeholder:text-white/40 focus:ring-2 focus:ring-white/40 focus:outline-none"
                  />
                </div>
                <Button className="w-full bg-white text-black hover:bg-white/90 rounded-xl py-3 text-base mt-2">
                  Создать аккаунт
                </Button>
              </form>
            ) : (
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 ring-1 ring-white/20 text-white placeholder:text-white/40 focus:ring-2 focus:ring-white/40 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Пароль</label>
                  <input
                    type="password"
                    placeholder="Ваш пароль"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 ring-1 ring-white/20 text-white placeholder:text-white/40 focus:ring-2 focus:ring-white/40 focus:outline-none"
                  />
                </div>
                <Button className="w-full bg-white text-black hover:bg-white/90 rounded-xl py-3 text-base mt-2">
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