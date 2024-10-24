const Form = ({ color, handleChange, handleSubmit }) => {
  return (
    <section className="max-w-4xl mx-auto ">
      <form className="flex gap-8 p-8 justify-center" onSubmit={handleSubmit}>
        <label htmlFor="colorPicker" className="sr-only">
          Pick a color
        </label>
        <input
          id="colorPicker"
          type="color"
          value={color}
          onChange={handleChange}
        />

        <label htmlFor="colorInput" className="sr-only">
          Enter a color
        </label>
        <input
          id="colorInput"
          type="text"
          value={color}
          onChange={handleChange}
        />
        <button className="btn btn-accent">Submit</button>
      </form>
    </section>
  );
};
export default Form;
