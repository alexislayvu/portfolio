import FadeInSection from './FadeInSection';
import SectionHeader from './SectionHeader';
import Image from 'next/image';

const About = () => {
  const technologies = [
    {
      title: 'Languages',
      list: ['Python', 'C/C++', 'JavaScript', 'HTML/CSS', 'Kotlin'],
    },
    {
      title: 'Frontend',
      list: ['React', 'Next.js', 'Tailwind CSS'],
    },
    {
      title: 'Backend / Database',
      list: ['Flask', 'MySQL', 'PHP'],
    },
  ];

  return (
    <section id="about">
      <FadeInSection>
        <SectionHeader title="/ about me" />
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div>
            <p className="mt-4 text-lg text-slate md:text-xl">
              I graduated with a B.S. in Computer Science from{' '}
              <a
                href="https://www.fullerton.edu/about/default.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green"
              >
                California State University, Fullerton
              </a>{' '}
              and am actively seeking full-time software engineering
              opportunities to start my career.
            </p>

            <p className="mt-4 text-lg text-slate md:text-xl">Technologies:</p>

            <div className="grid grid-cols-2 sm:grid-cols-3">
              {technologies.map((category, index) => (
                <div key={index}>
                  <p className="mt-4 text-lg text-green">{category.title}</p>
                  <ul className="list-none">
                    {category.list.map((item, subIndex) => (
                      <li key={subIndex} className="text-base text-slate">
                        <span className="mr-2 text-sm text-green">▹</span>{' '}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mt-4 text-lg text-slate md:text-xl">
              I spend my free time at the gym, piecing together jigsaw puzzles,
              and learning how to cook. I also enjoy going to the movies and
              playing video games when I need to shut my brain off.
            </p>
          </div>

          <div className="flex justify-center items-center mt-10 lg:justify-end lg:mt-0">
            <Image
              src="/me.png"
              width={280}
              height={300}
              alt="Profile picture"
              className="max-w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default About;
