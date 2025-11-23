import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
