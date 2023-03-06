import React, { ReactNode } from "react";

interface IProps {
  icon: ReactNode;
  title: string;
}

const Card001: React.FC<IProps> = ({ icon, title }) => {
  return (
    <div className="grid justify-center">
      <div className="grid">
        <div className="grid justify-center">{icon}</div>
        <h4 className="text-center pt-5 font-semibold text-gray-800 text-2xl uppercase">
          {title}
        </h4>
      </div>
      <p className="pt-5 text-base font-semibold text-gray-500 text-center">
        We connect customers to service providers using tried-and-tested
        marketing methods. Our team provides excellent customer service to all
        of our customers in all of our verticals.
      </p>
    </div>
  );
};

export default Card001;
