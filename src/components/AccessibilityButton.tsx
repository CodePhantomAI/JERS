import React, { useState } from 'react';
import { Eye, Type, Contrast, MousePointer, X } from 'lucide-react';

const AccessibilityButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);

  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 10, 150);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 10, 80);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const resetFontSize = () => {
    setFontSize(100);
    document.documentElement.style.fontSize = '100%';
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    if (!highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  };

  return (
    <>
      {/* Accessibility Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
        aria-label="פתח תפריט נגישות"
        title="נגישות"
      >
        <Eye className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">תפריט נגישות</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="סגור תפריט נגישות"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Font Size Controls */}
                <div className="border-b pb-4">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Type className="w-5 h-5 ml-2" />
                    גודל טקסט
                  </h3>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={decreaseFontSize}
                      className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg transition-colors"
                      disabled={fontSize <= 80}
                    >
                      הקטן
                    </button>
                    <span className="font-medium">{fontSize}%</span>
                    <button
                      onClick={increaseFontSize}
                      className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg transition-colors"
                      disabled={fontSize >= 150}
                    >
                      הגדל
                    </button>
                  </div>
                  <button
                    onClick={resetFontSize}
                    className="w-full mt-2 bg-blue-100 hover:bg-blue-200 text-blue-800 py-2 rounded-lg transition-colors"
                  >
                    איפוס
                  </button>
                </div>

                {/* High Contrast */}
                <div className="border-b pb-4">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Contrast className="w-5 h-5 ml-2" />
                    ניגודיות גבוהה
                  </h3>
                  <button
                    onClick={toggleHighContrast}
                    className={`w-full py-3 rounded-lg transition-colors ${
                      highContrast
                        ? 'bg-yellow-500 hover:bg-yellow-600 text-black'
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                    }`}
                  >
                    {highContrast ? 'כבה ניגודיות גבוהה' : 'הפעל ניגודיות גבוהה'}
                  </button>
                </div>

                {/* Keyboard Navigation Info */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <MousePointer className="w-5 h-5 ml-2" />
                    ניווט במקלדת
                  </h3>
                  <div className="text-sm text-gray-600 space-y-2">
                    <p><kbd className="bg-gray-100 px-2 py-1 rounded">Tab</kbd> - מעבר בין אלמנטים</p>
                    <p><kbd className="bg-gray-100 px-2 py-1 rounded">Enter</kbd> - הפעלת קישור/כפתור</p>
                    <p><kbd className="bg-gray-100 px-2 py-1 rounded">Esc</kbd> - סגירת חלונות</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* High Contrast Styles */}
      <style jsx global>{`
        .high-contrast {
          filter: contrast(150%) brightness(120%);
        }
        .high-contrast * {
          text-shadow: none !important;
          box-shadow: none !important;
        }
      `}</style>
    </>
  );
};

export default AccessibilityButton;