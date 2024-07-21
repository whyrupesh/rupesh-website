import React from "react";

export default function ProjectCards({ url, name, description, img }) {
  return (
    <div>
      <a href={url}>
        <div className="border-2 w-3/4 m-5">
          <div className="p-5">
            <img width={500} src={img} alt="" />
            <div className="pt-2">
              <div className="text-2xl">{name}</div>
              <div>{description}</div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
