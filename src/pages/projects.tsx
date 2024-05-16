import ProjectCard from '@components/projectsLifeCycle/projectCard';
import { ScrollIndicator } from '@components/shared/scrollIndicator';
import AppLayout from '@layout/app';
import { allProjects } from '@utils/data/projects';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Projects() {
  const [selectedProjectType, setSelectedProjectType] = useState<string | null>(
    null
  );

  const handleProjectType = (type: string) => {
    setSelectedProjectType(type);
  };

  const filteredProjects = selectedProjectType
    ? allProjects.filter((project) => project.type === selectedProjectType)
    : allProjects;

  return (
    <AppLayout>
      <div
        style={{
          backgroundImage: 'url("/images/testimonial.png")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className="w-full h-[90vh] bg-gradient-to-r from-black via-transparent to-transparent"
      >
        {/* <div className="absolute bottom-14 left-0 right-0 top-0 z-10 overflow-hidden bg-gradient-to-r from-black via-transparent to-transparent"></div> */}
        <div className="text-white w-[620px] mt-32 ml-14">
          <div className="text-7xl font-bold font-syne z-50">
            <span>Our Proj</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#5c5c5c]">
              ects
            </span>
          </div>
          <div className="font-light text-[#d7d7d7]">
            From coming up with creative concepts to delivering outstanding
            campaigns, we&apos;re your friendly, fun-loving crew ready to turn
            your project dreams into reality!
          </div>
        </div>
        <div className="-ml-24 mt-20 w-[0%]">
          <ScrollIndicator />
        </div>
      </div>
      <div className="relative  px-52 pt-12">
        <div className="absolute blur-3xl bottom-0 h-36 bg-black left-0 right-0 -top-40 overflow-hidden"></div>
        <div className="flex flex-wrap justify-center gap-5">
          {allProjects.map((project) => (
            <motion.button
              whileHover={{
                boxShadow:"0px 0px 3px #ff7a3b"
              }}
              onClick={() => handleProjectType(project.type)}
              key={project.id}
              className="rounded-[32px] transition-all duration-200 hover:text-[#ff7a3b] hover:bg-[#d55e27]/20 hover:border-[#ff7a3b] backdrop-blur-md cursor-pointer text-base font-normal py-2 px-4 text-[#FFFFFF] bg-[#1a1a1a] border border-[#FFFFFF26]"
            >
              {project.type}
            </motion.button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 mx-12 mt-16">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </AppLayout>
  );
}
