import React from "react";
import { Paper } from "@mui/material";

function Item({ item }) {
  return (
    <Paper>
      <img
        src={item.image}
        alt={item.title}
        style={{ height: "30vh", width: "100%", objectFit: "cover" }}
      />
      <h2
        style={{
          textAlign: "center",
          fontSize: "45px",
          fontFamily: "Gill Sans, sans-serif",
          fontStyle: "italic",
        }}
      >
        {item.title}
      </h2>
    </Paper>
  );
}

export default Item;
