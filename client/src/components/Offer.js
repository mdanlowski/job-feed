import React from 'react';

export default function Offer(props) {
  // const data = { props };
  return (
    <div className="job-offer">
      Your skills are required for a job: {props.data.title} in {props.data.title}
      <a href="">- you sonovabich I'm in</a>
    </div>
  );
}
