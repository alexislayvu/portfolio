import FadeInSection from './FadeInSection';
import SectionHeader from './SectionHeader';
import Image from 'next/image';

const About = () => {
  const technologies = [
    {
      title: 'Languages',
      list: ['Python', 'C/C++', 'JavaScript', 'HTML', 'CSS', 'Kotlin'],
    },
    {
      title: 'Web Development',
      list: ['React', 'Next.js', 'Tailwind CSS', 'Flask', 'MySQL', 'PHP'],
    },
  ];

  return (
    <section id="about">
      <FadeInSection>
        <SectionHeader title="/ about me" />
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div>
            <p className="mt-4 text-lg text-slate md:text-xl">
              I recently graduated with a Bachelor of Science in Computer
              Science from{' '}
              <a
                href="https://www.fullerton.edu/about/default.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green"
              >
                California State University, Fullerton
              </a>
              . During my studies, I balanced part-time work at{' '}
              <a
                href="https://www.traderjoes.com/home/about-us"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green"
              >
                Trader Joe's
              </a>{' '}
              with a full-time academic load. Now, I am excited to begin my
              career as a software engineer and am actively seeking full-time
              positions in the field.
            </p>

            <p className="mt-4 text-lg text-slate md:text-xl">
              Technologies I've worked with:
            </p>

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
              In my free time, I enjoy working out, going to the movies,
              shopping, and spending quality time with my girlfriend. Looking
              ahead, I want to pick up reading, learn new technologies, and
              strengthen my current skills.
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
