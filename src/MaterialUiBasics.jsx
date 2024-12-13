import React from 'react'
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Alert } from "@mui/material";
export default function MaterialUiBasics() {
  return (
    <div>
       <h1>Material UI Demo</h1>
      <Button variant="text">Text</Button>
      <Button
        variant="contained"
        color="success"
        size="small"
        endIcon={<SendIcon />}
      >
        Contained
      </Button>
      <Button variant="outlined">Outlined</Button>
      <Alert severity="success">wow</Alert>
    </div>
  )
}
