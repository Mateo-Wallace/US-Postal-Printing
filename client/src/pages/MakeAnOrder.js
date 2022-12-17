import React, { useState } from "react";
import { useCallback } from "react";
import { Model, StylesManager } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.css";
import { useMutation } from "@apollo/client";
import { ADD_ORDER } from "../utils/mutations";
import Typography from "@mui/material/Typography";

import { surveyJson } from "./OrderData";

StylesManager.applyTheme("defaultV2");

const MakeAnOrder = () => {
  const survey = new Model(surveyJson);
  const [addOrder, { error, data }] = useMutation(ADD_ORDER);
  const [orderSaved, setOrderSaved] = useState();

  const handleSaveOrder = useCallback(async (sender) => {
    console.log(JSON.stringify(sender.data));
    const orderData = {
      type: sender.data.product,
      message: `sender.data.message`,
      totalPrice: sender.data.total,
      quantity: `${sender.data.quantity}`,
    };

    try {
      const data = await addOrder({
        variables: orderData,
      });
      console.log(data);
      setOrderSaved(true);
      setTimeout(function () {
        setOrderSaved(false);
      }, 5000);
    } catch (err) {
      console.error(err);
    }
  }, []);

  survey.onComplete.add(handleSaveOrder);

  return (
    <div className="container">
      <h1>Make An Order</h1>

      {orderSaved ? (
        <Typography align="center" component="h1" variant="h5">
          Package Saved!
        </Typography>
      ) : (
        <Survey model={survey} />
      )}
    </div>
  );
};

export default MakeAnOrder;
