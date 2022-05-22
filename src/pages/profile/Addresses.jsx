import { useState, useEffect } from 'react';
import { useAuth } from '../../context';
import { useAxios } from '../../hooks';
import { ACTION_TYPE } from '../../utils';
import { AddressCard } from './Address/AddressCard';
import { AddressForm } from './Address/AddressForm';

export const Addresses = () => {
  const {
    userState: { token, userData },
    dispatchUserState,
  } = useAuth();
  const formValue = {
    name: '',
    street: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    mobile: '',
  };
  const [formDisplay, setFormDisplay] = useState(false);
  const [addressForm, setAddForm] = useState(formValue);
  const { response, sendRequest } = useAxios();

  const addAddress = (address) => {
    const config = {
      method: 'post',

      url: '/user/address',
      address,
      headers: {
        authorization: token,
      },
    };
    sendRequest(config);
  };

  const removeAddress = (_id) => {
    const config = {
      method: 'delete',
      url: `/user/address/${_id}`,
      headers: {
        authorization: token,
      },
    };
    sendRequest(config);
  };

  useEffect(() => {
    if (response) {
      dispatchUserState({
        type: ACTION_TYPE.ADDRESS,
        payload: response.address,
      });
      setFormDisplay(false);
    }
  }, [response]);

  console.log(response);

  return (
    <div className='px-2 py-2'>
      <h4>My Addresses</h4>

      {userData.address &&
        userData.address.map((_address) => (
          <AddressCard
            key={_address._id}
            address={_address}
            onRemove={removeAddress}
          />
        ))}
      <button
        onClick={() => {
          setFormDisplay(true);
          setAddForm(formValue);
        }}
        className={`btn btn-primary btn-full ${formDisplay && 'displayNone'}`}
      >
        + Add New Address
      </button>
      <AddressForm
        addressForm={addressForm}
        setAddForm={setAddForm}
        formDisplay={formDisplay}
        setFormDisplay={setFormDisplay}
        formValue={formValue}
        onSave={addAddress}
      />
    </div>
  );
};
