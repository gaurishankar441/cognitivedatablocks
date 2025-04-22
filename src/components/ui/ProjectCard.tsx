
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  link = '#',
  className,
}) => {
  return (
    <div 
      className={cn(
        'group relative overflow-hidden rounded-2xl bg-white border border-gray-200',
        'transition-all duration-300 hover:shadow-xl subtle-shift',
        className
      )}
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs font-medium bg-techblue-50 text-techblue-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold mb-2 transition-all group-hover:text-techpurple-600">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <Link 
          to={link} 
          className="inline-flex items-center font-medium text-techpurple-600 hover:text-techpurple-700"
        >
          View Project
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
      
      <div className="absolute inset-0 border-2 border-transparent opacity-0 group-hover:opacity-100 group-hover:border-techpurple-400/30 rounded-2xl transition-all duration-300" />
    </div>
  );
};

export default ProjectCard;
