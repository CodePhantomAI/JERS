import React from 'react';
import { Shield, Eye, Lock, Database, UserCheck, AlertTriangle } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">מדיניות פרטיות</h1>
        <p className="text-lg text-gray-600">
          אנו ב"ירושלים בלונים" מחויבים להגנה על פרטיותכם
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <div className="flex items-center space-x-3 space-x-reverse mb-4">
            <UserCheck className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-semibold text-gray-800">מי אנחנו</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            "ירושלים בלונים" הוא עסק המתמחה במשלוחי בלונים והצעות נישואין בירושלים. 
            אנו פועלים בהתאם לחוק הגנת הפרטיות, התשמ"א-1981 ותקנות הגנת הפרטיות (אבטחת מידע), התשע"ז-2017.
          </p>
        </section>

        <section>
          <div className="flex items-center space-x-3 space-x-reverse mb-4">
            <Database className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-800">איזה מידע אנו אוספים</h2>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">מידע שאתם מספקים לנו:</h3>
              <ul className="text-gray-700 space-y-2 mr-6">
                <li>• שם מלא ופרטי קשר (טלפון, כתובת)</li>
                <li>• פרטי ההזמנה (סוג השירות, תאריך, מיקום)</li>
                <li>• העדפות אישיות לעיצוב הבלונים</li>
                <li>• מידע תשלום (מעובד באופן מאובטח)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">מידע שנאסף אוטומטית:</h3>
              <ul className="text-gray-700 space-y-2 mr-6">
                <li>• כתובת IP ומידע על הדפדפן</li>
                <li>• עוגיות לשיפור חוויית הגלישה</li>
                <li>• נתוני שימוש באתר (Google Analytics)</li>
                <li>• מידע מרשתות חברתיות (אם בחרתם לחבר)</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center space-x-3 space-x-reverse mb-4">
            <Eye className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-semibold text-gray-800">למה אנו משתמשים במידע</h2>
          </div>
          <ul className="text-gray-700 space-y-2 mr-6">
            <li>• מתן השירותים שהזמנתם (משלוח בלונים, הצעות נישואין)</li>
            <li>• יצירת קשר לתיאום פרטי ההזמנה</li>
            <li>• שיפור השירות וחוויית הלקוח</li>
            <li>• שליחת עדכונים על הזמנות (SMS/WhatsApp)</li>
            <li>• שיווק ופרסום (רק באישורכם המפורש)</li>
            <li>• עמידה בדרישות חוק ותקנות</li>
          </ul>
        </section>

        <section>
          <div className="flex items-center space-x-3 space-x-reverse mb-4">
            <Lock className="w-6 h-6 text-red-600" />
            <h2 className="text-2xl font-semibold text-gray-800">אבטחת המידע</h2>
          </div>
          <div className="bg-red-50 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              אנו נוקטים באמצעי אבטחה מתקדמים להגנה על המידע שלכם:
            </p>
            <ul className="text-gray-700 space-y-2 mr-6">
              <li>• הצפנת SSL לכל העברות המידע</li>
              <li>• שרתים מאובטחים עם גיבויים קבועים</li>
              <li>• הגבלת גישה למידע לעובדים מורשים בלבד</li>
              <li>• עדכון קבוע של מערכות האבטחה</li>
              <li>• מחיקת מידע שאינו נדרש יותר</li>
            </ul>
          </div>
        </section>

        <section>
          <div className="flex items-center space-x-3 space-x-reverse mb-4">
            <AlertTriangle className="w-6 h-6 text-orange-600" />
            <h2 className="text-2xl font-semibold text-gray-800">שיתוף מידע עם צדדים שלישיים</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            אנו לא מוכרים או משתפים את המידע האישי שלכם עם צדדים שלישיים, למעט במקרים הבאים:
          </p>
          <ul className="text-gray-700 space-y-2 mr-6">
            <li>• ספקי שירות הכרחיים (משלוחים, תשלומים)</li>
            <li>• דרישה חוקית מרשויות המדינה</li>
            <li>• באישורכם המפורש מראש</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">הזכויות שלכם</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">זכות עיון</h3>
              <p className="text-gray-700 text-sm">לדעת איזה מידע אנו שומרים עליכם</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">זכות תיקון</h3>
              <p className="text-gray-700 text-sm">לתקן מידע שגוי או לא מעודכן</p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">זכות מחיקה</h3>
              <p className="text-gray-700 text-sm">לבקש מחיקת המידע שלכם</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">זכות התנגדות</h3>
              <p className="text-gray-700 text-sm">להתנגד לעיבוד מידע לשיווק</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">יצירת קשר</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              לשאלות או בקשות בנושא פרטיות, פנו אלינו:
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">📞 טלפון: 050-935-1650</p>
              <p className="text-gray-700">💬 וואטסאפ: 050-935-1650</p>
              <p className="text-gray-700">📍 כתובת: ירושלים, ישראל</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">עדכונים למדיניות</h2>
          <p className="text-gray-700 leading-relaxed">
            אנו עשויים לעדכן מדיניות פרטיות זו מעת לעת. עדכונים יפורסמו באתר זה 
            ויכנסו לתוקף מיד עם פרסומם. המשך השימוש באתר מהווה הסכמה לעדכונים.
          </p>
          <p className="text-sm text-gray-600 mt-4">
            עדכון אחרון: {new Date().toLocaleDateString('he-IL')}
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;