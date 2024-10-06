import { educationalOffers } from "../../data/data";

const Education = () => {
  return (
    <>
      <section className="container mx-auto px-6 md:px-12 lg:px-20 py-10 my-10">
        <h1 className="text-4xl sm:text-5xl font-semibold text-[#e5e0df] mb-16 capitalize">
          take your education to new heights
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {educationalOffers.map((offer, index) => (
            <div key={index} className="text-white">
              <img src={offer.icon} alt={offer.title} className="w-20 mb-1" />
              <h1 className="text-xl font-bold mb-4">{offer.title}</h1>
              <p className="text-lg font-semibold">{offer.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Education;
