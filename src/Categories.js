import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-free-solid";
import "./Categories.css";
import { VIEWS } from "./App";

export default function Categories(props) {
  function selectCategory(category) {
    props.changeView(VIEWS.hashtags);
    props.changeCategory(category);
  }

  return (
    <div className="row px-2">
      {props.data.map(category => {
        return (
          <Category
            key={category.name}
            category={category}
            onClick={() => selectCategory(category)}
          />
        );
      })}
    </div>
  );
}

function Category(props) {
  return (
    <div className="col-4 p-1">
      <div className="category shadow border rounded" onClick={props.onClick}>
        <div className="icon-wrapper">
          <FontAwesomeIcon
            icon={props.category.icon || "hashtag"}
            color={props.category.color || "grey"}
          />
        </div>
        <h5 className="text-secondary">{props.category.name}</h5>
      </div>
    </div>
  );
}
