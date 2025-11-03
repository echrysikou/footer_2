import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import ReactCountryFlag from "react-country-flag";

import { Container, Divider, Grid, Link } from "@mui/material";

import {
  IconBrandLinkedin,
  IconBrandYoutube,
  IconMail,
  IconBrandX,
} from "@tabler/icons-react";

import texts from "../utils/locales/en.json";

const Footer = () => {
  const theme = useTheme();

  return (
    <Container
      sx={{
        bgcolor: "background.default",
        width: "100%",
        paddingY: 4,
        paddingX: 2,
      }}
    >
      <Grid container spacing={5} sx={{ paddingTop: "0px!important" }}>
        <Grid
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: 2,
          }}
        >
          <Grid
            sx={{
              display: "flex",
              alignItems: { xs: "center", lg: "normal" },
              maxWidth: { xs: "unset", lg: "220px" },
              minWidth: { xs: "unset", lg: "180px" },
              gap: 2,
            }}
          >
            <ReactCountryFlag
              countryCode="EU"
              svg
              style={{
                width: "50px",
                height: "38px",
                border: `1px solid ${theme.palette.primary.light}`,
              }}
              title="US"
            />
            <Typography variant="body2" color="grey.800" fontWeight="700">
              {texts.coFunded}
            </Typography>

            <div style={{ fontFamily: 'Rubik, sans-serif', fontSize: '24px' }}>
  <div style={{ fontWeight: 400 }}>Weight 400 - Regular</div> ELENA 2
  <div style={{ fontWeight: 500 }}>Weight 500 - Medium</div>
  <div style={{ fontWeight: 600 }}>Weight 600 - SemiBold</div>
  <div style={{ fontWeight: 700 }}>Weight 700 - Bold</div>
</div>
          </Grid>
          <Grid
            sx={{ display: "flex", flexDirection: "column" }}
            gap={{ xs: 2, lg: 4 }}
          >
            <Typography variant="caption" color="grey.800" fontSize={"13px"}>
              {texts.grantAgreement}
            </Typography>

            <Divider
              orientation="horizontal"
              sx={{ marginBottom: "0px!important" }}
            ></Divider>

            <Grid
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center" },
                flexWrap: { xs: "wrap", lg: "nowrap" },
                columnGap: 3,
                rowGap: 2,
              }}
            >
              <Grid
                container
                direction="row"
                gap={2}
                sx={{
                  alignItems: "center",
                  "& .MuiTypography-root": {
                    color: "primary.700",
                    whiteSpace: { xs: "wrap", sm: "nowrap" },
                  },
                }}
              >
                <Link
                  variant="button"
                  underline="none"
                  sx={{ cursor: "pointer", flexShrink: 0 }}
                  href="https://urbreath.eu/cookie-declaration/"
                  target="_blank"
                >
                  {texts.cookies}
                </Link>

                <Typography
                  variant="button"
                  color="primary.700"
                  display={{ xs: "none", sm: "flex" }}
                >
                  &nbsp;|&nbsp;
                </Typography>

                <Link
                  variant="button"
                  underline="none"
                  sx={{ cursor: "pointer" }}
                  href="https://urbreath.eu/terms-of-use/"
                  target="_blank"
                >
                  {texts.terms}
                </Link>

                <Typography
                  variant="button"
                  color="primary.700"
                  display={{ xs: "none", sm: "flex" }}
                >
                  &nbsp;|&nbsp;
                </Typography>

                <Link
                  variant="button"
                  underline="none"
                  sx={{ cursor: "pointer", flexShrink: 0 }}
                  href="https://urbreath.eu/privacy-policy"
                  target="_blank"
                >
                  {texts.privacyPolicy}
                </Link>
              </Grid>

              <Stack
                direction="row"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 2,
                  fontSize: 13,
                  "& svg": { color: "primary.700" },
                  "& .MuiLink-root": { display: "flex" },
                }}
              >
                <Link
                  href="https://www.linkedin.com/company/urbreath-horizon-europe-project"
                  target="_blank"
                  sx={{ "& svg:hover": { color: "#0A66C2" } }}
                >
                  <IconBrandLinkedin style={{ fontSize: "24px" }} />
                </Link>

                <Link
                  href="https://www.youtube.com/channel/UC2n4Kx-Joo_Rhx9KZTrU-bg"
                  target="_blank"
                  sx={{ "& svg:hover": { color: "#FF0000" } }}
                >
                  <IconBrandYoutube style={{ fontSize: "24px" }} />
                </Link>

                <Link
                  href="https://x.com/URBREATHProject"
                  target="_blank"
                  sx={{ "& svg:hover": { color: "#000000" } }}
                >
                  <IconBrandX style={{ fontSize: "24px" }} />
                </Link>

                <Link
                  href="mailto:info@urbreath.eu"
                  sx={{ "& svg:hover": { color: "secondary.500" } }}
                >
                  <IconMail style={{ fontSize: "24px" }} />
                </Link>
              </Stack>

              <Typography variant="body2" fontWeight={400}>
                {texts.copyright}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
