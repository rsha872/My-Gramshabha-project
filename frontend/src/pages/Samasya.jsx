import { useState } from "react";

function Samasya() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    category: "",
    description: "",
    location: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/api/problems`,{ 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Server response:", data);
      setSubmitted(true);
    } else {
      alert(data.message || "समस्या दर्ज नहीं हो सकी");
    }
  } catch (error) {
    console.error("API Error:", error);
    alert("Backend server से connection नहीं हो पाया");
  }
};

  return (
    <main className="samasya-page">
      <section className="page-header">
        <p className="small-title">⚠️ समस्या / सुझाव</p>

        <h1>
          गाँव की समस्या
          <span> हमारे साथ साझा करें</span>
        </h1>

        <p>
          गाँव से जुड़ी समस्या या अपना सुझाव यहाँ दर्ज करें।
          यह प्लेटफॉर्म नागरिक भागीदारी के उद्देश्य से बनाया गया है।
        </p>
      </section>

      <section className="samasya-container">
        {submitted ? (
          <div className="success-message">
            <div className="success-icon">✅</div>

            <h2>समस्या सफलतापूर्वक दर्ज हुई</h2>

            <p>
              आपकी जानकारी प्राप्त हो गई है।
              आगे की प्रक्रिया के लिए संबंधित जानकारी
              उपलब्ध होने पर अपडेट किया जा सकता है।
            </p>

            <button
              className="primary-btn"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: "",
                  mobile: "",
                  category: "",
                  description: "",
                  location: "",
                });
              }}
            >
              नई समस्या दर्ज करें
            </button>
          </div>
        ) : (
          <form className="samasya-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>आपका नाम *</label>

              <input
                type="text"
                name="name"
                placeholder="अपना नाम लिखें"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>मोबाइल नंबर *</label>

              <input
                type="tel"
                name="mobile"
                placeholder="10 अंकों का मोबाइल नंबर"
                value={formData.mobile}
                onChange={handleChange}
                pattern="[0-9]{10}"
                maxLength="10"
                required
              />
            </div>

            <div className="form-group">
              <label>समस्या की श्रेणी *</label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">श्रेणी चुनें</option>
                <option value="बिजली">💡 बिजली</option>
                <option value="सड़क">🛣️ सड़क</option>
                <option value="पानी">💧 पानी</option>
                <option value="सफाई">🧹 सफाई</option>
                <option value="शिक्षा">🎓 शिक्षा</option>
                <option value="स्वास्थ्य">🏥 स्वास्थ्य</option>
                <option value="सरकारी योजना">📋 सरकारी योजना</option>
                <option value="अन्य">📌 अन्य</option>
              </select>
            </div>

            <div className="form-group">
              <label>स्थान</label>

              <input
                type="text"
                name="location"
                placeholder="समस्या का स्थान"
                value={formData.location}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>समस्या का विवरण *</label>

              <textarea
                name="description"
                placeholder="अपनी समस्या विस्तार से लिखें..."
                rows="6"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label>समस्या की फोटो</label>

              <input
                type="file"
                accept="image/*"
              />

              <small>
                यदि उपलब्ध हो तो समस्या से संबंधित फोटो जोड़ सकते हैं।
              </small>
            </div>

            <div className="form-note">
              <strong>ℹ️ महत्वपूर्ण सूचना</strong>

              <p>
                यह वेबसाइट नागरिक सुविधा और सामुदायिक भागीदारी
                के उद्देश्य से संचालित की जा रही है। समस्या दर्ज
                करने से किसी सरकारी विभाग में स्वतः शिकायत दर्ज
                होने की गारंटी नहीं है।
              </p>
            </div>

            <button type="submit" className="primary-btn submit-btn">
              📤 समस्या दर्ज करें
            </button>
          </form>
        )}
      </section>
    </main>
  );
}

export default Samasya;