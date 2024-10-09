import React from "react";
const Experience = () => {
  return (
    <div id="experience" className="mt-10  ">
      <div>
        <h1 className="font-semibold p-3 rounded-md text-center text-3xl bg-pink-500 w-52 m-auto">
          Experience
        </h1>
      </div>
      <div className="p-16 flex items-center gap-44  ">
        <div className="w-[500px] mt-10 hidden lg:block ">
          <img className="w-full" src="/experience.svg" alt="" />
        </div>
        <div className=" w-full lg:w-[600px] flex flex-col gap-10 dark:bg-dot-white/[0.1]  ">
          <div className="w-[600px] h-[400px] rounded-md p-5 mt-10">
            <h1 className="text-2xl font-semibold text-emerald-400">Internship at Panacloud</h1>
            <p className="mt-5">
              During my internship at Panacloud, I gained hands-on experience in
              cloud-based development. Working with experienced developers, I
              contributed to building user-friendly applications using the MERN
              stack.
              <br/>
              <br/>
               I participated in team meetings, collaborating on feature
              development and learning industry best practices, including Git
              and agile methodologies. This experience enhanced my technical
              skills and deepened my understanding of teamwork and communication
              in a professional setting. 
              <br/>
              <br/>
              Overall, my time at Panacloud was
              crucial in shaping my passion for full-stack development and
              preparing me for my future career.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
