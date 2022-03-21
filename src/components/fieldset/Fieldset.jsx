export const Fieldset = ({ title, children }) => {
  return (
    <fieldset className="my-2">
      <legend className="fw-bold">{title}</legend>
      {children}
    </fieldset>
  );
};
