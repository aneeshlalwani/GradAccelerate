import logo from "../../assets/logo.png";
import { tracks } from "../../data/data";
const Footer = () => {
  return (
    <>
      <footer className="p-20 bg-[#114232] sm:rounded-tl-full">
        <div className="container mx-auto flex flex-wrap sm:items-center sm:justify-center gap-10">
          <div className="logo">
            <img src={logo} alt="" />
            <h1 className="m-4 w-58 text-[#e5e0df] font-bold text-xl">
              Let&apos;s Shape Your Tech Future—Together!
            </h1>
          </div>
          <div className="sm:border-l border-lg pl-12">
            <h2 className="text-2xl mb-4 font-bold text-[#e5e0df]">
              Learning Track
            </h2>
            <ul className="list-none text-lg text-[#e5e0df] font-semibold">
              {tracks.map((track, index) => (
                <li
                  key={index}
                  className="mb-2 hover:underline underline-offset-8 hover:translate-x-4 transition-transform duration-300 ease-in-out"
                >
                  <a href="">{track.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
