const FormRowSelect = ({ labelText, name, value, handleChange, list, onBlur }) => {
    return (
      <div className='form-row'>
        <label htmlFor={name} className='form-label'>
          {labelText}
        </label>
        <select
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
          className='form-select select'
        >
          {list.map((itemValue, index) => {
            return (
              <option key={index} value={itemValue}>
                {itemValue}
              </option>
            )
          })}
        </select>
      </div>
    )
  }
  
  export default FormRowSelect