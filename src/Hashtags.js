import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-free-solid";
import "./Hashtags.css";

import { VIEWS } from "./App";

export default function Hashtags(props) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const ref = useRef(null);

  function copy() {
    ref.current.select();
    ref.current.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
  }

  function getHashtags() {
    let hashtags = props.category.hashtags;
    if (selectedIndex !== null) {
      // null for parent category
      hashtags = props.category.subCategories[selectedIndex].hashtags;
    }
    return `#${hashtags.join(" #")}`;
  }

  return (
    <>
      <div className="row">
        <div className="col-3">
          <button
            className="btn btn-outline-secondary btn-block"
            onClick={() => props.changeView(VIEWS.categories)}
          >
            <FontAwesomeIcon icon="angle-left" />
          </button>
        </div>
        <div className="col-6">
          <h5 className="my-1">
            <FontAwesomeIcon
              icon={props.category.icon || "hashtag"}
              color={props.category.color || "black"}
              style={{ marginRight: "7px" }}
            />
            {props.category.name}
          </h5>
        </div>
        <div className="col-3">
          <button
            className="btn btn-outline-secondary btn-block"
            onClick={copy}
          >
            <FontAwesomeIcon icon="copy" />
          </button>
        </div>
      </div>
      {props.category.subCategories && props.category.subCategories.length > 0 && (
        <div className="sub-category-slider mt-3 bg-light border-top border-bottom py-1 mx-n3 px-3">
          <div className="d-inline-flex">
            <SubCategory
              color={props.category.color}
              name={props.category.name}
              icon={props.category.icon}
              onClick={() => setSelectedIndex(null)}
              active={selectedIndex === null}
            />
            {props.category.subCategories.map((subCategory, index) => {
              return (
                <SubCategory
                  color={subCategory.color}
                  name={subCategory.name}
                  icon={subCategory.icon}
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  active={index === selectedIndex}
                />
              );
            })}
          </div>
        </div>
      )}
      <div className="row">
        <div className="col-12 mt-3">
          <textarea
            ref={ref}
            className="form-control p-2 w-100 bg-light"
            style={{ minHeight: "50vh" }}
            readOnly={true}
            value={getHashtags()}
          />
        </div>
      </div>
    </>
  );
}

function SubCategory({ active, icon, color, name, onClick }) {
  return (
    <div
      className={
        "sub-category shadow-sm bg-white mr-2 border rounded d-inline-block float-left" +
        (active ? " active" : "")
      }
      onClick={onClick}
    >
      <div className="icon-wrapper">
        <FontAwesomeIcon icon={icon || "hashtag"} color={color || "grey"} />
      </div>
      <h5 className="text-secondary">{name}</h5>
    </div>
  );
}
