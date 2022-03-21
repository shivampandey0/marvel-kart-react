export const Input = ({ label, type, placeholder, autoComplete, required }) => {
  if (type === "password") {
    return (
      <div className="input-group">
        <label className={required && "required"} htmlFor={label}>
          {label}
        </label>
        <div className="pass-toggle">
          <input
            className="input"
            type={type}
            id={label}
            placeholder={placeholder}
            required={required}
            autoComplete={autoComplete}
          />
          <i className="fas fa-eye-slash icon"></i>
        </div>
      </div>
    );
  }

  return (
    <div className="input-group">
      <label className={required && "required"} htmlFor={label}>
        {label}
      </label>
      <input
        className="input"
        type={type}
        id={label}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
      />
    </div>
  );
};
