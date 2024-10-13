const SectionHeader = ({ title }) => (
  <div className="max-w-screen-xl mx-auto flex flex-none pt-20">
    <h2 className="text-4xl text-lightest-slate md:text-5xl">{title}</h2>
    <p className="flex-1 w-[300px] mt-[20px] ml-[15px] h-px bg-lightest-navy md:mt-[24px]"></p>
  </div>
);

export default SectionHeader;
