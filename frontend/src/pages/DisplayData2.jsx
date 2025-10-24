import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography, List, ListItem, Divider } from "@mui/material";

const API_URL = "http://localhost:5000/api/data2"; // backend URL

const DisplayData2 = () => {
  const [dataList, setDataList] = useState([]);

  // Fetch all saved data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL}/getdata2`);
        setDataList(res.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 5 }}>
      <Typography variant="h5" gutterBottom>
        Saved Data2 Entries
      </Typography>

      <List>
        {dataList.length === 0 && (
          <Typography>No data found.</Typography>
        )}
        {dataList.map((item) => (
          <React.Fragment key={item._id}>
            <ListItem>
              <Typography>
                {item.firstname} {item.middlename} {item.lastname}
              </Typography>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default DisplayData2;
