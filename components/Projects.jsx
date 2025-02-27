import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import FadeInSection from './FadeInSection';

const Projects = () => {
  const projects = [
    {
      title: 'Object Detector',
      description:
        'A React app that detects objects in images and webcam feeds in real-time, with adjustable detection settings for precision.',
      techStack: ['React', 'JavaScript', 'Tensorflow.js', 'COCO-SSD', 'HTML', 'CSS'],
      githubLink: 'https://github.com/alexislayvu/ObjectDetector',
      projectLink: null,
    },
    {
      title: 'TaskPilot',
      description:
        'A Flask-based task management system with asynchronous processing, secure API endpoints, and JWT authentication.',
      techStack: ['Python', 'Flask', 'Celery', 'Redis', 'Nginx', 'MySQL', 'JWT', 'Postman'],
      githubLink: 'https://github.com/alexislayvu/backend-todo-app',
      projectLink: null,
    },
    {
      title: 'QuizLingo',
      description:
        'A Kotlin app that enhances vocabulary learning through interactive quizzes and visual aids for better retention.',
      techStack: ['Kotlin', 'Google ML Kit Translator API', 'Unsplash API'],
      githubLink: 'https://github.com/alexislayvu/quizlingo',
      projectLink: null,
    },
    {
      title: 'University Database',
      description:
        'A web-based university database system with a user-friendly interface for students and faculty, optimized for data organization and retrieval.',
      techStack: ['HTML', 'CSS', 'MySQL', 'PHP'],
      githubLink: null,
      projectLink: null,
    },
  ];

  return (
    <section id="projects">
      <FadeInSection>
        <SectionHeader title="/ projects" />
        <div className="py-4 flex justify-center">
          <div className="py-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                githubLink={project.githubLink}
                projectLink={project.projectLink}
              />
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Projects;
