import React, {useState, useEffect} from 'react';
import { Box, Typography } from '@mui/material';

const TransactionItem = ({ transaction, colors, isExpanded }) => {

    const [expanded, setExpanded] = useState(isExpanded);

    const toggleExpansion = () => {
      setExpanded(!expanded);
      console.log(!expanded)
    };

    return (
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderBottom={`4px solid #581c87`}
        p="15px"
        borderRadius="10px"
      >
        <Box>
          <button
            color={colors.grey[100]}
            variant="h4"
            fontWeight="500"
            onClick={toggleExpansion}
          >
            {transaction.txId}
          </button>
          <Typography color={colors.grey[100]}>Año: {transaction.user}</Typography>
        </Box>
        <Box
          backgroundColor="#6075FF"
          p="5px 10px"
          borderRadius="8px"
          color="white"
        >
            {transaction.inscriptos} inscriptos
      </Box>
        <Box
          backgroundColor="#12DF72"
          p="5px 10px"
          borderRadius="8px"
          color="white"
        >
            {transaction.cost} asistieron
      </Box>
    </Box>
  );
};

export default TransactionItem