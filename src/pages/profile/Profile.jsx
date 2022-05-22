import { NavLink, Outlet } from 'react-router-dom';
import '../../css/profile.css';

export const Profile = () => {
  const routes = [
    { name: 'Profile', link: '/profile' },
    { name: 'Orders', link: '/profile/orders' },
    { name: 'Addresses', link: '/profile/addresses' },
  ];
  return (
    <main className='container'>
      <h3 className='txt-center fw-bold my-8'>My Profile</h3>
      <div className='flex-row justify-cntr'>
        <div className='profile-container'>
          <div className='flex-row justify-cntr tabs'>
            {routes.map(({ name, link }) => (
              <NavLink
                className={({ isActive }) => {
                  return isActive ? 'btn btn-primary btn-full' : 'btn btn-full';
                }}
                to={link}
                key={name}
                end
              >
                {name}
              </NavLink>
            ))}
          </div>
          <Outlet />
        </div>
      </div>
    </main>
  );
};
