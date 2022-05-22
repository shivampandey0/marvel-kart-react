import { useNavigate } from 'react-router-dom';

export const Address = ({ address }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className='card w-100'>
        <div className='card-body'>
          <p className='card-title h4'>
            Deliver to: <span className='fw-bold'>{address?.name}</span>
          </p>
        </div>
        {address ? (
          <div className='card-content flex-column gap-05'>
            <p>{address?.street},</p>
            <p>
              {address?.city},{address?.state}, {address?.zipCode}
            </p>
            <p>{address?.country}.</p>
            <p>Phone Number : {address?.mobile}</p>
          </div>
        ) : (
          <div className='card-content primary-text-color'>
            Please Select Default Address
          </div>
        )}
        <div className='card-icons top-right'>
          <button onClick={() => navigate('/profile/addresses')}>
            <i className='fas fa-gear icon' />
          </button>
        </div>
      </div>
    </>
  );
};
