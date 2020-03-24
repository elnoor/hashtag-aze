import React, { useState } from "react";
import "./App.css";
import Categories from "./Categories.js";
import Hashtags from "./Hashtags.js";
import { data } from "./Data";

export const VIEWS = {
  categories: "Kateqoriyalar",
  hashtags: "Həşteqlər"
};

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [view, setView] = useState(VIEWS.categories);

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
          {view}
        </h4>
        {viewContent}
      </div>
    );
  }

  return render();
}
