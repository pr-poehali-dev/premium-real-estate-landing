import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import Icon from '@/components/ui/icon'

const Index = () => {
  const [quizStep, setQuizStep] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [quizData, setQuizData] = useState({
    budget: '',
    market: '',
    priority: '',
    name: '',
    phone: '',
    email: ''
  })

  const galleryRef = useRef<HTMLDivElement>(null)

  const portfolioProperties = [
    {
      id: 1,
      image: '/img/5584e76b-88ea-4869-afff-b43bfdb1c740.jpg',
      location: 'Дубай Марина',
      title: 'Премиум апартаменты',
      description: 'Современный жилой комплекс с видом на море и марину',
      price: '$580k',
      yield: '13.5%',
      badge: 'Дубай Марина'
    },
    {
      id: 2,
      image: '/img/43c5ab10-756f-4bbd-9089-a537b4fc2922.jpg',
      location: 'Маскат, Оман',
      title: 'Luxury Residences',
      description: 'Эксклюзивные апартаменты с панорамным видом на залив',
      price: '$420k',
      yield: '12.8%',
      badge: 'Маскат, Оман'
    },
    {
      id: 3,
      image: '/img/0b6e7c10-0a5c-420d-87ab-eef579a9ddda.jpg',
      location: 'Business Bay',
      title: 'Elite Tower',
      description: 'Высотный комплекс в деловом центре Дубая',
      price: '$750k',
      yield: '14.2%',
      badge: 'Business Bay'
    }
  ]

  const quizQuestions = [
    {
      title: 'Какой бюджет вы рассматриваете для инвестиции?',
      options: [
        { value: 'under-250k', label: 'До $250k' },
        { value: '250k-500k', label: '$250k - $500k' },
        { value: '500k-1m', label: '$500k - $1M' },
        { value: 'over-1m', label: 'Более $1M' }
      ],
      field: 'budget'
    },
    {
      title: 'Какой рынок вас интересует больше?',
      options: [
        { value: 'dubai', label: 'Динамичный Дубай (ОАЭ)' },
        { value: 'oman', label: 'Перспективный Оман' },
        { value: 'both', label: 'Рассматриваю оба варианта' },
        { value: 'unsure', label: 'Пока не знаю' }
      ],
      field: 'market'
    },
    {
      title: 'Что для вас приоритетно?',
      options: [
        { value: 'max-yield', label: 'Максимальная доходность' },
        { value: 'growth', label: 'Рост стоимости актива' },
        { value: 'residency', label: 'Получение ВНЖ' },
        { value: 'preservation', label: 'Сохранение капитала' }
      ],
      field: 'priority'
    }
  ]

  const handleQuizAnswer = (value: string) => {
    const field = quizQuestions[quizStep].field as keyof typeof quizData
    setQuizData(prev => ({ ...prev, [field]: value }))
    
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(prev => prev + 1)
    } else {
      setQuizStep(prev => prev + 1)
    }
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Quiz completed:', quizData)
  }

  const scrollGallery = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentImageIndex(prev => prev > 0 ? prev - 1 : portfolioProperties.length - 1)
    } else {
      setCurrentImageIndex(prev => prev < portfolioProperties.length - 1 ? prev + 1 : 0)
    }
  }

  return (
    <div className="min-h-screen bg-luxury-white">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-montserrat font-bold text-luxury-white tracking-wider animate-fade-in">
            GLOBAL ESTATES
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#advantages" className="text-luxury-white hover:text-gold transition-all duration-300 transform hover:scale-105 font-open-sans">Преимущества</a>
            <a href="#portfolio" className="text-luxury-white hover:text-gold transition-all duration-300 transform hover:scale-105 font-open-sans">Портфолио</a>
            <a href="#about" className="text-luxury-white hover:text-gold transition-all duration-300 transform hover:scale-105 font-open-sans">О нас</a>
            <a href="#contact" className="text-luxury-white hover:text-gold transition-all duration-300 transform hover:scale-105 font-open-sans">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${portfolioProperties[currentImageIndex].image}')`
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-luxury-white">
          <div className="max-w-3xl animate-slide-in-left">
            <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-6 leading-tight">
              Премиум-апартаменты в ОАЭ и Омане
              <span className="block text-gold animate-fade-in animation-delay-500">Ваш пассивный доход от 12% годовых</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-open-sans mb-8 text-gray-200 leading-relaxed animate-fade-in animation-delay-1000">
              Персональный подбор ликвидных объектов инвестиции с полным сопровождением и юридической гарантией
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-in-right animation-delay-1500">
              <Button className="bg-gold hover:bg-gold-dark text-luxury-black font-montserrat font-semibold px-8 py-4 text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
                Получить каталог ликвидных объектов
              </Button>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-luxury-black font-montserrat font-semibold px-8 py-4 text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
                    <Icon name="Play" className="mr-2 h-5 w-5 animate-pulse" />
                    Начать квиз
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] bg-luxury-white animate-scale-in">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-montserrat font-bold text-luxury-black text-center">
                      {quizStep < quizQuestions.length ? quizQuestions[quizStep].title : 'Идеальное решение для ваших задач уже подобрано!'}
                    </DialogTitle>
                  </DialogHeader>
                  
                  {quizStep < quizQuestions.length ? (
                    <div className="py-6 animate-fade-in">
                      <RadioGroup onValueChange={handleQuizAnswer} className="space-y-4">
                        {quizQuestions[quizStep].options.map((option, index) => (
                          <div key={option.value} className={`flex items-center space-x-2 p-3 rounded-lg hover:bg-gold/10 transition-all duration-300 animate-fade-in`} style={{animationDelay: `${index * 100}ms`}}>
                            <RadioGroupItem value={option.value} id={option.value} />
                            <Label htmlFor={option.value} className="font-open-sans text-lg cursor-pointer transform transition-all duration-200 hover:scale-105">
                              {option.label}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  ) : (
                    <div className="py-6 animate-scale-in">
                      <p className="text-center text-gray-600 font-open-sans mb-6">
                        Оставьте контакты, чтобы наш эксперт отправил вам персональную подборку объектов и расчет доходности
                      </p>
                      <form onSubmit={handleContactSubmit} className="space-y-4">
                        <div className="animate-slide-in-left">
                          <Label htmlFor="name" className="font-open-sans font-semibold">Имя</Label>
                          <Input 
                            id="name"
                            value={quizData.name}
                            onChange={(e) => setQuizData(prev => ({...prev, name: e.target.value}))}
                            className="mt-1 transition-all duration-300 focus:scale-105"
                          />
                        </div>
                        <div className="animate-slide-in-right animation-delay-200">
                          <Label htmlFor="phone" className="font-open-sans font-semibold">Телефон *</Label>
                          <Input 
                            id="phone"
                            value={quizData.phone}
                            onChange={(e) => setQuizData(prev => ({...prev, phone: e.target.value}))}
                            required
                            className="mt-1 transition-all duration-300 focus:scale-105"
                          />
                        </div>
                        <div className="animate-slide-in-left animation-delay-400">
                          <Label htmlFor="email" className="font-open-sans font-semibold">Email</Label>
                          <Input 
                            id="email"
                            type="email"
                            value={quizData.email}
                            onChange={(e) => setQuizData(prev => ({...prev, email: e.target.value}))}
                            className="mt-1 transition-all duration-300 focus:scale-105"
                          />
                        </div>
                        <Button type="submit" className="w-full bg-gold hover:bg-gold-dark text-luxury-black font-montserrat font-semibold py-3 transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 animate-fade-in animation-delay-600">
                          Получить подборку
                        </Button>
                      </form>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </div>
            
            <div className="bg-luxury-black/20 backdrop-blur-sm rounded-lg p-6 border border-gold/30 animate-scale-in animation-delay-2000">
              <p className="text-gold font-montserrat font-semibold mb-2">Микро-квиз</p>
              <p className="text-lg font-open-sans">Ответьте на 3 вопроса и получите персональную подборку объектов</p>
            </div>
          </div>
        </div>

        {/* Background Image Navigation */}
        <div className="absolute bottom-8 right-8 flex space-x-4 z-20">
          <Button 
            onClick={() => scrollGallery('left')}
            size="sm"
            className="bg-gold/80 hover:bg-gold text-luxury-black rounded-full w-12 h-12 p-0 transform transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95"
          >
            <Icon name="ChevronLeft" className="h-5 w-5" />
          </Button>
          <Button 
            onClick={() => scrollGallery('right')}
            size="sm"
            className="bg-gold/80 hover:bg-gold text-luxury-black rounded-full w-12 h-12 p-0 transform transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95"
          >
            <Icon name="ChevronRight" className="h-5 w-5" />
          </Button>
        </div>

        {/* Hero Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {portfolioProperties.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                index === currentImageIndex 
                  ? 'bg-gold scale-110' 
                  : 'bg-luxury-white/50 hover:bg-luxury-white/80'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Key Advantages */}
      <section id="advantages" className="py-20 bg-luxury-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-luxury-black mb-6">
              Ключевые преимущества
            </h2>
            <p className="text-xl text-gray-600 font-open-sans max-w-3xl mx-auto">
              Не просто продажа недвижимости, а комплексное инвестиционное решение
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'TrendingUp', title: 'Доходность', value: 'от 12%', desc: 'Проработанная модель аренды с гарантированной доходностью' },
              { icon: 'Users', title: 'Экспертиза', value: '150+', desc: 'Команда на местах в Дубае и Маскате. Доступ к эксклюзивным лотам' },
              { icon: 'Settings', title: 'Сервис', value: '24/7', desc: 'Полное сопровождение "под ключ": от подбора до управления' },
              { icon: 'Shield', title: 'Безопасность', value: '100%', desc: 'Юридический аудит каждого объекта и сопровождение местным юристом' }
            ].map((item, index) => (
              <Card key={index} className={`text-center border-none shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in`} style={{animationDelay: `${index * 200}ms`}}>
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-full mx-auto mb-4 flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:rotate-12">
                    <Icon name={item.icon as any} className="h-8 w-8 text-luxury-white" />
                  </div>
                  <CardTitle className="font-montserrat text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-montserrat font-bold text-gold mb-2 animate-pulse">{item.value}</div>
                  <CardDescription className="font-open-sans">
                    {item.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Cases Gallery */}
      <section id="portfolio" className="py-20 bg-luxury-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-luxury-black mb-6">
              Инвестиционные кейсы
            </h2>
            <p className="text-xl text-gray-600 font-open-sans max-w-3xl mx-auto">
              Примеры успешных объектов с подтвержденной доходностью
            </p>
          </div>
          
          {/* Interactive Gallery Carousel */}
          <div className="relative mb-12">
            <div 
              ref={galleryRef}
              className="flex transition-transform duration-500 ease-in-out gap-8 overflow-hidden"
              style={{ 
                transform: `translateX(-${currentImageIndex * 100}%)`,
                width: `${portfolioProperties.length * 100}%`
              }}
            >
              {portfolioProperties.map((property, index) => (
                <div 
                  key={property.id} 
                  className="flex-shrink-0 w-full grid md:grid-cols-3 gap-8"
                  style={{ width: `${100 / portfolioProperties.length}%` }}
                >
                  <Card className={`overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-scale-in`}>
                    <div 
                      className="h-64 bg-cover bg-center transition-transform duration-700 hover:scale-110" 
                      style={{backgroundImage: `url('${property.image}')`}} 
                    />
                    <CardContent className="p-6">
                      <Badge className="bg-gold text-luxury-black font-montserrat mb-3 animate-pulse">
                        {property.badge}
                      </Badge>
                      <CardTitle className="font-montserrat text-xl mb-2">{property.title}</CardTitle>
                      <CardDescription className="font-open-sans mb-4">
                        {property.description}
                      </CardDescription>
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-2xl font-montserrat font-bold text-gold">{property.price}</div>
                          <div className="text-sm text-gray-500 font-open-sans">Стоимость</div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-montserrat font-bold text-green-600 animate-pulse">{property.yield}</div>
                          <div className="text-sm text-gray-500 font-open-sans">Годовая доходность</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Show next 2 properties if available */}
                  {portfolioProperties[index + 1] && (
                    <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-scale-in animation-delay-200">
                      <div 
                        className="h-64 bg-cover bg-center transition-transform duration-700 hover:scale-110" 
                        style={{backgroundImage: `url('${portfolioProperties[index + 1]?.image}')`}} 
                      />
                      <CardContent className="p-6">
                        <Badge className="bg-gold text-luxury-black font-montserrat mb-3 animate-pulse">
                          {portfolioProperties[index + 1]?.badge}
                        </Badge>
                        <CardTitle className="font-montserrat text-xl mb-2">{portfolioProperties[index + 1]?.title}</CardTitle>
                        <CardDescription className="font-open-sans mb-4">
                          {portfolioProperties[index + 1]?.description}
                        </CardDescription>
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-2xl font-montserrat font-bold text-gold">{portfolioProperties[index + 1]?.price}</div>
                            <div className="text-sm text-gray-500 font-open-sans">Стоимость</div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-montserrat font-bold text-green-600 animate-pulse">{portfolioProperties[index + 1]?.yield}</div>
                            <div className="text-sm text-gray-500 font-open-sans">Годовая доходность</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {portfolioProperties[index + 2] && (
                    <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-scale-in animation-delay-400">
                      <div 
                        className="h-64 bg-cover bg-center transition-transform duration-700 hover:scale-110" 
                        style={{backgroundImage: `url('${portfolioProperties[index + 2]?.image}')`}} 
                      />
                      <CardContent className="p-6">
                        <Badge className="bg-gold text-luxury-black font-montserrat mb-3 animate-pulse">
                          {portfolioProperties[index + 2]?.badge}
                        </Badge>
                        <CardTitle className="font-montserrat text-xl mb-2">{portfolioProperties[index + 2]?.title}</CardTitle>
                        <CardDescription className="font-open-sans mb-4">
                          {portfolioProperties[index + 2]?.description}
                        </CardDescription>
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-2xl font-montserrat font-bold text-gold">{portfolioProperties[index + 2]?.price}</div>
                            <div className="text-sm text-gray-500 font-open-sans">Стоимость</div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-montserrat font-bold text-green-600 animate-pulse">{portfolioProperties[index + 2]?.yield}</div>
                            <div className="text-sm text-gray-500 font-open-sans">Годовая доходность</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              ))}
            </div>

            {/* Gallery Navigation Controls */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
              <Button 
                onClick={() => scrollGallery('left')}
                className="bg-gold/90 hover:bg-gold text-luxury-black rounded-full w-12 h-12 p-0 transform transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95 pointer-events-auto"
              >
                <Icon name="ChevronLeft" className="h-6 w-6" />
              </Button>
              <Button 
                onClick={() => scrollGallery('right')}
                className="bg-gold/90 hover:bg-gold text-luxury-black rounded-full w-12 h-12 p-0 transform transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95 pointer-events-auto"
              >
                <Icon name="ChevronRight" className="h-6 w-6" />
              </Button>
            </div>
          </div>
          
          <div className="text-center animate-fade-in">
            <Button className="bg-gold hover:bg-gold-dark text-luxury-black font-montserrat font-semibold px-8 py-4 transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
              Посмотреть другие кейсы
            </Button>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 bg-luxury-black text-luxury-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
                О Global Estates
              </h2>
              <p className="text-xl font-open-sans mb-8 text-gray-300 leading-relaxed">
                Global Estates — это более 150 довольных инвесторов и $100M+ проданной недвижимости. 
                Мы ваш надежный партнер в регионе с командой экспертов на местах.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center animate-scale-in">
                  <div className="text-4xl font-montserrat font-bold text-gold mb-2 animate-pulse">150+</div>
                  <div className="text-gray-400 font-open-sans">Довольных клиентов</div>
                </div>
                <div className="text-center animate-scale-in animation-delay-200">
                  <div className="text-4xl font-montserrat font-bold text-gold mb-2 animate-pulse">$100M+</div>
                  <div className="text-gray-400 font-open-sans">Проданной недвижимости</div>
                </div>
              </div>
              
              <Button className="bg-gold hover:bg-gold-dark text-luxury-black font-montserrat font-semibold px-8 py-4 transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
                Узнать больше
              </Button>
            </div>
            
            <div className="space-y-6 animate-slide-in-right">
              <div className="text-center">
                <h3 className="text-xl font-montserrat font-semibold mb-4 text-gold">Наши партнеры</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['EMAAR', 'DAMAC', 'OMRAN', 'ALDAR'].map((partner, index) => (
                    <div 
                      key={partner}
                      className={`bg-luxury-white/10 backdrop-blur-sm rounded-lg p-4 text-center transform transition-all duration-500 hover:scale-105 hover:bg-luxury-white/20 animate-fade-in`}
                      style={{animationDelay: `${index * 150}ms`}}
                    >
                      <div className="font-montserrat font-bold text-lg text-luxury-white">{partner}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Single CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gold-light to-gold">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-luxury-black mb-6">
              Готовы сделать первый шаг к пассивному доходу?
            </h2>
            <p className="text-xl font-open-sans text-luxury-dark-gray mb-8">
              Заполните форму ниже, и наш эксперт свяжется с вами в течение 15 минут
            </p>
          </div>
          
          <div className="bg-luxury-white rounded-lg p-8 shadow-xl max-w-md mx-auto animate-scale-in">
            <form className="space-y-4">
              <div className="animate-slide-in-left">
                <Input 
                  placeholder="Ваше имя"
                  className="text-center font-open-sans transition-all duration-300 focus:scale-105"
                />
              </div>
              <div className="animate-slide-in-right animation-delay-200">
                <Input 
                  placeholder="Номер телефона"
                  className="text-center font-open-sans transition-all duration-300 focus:scale-105"
                  required
                />
              </div>
              <Button className="w-full bg-gold hover:bg-gold-dark text-luxury-black font-montserrat font-semibold py-3 transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 animate-fade-in animation-delay-400">
                Обсудить инвестицию
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-luxury-black text-luxury-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="animate-fade-in">
              <div className="text-2xl font-montserrat font-bold text-gold mb-4">
                GLOBAL ESTATES
              </div>
              <p className="font-open-sans text-gray-400">
                Ваш надежный партнер в инвестициях в недвижимость ОАЭ и Омана
              </p>
            </div>
            
            <div className="animate-fade-in animation-delay-200">
              <h4 className="font-montserrat font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 font-open-sans text-gray-400">
                <div className="flex items-center transform transition-all duration-300 hover:scale-105 hover:text-gold">
                  <Icon name="Phone" className="h-4 w-4 mr-2 text-gold" />
                  +971 50 123 4567
                </div>
                <div className="flex items-center transform transition-all duration-300 hover:scale-105 hover:text-gold">
                  <Icon name="Mail" className="h-4 w-4 mr-2 text-gold" />
                  info@global-estates.com
                </div>
                <div className="flex items-center transform transition-all duration-300 hover:scale-105 hover:text-gold">
                  <Icon name="MapPin" className="h-4 w-4 mr-2 text-gold" />
                  Dubai, UAE
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in animation-delay-400">
              <h4 className="font-montserrat font-semibold mb-4">Мессенджеры</h4>
              <div className="space-y-2 font-open-sans text-gray-400">
                <div className="transform transition-all duration-300 hover:scale-105 hover:text-gold cursor-pointer">WhatsApp: +971 50 123 4567</div>
                <div className="transform transition-all duration-300 hover:scale-105 hover:text-gold cursor-pointer">Telegram: @global_estates</div>
                <div className="transform transition-all duration-300 hover:scale-105 hover:text-gold cursor-pointer">WeChat: GlobalEstates</div>
              </div>
            </div>
            
            <div className="animate-fade-in animation-delay-600">
              <h4 className="font-montserrat font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                {['Instagram', 'Facebook', 'Linkedin', 'Youtube'].map((social, index) => (
                  <Icon 
                    key={social}
                    name={social as any} 
                    className={`h-6 w-6 text-gold hover:text-gold-light cursor-pointer transform transition-all duration-300 hover:scale-125 hover:rotate-12 animate-fade-in`}
                    style={{animationDelay: `${index * 100}ms`}}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center animate-fade-in">
            <p className="font-open-sans text-gray-400">
              © 2024 Global Estates. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index