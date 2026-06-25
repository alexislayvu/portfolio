import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import FadeInSection from './FadeInSection';

const Projects = () => {
  const projects = [
    {
      title: 'TaskPilot',
      description:
        'A REST API for task management with user authentication, JWT-secured endpoints, and full CRUD operations. Integrated Celery and Redis for asynchronous task processing, reducing wait times for long-running jobs.',
      techStack: [
        'Python',
        'Flask',
        'Celery',
        'Redis',
        'MySQL',
        'JWT',
        'Postman',
      ],
      githubLink: 'https://github.com/alexislayvu/backend-todo-app',
      projectLink: null,
    },
    {
      title: 'Object Detector',
      description:
        'A web app that uses TensorFlow.js and the COCO-SSD model to detect and identify objects in real time via webcam or uploaded images. Includes adjustable confidence thresholds and max-detection controls for precision tuning.',
      techStack: [
        'React',
        'JavaScript',
        'Tensorflow.js',
        'COCO-SSD',
        'HTML',
        'CSS',
      ],
      githubLink: 'https://github.com/alexislayvu/ObjectDetector',
      projectLink: null,
    },
    {
      title: 'QuizLingo',
      description:
        'A mobile vocabulary app that tests word knowledge through interactive quizzes. Uses Google ML Kit to validate answers in real time and the Unsplash API to pair words with contextual images for better retention.',
      techStack: ['Kotlin', 'Google ML Kit Translator API', 'Unsplash API'],
      githubLink: 'https://github.com/alexislayvu/quizlingo',
      projectLink: null,
    },
    {
      title: 'University Database',
      description:
        'A relational database system for managing university records including students, courses, and faculty, with a MySQL backend and an HTML/CSS interface for data retrieval.',
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
