import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-free-solid";
import "./Hashtags.css";

import { VIEWS } from "./App";

export default function Hashtags(props) {
  const ref = useRef(null);

  function copy() {
    ref.current.select();
    ref.current.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
  }

  return (
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
        <button className="btn btn-outline-secondary btn-block" onClick={copy}>
          <FontAwesomeIcon icon="copy" />
        </button>
      </div>
      <div className="col-12 mt-3">
        <textarea
          ref={ref}
          className="form-control p-2 w-100 bg-light"
          style={{ minHeight: "50vh" }}
          readOnly={true}
          value={`#${props.category.hashtags.join(" #")}`}
        />
      </div>
    </div>
  );
}
