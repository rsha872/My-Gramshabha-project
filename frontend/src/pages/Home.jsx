import { Link } from "react-router-dom";

function Home() {
  return (
    <main>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">

          <p className="tagline">
            🌱 हमारा गाँव • हमारी भागीदारी
          </p>

          <h1>
            मछमरवा के विकास की
            <span> डिजिटल पहल</span>
          </h1>

          <p>
            गाँव की योजनाएँ, विकास कार्य, महत्वपूर्ण
            सूचनाएँ और नागरिकों की समस्याएँ — एक ही जगह।
          </p>

          <div className="hero-buttons">

            <Link to="/yojna">
              <button className="primary-btn">
                योजनाएँ देखें
              </button>
            </Link>

            <Link to="/samasya">
              <button className="secondary-btn">
                समस्या दर्ज करें
              </button>
            </Link>

          </div>

        </div>
      </section>


      {/* Services */}
      <section className="services">

        <div className="section-heading">
          <p>एक जगह, कई सुविधाएँ</p>
          <h2>गाँव से जुड़ी जानकारी</h2>
        </div>

        <div className="service-grid">

          <div className="service-card">
            <div className="icon">📋</div>

            <h3>सरकारी योजनाएँ</h3>

            <p>
              पात्रता, आवश्यक दस्तावेज और आवेदन
              प्रक्रिया की जानकारी।
            </p>

            <Link to="/yojna">
              जानकारी देखें →
            </Link>
          </div>


          <div className="service-card">
            <div className="icon">🛠️</div>

            <h3>विकास कार्य</h3>

            <p>
              गाँव में चल रहे और पूरे हुए विकास
              कार्यों की जानकारी।
            </p>

            <Link to="/vikas">
              कार्य देखें →
            </Link>
          </div>


          <div className="service-card">
            <div className="icon">⚠️</div>

            <h3>समस्या दर्ज करें</h3>

            <p>
              गाँव की समस्या या अपना सुझाव
              साझा करें।
            </p>

            <Link to="/samasya">
              समस्या दर्ज करें →
            </Link>
          </div>


          <div className="service-card">
            <div className="icon">📢</div>

            <h3>गाँव की सूचना</h3>

            <p>
              महत्वपूर्ण सूचनाएँ और community
              updates देखें।
            </p>

            <Link to="/suchna">
              सूचनाएँ देखें →
            </Link>
          </div>

        </div>

      </section>


      {/* Development */}
      <section className="development">

        <div>

          <p className="small-title">
            🏗️ विकास की दिशा
          </p>

          <h2>
            हमारा लक्ष्य एक
            <span> बेहतर और जुड़ा हुआ गाँव</span>
          </h2>

          <p>
            डिजिटल माध्यम से गाँव की उपयोगी जानकारी
            को व्यवस्थित और आसानी से उपलब्ध कराना।
          </p>

          <Link to="/vikas">
            <button className="primary-btn">
              विकास कार्य देखें
            </button>
          </Link>

        </div>


        <div className="stats">

          <div>
            <strong>0</strong>
            <span>विकास कार्य</span>
          </div>

          <div>
            <strong>0</strong>
            <span>योजनाएँ</span>
          </div>

          <div>
            <strong>0</strong>
            <span>समस्याएँ</span>
          </div>

          <div>
            <strong>0</strong>
            <span>सदस्य</span>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="cta">

        <h2>
          गाँव के विकास में आपकी भागीदारी जरूरी है 🤝
        </h2>

        <p>
          कोई समस्या, सुझाव या उपयोगी जानकारी है?
          हमारे साथ साझा करें।
        </p>

        <Link to="/samasya">
          <button className="primary-btn">
            समस्या / सुझाव दर्ज करें
          </button>
        </Link>

      </section>


      {/* Footer */}
      <footer>

        <div>
          <h3>🏘️ मछमरवा डिजिटल गाँव</h3>

          <p>
            हमारा गाँव • हमारी भागीदारी • हमारा विकास
          </p>
        </div>

        <p>
          © 2026 Machhmarwa Digital Village
        </p>

      </footer>

    </main>
  );
}

export default Home;