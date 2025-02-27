import FadeInSection from './FadeInSection';
import SectionHeader from './SectionHeader';

const Experience = () => {
  const jobDescription = [
    'Collaborate with team members to maintain an organized and efficient product section, improving workflow and ensuring a positive customer experience.',
    'Demonstrate problem-solving abilities by addressing customer concerns or product issues in real-time, contributing to customer satisfaction and store success.',
    'Engage with customers on the sales floor to provide recommendations and build product knowledge, fostering a welcoming and informative environment.',
  ];

  return (
    <section id="experience">
      <FadeInSection>
        <SectionHeader title="/ experience" />
        <div className="max-w-screen-lg mx-auto">
          <h3 className="mt-4 text-2xl text-lightest-slate">
            Crew Member @{' '}
            <a
              href="https://www.traderjoes.com/home/about-us"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green"
            >
              Trader Joe's
            </a>
          </h3>
          <h4 className="mb-6 text-lg text-light-slate">October 2019 - Present </h4>
          <ul className="list-none">
            {jobDescription.map((desc, index) => (
              <li key={index} className="mb-2 text-lg text-slate md:text-xl">
                <span className="mr-2 text-sm text-green">▹</span> {desc}
              </li>
            ))}
          </ul>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Experience;
