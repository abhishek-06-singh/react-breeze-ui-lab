import React from "react";

const ShimmerLoaderSingle = () => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 xl:gap-x-8">
        <div className="group">
          <div
            className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 p-1 shimmer an"
            style={{ height: "300px" }}
          >
            <div
              className="shimmer-inner"
              style={{ height: "100%", width: "100%" }}
            ></div>
          </div>
          <div className="mt-5 text-sm bg-gray-400 h-5 w-3/4 shimmer animate-pulse rounded-lg"></div>
          <div className="mt-4 text-lg font-medium bg-gray-300 shimmer animate-pulse h-3 w-2/4 rounded-lg"></div>
          <div className="flex items-center mt-3  bg-gray-300 shimmer animate-pulse h-3 w-1/4 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerLoaderSingle;
