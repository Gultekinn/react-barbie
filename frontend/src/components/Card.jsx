import React, { useEffect, useState } from "react";
import "../components/Card.scss";
import { Link } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";
import axios from "axios";
const Card = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSeachValue] = useState([]);
  const [dummys, setDummy] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8080/").then((res) => {
      setData(res.data);
    });
  }, [searchValue === "", dummys ? data : ""]);

  return (
    <div>
      <Helmet>
        <title>Barbie</title>
      </Helmet>
      <input id="input"
        type="text"
        placeholder="search barbiee..."
        onChange={(e) => {
          setSeachValue(e.target.value);
          setData(data.filter((item) => item.name.includes(searchValue)));
        }}
      />

      <button id="btn"
        onClick={() => {
          setData([...data.sort((a, b) => a.price - b.price)]);
        }}
      >
        Sort By Price
      </button>

      <div className="cards">
        {data.map((item, index) => {
          return (
            <div className="card">
              <div className="card__img">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
              <h1>{item.name}</h1>
              <p>{item.price}AZN</p>
              <Link to="wishlist">
                <button>Wishlist</button>{" "}
              </Link>
              <button
                onClick={() => {
                  axios
                    .delete(`http://localhost:8080/${item._id}`)
                    .then((res) => {
                      setDummy(true);
                      toast.success("item deleted");
                    });
                }}
              >
                delete
              </button>{" "}
              <br />
              <Link id="link" to={`${item._id}`}>Detail</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
