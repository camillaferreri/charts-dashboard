import { ReactElement } from 'react'

import './CardChart.scss'
import '../../styles/globals.scss'

interface CardChartProps {
	headerNav?: ReactElement
	headerTitle?: string
	headerTools?: ReactElement
	body: ReactElement
	footer?: ReactElement
}

export const CardChart = ({ headerNav, headerTitle, headerTools, body, footer, ...rest }: CardChartProps) => {
	return (
		<div className='CardChart' {...rest}>
			{headerNav &&
				<div className='CardChart__headerNav'>{headerNav}</div>
			}

			<div className='CardChart__header'>
				{headerTitle && <p>{headerTitle}</p>}
				{headerTools && <div>{headerTools}</div>}
			</div>
			
			<div className='CardChart__body'>{body}</div>
			
			{footer &&
				<div className='CardChart__footer'>{footer}</div>
			}
		</div>
	)
}

export default CardChart;