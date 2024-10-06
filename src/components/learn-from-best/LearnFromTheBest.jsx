import team from "../../assets/team.jpg"; // Import your image

const LearnFromTheBest = () => {
  return (
    <>
      <section className="container mx-auto px-6 md:px-12 lg:px-20 py-16 bg-transparent text-white rounded-lg shadow-lg my-10">
        {/* Component Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8">
          Learn from Industry Leaders!{" "}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Component Description*/}
          <div className="space-y-6">
            <ul className="list-none pl-5 space-y-4 text-lg">
              <li>
                Get Mentorship from Seasoned Experts Committed to Your Success
                and Skill Development.
              </li>
              <li>
                Connect with Industry-Leading Instructors Who Know the Latest
                Trends.
              </li>
              <li>
                Enhance Your Skills with Hands-On Lessons from Experts Who have
                Mastered the Field
              </li>
            </ul>
          </div>

          {/* Component Image */}
          <div className="flex justify-center">
            <img
              src={team}
              alt="Team Image"
              className="w-auto h-72 object-cover rounded-xl"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default LearnFromTheBest;
