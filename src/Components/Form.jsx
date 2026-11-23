import { Box, Divider, TextField, Typography } from "@mui/material";
import React from "react";

const Form = ({ adhardata, setadhardata }) => {
  console.log(adhardata);

  return (
    <>
      <Box className="bg-white rounded-2xl shadow-xl border border-purple-200 p-6" >
        <Typography variant="h5" className="text-3xl font-bold text-purple-700 mb-2">
          ADHAR DETAILS HERE
        </Typography>

        <Typography variant="h6" sx={{ mb: 2 }}  className="text-gray-500 mb-6">
          Enter your new adhar details below.
        </Typography>

        <Box className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextField
            onChange={(e) =>
              setadhardata({ ...adhardata, fullName: e.target.value })
            }
            value={adhardata.fullName}
            id="full-name"
            label="Full Name"
            variant="outlined"
          />

          <TextField
            onChange={(e) =>
              setadhardata({ ...adhardata, DOB: e.target.value })
            }
            value={adhardata.DOB}
            id="DOB"
            label="DOB"
            variant="outlined"
          />

          <TextField
            onChange={(e) =>
              setadhardata({ ...adhardata, gender: e.target.value })
            }
            value={adhardata.gender}
            id="gender"
            label="gender"
            variant="outlined"
          />

          <TextField
            onChange={(e) =>
              setadhardata({ ...adhardata, housename: e.target.value })
            }
            value={adhardata.housename}
            id="housename"
            label="housename"
            variant="outlined"
          />

          <TextField
            onChange={(e) =>
              setadhardata({ ...adhardata, street: e.target.value })
            }
            value={adhardata.street}
            id="street"
            label="street"
            variant="outlined"
          />

          <TextField
            onChange={(e) =>
              setadhardata({ ...adhardata, district: e.target.value })
            }
            value={adhardata.district}
            id="district"
            label="district"
            variant="outlined"
          />
          <TextField
            onChange={(e) =>
              setadhardata({ ...adhardata, state: e.target.value })
            }
            value={adhardata.state}
            id="state"
            label="state"
            variant="outlined"
          />
          <TextField
            onChange={(e) =>
              setadhardata({ ...adhardata, pincode: e.target.value })
            }
            value={adhardata.pincode}
            id="pincode"
            label="pincode"
            variant="outlined"
          />
          <TextField
            onChange={(e) =>
              setadhardata({ ...adhardata, phonenumber: e.target.value })
            }
            value={adhardata.phonenumber}
            id="phonenumber"
            label="phonenumber"
            variant="outlined"
          />
          <TextField
            onChange={(e) =>
              setadhardata({ ...adhardata, email: e.target.value })
            }
            value={adhardata.email}
            id="email"
            label="email"
            variant="outlined"
          />
          <TextField
            onChange={(e) =>
              setadhardata({ ...adhardata, identityproof: e.target.value })
            }
            value={adhardata.identityproof}
            id="identityproof"
            label="identityproof"
            variant="outlined"
          />
          <TextField
            onChange={(e) =>
              setadhardata({ ...adhardata, addressproof: e.target.value })
            }
            value={adhardata.addressproof}
            id="addressproof"
            label="addressproof"
            variant="outlined"
          />
        </Box>

        <Divider sx={{ my: "6" }} />

        <Typography variant="h5" className="text-xl font-bold text-purple-700 mt-8 mb-4 border-b pb-2">
          Additional Information
        </Typography>

        <Box className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextField
          onChange={(e) =>
            setadhardata({ ...adhardata, fathername: e.target.value })
          }
          value={adhardata.fathername}
          id="father"
          label="father"
          variant="outlined"
        />
        <TextField 
          onChange={(e) =>
            setadhardata({ ...adhardata, mothername: e.target.value })
          }
          value={adhardata.mothername}
          id="mothername"
          label="mothername"
          variant="outlined"
        />
        <TextField
          onChange={(e) =>
            setadhardata({ ...adhardata, maritalstatus: e.target.value })
          }
          value={adhardata.maritalstatus}
          id="martial status"
          label="martial staus"
          variant="outlined"
        />
        <TextField
          onChange={(e) =>
            setadhardata({ ...adhardata, nationality: e.target.value })
          }
          value={adhardata.nationality}
          id="nationality"
          label="nationality"
          variant="outlined"
        />
        <TextField
          onChange={(e) =>
            setadhardata({ ...adhardata, occupation: e.target.value })
          }
          value={adhardata.occupation}
          id="occupation"
          label="occupation"
          variant="outlined"
        />
        </Box>
      </Box>
    </>
  );
};

export default Form;