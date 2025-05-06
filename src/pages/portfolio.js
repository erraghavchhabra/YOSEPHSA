import React, { useState } from "react";


const TabsComponent = () => {
  const data = [
    {
      name: "WhiToo",
      image: "WhiToo_Cover.webp",
      category: "University",
      link: "/project/whitoo/",
    },
    {
      name: "Text Portrait",
      image: "TextPortrait_Cover.webp",
      category: "University",
      link: "/project/text-portrait/",
    },
    {
      name: "Arabic Graffiti",
      image: "ArabicGraffiti_Cover.webp",
      category: "University",
      link: "/project/arabic-graffiti-integrating-culture-with-modern-street-art/",
    },
    {
      name: "UNH Tie",
      image: "UNHTie_Cover.webp",
      category: "University",
      link: "/project/unh-tie/",
    },
    {
      name: "Electrify Social",
      image: "electrifySocial_Cover.webp",
      category: "Mascola",
      link: "/project/electrify-social/",
    },
    {
      name: "Pearl Signing Ceremony Branding",
      image: "EIGAramcoCover.png",
      category: "Aramco",
      link: "/project/pearl-signing-ceremony-branding/",
    },
    {
      name: "President Excellence Awards",
      image: "Cover10.webp",
      category: "Aramco",
      link: "/project/president-excellence-awards/",
    },
    {
      name: "Aramco Gifts",
      image: "AramcoGiftsCover.jpg",
      category: "Aramco",
      link: "/project/aramco-gifts/",
    },
    {
      name: "Oum Kalthom",
      image: "OumKalthomCover-1.png",
      category: "University",
      link: "/project/oum-kalthoum/",
    },

    {
      name: "Saudi Birds",
      image: "BirdsSaudiCover.jpg",
      category: "Aramco",
      link: "/project/saudi-birds-book/",
    },
    {
      name: "Sweet Dream",
      image: "SweetDreamsCover.jpg",
      category: "University",
      link: "/project/sweet-dream-2/",
    },
    {
      name: "Ezio",
      image: "EzioCover.jpg",
      category: "University",
      link: "/project/ezio/",
    },

    {
      name: "Day To Day",
      image: "1to1PostersCover.jpg",
      category: "University",
      link: "/project/1209/",
    },
    {
      name: "Ahed",
      image: "AhedCover.jpg",
      category: "University",
      link: "/project/ahed/",
    },
    {
      name: "Al-Qatt",
      image: "AlqattCover.jpg",
      category: "University",
      link: "/project/al-qatt-new-era/",
    },

    {
      name: "Ecotourism",
      image: "EcoactivitesCover-1.jpg",
      category: "IARDA",
      link: "/project/ecotourism-2/",
    },
    {
      name: "Cyber Awareness",
      image: "CyberCover.jpg",
      category: "IARDA",
      link: "/project/997/",
    },
    {
      name: "Saudi National Day",
      image: "SaudiNationalDay91.jpg",
      category: "IARDA",
      link: "/project/saudi-national-day/",
    },

    {
      name: "Cyberbullying",
      image: "a0.jpg",
      category: "University",
      link: "/project/cyberbullying/",
    },
    {
      name: "LegalZoom",
      image: "Legalzoom-cover.jpg",
      category: "Mascola",
      link: "/project/legalzoom/",
    },
    {
      name: "Wellbeing",
      image: "Wellbeing00.jpg",
      category: "IARDA",
      link: "/project/wellbeing/",
    },
    {
      name: "Safety Matter",
      image: "SafetyMatters00.jpg",
      category: "IARDA",
      link: "/project/safety-matter/",
    },
    {
      name: "IARDA Social Media",
      image: "IARDAPostsCover0.jpg",
      category: "IARDA",
      link: "/project/twitter/",
    },
    {
      name: "Falcons",
      image: "FalconsCover.jpg",
      category: "IARDA",
      link: "/project/falcons/",
    },
    {
      name: "Chances",
      image: "chances.jpg",
      category: "IARDA",
      link: "/project/chances/",
    },
    {
      name: "Int&#8217;l Forum on Afforestation Techniques",
      image: "TechnologyCover.jpg",
      category: "IARDA",
      link: "/project/technology/",
    },
    {
      name: "Saudi Tourism Forum",
      image: "SaudiTourismCover.jpg",
      category: "IARDA",
      link: "/project/ecotourism/",
    },
    {
      name: "Environmental Week",
      image: "EnviroweekCover.jpg",
      category: "IARDA",
      link: "/project/environmental-week/",
    },
    {
      name: "Ramadan",
      image: "RamdanCover.jpg",
      category: "IARDA",
      link: "/project/ramadan/",
    },
    {
      name: "Adha Eid",
      image: "AdhaEidCover.jpg",
      category: "IARDA",
      link: "/project/575/",
    },
    {
      name: "Urmah Newsletter",
      image: "UrmahMagCover.jpg",
      category: "IARDA",
      link: "/project/urmah-newsletter/",
    },
    {
      name: "Biodiversity Booklet",
      image: "biodiversityBookletCover.jpg",
      category: "IARDA",
      link: "/project/biodiversity/",
    },
    {
      name: "Men&#8217;s Suits",
      image: "MenSuitCover.jpg",
      category: "University",
      link: "/project/mens-suits/",
    },
    {
      name: "Single Moms",
      image: "BathwaySingleCover.jpg",
      category: "Mascola",
      link: "/project/single-moms/",
    },
    {
      name: "Engineers &amp; Content",
      image: "MascolainfoCover.jpg",
      category: "Mascola",
      link: "/project/mascola/",
    },
    {
      name: "Elena Light",
      image: "ElenaLightCover.jpg",
      category: "University",
      link: "/project/elena-light/",
    },
    {
      name: "Make Haven",
      image: "MakehavenCover.jpg",
      category: "University",
      link: "/project/make-haven/",
    },
    {
      name: "IARDA Visual",
      image: "IARDAIdentityC.jpg",
      category: "IARDA",
      link: "/project/iarda/",
    },
    {
      name: "Covid19 Kit",
      image: "CovidKitCover.jpg",
      category: "Aramco",
      link: "/project/full-project-2-2/",
    },
  ];
  const [activeTab, setActiveTab] = useState("All");


  const categorys = [
    {
      name: "All",
      value: "All",
    },
    {
      name: "Aramco",
      value: "Aramco",
    },
    {
      name: "IARDA",
      value: "IARDA",
    },
    {
      name: "Mascola",
      value: "Mascola",
    },
    {
      name: "University",
      value: "University",
    },
  ];
  return (
    <div className="container mt-4">
      <ul className="nav nav-tabs m-nav-tabs" id="myTab" role="tablist">
        {categorys.map((category, index) => (
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${
                category.value === activeTab ? "active" : ""
              }`}
              // id={category.value + "-tab"}
              // data-bs-toggle="tab"
              // data-bs-target={`#${category.value}`}
              type="button"
              // role="tab"
              onClick={() => setActiveTab(category.value)}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content mt-3">
        <div className="tab-pane fade show active">
          <div className="row">
            {data
              .filter(
                (item) => activeTab === "All" || item.category === activeTab
              )
              .map((item, index) => (
                <div className="col-lg-4 col-md-4" key={index}>
                  <a href="#" className="port-box">
                    <div className="item-img">
                      <img
                        src={require(`../assets/img/${item.image}`)}
                        className="img-fluid w-100"
                        alt={item.name}
                      />
                    </div>
                    <h4 className="name">{item.name}</h4>
                    <i className="bi bi-file-earmark-text"></i>
                    <span className="category">{item.category}</span>
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;
