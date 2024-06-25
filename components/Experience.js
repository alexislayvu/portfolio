import FadeInSection from './FadeInSection';
import SectionHeader from './SectionHeader';

const Experience = () => {
  const jobDescription = [
    'Collaborate with team members to achieve an organized, stocked, and easily accessible product section, enhancing the customer experience and honing valuable interpersonal communication skills.',
    'Demonstrate commitment to customer satisfaction by promptly addressing concerns or needs and continuously expanding product knowledge.',
    'Drive sales growth by engaging with customers on the sales floor, effectively promoting products, and increasing overall awareness.',
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
              <li key={index} className="text-lg text-slate md:text-xl">
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
