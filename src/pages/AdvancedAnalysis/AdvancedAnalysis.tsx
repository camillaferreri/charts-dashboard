import { useState } from "react"
import { Doughnut, Bar } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';

import dataPie from "../../data/pie.json"
import barPie from "../../data/bar.json"

import { getRandomColor } from "../../utils/getRandomColor"

import NavButton from "../../components/NavButton/NavButton"
import PageHeader from "../../components/PageHeader/PageHeader"
import IconButton from "../../components/IconButton/IconButton"

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);


interface AdvancedAnalysisProps {}

export const AdvancedAnalysis = ({  }: AdvancedAnalysisProps) => {
	const [ barIsStacked, setBarIsStacked ] = useState(false)
	const colors = [
		'rgb(255, 99, 132)',
		'rgb(54, 162, 235)',
		'rgb(255, 205, 86)',
		'#54f893',
		'#ea82ea'
	]

	return (
		<main className="AdvancedAnalysis">
			<PageHeader
				title="Analisi Avanzata" 
			/>

			<section>
				<div className='container'>
					<div className="card topic">
						<NavButton 
							label="Topic"
							url="/#"
							active
						/>

						<NavButton 
							label="Generico >"
							url="/#"
						/>

						<div className='card__header'>
							<p>Distribuzione Topic</p>
							<IconButton
								icon="/icons/reload.png" 
								onClick={() => {}}
							/>
						</div>

						<div className='topic__chart'>
							<Doughnut
								data={{
									labels: dataPie.data[0],
									datasets: [{
										data: dataPie.data[1],
										backgroundColor: colors,
									}]
								}} 
							/>
						</div>

						<div className='topic__info'>
							<h4>Topic</h4>
							<p>{dataPie.data[0].length}</p>
						</div>

						<div className='topic__info'>
							<h4>Recensioni</h4>
							<p>11,376</p>
						</div>
					</div>

					<div className='card sentiment'>
						<div className='card__header'>
							<p>Distribuzione Topic per Sentiment</p>

							<div>
								<IconButton
									icon="/icons/graph.png" 
									onClick={() => setBarIsStacked(!barIsStacked)}
									size="large"
								/>
								
								<IconButton
									icon="/icons/reload.png" 
									onClick={() => {}}
								/>
							</div>
						</div>
						<div className='sentiment__chart'>
							<Bar
								options={{
									scales: {
										y: { stacked: true },
										x: { stacked: true }
									}
								}}
								data={{
									labels: barPie.data.dateXaxis,
									datasets: barPie.data.dataset.map(item => ({
										label: item.name,
										data: item.data,
										backgroundColor: getRandomColor()
									}))
								}} 
							/>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

export default AdvancedAnalysis;