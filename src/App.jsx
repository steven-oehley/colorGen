import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Values from "values.js";

import ColorList from "./components/ColorList";
import Form from "./components/Form";

const App = () => {
  const [inputColor, setInputColor] = useState("#e66465");
  const [colorList, setColorList] = useState(() =>
    new Values("#e66465").all(10)
  );

  const handleChange = (e) => {
    console.log(e.target.value);
    setInputColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const colors = new Values(inputColor).all(10); // Generate color list
      setColorList(colors); // Update the color list
    } catch (e) {
      toast.error("Invalid color value! Please enter a valid hex color.", {
        position: "top-center",
      });

      console.log(e.message);
    }
  };

  return (
    <main className="p-12">
      <h1 className="text-6xl text-center">Color Picker</h1>
      <Form
        handleChange={handleChange}
        color={inputColor}
        handleSubmit={handleSubmit}
      />
      <ColorList colorList={colorList} />
      <ToastContainer />
    </main>
  );
};
export default App;
