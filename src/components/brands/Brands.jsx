import Slider from "react-slick";
import devkind from "../../assets/brands-logo/devkind.jpg";
import burt from "../../assets/brands-logo/burt.png";
import etikette from "../../assets/brands-logo/etikette.png";
import eva from "../../assets/brands-logo/eva.png";
import fairway from "../../assets/brands-logo/fairway.png";
import fresh from "../../assets/brands-logo/fresh.png";
import john from "../../assets/brands-logo/john.png";
import ned from "../../assets/brands-logo/ned.png";
import perfect from "../../assets/brands-logo/perfect.png";

const brandLogos = [
  {
    title: burt,
  },
  {
    title: etikette,
  },
  {
    title: eva,
  },
  {
    title: perfect,
  },
  {
    title: ned,
  },
  {
    title: john,
  },
  {
    title: fresh,
  },
  {
    title: fairway,
  },
];

const Brands = () => {
  const settings = {
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    slidesToShow: 5, // Default To Show 5 Logos at Once
    responsive: [
      {
        // Medium Screens
        breakpoint: 1024,
        settings: {
          // To Show 3 Logos
          slidesToShow: 3,
        },
      },
      {
        // Small Screens
        breakpoint: 600,
        settings: {
          // To Show 2 Logo
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="my-14 bg-white">
      <div className="container mx-auto">
        {/* Section Title */}
        <h1 className="text-5xl sm:text-6xl text-center pt-8 mb-14 capitalize">
          Brands that trust
        </h1>

        {/* Dev Kind Company's Logo Section */}
        <div className="text-center mb-10">
          <img
            className="mx-auto max-w-[42%] h-24 object-contain"
            src={devkind}
            alt="Dev Kind Logo"
          />
          <h1 className="my-5 text-2xl">
            Our clients demand excellence — and we ensure you&apos;re ready to
            deliver.
          </h1>
        </div>

        {/* Slider Section */}
        <div className="py-8 overflow-x-hidden">
          <Slider {...settings}>
            {brandLogos.map((logo, index) => (
              <div
                key={index}
                className="flex justify-center items-center gap-5"
              >
                <img
                  src={logo.title}
                  alt={`Logo of ${logo.title}`}
                  className="max-w-52 h-24 object-contain px-3"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Brands;
