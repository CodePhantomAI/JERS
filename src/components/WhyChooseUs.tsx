import React from 'react';
import { Shield, Clock, Palette, MapPin, Heart, Star } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: MapPin,
      title: 'מומחים בירושלים',
      description: 'מכירים את כל רחבי ירושלים ומספקים שירות מקצועי בכל האזורים'
    },
    {
      icon: Clock,
      title: 'משלוח מהיר',
      description: 'משלוח בלונים מהיר ואמין בירושלים - עד הבית תוך זמן קצר'
    },
    {
      icon: Palette,
      title: 'עיצובים יחודיים',
      description: 'סידור בלונים יצירתי ומותאם אישית לכל לקוח ואירוע'
    },
    {
      icon: Heart,
      title: 'הצעות נישואין מיוחדות',
      description: 'מתמחים בהצעות נישואין רומנטיות ובלתי נשכחות בירושלים'
    },
    {
      icon: Shield,
      title: 'איכות מובטחת',
      description: 'בלונים איכותיים וסידורים מקצועיים עם אחריות מלאה'
    },
    {
      icon: Star,
      title: 'שירות מעולה',
      description: 'יחס אישי, ייעוץ מקצועי והתאמה מושלמת לכל בקשה'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-40 h-40 bg-white rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            למה לבחור בנו?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            אנחנו הכתובת המובילה ל<strong>משלוחי בלונים בירושלים</strong> ו<strong>הצעות נישואין</strong> 
            מיוחדות, עם מחויבות מלאה לשביעות רצון הלקוחות
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">
                {reason.title}
              </h3>
              <p className="text-white/80 text-center leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold mb-4">
              מוכנים להפוך את האירוע שלכם לבלתי נשכח?
            </h3>
            <p className="text-white/90 mb-6">
              צרו קשר איתנו עכשיו למשלוח בלונים מהיר בירושלים או לתכנון הצעת נישואין מיוחדת
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+972509351650" 
                className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                התקשרו: 050-935-1650
              </a>
              <a 
                href="https://wa.me/972509351650?text=שלום,%20אני%20מעוניין%20במשלוח%20בלונים%20בירושלים" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                וואטסאפ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;