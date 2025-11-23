import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
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
  );
};

export default Footer;
