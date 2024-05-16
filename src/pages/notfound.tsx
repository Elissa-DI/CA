import react, { FC } from "react";

interface notFoundProps {}

const notFound: FC<notFoundProps> = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <h1>This page is not found</h1>
      </div>
    </>
  );
};

export default notFound;
