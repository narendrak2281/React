import React, { useState, useEffect } from "react";
import MemeCard from "../components/Card";
import { getAllMemes } from "../api/memes";


const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllMemes().then((memes) => setData(memes.data.memes));
  }, []);

  return (
    <div className="row">
    {data.map((el, index) => (
      <div className="col-md-4" key={index}> {/* Bootstrap column */}
        <MemeCard img={el.url} title={el.name} />
      </div>
    ))}
  </div>
  );
};

export default Home;
