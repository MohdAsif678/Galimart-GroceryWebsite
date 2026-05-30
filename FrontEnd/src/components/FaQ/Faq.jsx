import React, { useState } from "react";
import "./faq.css";

const Faq = [
  {
    id: 1,
    q: "GaliMart क्या है और हम कहाँ डिलीवरी करते हैं?",
    a: (
      <>
        <p>
          GaliMart आपके मोहल्ले की भरोसेमंद ऑनलाइन किराना सेवा है। हम वर्तमान में
          [Service Areas] में डिलीवरी करते हैं। आपका पता थोड़ा बाहर हो तो सपोर्ट से
          संपर्क करें—हम यथासंभव समायोजित करेंगे।
        </p>
      </>
    ),
  },
  {
    id: 2,
    q: "डिलीवरी समय और स्लॉट क्या हैं?",
    a: (
      <>
        <p>
          डिलीवरी समय: [Start Time]–[End Time], [Days]। चेकआउट पर आप
          [Same-day/Next-day] स्लॉट चुन सकते हैं।
        </p>
        <ul>
          <li>
            <strong>ETA अपडेट:</strong> ऑर्डर डिस्पैच होते ही आपको लाइव ETA और स्टेटस
            मिलते रहेंगे।
          </li>
          <li>
            <strong>कट‑ऑफ:</strong> [Cut-off] से पहले ऑर्डर पर वही‑दिन स्लॉट उपलब्ध होता है।
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    q: "न्यूनतम ऑर्डर और डिलीवरी शुल्क क्या है?",
    a: (
      <>
        <ul>
          <li>
            <strong>न्यूनतम ऑर्डर:</strong> ₹[Amount]; इससे कम पर ₹[Fee] छोटा‑कार्ट शुल्क।
          </li>
          <li>
            <strong>डिलीवरी शुल्क:</strong> दूरी/स्लॉट के आधार पर; भुगतान से पहले सटीक शुल्क दिखेगा।
          </li>
          <li>
            <strong>फ्री डिलीवरी:</strong> ₹[Threshold] से ऊपर।
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    q: "ऑर्डर ट्रैक कैसे करें?",
    a: (
      <>
        <p>
          आप ऐप/वेबसाइट पर रियल‑टाइम ट्रैकिंग देख सकते हैं। साथ ही SMS/WhatsApp/इन‑ऐप
          नोटिफिकेशन से पैकिंग से डोरस्टेप तक हर अपडेट मिलता है।
        </p>
      </>
    ),
  },
  {
    id: 5,
    q: "मेरा ऑर्डर लेट हो जाए तो क्या होगा?",
    a: (
      <>
        <p>
          मौसम/ट्रैफिक/सप्लाई के कारण देरी होने पर हम तुरंत सूचित करते हैं और स्लॉट
          बदलने/रिफंड के विकल्प देते हैं।
        </p>
      </>
    ),
  },
  {
    id: 6,
    q: "मिस्ड डिलीवरी पर क्या नीति है?",
    a: (
      <>
        <ul>
          <li>
            <strong>री‑डिलीवरी:</strong> उपलब्ध अगले स्लॉट में; खराब होने वाली वस्तुओं पर
            री‑डिलीवरी शुल्क लग सकता है।
          </li>
          <li>
            <strong>विकल्प:</strong> आपकी अनुमति पर पड़ोसी/सिक्योरिटी के पास छोड़ना या
            संपर्क‑रहित डिलीवरी फोटो पुष्टि के साथ।
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 7,
    q: "रिटर्न/रिफंड कैसे करें?",
    a: (
      <>
        <ul>
          <li>
            <strong>ताज़ा/कोल्ड आइटम:</strong> 24 घंटे में फोटो सहित रिपोर्ट करें।
          </li>
          <li>
            <strong>पैकेज्ड/पैंट्री:</strong> अनओपन/दोष पर 7 दिनों के भीतर।
          </li>
          <li>
            <strong>गलत/क्षतिग्रस्त:</strong> 48 घंटे में रिपोर्ट; पिकअप/तुरंत रिफंड।
          </li>
        </ul>
        <p>
          विस्तृत नियमों के लिए हमारी रिटर्न पॉलिसी देखें।
        </p>
      </>
    ),
  },
  {
    id: 8,
    q: "भुगतान के तरीके कौन‑से हैं?",
    a: (
      <>
        <p>
          हम UPI, कार्ड, वॉलेट, और CoD (यदि उपलब्ध) स्वीकार करते हैं। सफल भुगतान
          पर ई‑इनवॉइस साझा किया जाता है।
        </p>
      </>
    ),
  },
  {
    id: 9,
    q: "GST/इनवॉइस कैसे मिलेगा?",
    a: (
      <>
        <ul>
          <li>
            <strong>GST विवरण:</strong> चेकआउट/प्रोफ़ाइल में GSTIN जोड़ें।
          </li>
          <li>
            <strong>इनवॉइस:</strong> ऑर्डर डिलीवरी के बाद डाउनलोड/ईमेल से उपलब्ध।
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 10,
    q: "ताज़गी और कोल्ड‑चेन कैसे सुनिश्चित करते हैं?",
    a: (
      <>
        <p>
          खराब होने वाली वस्तुएँ तापमान‑नियंत्रित पैकेजिंग में भेजी जाती हैं; हाइजीन
          सील और तेज़ डिलीवरी विंडो का पालन किया जाता है।
        </p>
      </>
    ),
  },
  {
    id: 11,
    q: "सब्स्टीट्यूशन कैसे काम करता है?",
    a: (
      <>
        <p>
          स्टॉक न होने पर हम समान विकल्प सुझाते हैं या पहले आपसे सहमति लेते हैं।
          मूल्य अंतर स्वचालित रूप से समायोजित होता है।
        </p>
      </>
    ),
  },
  {
    id: 12,
    q: "कूपन/प्रोमो कोड की शर्तें क्या हैं?",
    a: (
      <>
        <ul>
          <li>
            <strong>वैधता:</strong> सीमित अवधि/उपयोग, गैर‑हस्तांतरणीय।
          </li>
          <li>
            <strong>न्यूनतम कार्ट:</strong> लागू होने पर चेकआउट पर दिखेगा।
          </li>
          <li>
            <strong>अपवाद:</strong> कुछ श्रेणियाँ/आइटम बाहर हो सकते हैं।
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 13,
    q: "मेरा डेटा कैसे सुरक्षित है और खाता कैसे हटाएँ?",
    a: (
      <>
        <ul>
          <li>
            <strong>सुरक्षा:</strong> एन्क्रिप्शन, एक्सेस कंट्रोल, सीमित रिटेंशन।
          </li>
          <li>
            <strong>अधिकार:</strong> एक्सेस/सुधार/मिटाने/सीमित करने का अनुरोध कर सकते हैं।
          </li>
          <li>
            <strong>खाता हटाना:</strong> सेटिंग्स या हमें [ईमेल] पर लिखें—हम [X] कार्य
            दिवस में प्रोसेस करेंगे।
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 14,
    q: "बल्क/होलसेल ऑर्डर कैसे करें?",
    a: (
      <>
        <p>
          बल्क ऑर्डर/सब्सक्रिप्शन के लिए [ईमेल]/[व्हाट्सएप नंबर] पर ऑर्डर सूची और
          डिलीवरी प्राथमिकताएँ भेजें; हम कस्टम कोट और स्लॉट साझा करेंगे।
        </p>
      </>
    ),
  },
  {
    id: 15,
    q: "सपोर्ट से कैसे संपर्क करें और समय क्या है?",
    a: (
      <>
        <ul>
          <li>
            <strong>संपर्क:</strong> WhatsApp/कॉल: [Number], ईमेल: [Email]
          </li>
          <li>
            <strong>समय:</strong> [Start Time]–[End Time], [Days]
          </li>
          <li>
            <strong>भाषा:</strong> हिंदी/English सपोर्ट उपलब्ध।
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 16,
    q: "ऑर्डर में बदलाव/रद्द कैसे करें?",
    a: (
      <>
        <ul>
          <li>
            <strong>पैकिंग से पहले:</strong> ऑर्डर पेज से मात्रा/स्लॉट बदलें या रद्द करें।
          </li>
          <li>
            <strong>कट‑ऑफ के बाद:</strong> बदलाव सीमित हो सकते हैं; सपोर्ट से बात करें।
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 17,
    q: "संपर्क‑रहित डिलीवरी मिल सकती है?",
    a: (
      <>
        <p>
          हाँ, चेकआउट पर “संपर्क‑रहित डिलीवरी” चुनें या डिलीवरी पार्टनर को निर्देश दें।
          फोटो पुष्टि के साथ आइटम दरवाज़े पर छोड़े जा सकते हैं।
        </p>
      </>
    ),
  },
  {
    id: 18,
    q: "सस्टेनेबिलिटी के लिए हम क्या करते हैं?",
    a: (
      <>
        <ul>
          <li>
            <strong>कम पैकेजिंग:</strong> रिसाइकल‑फ्रेंडली सामग्री।
          </li>
          <li>
            <strong>बैग बाय‑बैक/रिटर्न:</strong> अगली डिलीवरी पर लौटाएँ।
          </li>
        </ul>
      </>
    ),
  },
];

const FAQ = () => {
  const [openIds, setOpenIds] = useState(new Set());

  const toggle = (id) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const expandAll = () => setOpenIds(new Set(Faq.map((f) => f.id)));
  const collapseAll = () => setOpenIds(new Set());

  return (
    <section id="faq" className="faq-container">
      <h1>Frequantly Ask Questions(FAQ)</h1>
      <p>
        हमने आपके सबसे आम सवालों को संक्षेप में उत्तरों के साथ दिया है। अगर आपका सवाल यहाँ नहीं है, तो कृपया हमसे संपर्क करें।
      </p>

      <div className="faq-actions">
        <button type="button" className="faq-action" onClick={expandAll}>
          सब खोलें
        </button>
        <button type="button" className="faq-action" onClick={collapseAll}>
          सब बंद करें
        </button>
      </div>

      <div className="faq-list">
        {Faq.map((item) => {
          const isOpen = openIds.has(item.id);
          const contentId = `faq-panel-${item.id}`;
          const buttonId = `faq-button-${item.id}`;
          return (
            <div className={`faq-item ${isOpen ? "open" : ""}`} key={item.id}>
              <h2 className="faq-question">
                <button
                  id={buttonId}
                  className="faq-toggle"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggle(item.id)}
                >
                  <span className="faq-q-prefix">प्र.</span> {item.q}
                  <span className="faq-icon" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
              </h2>
              <div
                id={contentId}
                className="faq-answer"
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
              >
                <div className="faq-answer-content">
                  <span className="faq-a-prefix">उ.</span> {item.a}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="faq-note">
        नोट: नीतियाँ समय‑समय पर अपडेट हो सकती हैं। नवीनतम जानकारी के लिए हमारी डिलीवरी/रिटर्न/कानूनी पेज देखें।
      </p>

      <p className="effective-date">
        Last Update: [DD MMM YYYY]
      </p>
    </section>
  );
};

export default FAQ;