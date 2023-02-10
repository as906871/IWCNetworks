import { useEffect, useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Home";
import { Button, Card, CardActionArea, Grid, Typography } from "@mui/material";
import { toast } from "react-toastify";
import AutoDeleteIcon from "@mui/icons-material/AutoDelete";
import { Container } from "@mui/system";
import moment from 'moment'
const Adding = (props) => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);
  var dateInEpochTS = 1595314414299;
  var now2 = moment(dateInEpochTS).format('dddd, MMMM Do, YYYY h:mm:ss A');

  // const curDT = new Date().toLocaleString();

  const deleteNote = (id) => {
    window.confirm("Are you sure that you want to delete ");
    {
      axios.delete(`http://localhost:5000/api/remove/${id}`);
      toast.success("note delete successfully");
      setTimeout(() => loadData(), 1000);
    }
  };

  return (
    <div style={{marginBottom:"40px"}}>
      <Home />
      <br/>
      <br />
      <Container>
        <Grid container spacing={3}>
          {data.map((item, ind) => (
            <Grid item md={3} color="red">
              <Card>
                <CardActionArea style={{ backgroundColor: "yellow" }}>
                  <Typography style={{ padding: "10px" }}>
                    {item.notes}
                  </Typography>
                  {/* <br /> */}
                  <br />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "10px",
                    }}
                  >
                    <div style={{ fontWeight: "600" }}>{now2}</div>
                    <div>
                      <Button
                        size="small"
                        onClick={() => deleteNote(item.id)}
                        style={{ float: "right", backgroundColor: "yellow" }}
                      >
                        <AutoDeleteIcon />
                      </Button>
                    </div>
                  </div>
                </CardActionArea>
              </Card>
              {/* {item.notes} */}
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Adding;
