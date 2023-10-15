import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

interface OwnProps {
	readonly name: string;
}

const VotesComponent = ({ name }: OwnProps) => {
  const [votes, setVotes] = useState(0);

  return (
    <Box gap={1} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
      <Typography variant="subtitle1"> Total Votes for {name}: {votes} </Typography>
      <br />
      <Button variant="contained" size="small" onClick={() => setVotes((prevState) => prevState + 1)}>Up vote</Button>
      <Button variant="contained" size="small" onClick={() => setVotes((prevState) => prevState - 1)}>Down vote</Button>
    </Box>
  );
};

export default VotesComponent;
