export function CustomInput({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  inputId,
  icon,
  onClickButton,
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
      <label>{label}</label>
      <div
        style={{
          padding: "0px 23px",
          borderRadius: "6px",
          border: "1px solid #8692A6",
          borderRadius: "6px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <input
          id={inputId}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={{
            outline: "none",
            border: "none",
            height: "100%",
            padding: "23px 0px",
          }}
        />
        <button
          id="signup-olhar"
          className="signup-btn-password"
          onClick={onClickButton}
        >
          {icon}
        </button>
      </div>
    </div>
  );
}
