import React, { useReducer } from 'react';

const Checkbox = () => {
  const [checked, setChecked] = useReducer((checked) => !checked, false);
  return (
    <>
      <label htmlFor="chk">{checked ? 'checked' : 'not checked'}</label>
      <input value={checked} type="checkbox" name="chk" id="chk" onChange={setChecked} />
    </>
  );
};

export default Checkbox;
