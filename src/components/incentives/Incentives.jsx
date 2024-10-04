const Incentives = () => {
  const incentivesData = [
    {
      id: 1,
      title: "Flexible Learning",
      description:
        "Benefit from a hybrid learning model that allows you to balance your studies with work or other commitments.",
    },
    {
      id: 2,
      title: "Global Exposure",
      description:
        "Engage in virtual global collaborations and gain insights into international tech trends and best practices.",
    },
    {
      id: 3,
      title: "Networking Opportunities",
      description:
        "Connect with industry professionals, potential employers, and fellow GAP participants.",
    },
    {
      id: 4,
      title: "Entrepreneurial Support",
      description:
        "Explore your entrepreneurial aspirations with access to resources and a network of like-minded individuals.",
    },
    {
      id: 5,
      title: "Industry-Recognized Certification",
      description:
        "Earn a valuable certificate upon program completion, validating your acquired skills.",
    },
    {
      id: 6,
      title: "Career Placement Support",
      description:
        "Access a dedicated career placement team offering resume reviews, interview preparation, and job placement assistance.",
    },
  ];
  return (
    <>
      <section className="container px-20 pt-20 pb-12">
        <h1 className="text-4xl sm:text-5xl font-semibold text-[#e5e0df] mb-6">
          Key Incentives
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-4 py-2">
          {incentivesData.map((data) => (
            <div
              key={data.id}
              className="flex flex-col p-10 shadow-md shadow-black rounded-xl"
            >
              <h1 className="text-xl sm:text-2xl font-bold text-[#FEC260]">
                {data.title}
              </h1>
              <p className="my-4 text-lg text-[#e5e0df] font-semibold">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Incentives;
