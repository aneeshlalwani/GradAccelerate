// Importing Learning Tracks Data
import { tracks } from "../../data/data";

const LearningTracks = () => {
  return (
    <>
      <section className="container mx-auto px-6 md:px-12 lg:px-20 py-10 my-10">
        <h1 className="text-4xl sm:text-5xl font-semibold text-[#e5e0df] mb-10">
          Diverse Learning Tracks
        </h1>
        {/* Grid for Learning Tracks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 border-2 border-[#951556]"
            >
              <div className="flex justify-center items-center gap-3">
                <img src={track.icon} alt="track icon" />
                <h2 className="text-2xl font-bold text-[#e5e0df] mb-3">
                  {track.title}
                </h2>
              </div>

              <p className="text-[#e5e0df] text-lg font-semibold">
                {track.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default LearningTracks;
