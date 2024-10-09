import broken from "../../assets/broken.png";
const Broken = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-white">
        <div className="text-center px-4 md:px-8 lg:px-16">
          <div className="flex justify-center items-center px-4 mb-6">
            <img
              src={broken}
              alt="Broken page illustration"
              className="w-full max-w-[50%] h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          <p className="text-2xl md:text-3xl text-red-500 font-semibold mb-6">
            Whoops! Looks like this page took a wrong turn.
          </p>
          <p className="text-xl md:text-2xl text-gray-900 mb-8">
            But hey, it&apos;s not you—it&apos;s us! we&apos;re fixing things up
            behind the scene.
          </p>
        </div>
      </div>
    </>
  );
};

export default Broken;
