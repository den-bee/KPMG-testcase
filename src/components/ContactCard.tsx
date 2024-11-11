import {FC} from "react";

type TContactCardProps = {
  name: string;
  position: string;
  email: string;
  phoneNumber: string;
  callToAction: string;
};

const ContactCard: FC<TContactCardProps> = ({
  name,
  position,
  email,
  phoneNumber,
  callToAction,
}) => {
  return (
    <div className="w-96 flex flex-col gap-2 mb-10 p-2 border-2 rounded-lg ">
      <h3 className="mb-2">{name}</h3>
      <h4 className="mb-2 ">{position}</h4>
      <p>
        <a
          href={`mailto:${email}`}
          className="text-white hover:text-pacific-blue"
        >
          {email}
        </a>
      </p>
      <p>
        <a
          href={`tel:${phoneNumber}`}
          className="text-white hover:text-pacific-blue"
        >
          {phoneNumber}
        </a>
      </p>
      <button className="w-fit self-center bg-transparent m-4 border-2 border-white px-4 py-2 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
        <p>{callToAction}</p>
      </button>
    </div>
  );
};

export default ContactCard;
