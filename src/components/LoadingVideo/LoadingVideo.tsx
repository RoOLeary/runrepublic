import React, { FC } from "react";

export interface LoadingVideoProps {
  className?: string;
  chilClassName?: string;
}

const LoadingVideo: FC<LoadingVideoProps> = ({
  className = "",
  chilClassName = "bg-white",
}) => {
  return (
    <div className={`LoadingVideo lds-ellipsis ${className}`}>
      <div className={chilClassName}></div>
      <div className={chilClassName}></div>
      <div className={chilClassName}></div>
      <div className={chilClassName}></div>
    </div>
  );
};

export default LoadingVideo;
