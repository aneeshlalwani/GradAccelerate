import { incentivesData } from "../../data/data";

const Incentives = () => {
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
