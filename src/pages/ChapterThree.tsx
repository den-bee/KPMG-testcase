import TextBlock from "../components/TextBlock";
import green from "../../public/images/sustainability/SPT-banner-1500x1000px-826.jpg";
import sprout from "../../public/images/sustainability/SPT-banner-1500x1000px-832.jpg";

const ChapterThree = () => {
  return (
    <section className="flex flex-col text-left gap-16 p-10 mb-16">
      <div className="sm:w-3/4 self-center mb-10">
        <h3 className="text-2xl mb-2">Chapter Three</h3>
        <div className="sm:flex gap-20">
          <p className="sm:w-1/2 mb-6 sm:mb-0">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
            porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
            purus lectus malesuada libero, sit amet commodo magna eros quis
            urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </p>
          <p className="sm:w-1/2">
            Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In
            porttitor. Donec laoreet nonummy augue. Suspendisse dui purus,
            scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget
            neque at sem venenatis eleifend. Ut nonummy. Fusce aliquet pede non
            pede. Suspendisse dapibus lorem pellentesque magna. Integer nulla.
            Donec blandit feugiat ligula.
          </p>
        </div>
      </div>
      <TextBlock
        titleSize="h4"
        title="Title"
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
          porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
          purus lectus malesuada libero, sit amet commodo magna eros quis urna.
          Nunc viverra imperdiet enim. Fusce est. "
        imageURL={green}
      />
      <TextBlock
        titleSize="h4"
        title="Title"
        text="Proin nec augue. Quisque aliquam tempor magna. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Nunc ac magna."
        imageURL={sprout}
        reverse={true}
      />
    </section>
  );
};

export default ChapterThree;
