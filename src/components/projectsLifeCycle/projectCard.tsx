import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'phosphor-react';
import Link from 'next/link';
import routes from '@utils/routes';
import { AnimatePresence } from 'framer-motion';

const ProjectCard = ({ project }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const renderSubtypes = () => {
    if (!project.subtypes) return null;

    return project.subtypes.map((subtype: any) => (
      <Link
        href={`/projects/${subtype.id}`}
        key={subtype.id}
        className="bg-[#FFFFFF1A] p-2 rounded-2xl"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative">
          <div
            className={`${
              isHovered ? 'opacity-100' : 'opacity-0'
            } z-10 overflow-hidden w-full flex py-6 mt-40 transition duration-1000 absolute justify-center items-center gap-3 text-white bg-[#2b2b2b1e] backdrop-blur-md`}
          >
            <span className="view-slide flex gap-2">
              View Project
              <ArrowRight size={25} />
            </span>
            <span className="view-slide flex gap-2">
              View Project
              <ArrowRight size={25} />
            </span>
            <span className="view-slide flex gap-2">
              View Project
              <ArrowRight size={25} />
            </span>
            <span className="view-slide flex gap-2">
              View Project
              <ArrowRight size={25} />
            </span>
          </div>
          <Image
            src={subtype.imageUrl}
            alt="Subtype Image"
            width={100}
            height={100}
            className="w-full object-cover rounded-2xl"
          />
          <span className="flex w-28 items-center justify-center absolute top-0 m-4 text-xs h-7 rounded-3xl text-white border border-[#FFFFFF] bg-[#3D3D3D75]">
            {project.type}
          </span>
        </div>
        <div className="p-4 text-white">
          <span>{subtype.title}</span>
          <span className="block">{subtype.description}</span>
        </div>
      </Link>
    ));
  };

  const renderProject = () => (
    <Link
      href={`/projects/${project.id}`}
      className="bg-gradient-to-tr transition duration-1000 from-[#FFFFFF1A] hover:via-black to-black p-2 rounded-2xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative">
        <div
          className={`${
            isHovered ? 'opacity-100' : 'opacity-0'
          } z-10 overflow-hidden w-full flex py-6 mt-40 transition duration-1000 absolute justify-center items-center gap-3 text-white bg-[#0a0a0a4e] backdrop-blur-md`}
        >
          <span className="view-slide flex gap-2">
            View Project
            <ArrowRight size={25} />
          </span>
          <span className="view-slide flex gap-2">
            View Project
            <ArrowRight size={25} />
          </span>
          <span className="view-slide flex gap-2">
            View Project
            <ArrowRight size={25} />
          </span>
          <span className="view-slide flex gap-2">
            View Project
            <ArrowRight size={25} />
          </span>
        </div>
        <div className=" overflow-hidden rounded-2xl">
          <Image
            src={project.imageUrl}
            alt="Project Image"
            width={100}
            height={100}
            className={`w-full object-cover transition duration-1000 ease-in-out ${
              isHovered ? 'scale-125' : ''
            }`}
          />
        </div>
        <span className="flex w-fit px-4 items-center justify-center absolute top-0 m-4 text-xs h-7 rounded-3xl text-white border border-[#FFFFFF] bg-[#3D3D3D75]">
          {project.type.toUpperCase()}
        </span>
      </div>
      <div className="p-4 text-white">
        <span className='text-sm text-[#b1b1b1]'>{project.title}</span>
        <span className="block font-syne font-bold">{project.description}</span>
      </div>
    </Link>
  );

  return <>{renderSubtypes() || renderProject()}</>;
};

export default ProjectCard;
