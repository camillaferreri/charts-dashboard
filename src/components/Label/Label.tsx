import './Label.scss'
import '../../styles/globals.scss'

interface LabelProps {
	text: string
	color: string
}

export const Label = ({ text, color, ...rest }: LabelProps) => {
	return (
		<div className='Label' style={{ backgroundColor: color }} {...rest} >
			<span>{text}</span>
		</div>
	)
}

export default Label;