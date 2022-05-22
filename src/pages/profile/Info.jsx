import { useAuth } from '../../context';

export const Info = () => {
  const {
    userState: { userData },
    logoutUser,
  } = useAuth();

  return (
    <div className='px-2 py-2'>
      <div className='flex-column gap-1'>
        <div className='flex-row gap-1 align-cntr justify-sb'>
          <p className='h4'>Full Name</p>
          <p>{`${userData.firstName} ${userData.lastName}`}</p>
        </div>
        <div className='flex-row gap-1 align-cntr justify-sb'>
          <p className='h4'>Email</p>
          <p>{`${userData.email}`}</p>
        </div>
        <button onClick={logoutUser} className='btn btn-primary'>
          Logout
        </button>
      </div>
    </div>
  );
};
