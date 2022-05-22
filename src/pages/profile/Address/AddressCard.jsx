export const AddressCard = ({ address, onRemove }) => {
  const { name, street, city, state, country, zipCode, mobile } = address;
  return (
    <div className='flex-column px-4 py-4'>
      <p className='paragraph-md'>{name}</p>
      <div>
        <p className='paragraph-sm'>
          {street}, {city},{state}. {zipCode}
        </p>
        <p className='paragraph-sm'>{country}.</p>
        <p className='paragraph-sm'>Phone Number : {mobile}</p>
      </div>
      <div className='flex-row gap-1 my-4'>
        <button className='btn btn-outline'>Edit</button>
        <button
          onClick={() => onRemove(address._id)}
          className='btn btn-secondary'
        >
          Remove
        </button>
      </div>
    </div>
  );
};
