import React from 'react';
import { Heart, Gift, Star, Sparkles, Crown, Cake } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'הצעות נישואין בירושלים',
      description: 'עיצוב מיוחד ורומנטי להצעת הנישואין המושלמת בירושלים. בלונים בצורת לב, אותיות וקישוטים מיוחדים',
      keywords: ['הצעות נישואין בירושלים', 'הצעת נישואין רומנטית', 'בלונים להצעת נישואין'],
      image: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756751683/WhatsApp_Image_2022-09-15_at_08.14.20_rq22xi.jpg'
    },
    {
      icon: Gift,
      title: 'משלוחי בלונים בירושלים',
      description: 'משלוח מהיר ואמין של בלונים לכל רחבי ירושלים. שירות מקצועי עם מגוון רחב של בלונים איכותיים',
      keywords: ['משלוחי בלונים בירושלים', 'משלוח בלונים מהיר', 'בלונים ירושלים'],
      image: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756751596/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp_2024-09-13_%D7%91%D7%A9%D7%A2%D7%94_16.18.37_18c17b53_kkfo0x.jpg'
    },
    {
      icon: Star,
      title: 'סידור בלונים בירושלים',
      description: 'סידור מקצועי של בלונים לאירועים, חגיגות ומועדים מיוחדים. עיצובים יצירתיים ומותאמים אישית',
      keywords: ['סידור בלונים בירושלים', 'עיצוב בלונים', 'בלונים לאירועים'],
      image: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756751596/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp_2024-02-20_%D7%91%D7%A9%D7%A2%D7%94_08.11.43_6ccb1cce_stlicf.jpg'
    },
    {
      icon: Sparkles,
      title: 'בלונים ליום הולדת',
      description: 'עיצובים מיוחדים ליום הולדת בירושלים. בלונים צבעוניים, מספרים ואותיות לחגיגה מושלמת',
      keywords: ['בלונים ליום הולדת', 'עיצוב יום הולדת ירושלים', 'בלונים מספרים'],
      image: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756751596/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp_2024-08-01_%D7%91%D7%A9%D7%A2%D7%94_21.28.33_605a946d_tzeaod.jpg'
    },
    {
      icon: Crown,
      title: 'בלונים לבר/בת מצווה',
      description: 'עיצובים מרהיבים לבר ובת מצווה בירושלים. סידורי בלונים אלגנטיים ומותאמים לאירוע החשוב',
      keywords: ['בלונים לבר מצווה', 'בלונים לבת מצווה', 'עיצוב בר מצווה ירושלים'],
      image: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756751595/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp_2023-06-21_%D7%91%D7%A9%D7%A2%D7%94_02.15.26_cgpvin.jpg'
    },
    {
      icon: Cake,
      title: 'בלונים לחתונות',
      description: 'עיצובים רומנטיים ואלגנטיים לחתונות בירושלים. בלונים בגוונים עדינים ליום החתונה המושלם',
      keywords: ['בלונים לחתונה', 'עיצוב חתונה ירושלים', 'בלונים רומנטיים'],
      image: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756751596/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp_2024-02-20_%D7%91%D7%A9%D7%A2%D7%94_08.11.43_6ccb1cce_stlicf.jpg'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            השירותים שלנו
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            מתמחים במתן שירותי <strong>משלוחי בלונים בירושלים</strong> ו<strong>סידור בלונים מקצועי</strong> 
            לכל סוגי האירועים וההזדמנויות המיוחדות. בשיתוף עם מומחים ב
            <a 
              href="https://yaffakalevana.co.il/%d7%94%d7%a6%d7%a2%d7%95%d7%aa-%d7%a0%d7%99%d7%a9%d7%95%d7%90%d7%99%d7%9f-%d7%91%d7%99%d7%a8%d7%95%d7%a9%d7%9c%d7%99%d7%9d-%d7%99%d7%a4%d7%94-%d7%9b%d7%9c%d7%91%d7%a0%d7%94/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-700 font-semibold underline mx-1"
            >
              יפה כלבנה - הצעות נישואין
            </a>
            ו
            <a 
              href="https://happy-balloons.co.il/%D7%91%D7%9C%D7%95%D7%A0%D7%99%D7%9D-%D7%91%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D-%D7%95%D7%94%D7%A1%D7%91%D7%99%D7%91%D7%94/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-700 font-semibold underline mx-1"
            >
              משלוחי בלונים בירושלים
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  loading={index < 3 ? "eager" : "lazy"}
                  width="800"
                  height="600"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-full">
                  <service.icon className="w-6 h-6 text-pink-500" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3" itemProp="name">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed" itemProp="description">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.keywords.map((keyword, keyIndex) => (
                    <span 
                      key={keyIndex}
                      className="px-3 py-1 bg-pink-100 text-pink-600 text-sm rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;