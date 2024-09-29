import { Box, Typography, useTheme, styled } from "@mui/material";
import { tokens } from "../theme";

const ResponsiveBox = styled(Box)`
  @media (max-width: 600px) {
    margin: 0 10px;
  }
`;

const StatBox = ({ title, subtitle, icon, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveBox width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </ResponsiveBox>
    
  );
};

export default StatBox;
