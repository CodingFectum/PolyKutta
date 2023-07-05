import React from "react";


const SectionHeading = (props) => {
  return (
    <h2 className="QMF---SectionHeadeing my-4 my-md-5">
        {props.title}
        <span>{props.title}</span>
    </h2>
  );
}

export default SectionHeading;
