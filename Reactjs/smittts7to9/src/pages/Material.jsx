import { Box, Button, Container, Typography } from "@mui/material";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useState } from "react";


function Material() {
    
  return (
    //div => <Box>
    //h1,p => <Typography>
    //button => <Button<
    <Container>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        border={1}
        padding={2}
        borderColor={"hotpink"}
      >
        <Typography variant="h6" fontWeight={"medium"}>
          Typography
        </Typography>

        <Button
          className="h-12 px-3"
          color="secondary"
          startIcon={<AccessAlarmOutlinedIcon />}
          endIcon={<ArrowForwardIosOutlinedIcon />}
          variant="outlined"
        >
          Hello Button
        </Button>
      </Box>
    </Container>
  );
}

export default Material;
