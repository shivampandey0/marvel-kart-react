import { useNavigate } from 'react-router-dom';

export const Address = ({ address }) => {
  const { name, street, city, state, country, zipCode, mobile } = address;
  const navigate = useNavigate();

  return (
    <div className='card w-100'>
      <div className='card-body'>
        <p className='card-title h4'>
          Deliver to: <span className='fw-bold'>{name}</span>
        </p>
      </div>
      <div className='card-content flex-column gap-05'>
        <p>{street},</p>
        <p>
          {city},{state}, {zipCode}
        </p>
        <p>{country}.</p>
        <p>Phone Number : {mobile}</p>
      </div>
      <div className='card-icons top-right'>
        <button onClick={() => navigate('/profile/addresses')}>
          <i className='fas fa-gear icon' />
        </button>
      </div>
    </div>
  );
};
