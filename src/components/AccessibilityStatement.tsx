import React from 'react';
import { Eye, Ear, MousePointer, Keyboard, Users, Phone } from 'lucide-react';

const AccessibilityStatement = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">הצהרת נגישות</h1>
        <p className="text-lg text-gray-600">
          אנו ב"ירושלים בלונים" מחויבים להנגשת השירותים שלנו לכלל הציבור
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">מחויבותנו לנגישות</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            "ירושלים בלונים" מחויבת להנגיש את שירותיה לכלל הציבור, לרבות אנשים עם מוגבלויות, 
            בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות, התשנ"ח-1998 ותקנות הנגישות לשירותי תקשורת.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">רמת הנגישות באתר</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3 space-x-reverse">
              <Eye className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">נגישות חזותית</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• ניגודיות גבוהה בין טקסט לרקע</li>
                  <li>• תמיכה בהגדלת טקסט עד 200%</li>
                  <li>• טקסט חלופי לכל התמונות</li>
                  <li>• עיצוב ידידותי לעיוורי צבעים</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-3 space-x-reverse">
              <Keyboard className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">ניווט במקלדת</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• ניווט מלא באמצעות מקלדת</li>
                  <li>• סדר לוגי של מעבר בין אלמנטים</li>
                  <li>• סימון ברור של פוקוס</li>
                  <li>• קיצורי דרך נגישים</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-3 space-x-reverse">
              <Ear className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">נגישות שמיעתית</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• תמלול לכל תוכן אודיו</li>
                  <li>• כתוביות לסרטונים</li>
                  <li>• אפשרות להשתקת צלילים אוטומטיים</li>
                  <li>• תמיכה בטכנולוגיות עזר</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-3 space-x-reverse">
              <MousePointer className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">נגישות מוטורית</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• כפתורים וקישורים בגודל מתאים</li>
                  <li>• זמן מספיק לביצוע פעולות</li>
                  <li>• אפשרות לביטול פעולות</li>
                  <li>• תמיכה בטכנולוגיות עזר</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">תקנים ובדיקות</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            האתר נבדק ומותאם לתקן הנגישות הבינלאומי WCAG 2.1 ברמה AA, 
            ועומד בדרישות החוק הישראלי לנגישות אתרי אינטרנט.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">פניות ותלונות נגישות</h2>
          <div className="bg-blue-50 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              אם נתקלתם בבעיית נגישות באתר או זקוקים לעזרה, אנא פנו אלינו:
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">טלפון: 050-935-1650</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span className="text-gray-700">וואטסאפ: 050-935-1650</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              נשתדל לחזור אליכם תוך 48 שעות ולפתור כל בעיה בהקדם האפשרי.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">עדכון אחרון</h2>
          <p className="text-gray-700">
            הצהרת נגישות זו עודכנה לאחרונה בתאריך: {new Date().toLocaleDateString('he-IL')}
          </p>
        </section>
      </div>
    </div>
  );
};

export default AccessibilityStatement;