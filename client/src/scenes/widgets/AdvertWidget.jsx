import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Neighbourhood
        </Typography>

      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="../assets/img2.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography fontSize="1.4rem" color={main}>GliwcieGuromGrupaPL</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        This group is for students of AEiI faculty where we are exchanging tools and offering services. You are free to join us!
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
