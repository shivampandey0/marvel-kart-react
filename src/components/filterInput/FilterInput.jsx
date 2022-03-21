export const FilterInput = ({
  title,
  checked,
  changeHandler,
  inputType,
  value,
  id,
  name,
  className,
}) => {
  return (
    <div className="my-2 mx-2">
      <label>
        {"  "}
        <input
          className={className}
          id={id || title}
          name={name}
          value={value || title}
          type={inputType}
          checked={checked}
          onChange={changeHandler}
        />
        {`  ${title}`}
      </label>
    </div>
  );
};
