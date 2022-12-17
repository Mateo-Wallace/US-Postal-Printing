import React from "react";
import { useCallback } from "react";
import { Model, StylesManager } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.css";
import { useMutation } from "@apollo/client";
import { ADD_PACKAGE } from "../utils/mutations";

import { surveyJson } from "./OrderData";

StylesManager.applyTheme("defaultV2");

const MakeAnOrder = () => {
  const survey = new Model(surveyJson);
  const [addPackage, { error, data }] = useMutation(ADD_PACKAGE);

  const handleSaveOrder = useCallback(async (sender) => {
    const results = JSON.stringify(sender.data);
    console.log(results);

    try {
      const data = await addPackage({
        variables: { trackingNum: 'p.trackingNumber', carrier: 'p.carrier' },
      });
      console.log(data);

    } catch (err) {
      console.error(err);
    }
  }, []);

  survey.onComplete.add(handleSaveOrder);

  return (
    <div className="container">
      <h1>SurveyJS Library / Runner</h1>
      <Survey model={survey} />
    </div>
  );
};

export default MakeAnOrder;
