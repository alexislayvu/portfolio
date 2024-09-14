import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import FadeInSection from './FadeInSection';

const Projects = () => {
  const projects = [
    {
      title: 'Object Detection Web App',
      description:
        'A web application for object detection using the COCO-SSD model, allowing users to detect objects through webcam feeds or uploaded images. The application features customizable detection settings for maximum detections and score thresholds, enabling precise and tailored results.',
      techStack: ['React', 'JavaScript', 'HTML', 'CSS', 'Tensorflow.js'],
      githubLink: 'https://github.com/alexislayvu/ObjectDetector',
      projectLink: null,
    },
    {
      title: 'QuizLingo',
      description:
        'A language learning app with image-based quizzes. Uses Unsplash Image API for visuals and Google ML Kit Translator for verifying user-inputted translations, enhancing language comprehension through interactive learning.',
      techStack: ['Kotlin'],
      githubLink: 'https://github.com/alexislayvu/quizlingo',
      projectLink: null,
    },
    {
      title: 'Todo App',
      description:
        'A todo application powered by Flask, MySQL, Celery, Redis, and Nginx. Implemented RESTful APIs supporting CRUD operations and user authentication. Integrated Celery for asynchronous task execution, Redis for message brokering, and Nginx as an API gateway.',
      techStack: ['Python', 'Flask', 'MySQL', 'Redis', 'Celery', 'Nginx'],
      githubLink: 'https://github.com/alexislayvu/backend-todo-app',
      projectLink: null,
    },
    {
      title: 'University Database',
      description:
        'A user-friendly university database system using MySQL, featuring a frontend interface that allows students to access their grades, professor information, and course details.',
      techStack: ['HTML', 'CSS', 'MySQL', 'PHP'],
      githubLink: null,
      projectLink: null,
    },
    {
      title: 'TuffyScheduler',
      description:
        'A program that streamlines schedule creation for students by generating and evaluating class schedules. It optimizes course selection to maximize the number of classes while ensuring schedules are conflict-free.',
      techStack: ['C++'],
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
