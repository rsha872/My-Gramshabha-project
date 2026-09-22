import YojnaCard from "../components/YojnaCard";

const yojnas = [
  {
    id: 1,
    icon: "🏠",
    category: "आवास",
    name: "प्रधानमंत्री आवास योजना",
    description:
      "पात्र परिवारों को पक्का घर उपलब्ध कराने से संबंधित योजना की जानकारी।",
    forWhom: "पात्र परिवार",
    documents: "आवश्यक दस्तावेज",
  },

  {
    id: 2,
    icon: "🌾",
    category: "कृषि",
    name: "किसान सहायता योजना",
    description:
      "किसानों के लिए उपलब्ध सरकारी सहायता और संबंधित जानकारी।",
    forWhom: "किसान",
    documents: "आवश्यक दस्तावेज",
  },

  {
    id: 3,
    icon: "👩",
    category: "महिला",
    name: "महिला कल्याण योजनाएँ",
    description:
      "महिलाओं और बालिकाओं के लिए उपलब्ध विभिन्न सरकारी योजनाओं की जानकारी।",
    forWhom: "महिलाएँ / बालिकाएँ",
    documents: "योजना के अनुसार",
  },

  {
    id: 4,
    icon: "🎓",
    category: "शिक्षा",
    name: "छात्रवृत्ति योजनाएँ",
    description:
      "विद्यार्थियों के लिए उपलब्ध छात्रवृत्ति और शिक्षा संबंधी योजनाओं की जानकारी।",
    forWhom: "विद्यार्थी",
    documents: "योजना के अनुसार",
  },
];

function Yojna() {
  return (
    <main className="yojna-page">

      <section className="yojna-header">

        <p className="small-title">
          📋 सरकारी योजनाएँ
        </p>

        <h1>
          अपने लिए सही योजना
          <span> खोजें</span>
        </h1>

        <p>
          विभिन्न सरकारी योजनाओं की पात्रता,
          लाभ और आवेदन प्रक्रिया की जानकारी एक जगह।
        </p>

      </section>


      {/* Search */}
      <section className="yojna-search">

        <input
          type="text"
          placeholder="🔍 योजना खोजें..."
        />

        <select>
          <option>सभी श्रेणियाँ</option>
          <option>आवास</option>
          <option>कृषि</option>
          <option>महिला</option>
          <option>शिक्षा</option>
        </select>

      </section>


      {/* Cards */}
      <section className="yojna-grid">

        {yojnas.map((yojna) => (
          <YojnaCard
            key={yojna.id}
            yojna={yojna}
          />
        ))}

      </section>

    </main>
  );
}

export default Yojna;