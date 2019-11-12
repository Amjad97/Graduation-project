import React from "react";
import { Button } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

function CustomButton({ children, isLoading, disabled, onClick }) {
  let textColor = disabled ? "#CCCCCC" : "#FFF";
  let backgroundColor = disabled ? "#227CBB" : "#2ca8ff";

  return (
    <Button
      onClick={onClick}
      style={{
        color: textColor,
        backgroundColor,
        borderRadius: 30,
        minWidth: 50,
        width: '-webkit-fill-available',
        height: 48,
        pointerEvents: disabled && "none",
        cursor: disabled && "default"
      }}
    >
      {isLoading ? (
        <CircularProgress
          color="default"
          style={{ margin: "auto", width: "20px", height: "15px" }}
        />
      ) : (
        children
      )}
    </Button>
  );
}

export default CustomButton;
