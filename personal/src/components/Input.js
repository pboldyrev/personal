import "../styles/Input.css";

function Input({ placeholder, setValue }) {
  let timeout;

  const debounceValue = (val) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setValue(val);
    }, 200);
  };

  return (
    <input
      placeholder={placeholder}
      onChange={(e) => debounceValue(e.target.value)}
      className="px-3 py-2 w-100 input-field"
    />
  );
}

export default Input;
