import React from 'react';
import { Heart, Star, Gift } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-pink-900/70 via-purple-900/50 to-blue-900/70"></div>
      </div>

      {/* Floating Balloons Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 animate-bounce">
          <div className="w-4 h-6 bg-pink-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-32 left-20 animate-pulse">
          <div className="w-5 h-7 bg-blue-400 rounded-full opacity-50"></div>
        </div>
        <div className="absolute bottom-40 right-32 animate-bounce" style={{ animationDelay: '1s' }}>
          <div className="w-3 h-5 bg-yellow-400 rounded-full opacity-40"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="flex items-center justify-center mb-6">
          <Heart className="w-12 h-12 text-pink-400 ml-4" />
          <h1 className="text-5xl md:text-7xl font-bold">
            משלוחי בלונים
            <span className="block text-pink-300">בירושלים</span>
          </h1>
        </div>
        
        <div className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          <p className="mb-4">
            הפכו כל רגע מיוחד לבלתי נשכח עם <strong>משלוחי בלונים מקצועיים בירושלים</strong>. 
            מתמחים ב<strong>הצעות נישואין בירושלים</strong> ו<strong>סידור בלונים</strong> לכל אירוע.
          </p>
          <p>
            שירות מהיר ואמין בכל רחבי ירושלים - מהזמנה ועד משלוח עד הבית תוך זמן קצר.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 max-w-4xl mx-auto border border-white/20 text-right">
          <h2 className="text-2xl font-semibold mb-6 text-center">שאלות נפוצות</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
            <div>
              <h3 className="font-semibold mb-2 text-pink-300">כמה זמן לוקח משלוח בלונים בירושלים?</h3>
              <p className="text-white/90">משלוח מהיר תוך 2-4 שעות לכל רחבי ירושלים, בהזמנה מראש ניתן לתאם זמן מדויק.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-pink-300">איך מזמינים הצעת נישואין בירושלים?</h3>
              <p className="text-white/90">התקשרו אלינו לייעוץ אישי ותכנון מפורט של ההצעה הרומנטית המושלמת עבורכם.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-pink-300">איזה אזורים בירושלים אתם משרתים?</h3>
              <p className="text-white/90">משרתים את כל רחבי ירושלים - מרכז העיר, שכונות חרדיות, גילה, פסגת זאב ועוד.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-pink-300">מה כלול בסידור בלונים מקצועי?</h3>
              <p className="text-white/90">בלונים איכותיים, עיצוב מותאם אישית, הגעה למקום, הקמה מקצועית ותמיכה לאורך האירוע.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            <Gift className="w-5 h-5 inline ml-2" />
            הזמינו עכשיו
          </button>
          <a 
            href="https://wa.me/972509351650?text=שלום,%20אני%20מעוניין%20במשלוח%20בלונים%20בירושלים" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
          >
            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            וואטסאפ
          </a>
          <button 
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
          >
            צפו בגלריה
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <Star className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">איכות מעולה</h3>
            <p className="text-white/90">בלונים איכותיים ומסודרים בקפידה למראה מושלם</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <Heart className="w-10 h-10 text-pink-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">הצעות נישואין</h3>
            <p className="text-white/90">עיצובים רומנטיים מיוחדים לרגע הכי חשוב</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <Gift className="w-10 h-10 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">משלוח מהיר</h3>
            <p className="text-white/90">משלוח עד הבית בירושלים תוך זמן קצר</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;