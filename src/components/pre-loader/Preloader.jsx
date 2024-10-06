const Preloader = ({ username }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#1c1c1c] text-white">
        <h1 className="text-4xl font-extrabold capitalize mb-6">
          Yay, It&apos;s You, {username}! 😅
        </h1>
        <h2 className="text-7xl mb-4">Broom Broom! 🚗💨</h2>
        <div className="w-[80%] text-center">
          <h1 className="text-4xl font-bold capitalize mb-4">Hold tight!</h1>
          <h2 className="text-3xl font-bold mb-4">
            We&apos;re about to take you on a career-transforming journey that
            will unlock your potential!
          </h2>
        </div>
      </div>
    </>
  );
};
export default Preloader;
