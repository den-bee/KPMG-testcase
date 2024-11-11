import {FC} from "react";
import AnimatedComponent from "./AnimatedComponent";

type TTextBlock = {
  titleSize: string;
  title: string;
  text: string;
  imageURL: string;
  reverse?: boolean;
};

const TextBlock: FC<TTextBlock> = ({
  titleSize,
  title,
  text,
  imageURL,
  reverse,
}) => {
  const checkTitleSize = () => {
    switch (titleSize) {
      case "h1":
        return <h1>{title}</h1>;
      case "h2":
        return <h2>{title}</h2>;
      case "h3":
        return <h3>{title}</h3>;
      case "h4":
        return <h4>{title}</h4>;
      default:
        break;
    }
  };

  return (
    <div
      className={`w-full flex flex-col justify-center gap-20 md:p-0 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <AnimatedComponent>
        <div className="w-96 animate-fade-in">
          {checkTitleSize()}
          <p className="tracking-wide">{text}</p>
        </div>
      </AnimatedComponent>
      <AnimatedComponent>
        <img
          className="w-full md:w-[450px] md:h-[350px] self-center animate-fade-in-delay"
          src={imageURL}
        />
      </AnimatedComponent>
    </div>
  );
};

export default TextBlock;
