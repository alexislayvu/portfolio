'use client';

import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Typewriter } from 'react-simple-typewriter';
import FadeInSection from './FadeInSection';

const Intro = () => {
  return (
    <section id="intro" className="flex flex-col justify-center items-center text-center">
      <div className="w-full">
        <h1 className="text-5xl md:text-6xl lg:text-7xl text-green mt-10">
          hi, <Typewriter words={["i'm alexis."]} cursor />
        </h1>
        <FadeInSection>
          <h2 className="text-3xl sm:text-4xl text-light-slate">Aspiring Software Developer</h2>
          <p className="text-lg md:text-xl text-slate mt-4 max-w-xl mx-auto">
            I created this portfolio as a final project for a class, and through this experience, I
            discovered a newfound interest in frontend development. I'm fascinated by its ability to
            shape digital experiences and create visually appealing websites through code.
          </p>
          <p className="text-lg md:text-xl text-slate mt-4 max-w-xl mx-auto">
            While my current focus is on frontend development, as a new grad, I am open to exploring
            and contributing to various roles in the tech industry. My journey of learning and
            growing is ongoing, and I'm excited about the opportunities ahead.
          </p>

          <div className="flex justify-center gap-20 mt-20">
            <a href="mailto:alexislayvu@gmail.com">
              <EmailRoundedIcon className="w-8 h-8" />
            </a>

            <a href="https://github.com/alexislayvu" target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/alexislayvu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="w-8 h-8" />
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Intro;
