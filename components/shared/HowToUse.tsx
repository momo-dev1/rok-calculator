type IProps = {
  title: string;
  children: JSX.Element;
};

const HowToUse = ({ title, children }: IProps) => {
  return (
    <section className="rounded-2xl mx-4 backdrop-filter backdrop-blur-xl max-w-[1000px] gap-5 p-3 px-6 pb-5 lg:mx-auto mt-6 text-white bg-darkCharcoal">
      <h1 className="font-audiowide text-shadow md:text-3xl mb-4 text-lg font-semibold tracking-wide text-center">
        {title}
      </h1>

      <h2 className="font-audiowide text-shadow mb-2 text-md md:text-2xl font-semibold tracking-wide">
        How to Use:
      </h2>
      {children}
    </section>
  );
};

export default HowToUse;
