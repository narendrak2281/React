import React, { useState } from "react";
import Draggable from "react-draggable";

const Text = () => {
  const [editMode, setEditMode] = useState(false);
  const [val, setVal] = useState("Double Click to Edit");
  const nodeRef = React.useRef(null);

  return (
    <Draggable nodeRef={nodeRef}>
      <div ref={nodeRef}>
        {editMode ? (
          <input
            onBlur={() => setEditMode(false)}  // Use onBlur instead of onDoubleClick for better user experience
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
        ) : (
          <h1 onDoubleClick={() => setEditMode(true)}>{val}</h1>
        )}
      </div>
    </Draggable>
  );
};

export default Text;
