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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        maxWidth: "426px",
        color: "#696F79",
      }}
      className="custom-input"
    >
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
