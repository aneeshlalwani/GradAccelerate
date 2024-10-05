import discount from "../../assets/discount.png";
import fee from "../../assets/fee.png";
import scholarship from "../../assets/scholarship.png";
const Education = () => {
  const educationalOffers = [
    {
      icon: scholarship,
      title: "Achieve Your Dreams with Fully Funded Scholarships",
      description:
        "Unlock Your Dream Career with Our Fully Funded Scholarships! We’re Committed to Empowering Students to Achieve Success.",
    },
    {
      icon: discount,
      title: "Early Birds Save Big — Enjoy 50% Off Today!",
      description:
        "Secure Your Spot Now and Enjoy 50% Off Program Fees! Register Early to Take Advantage of This Limited-Time Offer. Don’t Miss Out!",
    },
    {
      icon: fee,
      title: "Unlock Success at a Cost That Fits Your Budget",
      description:
        "Our program fee is 180,000 PKR, providing a comprehensive and high-value learning experience that sets you up for success.",
    },
  ];
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
