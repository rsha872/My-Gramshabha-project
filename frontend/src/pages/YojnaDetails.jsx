import { Link, useParams } from "react-router-dom";

const yojnaData = {
  "pm-awas-yojana": {
    name: "प्रधानमंत्री आवास योजना",
    icon: "🏠",
    category: "आवास",

    description:
      "पात्र परिवारों को आवास संबंधी सहायता उपलब्ध कराने वाली योजना की जानकारी।",

    eligibility: [
      "निर्धारित पात्रता पूरी करने वाले परिवार",
      "योजना के वर्तमान सरकारी नियम लागू होंगे",
      "अंतिम पात्रता संबंधित आधिकारिक विभाग से सत्यापित करें",
    ],

    benefits: [
      "पात्र परिवारों को आवास संबंधी सहायता",
      "योजना के नियमों के अनुसार आर्थिक सहायता",
    ],

    documents: [
      "आधार कार्ड",
      "पहचान / पता प्रमाण",
      "बैंक खाते की जानकारी",
      "आवश्यकतानुसार अन्य दस्तावेज",
    ],
  },
};

function YojnaDetail() {
  const { id } = useParams();

  const yojna = yojnaData[id];

  if (!yojna) {
    return (
      <main className="page">
        <h1>योजना नहीं मिली</h1>

        <Link to="/yojna">
          ← योजनाओं पर वापस जाएँ
        </Link>
      </main>
    );
  }

  return (
    <main className="yojna-detail-page">

      <section className="detail-header">

        <div className="detail-icon">
          {yojna.icon}
        </div>

        <div>
          <span className="yojna-category">
            {yojna.category}
          </span>

          <h1>{yojna.name}</h1>

          <p>{yojna.description}</p>
        </div>

      </section>


      <section className="detail-section">

        <h2>👥 पात्रता</h2>

        <ul>
          {yojna.eligibility.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>

      </section>


      <section className="detail-section">

        <h2>🎁 योजना के लाभ</h2>

        <ul>
          {yojna.benefits.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>

      </section>


      <section className="detail-section">

        <h2>📄 आवश्यक दस्तावेज</h2>

        <ul>
          {yojna.documents.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>

      </section>


      <section className="official-note">

        <h3>⚠️ महत्वपूर्ण सूचना</h3>

        <p>
          इस वेबसाइट पर दी गई जानकारी नागरिक सुविधा के
          उद्देश्य से प्रस्तुत की जा रही है। पात्रता, लाभ,
          दस्तावेज और आवेदन प्रक्रिया की अंतिम जानकारी
          संबंधित आधिकारिक सरकारी स्रोत से सत्यापित करें।
        </p>

      </section>


      <Link to="/yojna" className="back-link">
        ← सभी योजनाएँ देखें
      </Link>

    </main>
  );
}

export default YojnaDetail;