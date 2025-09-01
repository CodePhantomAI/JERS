import React from 'react';
import { MapPin, Clock, Users, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'לקוחות מרוצים' },
    { icon: Award, number: '5', label: 'שנות ניסיון' },
    { icon: Clock, number: '24/7', label: 'זמינות' },
    { icon: MapPin, number: '100%', label: 'ירושלים ואזור' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              מי אנחנו?
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong>ירושלים בלונים</strong> הוא המקום המוביל ל<strong>משלוחי בלונים בירושלים</strong> 
                ו<strong>סידור בלונים מקצועי</strong>. אנחנו מתמחים ביצירת חוויות בלתי נשכחות 
                לכל סוגי האירועים והחגיגות. אנחנו עובדים בשיתוף עם 
                <a 
                  href="https://happy-balloons.co.il/%D7%91%D7%9C%D7%95%D7%A0%D7%99%D7%9D-%D7%91%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D-%D7%95%D7%94%D7%A1%D7%91%D7%99%D7%91%D7%94/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-700 font-semibold underline mx-1"
                >
                  משלוחי בלונים בירושלים
                </a>
                כדי להבטיח איכות ושירות ברמה הגבוהה ביותר.
              </p>
              <p>
                הצוות המקצועי שלנו מביא שנות ניסיון ב<strong>עיצוב בלונים בירושלים</strong> 
                ומתמחה במיוחד ב<strong>הצעות נישואין בירושלים</strong>. בשיתוף עם 
                <a 
                  href="https://yaffakalevana.co.il/%d7%94%d7%a6%d7%a2%d7%95%d7%aa-%d7%a0%d7%99%d7%a9%d7%95%d7%90%d7%99%d7%9f-%d7%91%d7%99%d7%a8%d7%95%d7%a9%d7%9c%d7%99%d7%9d-%d7%99%d7%a4%d7%94-%d7%9b%d7%9c%d7%91%d7%a0%d7%94/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-700 font-semibold underline mx-1"
                >
                  הצעות נישואין בירושלים - יפה כלבנה
                </a>
                , אנחנו יודעים איך להפוך רגעים רגילים לרגעים קסומים ובלתי נשכחים.
              </p>
              <p>
                המטרה שלנו היא לספק שירות מקצועי, אמין ומהיר לכל לקוחותינו ברחבי 
                ירושלים ובאזור, עם דגש על איכות גבוהה ויחס אישי לכל לקוח.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <stat.icon className="w-8 h-8 text-pink-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-800 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;