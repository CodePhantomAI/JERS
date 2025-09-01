import React from 'react';
import { Heart, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 space-x-reverse mb-6">
              <Heart className="w-8 h-8 text-pink-500" />
              <span className="text-2xl font-bold">ירושלים בלונים</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              המקום המוביל ל<strong>משלוחי בלונים בירושלים</strong>, <strong>סידור בלונים מקצועי</strong> 
              ו<strong>הצעות נישואין בירושלים</strong>. אנחנו כאן כדי להפוך כל רגע מיוחד לבלתי נשכח.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">השירותים שלנו</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-pink-400 transition-colors cursor-pointer">
                משלוחי בלונים בירושלים
              </li>
              <li className="hover:text-pink-400 transition-colors cursor-pointer">
                הצעות נישואין בירושלים
              </li>
              <li className="hover:text-pink-400 transition-colors cursor-pointer">
                סידור בלונים לאירועים
              </li>
              <li className="hover:text-pink-400 transition-colors cursor-pointer">
                בלונים ליום הולדת
              </li>
              <li className="hover:text-pink-400 transition-colors cursor-pointer">
                בלונים לחתונות
              </li>
              <li className="hover:text-pink-400 transition-colors cursor-pointer">
                בלונים לבר/בת מצווה
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">פרטי התקשרות</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 space-x-reverse text-gray-300">
                <Phone className="w-5 h-5 text-pink-500" />
                <a href="tel:+972509351650" className="hover:text-pink-400 transition-colors">
                  050-935-1650
                </a>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse text-gray-300">
                <MapPin className="w-5 h-5 text-pink-500" />
                <span>ירושלים ואזור</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse text-gray-300">
                <Clock className="w-5 h-5 text-pink-500" />
                <span>ראשון-חמישי 8:00-20:00</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse text-gray-300">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <a href="https://wa.me/972509351650?text=שלום,%20אני%20מעוניין%20במשלוח%20בלונים%20בירושלים" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                  וואטסאפ
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Keywords Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">מילות מפתח:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                'משלוחי בלונים בירושלים',
                'הצעות נישואין בירושלים',
                'סידור בלונים בירושלים',
                'בלונים ירושלים',
                'הצעת נישואין',
                'משלוח בלונים',
                'עיצוב בלונים',
                'בלונים לאירועים',
                'בלונים לחתונה',
                'בלונים ליום הולדת'
              ].map((keyword, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Partner Links Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">שותפים מומלצים:</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://happy-balloons.co.il" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                משלוחי בלונים בירושלים
              </a>
              <a href="https://yaffakalevana.co.il/%d7%94%d7%a6%d7%a2%d7%95%d7%aa-%d7%a0%d7%99%d7%a9%d7%95%d7%90%d7%99%d7%9f-%d7%91%d7%99%d7%a8%d7%95%d7%a9%d7%9c%d7%99%d7%9d-%d7%99%d7%a4%d7%94-%d7%9b%d7%9c%d7%91%d7%a0%d7%94/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                הצעות נישואין בירושלים - יפה כלבנה
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 ירושלים בלונים. כל הזכויות שמורות. 
            <span className="mx-2">|</span>
            <strong>משלוחי בלונים בירושלים</strong> ו<strong>הצעות נישואין מקצועיות</strong>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            <a 
              href="https://eranfixer.com/jerusalem-seo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              קידום אתרים בירושלים
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;