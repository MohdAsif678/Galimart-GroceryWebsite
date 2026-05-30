// DeliveryPage.jsx (relevant parts)
import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import "./deliveryPage.css";

export default function DeliveryPage() {
  const { url, token } = useContext(StoreContext);
  const [latestOrder, setLatestOrder] = useState(null);
  const [showStatus, setShowStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchLatestOrder = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${url}/api/order/userorders/latest`,
        {},
        { headers: { token } }
      );
      setLatestOrder(res.data.data);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchLatestOrder();
  }, []);

  const handleTrackClick = async () => {
    await fetchLatestOrder();
    setShowStatus(true);
  };

  return (
    <main className="delivery-page">
      <div className="container2">
        <div className="btn_track">
          <button onClick={handleTrackClick} className="track-btn">
            Track Delivery Status
          </button>

          {showStatus && (
            <>
              {loading && <span className="order-status">Loading…</span>}
              {!loading && latestOrder && (
                <span className="order-status">
                  <p>Status: {latestOrder.status}</p>
                </span>
              )}
            </>
          )}
        </div>

        <div className="grid">
          <section className="instructions">
            <div className="card">
              <h2>डिलिवरी निर्देश</h2>
              <ul>
                <li>पैकेज लेने के लिए घर पर कोई मौजूद रहे</li>
                <li>भुगतान के लिए सही रकम (कैश) तैयार रखें</li>
                <li>पैकेज लेने से पहले सामान को अच्छी तरह जाँच लें</li>
              </ul>
            </div>

            <div className="card">
              <h2>रिटर्न के आसान नियम</h2>
              <ul>
                <li>डिलिवरी के 2 दिन के अंदर रिटर्न कर सकते हैं</li>
                <li>सामान नया हो और पैकिंग खुली न हो</li>
                <li>रिटर्न शुरू करने के लिए कस्टमर सपोर्ट से बात करें</li>
              </ul>
            </div>
          </section>
          <aside className="summary">
            <div className="card">
              <h2>भुगतान का तरीका</h2>

              {latestOrder && (
                <span className="order-amount">
                  <strong>Total Amount :</strong> ₹{latestOrder.amount}.00
                </span>
              )}

              <p>
                <strong>Payment Method :</strong>
                <span className="cod">Cash on Delivery</span>
              </p>
              <p className="note">
                <li>ऑर्डर मिलने पर डिलिवरी वाले को सही रकम दें</li>
                <li>पेमेंट सिर्फ कैश में होगा, और पैसे पहले से तैयार रखें</li>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
