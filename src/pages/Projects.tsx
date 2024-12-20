import React from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { ExternalLinkIcon, GitForkIcon, StarIcon } from 'lucide-react';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  language: string;
}

const fetchGithubRepos = async (): Promise<Repository[]> => {
  const response = await fetch('https://api.github.com/users/OctakoPy/repos');
  if (!response.ok) {
    throw new Error('Failed to fetch repositories');
  }
  return response.json();
};

const Projects = () => {
  const { data: repos, isLoading, error } = useQuery({
    queryKey: ['github-repos'],
    queryFn: fetchGithubRepos,
  });

  if (isLoading) {
    return (
      <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center">
        <div className="animate-pulse text-neonBlue">Loading projects...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center">
        <div className="text-red-500">Error loading projects. Please try again later.</div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-5rem)] py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-12 bg-gradient-to-r from-neonBlue to-neonPurple bg-clip-text text-transparent">
          My GitHub Projects
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos?.map((project) => (
            <motion.a
              key={project.id}
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="h-full p-6 rounded-lg border border-neonBlue/20 bg-space/50 backdrop-blur-lg 
                           hover:border-neonBlue/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neonBlue transition-colors">
                  {project.name}
                </h3>
                <p className="text-white/80 mb-4 line-clamp-2">
                  {project.description || 'No description available'}
                </p>
                
                <div className="flex items-center gap-4 text-white/60">
                  {project.language && (
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-neonBlue"></span>
                      {project.language}
                    </span>
                  )}
                  
                  <span className="flex items-center gap-1">
                    <StarIcon className="w-4 h-4" />
                    {project.stargazers_count}
                  </span>
                  
                  <span className="flex items-center gap-1">
                    <GitForkIcon className="w-4 h-4" />
                    {project.forks_count}
                  </span>
                  
                  <ExternalLinkIcon className="w-4 h-4 ml-auto" />
                </div>
                
                {project.topics?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.topics.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-neonBlue/10 text-neonBlue border border-neonBlue/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;