export const AddressCard = ({ address, onRemove, onEdit, onDefault }) => {
  const { name, street, city, state, country, zipCode, mobile } = address;
  return (
    <div className='flex-column px-4 py-4'>
      <div className='flex-column gap-05'>
        <p className='txt-sm txt-grey h3'>
          {name}{' '}
          {address.default && <mark className='default-mark'>Default</mark>}{' '}
        </p>
        <p>
          {street}, {city},{state}. {zipCode}
        </p>
        <p>{country}.</p>
        <p>Phone Number : {mobile}</p>
      </div>
      <div className='flex-row gap-1 my-4'>
        <button onClick={onEdit} className='btn btn-outline'>
          Edit
        </button>
        <button
          onClick={() => onRemove(address._id)}
          className='btn btn-secondary'
        >
          Remove
        </button>
        {!address.default && (
          <button
            onClick={() => onDefault(address._id)}
            className='btn btn-secondary'
          >
            Make Default
          </button>
        )}
      </div>
    </div>
  );
};
