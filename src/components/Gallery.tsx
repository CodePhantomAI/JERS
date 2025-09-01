import React from 'react';
import { Heart, Star, Gift, Crown } from 'lucide-react';

const Gallery = () => {
  const galleryItems = [
    {
      image: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756751683/WhatsApp_Image_2022-09-15_at_08.14.20_rq22xi.jpg',
      title: 'הצעת נישואין רומנטית',
      description: 'סידור בלונים בצורת לב להצעת נישואין בירושלים',
      icon: Heart
    },
    {
      image: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756751596/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp_2024-09-13_%D7%91%D7%A9%D7%A2%D7%94_16.18.37_18c17b53_kkfo0x.jpg',
      title: 'סידור בלונים ליום הולדת',
      description: 'עיצוב צבעוני ושמח ליום הולדת מיוחד',
      icon: Gift
    },
    {
      image: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756751596/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp_2024-02-20_%D7%91%D7%A9%D7%A2%D7%94_08.11.43_6ccb1cce_stlicf.jpg',
      title: 'בלונים לחתונה',
      description: 'עיצוב אלגנטי בגוונים עדינים לחתונה בירושלים',
      icon: Crown
    },
    {
      image: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756751596/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp_2024-08-01_%D7%91%D7%A9%D7%A2%D7%94_21.28.33_605a946d_tzeaod.jpg',
      title: 'בלונים לבר מצווה',
      description: 'סידור מרהיב ומותאם אישית לבר מצווה',
      icon: Star
    },
    {
      image: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756751684/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp_2025-05-25_%D7%91%D7%A9%D7%A2%D7%94_17.08.39_499cb384_hxeipd.jpg',
      title: 'בלונים מספרים',
      description: 'בלונים בצורת מספרים לכל סוגי החגיגות',
      icon: Gift
    },
    {
      image: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756751596/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp_2024-09-13_%D7%91%D7%A9%D7%A2%D7%94_16.18.37_18c17b53_kkfo0x.jpg',
      title: 'עיצובים מיוחדים',
      description: 'בלונים מותאמים אישית לכל אירוע מיוחד',
      icon: Heart
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            הגלריה שלנו
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            צפו בעבודות המרהיבות שלנו - <strong>סידור בלונים בירושלים</strong> ו<strong>הצעות נישואין</strong> 
            שהפכו לזיכרונות יפים ובלתי נשכחים. בשיתוף עם 
            <a 
              href="https://yaffakalevana.co.il/%d7%94%d7%a6%d7%a2%d7%95%d7%aa-%d7%a0%d7%99%d7%a9%d7%95%d7%90%d7%99%d7%9f-%d7%91%d7%99%d7%a8%d7%95%d7%a9%d7%9c%d7%99%d7%9d-%d7%99%d7%a4%d7%94-%d7%9b%d7%9c%d7%91%d7%a0%d7%94/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-700 font-semibold underline"
            >
              הצעות נישואין בירושלים - יפה כלבנה
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
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  loading={index < 6 ? "eager" : "lazy"}
                  width="600"
                  height="400"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <item.icon className="w-5 h-5 text-pink-500" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Keywords Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap gap-3 justify-center">
            {[
              'משלוחי בלונים בירושלים',
              'הצעות נישואין בירושלים', 
              'סידור בלונים בירושלים',
              'בלונים ירושלים',
              'עיצוב בלונים',
              'הצעת נישואין',
              'בלונים לאירועים'
            ].map((keyword, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 text-gray-700 rounded-full text-sm font-medium hover:from-pink-200 hover:to-purple-200 transition-colors cursor-default"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;