@@ .. @@
 import React from 'react';
 import Header from './components/Header';
 import Hero from './components/Hero';
 import Services from './components/Services';
 import About from './components/About';
 import Gallery from './components/Gallery';
 import WhyChooseUs from './components/WhyChooseUs';
 import Footer from './components/Footer';
+import BreadcrumbSchema from './components/BreadcrumbSchema';

 function App() {
+  const breadcrumbItems = [
+    { name: "בית", url: "https://jerusalem-balloons.co.il/" },
+    { name: "שירותים", url: "https://jerusalem-balloons.co.il/#services" },
+    { name: "אודות", url: "https://jerusalem-balloons.co.il/#about" },
+    { name: "גלריה", url: "https://jerusalem-balloons.co.il/#gallery" }
+  ];
+
   return (
     <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50" dir="rtl">
+      <BreadcrumbSchema items={breadcrumbItems} />
       <Header />
       <Hero />
       <Services />
       <About />
       <Gallery />
       <WhyChooseUs />
       <Footer />
     </div>
   );
 }