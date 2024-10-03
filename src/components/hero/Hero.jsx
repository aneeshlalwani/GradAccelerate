import heroImg from "../../assets/hero.png";
import ApplyButton from "../apply-button/ApplyButton";

const Hero = () => {
  return (
    <>
      <section className="container mx-auto px-6 md:px-12 lg:px-20 py-8">
        {/* Hero Image */}
        <div>
          <img
            src={heroImg}
            alt="Hero"
            className="mx-auto w-[900px] h-[300px] object-cover rounded-3xl opacity-90 shadow-lg"
          />
        </div>
        {/* Tagline and Introduction to GAP */}
        <div className="mt-6 text-center">
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-[#F39F5A] leading-tight">
            🚀 Transform Your Passion into Profession with Graduate Accelerate
            Program (GAP)!
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-[#e5e0df] mt-4 max-w-2xl mx-auto">
            At GAP, we provide hands-on experience, expert mentorship, and
            personalized career guidance. Our program equips you with in-demand
            skills, robust placement support, and valuable industry connections,
            ensuring you&apos;re job-ready in just 12-16 weeks to stand out in
            the competition.
          </p>
          <blockquote className="mt-4 text-base md:text-lg lg:text-xl text-[#e5e0df] italic">
            With GAP, you&apos;re not just learning – you&apos;re evolving,
            transforming, and launching your tech career!
          </blockquote>

          {/* Promotional Text */}
          <div className="mt-6">
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-red-600">
              GET 50% OFF FOR A LIMITED TIME
            </p>
            <p className="text-base md:text-lg lg:text-xl text-[#e5e0df] font-bold mt-2">
              Scholarships are available – apply now and unlock your potential!
            </p>
          </div>

          {/* GAP Apply Button */}
          <div className="flex justify-center mt-8">
            <ApplyButton
              text="Apply now 🚀"
              bgColor="bg-[#F39F5A]"
              border={false}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
