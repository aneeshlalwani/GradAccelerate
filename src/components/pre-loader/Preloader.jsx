const Preloader = ({ username }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-5xl font-extrabold capitalize mb-10">
        Nice to see you, {username}
      </h1>
      <div>
        <h1 className="text-5xl font-bold capitalize text-center">
          Let&apos;s Buckle Up 🚘
        </h1>
        <h2 className="text-4xl font-bold">
          We are taking you to the journey of transforming your career!
        </h2>
        <p className="text-7xl text-center">🏎️🏎️</p>
      </div>
    </div>
  );
};
export default Preloader;
