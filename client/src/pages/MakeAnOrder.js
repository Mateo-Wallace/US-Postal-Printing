import React from "react";
import { useCallback } from "react";
import { Model, StylesManager } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.css";
import { useMutation } from "@apollo/client";
import { ADD_ORDER } from "../utils/mutations";

import { surveyJson } from "./OrderData";

StylesManager.applyTheme("defaultV2");

const MakeAnOrder = () => {
  const survey = new Model(surveyJson);
  const [addOrder, { error, data }] = useMutation(ADD_ORDER);

  const handleSaveOrder = useCallback(async (sender) => {
    const orderData = {
      type: sender.data.product,
      message: sender.data.message,
      totalPrice: sender.data.total,
      quantity: `${sender.data.quantity}`,
    };
    console.log(orderData);

    try {
      const data = await addOrder({
        variables: orderData,
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
