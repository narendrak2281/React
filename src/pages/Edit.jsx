import React, { useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import Text from "../components/Text";
import { exportComponentAsJPEG } from "react-component-export-image";

const EditPage = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);

  // Create a proper React ref using useRef
  const memeRef = useRef();  

  const addText = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div ref={memeRef} className="meme mt-5 mb-5">
        <img src={params.get("url")} width="250px" alt="meme" />
        {Array(count)
          .fill(0)
          .map((_, index) => (
            <Text key={index} />
          ))}
      </div>
      <Button onClick={addText}>Add Text</Button>
      <Button
        variant="success"
        // Pass memeRef.current to exportComponentAsJPEG
        onClick={() => exportComponentAsJPEG(memeRef.current)}
      >
        Save
      </Button>
    </div>
  );
};

export default EditPage;
