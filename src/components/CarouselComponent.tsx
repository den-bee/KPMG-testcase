import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import bus from "../../public/images/mobility/Mobility-bus-1500x1000-742.jpg";
import train from "../../public/images/mobility/Mobility-train-1500x1000-744.jpg";
import garden from "../../public/images/sustainability/SPT-banner-1500x1000px-824.jpg";
import bridge from "../../public/images/sustainability/SPT-banner-1500x1000px-825.jpg";
import laughing from "../../public/images/technology/SPT-banner-1500x1000px-837.jpg";

const handleDragStart = (e: React.DragEvent<HTMLImageElement>) =>
  e.preventDefault();

const items = [
  <img src={bus} onDragStart={handleDragStart} role="presentation" />,
  <img src={train} onDragStart={handleDragStart} role="presentation" />,
  <img src={garden} onDragStart={handleDragStart} role="presentation" />,
  <img src={bridge} onDragStart={handleDragStart} role="presentation" />,
  <img src={laughing} onDragStart={handleDragStart} role="presentation" />,
];

const CarouselComponent = () => {
  return (
    <section className="flex flex-col justify-center gap-2">
      <h3>Gallery</h3>
      <div className="w-96 h-auto self-center ">
        <AliceCarousel mouseTracking items={items} />
      </div>
    </section>
  );
};

export default CarouselComponent;
