import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import FadeInSection from './FadeInSection';

const Projects = () => {
  const projects = [
    {
      title: 'Object Detector',
      description:
        'An interactive web application that enables users to detect objects in real-time using webcam feeds or uploaded images. The application features customizable detection settings, allowing users to adjust detection precision according to their needs.',
      techStack: ['React', 'JavaScript', 'Tensorflow.js', 'COCO-SSD', 'HTML', 'CSS'],
      githubLink: 'https://github.com/alexislayvu/ObjectDetector',
      projectLink: null,
    },
    {
      title: 'QuizLingo',
      description:
        'A language learning app that enhances vocabulary retention through interactive quizzes. The app incorporates relevant images from the Unsplash API to enrich the learning experience and uses the Google ML Kit Translator API to verify user inputs, ensuring accuracy in language assessments.',
      techStack: ['Kotlin', 'Google ML Kit', 'Unsplash API'],
      githubLink: 'https://github.com/alexislayvu/quizlingo',
      projectLink: null,
    },
    {
      title: 'TaskPilot',
      description:
        'A task management application designed with a microservices architecture, utilizing asynchronous task execution for user registration, login, and CRUD operations. The application features secure RESTful API endpoints with JWT authentication, ensuring efficient service interaction and scalability through dedicated databases.',
      techStack: ['Python', 'Flask', 'Celery', 'Redis', 'Nginx', 'MySQL', 'JWT', 'Postman'],
      githubLink: 'https://github.com/alexislayvu/backend-todo-app',
      projectLink: null,
    },
    {
      title: 'University Database',
      description:
        'A university database system that streamlines data management and retrieval using PHP and MySQL. The project features a simple, user-friendly interface designed with HTML and CSS for easy navigation and interaction.',
      techStack: ['PHP', 'MySQL', 'HTML', 'CSS'],
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
