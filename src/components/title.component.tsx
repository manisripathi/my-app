import React from "react";
import { Box, Typography } from "@mui/material";

interface OwnProps {
  readonly title: string;
}

const TitleComponent = ({ title }: OwnProps) => {
  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Typography variant="h4"> {title} </Typography>
    </Box>
  );
};

export default TitleComponent;
