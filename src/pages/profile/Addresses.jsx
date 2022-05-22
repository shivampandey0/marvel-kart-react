import { useState } from 'react';
import { useAuth } from '../../context';
import { ACTION_TYPE } from '../../utils';
import { AddressCard } from './Address/AddressCard';
import { AddressForm } from './Address/AddressForm';
import { v4 as uuid } from 'uuid';

export const Addresses = () => {
  const {
    userState: { userData },
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
    default: false,
  };
  const [formDisplay, setFormDisplay] = useState(false);
  const [addressForm, setAddForm] = useState(formValue);

  const addAddress = (address) => {
    dispatchUserState({
      type: ACTION_TYPE.ADDRESS,
      payload: [...userData.address, { _id: uuid(), ...address }],
    });
    setFormDisplay(false);
  };

  const editAddress = (address) => {
    const addreses = userData.address.map((_address) => {
      if (_address._id === address._id) {
        return { ...address };
      }
      return _address;
    });

    dispatchUserState({
      type: ACTION_TYPE.ADDRESS,
      payload: [...addreses],
    });
    setFormDisplay(false);
  };
  const setDefaultAddress = (_id) => {
    const addreses = [];

    userData.address.forEach((_address) => {
      if (_address._id === _id) {
        return addreses.unshift({ ..._address, default: true });
      }
      return addreses.push({ ..._address, default: false });
    });

    dispatchUserState({
      type: ACTION_TYPE.ADDRESS,
      payload: [...addreses],
    });
    setFormDisplay(false);
  };

  const removeAddress = (_id) => {
    const addreses = userData.address.filter((adr) => adr._id !== _id);
    dispatchUserState({
      type: ACTION_TYPE.ADDRESS,
      payload: addreses,
    });
  };

  return (
    <div className='px-2 py-2'>
      <h4>My Addresses</h4>

      {userData.address &&
        userData.address.map((_address) => (
          <AddressCard
            key={_address._id}
            address={_address}
            onRemove={removeAddress}
            onEdit={() => {
              setAddForm(_address);
              setFormDisplay(true);
            }}
            onDefault={() => setDefaultAddress(_address._id)}
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
        onEdit={editAddress}
      />
    </div>
  );
};
