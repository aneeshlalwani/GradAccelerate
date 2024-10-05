import Slider from "react-slick";
import devkind from "../../assets/brands-logo/devkind.jpg";
import { brandLogos, carouselSettings } from "../../data/data";

const Brands = () => {
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
          <Slider {...carouselSettings}>
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
