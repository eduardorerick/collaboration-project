import "./style.scss";

export function CustomInput({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  htmlFor,
}) {
  return (
    <div className="custom-input">
      <label htmlFor={htmlFor}>{label}</label>
      <input
        id={htmlFor}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
