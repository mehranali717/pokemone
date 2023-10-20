import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
const Loader = () => {
  let loading = true;
  let color="#36d7b7";
  return (
    <div className="flex justify-center mt-[370px]">
      <ScaleLoader
        color={color}
        loading={loading}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
