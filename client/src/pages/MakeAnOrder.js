import React, { useState } from "react";
import { useCallback } from "react";
import { Model, StylesManager } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.css";
import { useMutation } from "@apollo/client";
import { ADD_ORDER } from "../utils/mutations";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import './MakeAnOrder.css'

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
      message: `message: ${sender.data.message}, name: ${sender.data.name}, phone: ${sender.data.phone}, address: ${sender.data.address}, costPerItem: ${sender.data.cost}`,
      totalPrice: sender.data.total,
      quantity: `${sender.data.quantity}`,
    };

    try {
      const data = await addOrder({
        variables: orderData,
      });
      console.log(data.data.addOrder);
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
    <div style={
      {display: "flex", justifyContent: "center", alignItems: "center", marginTop: "140px"}
    } className="container">
    <Box
        sx={{
          margin: 1,
          backgroundColor: "primary.dark",
          borderRadius: "40px",
          padding: "40px",
          height: "80%",
          width: "80%",
        }}
      >
      <Typography
            sx={{ margin: 2, textAlign: "center", color: "white" }}
            variant="h4"
          >
            Make An Order
          </Typography>

      {orderSaved ? (
        <Typography align="center" component="h1" variant="h5">
          Package Saved!
        </Typography>
      ) : (
        <Survey style={
          {backgroundColor: "primary.dark"}
        } model={survey} />
      )}
    </Box>
    </div>
  );
};

export default MakeAnOrder;
