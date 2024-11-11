import AnimatedComponent from "./AnimatedComponent";

const Header = () => {
  return (
    <header className="h-1/2 flex justify-center bg-header bg-cover bg-right lg:mb-20">
      <div className="w-full text-white self-end md:self-center md:text-left md:pl-8 lg:text-3xl  bg-kpmg-blue bg-opacity-30 md:bg-opacity-0">
        <AnimatedComponent>
          <h1 className="uppercase">Main Title</h1>
          <h2 className="uppercase">Subtitle</h2>
        </AnimatedComponent>
      </div>
    </header>
  );
};

export default Header;
