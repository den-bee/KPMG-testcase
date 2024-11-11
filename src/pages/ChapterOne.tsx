import TextBlock from "../components/TextBlock";
import tablet from "../../public/images/technology/SPT-banner-1500x1000px-834.jpg";
import vr from "../../public/images/technology/SPT-banner-1500x1000px-835.jpg";
import bicycle from "../../public/images/mobility/Mobility-bicycle-1500x1000-746.jpg";

const ChapterOne = () => {
  return (
    <section className="flex flex-col text-left gap-16 p-10">
      <div className="sm:w-3/4 self-center mb-10">
        <h3 className="text-2xl mb-2">Chapter One</h3>
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
          Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean
          nec lorem. In porttitor."
        imageURL={tablet}
      />

      <TextBlock
        titleSize="h4"
        title="Title"
        text="Proin nec augue. Quisque aliquam tempor magna. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Nunc ac magna. Maecenas odio dolor, vulputate vel, auctor ac,
          accumsan id, felis. Pellentesque cursus sagittis felis. Pellentesque
          porttitor, velit lacinia egestas auctor, diam eros tempus arcu, nec
          vulputate augue magna vel risus."
        imageURL={vr}
        reverse={true}
      />

      <TextBlock
        titleSize="h4"
        title="Title"
        text="Mauris eleifend nulla eget mauris. Sed cursus quam id felis. Curabitur
          posuere quam vel nibh. Cras dapibus dapibus nisl. Vestibulum quis
          dolor a felis congue vehicula. Maecenas pede purus, tristique ac,
          tempus eget, egestas quis, mauris. Curabitur non eros. Nullam
          hendrerit bibendum justo. Fusce iaculis, est quis lacinia pretium,
          pede metus molestie lacus, at gravida wisi ante at libero. Quisque
          ornare placerat risus. Ut molestie magna at mi. Integer aliquet mauris
          et nibh. Ut mattis ligula posuere velit."
        imageURL={bicycle}
      />
    </section>
  );
};

export default ChapterOne;
