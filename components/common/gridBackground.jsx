"use client";

import React from "react";

export function GridBackgroundDemo({ children }) {
  return (
    (<div
      className="h-full w-full fixed inset-0 bg-neutral-950 bg-grid-gray-400/[0.4] flex items-center justify-center object-cover -z-10">
      {/* Radial gradient for the container to give a faded look */}
      <div
        className="absolute pointer-events-none inset-0 flex items-center justify-center bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
            {children}
        </div>
    </div>)
  );
}
