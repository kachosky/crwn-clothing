import React  from 'react'

import './formInput.scss'

const FormInput = ({handleChange, label, ...otherInputProps}) => (
    <div className='group'>
        <input type="form-input" onChange={handleChange} {...otherInputProps} />
        {
            label ?
            (<label
                className={`${
                    otherInputProps.value.length ? 'shrink': ''
                } form-input-label`}>
                    {label}
                </label>
            ) : null
        }
    </div>
)

export default FormInput