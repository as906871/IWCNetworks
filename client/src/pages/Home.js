import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  notes: " ",
};
const Home = () => {
  const [state, setState] = useState(initialState);
  const { notes } = state;
  const naviagte = useNavigate();
  const handlSubmit = (e) => {
    // e.preventDefault();
    if (!notes) {
      toast.error("Please provide value into each input field");
    } else {
      axios
        .post("http://localhost:5000/api/post", { notes })
        .then(() => {
          setState({ notes: "" });
        })
        .catch((err) => toast.error(err.response.data));
      setTimeout(() => naviagte("/"), 1000);
      // toast.success("thanks for appointment");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div style={{ marginTop: "80px" }}>
      <form onSubmit={handlSubmit}>
        <div style={{ display: "flex", justifyContent:"center"}}>
          <div>
          <input
            style={{height: "50px", width: "500px", backgroundColor: "#f7e5e5" }}
            type="text"
            name="notes"
            placeholder="Take a note ...."
            value={notes}
            onChange={handleInputChange}
          />
          </div>
          <div>
            {/* <input
              type="submit"
              value="Add note"
              style={{ height: "45px",padding: "10px",fontWeight: "600",backgroundColor: "black",color: "white"}}
            /> */}
          </div>
        </div>
      </form>
    </div>
  );
};
export default Home;
