import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";

const Preview = ({ adhardata }) => {
  return (
    <Box>
      <Paper elevation={2} sx={{ p: 3 }}>
        <Box>
          <Typography
            variant="h4"
            className="text-3xl font-bold text-center text-purple-700 mb-6"
          >
            DETAILS
          </Typography>
        </Box>

        <Box>
          <Box>
            <Box>
              <Typography variant="h6" sx={{ fontFamily: "bold" }}>
                fullName:{adhardata?.fullName}
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontFamily: "bold" }}>
                dob:{adhardata?.DOB}
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontFamily: "bold" }}>
                gender:{adhardata?.gender}
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontFamily: "bold" }}>
                housename:{adhardata?.housename}
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontFamily: "bold" }}>
                street:{adhardata?.street}
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontFamily: "bold" }}>
                district:{adhardata?.district}
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontFamily: "bold" }}>
                {adhardata?.state}
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontFamily: "bold" }}>
                pincode:{adhardata?.pincode}
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontFamily: "bold" }}>
                phonenumber:{adhardata?.phonenumber}
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontFamily: "bold" }}>
                email:{adhardata?.email}
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontFamily: "bold" }}>
                identityproof:{adhardata?.identityproof}
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontFamily: "bold" }}>
                addressproof:{adhardata?.addressproof}
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Typography
            variant="h4"
            className="text-2xl font-bold text-center text-purple-700 mb-6"
          >
            Other Information
          </Typography>

          <Box>
            <Box>
              <Typography variant="h6" sx={{ fontFamily: "bold" }}>
                fathername:{adhardata?.fathername}
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontFamily: "bold" }}>
                mothername:{adhardata?.mothername}
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontFamily: "bold" }}>
                maritalstatus:{adhardata?.maritalstatus}
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontFamily: "bold" }}>
                nationality:{adhardata?.nationality}
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontFamily: "bold" }}>
                occupation:{adhardata?.occupation}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Preview;
