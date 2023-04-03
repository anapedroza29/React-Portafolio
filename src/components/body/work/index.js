import React from "react";
import "./work.css";
import Separator from "../../common/separator";
import {WorkData} from "../../data/work";
import WorkCard from "./work-card";
function Work() {
  const data = WorkData;
  return (
    <div className="work">
      <Separator />
      <label className="section-title">Work</label>
      <div className="work-list">
        {data.map((item, index) => {
          return (
            <div className="work-section" key={index}>
            <label className="work-name" >{item.type}</label>
              {item.list.map((work) => {
                return <WorkCard key={work.id} item={work} />;
              })}
          </div>
          );
        })}
      </div>
    </div>
  );  
}

export default Work;