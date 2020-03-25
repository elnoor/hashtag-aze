import React, { useState, useEffect } from "react";
import "./App.css";
import Categories from "./Categories.js";
import Hashtags from "./Hashtags.js";
import localData from "./Data.json";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Use the url of raw Data.json file from GitHub
// Change data inside Data.json in GitHub - Simulating API
const DATA_URL =
  "https://raw.githubusercontent.com/elnoor/hashtag-aze/master/src/Data.json";

export const VIEWS = {
  categories: "Kateqoriyalar",
  hashtags: "Həşteqlər"
};

export default function App() {
  document.title = "Hashtag Aze";
  const [data, setData] = useState(localData);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [view, setView] = useState(VIEWS.categories);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(DATA_URL)
      .then(result => {
        if (result.statusText.toUpperCase() === "OK" && result.data) {
          setData(result.data);
        }
      })
      .catch(error => {
        console.log(error);
      }).then(()=>{
        setLoading(false);
      })
  }, []);

  function changeView(_view) {
    setView(_view);
  }

  function changeCategory(category) {
    setSelectedCategory(category);
  }

  function render() {
    let viewContent = (
      <Categories
        data={data}
        changeView={changeView}
        changeCategory={changeCategory}
      />
    );

    if (view === VIEWS.hashtags) {
      viewContent = (
        <Hashtags category={selectedCategory} changeView={changeView} />
      );
    }

    return (
      <div className="App container">
        <h4 className="bg-light mb-3 mt-2 mt-n1 mx-n3 pt-2 px-2 py-1 text-center text-secondary border-bottom">
          {loading && 
          <FontAwesomeIcon icon="spinner" spin size='xs' className="mr-2"/>}
          {view}
        </h4>
        {viewContent}
      </div>
    );
  }

  return render();
}
