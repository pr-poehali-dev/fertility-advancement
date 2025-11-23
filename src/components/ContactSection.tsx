import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const ContactSection = () => {
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
  );
};

export default ContactSection;
