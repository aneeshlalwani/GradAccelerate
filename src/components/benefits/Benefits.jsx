import boy from "../../assets/boy_new.png";
const Benefits = () => {
  const benefits = [
    {
      id: 1,
      title: "Personal Growth",
      description:
        "Challenge yourself to step outside your comfort zone and develop valuable life skills.",
    },
    {
      id: 2,
      title: "Enhanced Employability",
      description:
        "Acquire valuable skills and experiences that employers actively seek.",
    },
    {
      id: 3,
      title: "Cultural Enrichment",
      description:
        "Immerse yourself in different cultures to broaden your perspective and foster intercultural understanding.",
    },
    {
      id: 4,
      title: "Career Exploration",
      description:
        "Gain practical experience and explore potential career paths to make informed choices.",
    },
  ];
  return (
    <>
      <section className="container mx-auto px-6 md:px-12 lg:px-20 py-10 my-20">
        <h1 className="text-4xl sm:text-5xl font-semibold text-[#e5e0df] mb-20">
          Improved Student Experience
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          {/* Left Side Benefits Description */}
          <div className="space-y-8">
            {benefits.slice(0, 2).map((item) => (
              <div key={item.id} className="text-[#e5e0df] mb-16">
                <h2 className="text-3xl px-3 border border-lg rounded-sm inline">
                  {item.id}
                </h2>
                <h3 className="text-2xl font-bold my-3">{item.title}</h3>
                <p className="text-lg font-semibold">{item.description}</p>
              </div>
            ))}
          </div>
          {/* Center Image of Boy*/}
          <div className="flex justify-center">
            <img
              src={boy}
              alt="boy image in the center"
              className="w-80 h-80 object-cover rounded-xl"
            />
          </div>
          {/* Right side descriptions */}
          <div className="space-y-8">
            {benefits.slice(2, 4).map((item) => (
              <div key={item.id} className="text-[#e5e0df] mb-16">
                <h2 className="text-3xl px-3 border border-lg rounded-sm inline">
                  {item.id}
                </h2>
                <h3 className="text-2xl font-bold my-3">{item.title}</h3>
                <p className="text-lg font-semibold">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
