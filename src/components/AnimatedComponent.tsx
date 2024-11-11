import {FC, ReactNode} from "react";
import {useInView} from "../utils/useInView";

type TAnimatedComponentProps = {
  children: ReactNode;
};

const AnimatedComponent: FC<TAnimatedComponentProps> = ({children}) => {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-300 transform ${
        isInView ? "animate-fade-in" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedComponent;
