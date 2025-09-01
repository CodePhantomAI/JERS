import React, { useState, useEffect } from 'react';
import { Cookie, X, Settings, Check } from 'lucide-react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptSelected = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  const rejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    };
    setPreferences(onlyNecessary);
    localStorage.setItem('cookie-consent', JSON.stringify(onlyNecessary));
    setShowBanner(false);
    setShowSettings(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-2xl z-50 p-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-start space-x-4 space-x-reverse">
            <Cookie className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                שימוש בעוגיות (Cookies)
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                אנו משתמשים בעוגיות כדי לשפר את חוויית הגלישה שלכם, לנתח תנועה באתר ולהציג תוכן מותאם אישית. 
                בהמשך הגלישה באתר אתם מסכימים לשימוש בעוגיות בהתאם למדיניות הפרטיות שלנו.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={acceptAll}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center"
                >
                  <Check className="w-4 h-4 ml-2" />
                  אישור לכל העוגיות
                </button>
                <button
                  onClick={rejectAll}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  דחיית עוגיות לא חיוניות
                </button>
                <button
                  onClick={() => setShowSettings(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center"
                >
                  <Settings className="w-4 h-4 ml-2" />
                  הגדרות מתקדמות
                </button>
              </div>
            </div>
            <button
              onClick={rejectAll}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
              aria-label="סגור הודעת עוגיות"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">הגדרות עוגיות</h2>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="סגור הגדרות עוגיות"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Necessary Cookies */}
                <div className="border-b pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">עוגיות חיוניות</h3>
                    <div className="bg-gray-300 rounded-full p-1">
                      <div className="bg-green-500 w-6 h-6 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    עוגיות אלו חיוניות לתפקוד האתר ולא ניתן לכבותן. הן כוללות הגדרות אבטחה ופונקציונליות בסיסית.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="border-b pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">עוגיות אנליטיות</h3>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600">
                    עוגיות אלו עוזרות לנו להבין כיצד המבקרים משתמשים באתר ולשפר את הביצועים.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="border-b pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">עוגיות שיווקיות</h3>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={(e) => setPreferences({...preferences, marketing: e.target.checked})}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600">
                    עוגיות אלו משמשות להצגת פרסומות רלוונטיות ולמדידת יעילות הקמפיינים השיווקיים.
                  </p>
                </div>

                {/* Functional Cookies */}
                <div className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">עוגיות פונקציונליות</h3>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.functional}
                        onChange={(e) => setPreferences({...preferences, functional: e.target.checked})}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600">
                    עוגיות אלו מאפשרות פונקציות משופרות כמו שמירת העדפות ותכנים מותאמים אישית.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={acceptSelected}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  שמור הגדרות
                </button>
                <button
                  onClick={acceptAll}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  אישור לכל העוגיות
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;