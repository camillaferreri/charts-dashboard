import './Select.scss'
import '../../styles/globals.scss'

interface OptionProps {
	label: string
  value: any
}

interface SelectProps {
	label: string
  options: Array<OptionProps>
}

export const Select = ({ label, options, ...rest }: SelectProps) => {
	return (
		<label className='Select'>
      {label}

      <select {...rest}>
        {options && options.map(option => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
	)
}

export default Select;