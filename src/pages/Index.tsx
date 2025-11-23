import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Heart" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">Здоровое зачатие</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="hover:text-primary transition-colors">Обо мне</a>
              <a href="#results" className="hover:text-primary transition-colors">Результаты</a>
              <a href="#prices" className="hover:text-primary transition-colors">Цены</a>
              <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
              <a href="#blog" className="hover:text-primary transition-colors">Блог</a>
              <Button asChild>
                <a href="#contact">Записаться</a>
              </Button>
            </div>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Естественный путь к <span className="text-primary">здоровому</span> родительству
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Восстановление естественной фертильности будущих родителей. Подготовка к зачатию и беременности 
                без применения ЭКО и вспомогательных репродуктивных технологий. Здоровое потомство без рисков генетической, 
                хромосомной и онкологической патологии.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="text-lg" asChild>
                  <a href="#contact">Записаться на консультацию</a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg" asChild>
                  <a href="#services">Узнать больше</a>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground mt-1">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground mt-1">семей</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">85%</div>
                  <div className="text-sm text-muted-foreground mt-1">успеха</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/f8f9e8d8-f30e-4553-b97b-8b8d92584378/files/8c7bf251-ed2c-4482-8e25-5e2659f2aca1.jpg" 
                alt="Медицинская консультация"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексный подход к восстановлению репродуктивного здоровья
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Microscope" className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Восстановление фертильности</h3>
                <p className="text-muted-foreground">
                  Лечение нарушений сперматогенеза у мужчин и овогенеза у женщин естественными методами. 
                  Восстановление репродуктивной функции без применения ЭКО.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="HeartPulse" className="text-secondary" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Лечение бесплодных пар</h3>
                <p className="text-muted-foreground">
                  Комплексное лечение семейных пар с диагнозом бесплодие. 
                  Индивидуальные программы восстановления естественной способности к зачатию.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Shield" className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Профилактика генетических рисков</h3>
                <p className="text-muted-foreground">
                  Подготовка к зачатию и беременности для исключения рисков генной и хромосомной патологии, 
                  онкологических и психиатрических заболеваний у потомства.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Baby" className="text-secondary" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Здоровая беременность</h3>
                <p className="text-muted-foreground">
                  Подготовка и ведение беременности для нормального течения и рождения 
                  здорового ребёнка без пороков развития и патологий.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Sparkles" className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Подготовка к естественному зачатию</h3>
                <p className="text-muted-foreground">
                  Комплексная прегравидарная подготовка будущих родителей. 
                  Создание оптимальных условий для естественного зачатия здорового ребёнка.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="ClipboardCheck" className="text-secondary" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Диагностика</h3>
                <p className="text-muted-foreground">
                  Современные методы диагностики репродуктивного здоровья. 
                  Полное обследование для выявления причин бесплодия.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-b from-white to-muted/30 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/f8f9e8d8-f30e-4553-b97b-8b8d92584378/files/963c7b12-0fe6-4621-9202-406a7d50c7be.jpg"
                alt="Лаборатория"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">Обо мне</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Более 15 лет я специализируюсь на лечении бесплодных семейных пар 
                и восстановлении естественной фертильности будущих отцов и матерей. 
                За эти годы я помог сотням семей обрести радость родительства естественным путём.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Моя специализация — восстановление репродуктивной функции без ЭКО и других 
                вспомогательных репродуктивных технологий. Подготовка семей к зачатию, 
                нормальному течению беременности и рождению здорового потомства без пороков развития, 
                генной и хромосомной патологии, без рисков онкологических и психиатрических заболеваний.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-secondary mt-1" size={24} />
                  <div>
                    <div className="font-semibold">Сертифицированный специалист</div>
                    <div className="text-muted-foreground">Высшая квалификационная категория</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-secondary mt-1" size={24} />
                  <div>
                    <div className="font-semibold">Естественные методы</div>
                    <div className="text-muted-foreground">Восстановление фертильности без ЭКО и ВРТ</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-secondary mt-1" size={24} />
                  <div>
                    <div className="font-semibold">Индивидуальный подход</div>
                    <div className="text-muted-foreground">Персональные программы лечения для каждой пары</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="results" className="py-20 bg-white px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Результаты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Статистика успешных случаев лечения
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="text-5xl font-bold text-primary mb-2">85%</div>
                <div className="text-lg font-medium mb-1">Успешные беременности</div>
                <div className="text-sm text-muted-foreground">после полного курса лечения</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="text-5xl font-bold text-secondary mb-2">500+</div>
                <div className="text-lg font-medium mb-1">Счастливых семей</div>
                <div className="text-sm text-muted-foreground">обрели радость родительства</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="text-5xl font-bold text-primary mb-2">92%</div>
                <div className="text-lg font-medium mb-1">Улучшение показателей</div>
                <div className="text-sm text-muted-foreground">репродуктивного здоровья</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="text-5xl font-bold text-secondary mb-2">15+</div>
                <div className="text-lg font-medium mb-1">Лет опыта</div>
                <div className="text-sm text-muted-foreground">в репродуктивной медицине</div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-16">
            <img 
              src="https://cdn.poehali.dev/projects/f8f9e8d8-f30e-4553-b97b-8b8d92584378/files/e4b37e39-2303-4738-ba36-2830f209fa2c.jpg"
              alt="Счастливая семья"
              className="rounded-2xl shadow-2xl w-full max-w-4xl mx-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-white px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Цены</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Прозрачная стоимость консультаций
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-4">
                      <Icon name="Users" className="text-primary mt-1" size={32} />
                      <div>
                        <h3 className="text-2xl font-semibold mb-2">Приём семейной пары</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Комплексная консультация специалиста в медицинском центре. 
                          Диагностика, обследование и индивидуальный план лечения для обоих партнёров.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Clock" size={16} />
                        <span>60-90 минут</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="FileText" size={16} />
                        <span>Заключение специалиста</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Clipboard" size={16} />
                        <span>План обследования</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center md:text-right">
                    <div className="text-5xl font-bold text-primary mb-2">5 000 ₽</div>
                    <Button size="lg" asChild className="mt-4">
                      <a href="#contact">Записаться</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-8 p-6 bg-muted/30 rounded-xl">
              <div className="flex items-start gap-3">
                <Icon name="Info" className="text-primary mt-1" size={24} />
                <div>
                  <h4 className="font-semibold mb-2">Что входит в приём</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={18} />
                      <span>Подробная консультация по репродуктивному здоровью обоих партнёров</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={18} />
                      <span>Анализ анамнеза и предыдущих обследований</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={18} />
                      <span>Индивидуальный план обследования и лечения</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={18} />
                      <span>Рекомендации по подготовке к естественному зачатию</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-gradient-to-b from-white to-muted/30 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы пациентов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Истории успеха наших семей
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "После 5 лет безуспешных попыток мы наконец-то стали родителями! 
                  Огромная благодарность за профессионализм, внимание и поддержку на всех этапах лечения."
                </p>
                <div className="font-semibold">Анна и Сергей</div>
                <div className="text-sm text-muted-foreground">Москва</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "Индивидуальный подход, современные методы диагностики и искренняя забота о пациентах. 
                  Рекомендуем всем, кто столкнулся с проблемой бесплодия."
                </p>
                <div className="font-semibold">Екатерина и Дмитрий</div>
                <div className="text-sm text-muted-foreground">Санкт-Петербург</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "Благодаря грамотной подготовке к ЭКО, процедура прошла успешно с первого раза. 
                  Сейчас ждем появления нашего малыша. Спасибо за чудо!"
                </p>
                <div className="font-semibold">Ольга и Михаил</div>
                <div className="text-sm text-muted-foreground">Казань</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 bg-white px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Блог</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полезные статьи о репродуктивном здоровье
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-lg flex items-center justify-center">
                  <Icon name="BookOpen" className="text-primary" size={64} />
                </div>
                <div className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">15 января 2025</div>
                  <h3 className="text-xl font-semibold mb-3">Подготовка к естественному зачатию</h3>
                  <p className="text-muted-foreground">
                    Основные рекомендации для пар, планирующих беременность. 
                    Питание, образ жизни и обследования.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-t-lg flex items-center justify-center">
                  <Icon name="FileText" className="text-secondary" size={64} />
                </div>
                <div className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">10 января 2025</div>
                  <h3 className="text-xl font-semibold mb-3">Современные методы лечения бесплодия</h3>
                  <p className="text-muted-foreground">
                    Обзор эффективных методик восстановления репродуктивной функции 
                    у мужчин и женщин.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-lg flex items-center justify-center">
                  <Icon name="Newspaper" className="text-primary" size={64} />
                </div>
                <div className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">5 января 2025</div>
                  <h3 className="text-xl font-semibold mb-3">ЭКО: что нужно знать</h3>
                  <p className="text-muted-foreground">
                    Подробная информация о процедуре ЭКО, показаниях и этапах подготовки 
                    к искусственному оплодотворению.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-b from-white to-primary/5 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Запись на консультацию</h2>
            <p className="text-xl text-muted-foreground">
              Свяжитесь со мной для записи на прием или консультации
            </p>
          </div>
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input 
                    placeholder="Введите ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Опишите вашу ситуацию..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" className="text-primary" size={24} />
                  <div>
                    <div className="font-medium">Телефон</div>
                    <a href="tel:+79001234567" className="text-primary hover:underline">+7 (900) 123-45-67</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" className="text-primary" size={24} />
                  <div>
                    <div className="font-medium">Email</div>
                    <a href="mailto:info@example.com" className="text-primary hover:underline">info@example.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" className="text-primary" size={24} />
                  <div>
                    <div className="font-medium">Адрес</div>
                    <div className="text-muted-foreground">г. Москва, ул. Примерная, д. 1</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Heart" className="text-primary" size={32} />
                <span className="text-xl font-bold">Здоровое зачатие</span>
              </div>
              <p className="text-white/70">
                Профессиональная помощь в лечении бесплодия и подготовке к здоровому родительству
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <div className="space-y-2">
                <a href="#services" className="block text-white/70 hover:text-white transition-colors">Услуги</a>
                <a href="#about" className="block text-white/70 hover:text-white transition-colors">Обо мне</a>
                <a href="#results" className="block text-white/70 hover:text-white transition-colors">Результаты</a>
                <a href="#reviews" className="block text-white/70 hover:text-white transition-colors">Отзывы</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/70">
                <div>+7 (900) 123-45-67</div>
                <div>info@example.com</div>
                <div>г. Москва</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <div className="space-y-2 text-white/70">
                <div>Пн-Пт: 9:00 - 20:00</div>
                <div>Сб: 10:00 - 18:00</div>
                <div>Вс: выходной</div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
            <p>&copy; 2025 Здоровое зачатие. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;