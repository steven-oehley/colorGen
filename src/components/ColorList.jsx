import { toast } from "react-toastify";

const ColorList = ({ colorList }) => {
  const notifySuccess = () => {
    toast.success("Text copied to clipboard!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const notifyError = (err) => {
    toast.error(`Error: ${err.message}`, {
      position: "top-center",
      theme: "dark",
    });
  };

  const handleClick = async (hex) => {
    try {
      await navigator.clipboard.writeText(`#${hex}`);
      notifySuccess(); // Success notification
    } catch (err) {
      notifyError(err); // Error notification
    }
  };

  return (
    <div className="grid grid-cols-3 gap-6 p-4">
      {colorList.map((c, index) => (
        <div
          className="cursor-pointer rounded-md h-52  flex flex-col justify-center items-center"
          key={index}
          style={{
            backgroundColor: `#${c.hex}`,
            color: `${index > 10 ? "#fff" : "#000"}`,
          }}
          onClick={() => handleClick(c.hex)}
        >
          <h3>#{c.hex}</h3>
          <p>{c.weight}%</p>
        </div>
      ))}
    </div>
  );
};
export default ColorList;
