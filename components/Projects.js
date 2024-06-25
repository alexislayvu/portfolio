import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import FadeInSection from './FadeInSection';

const Projects = () => {
  const projects = [
    {
      title: 'Object Detector',
      description:
        'A web application for object detection using the COCO-SSD model. Users can detect objects via webcam or images and customize settings for precise results.',
      techStack: ['React', 'JavaScript', 'HTML', 'CSS', 'Tensorflow.js'],
      githubLink: 'https://github.com/alexislayvu/ObjectDetector',
      projectLink: 'https://ace-object-detector.vercel.app/',
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
        'A todo application enhanced with Celery for asynchronous processing, Redis for message brokering, and Nginx for API gateway management. Features a RESTful API developed with Flask and MySQL, supporting CRUD operations and user authentication.',
      techStack: ['Python', 'Flask', 'MySQL', 'Redis', 'Celery', 'Nginx'],
      githubLink: 'https://github.com/alexislayvu/backend-todo-app',
      projectLink: null,
    },
    {
      title: 'TrivTopia',
      description:
        'A trivia web application featuring quizzes on sports, pop culture, science and nature, and technology, providing users with an interactive way to test their knowledge across various subjects.',
      techStack: ['JavaScript', 'Bootstrap', 'HTML', 'CSS'],
      githubLink: 'https://github.com/alexislayvu/trivtopia',
      projectLink: 'https://trivtopia.vercel.app/',
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
        'A program designed to streamline schedule creation for students, featuring generation and evaluation of clash-free class schedules using data structures and algorithms.',
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
