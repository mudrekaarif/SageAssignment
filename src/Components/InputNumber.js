import React from 'react';

const InputNumber = ({ reference, name, required, placeholder, changeHandler, errors }) => {
    return (
        <div>
            <input
                className='but'
                type='number'
                name={name}
                required={required}
                autoComplete='off'
                placeholder={placeholder}
                onChange={changeHandler}
                ref={reference}
            />
            {errors[name] === undefined ? null : <p style={{ color: 'red' }}>{errors[name].message}</p>}
        </div>
    );
}
export default InputNumber;