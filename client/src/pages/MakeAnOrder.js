import React from "react";
import { Model, StylesManager } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.css";

import { surveyJson } from "./OrderData";

StylesManager.applyTheme("defaultV2");

function onValueChanged(_, options) {
  console.log("New value: " + options.value);
}

function onComplete(e) {
  console.log("Survey complete! Results: " + JSON.stringify(e.data));
}

const MakeAnOrder = () => {
  const survey = new Model(surveyJson);
  return (
    <div className="container">
      <h1>SurveyJS Library / Runner</h1>
      <Survey
        model={survey}
        onComplete={onComplete}
        onValueChanged={onValueChanged}
      />
    </div>
  );
};

export default MakeAnOrder;
