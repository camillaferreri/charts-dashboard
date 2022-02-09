import { useState } from "react"
import { Doughnut, Bar } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js'
import ChartjsPluginStacked100 from "chartjs-plugin-stacked100"

import dataPie from "../../data/pie.json"
import barPie from "../../data/bar.json"

import { getRandomColor } from "../../utils/getRandomColor"

import NavButton from "../../components/NavButton/NavButton"
import PageHeader from "../../components/PageHeader/PageHeader"
import IconButton from "../../components/IconButton/IconButton"
import Label from "../../components/Label/Label"
import CardChart from "../../components/CardChart/CardChart"

ChartJS.register(ChartjsPluginStacked100, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

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
					<CardChart 
						headerNav={
							<>
								<NavButton label="Topic" url="/#" active />
								<NavButton label="Generico >" url="/#" />
							</>
						}
						headerTitle="Distribuzione Topic"
						headerTools={						
							<IconButton
								icon="/icons/reload.png" 
								onClick={() => {}}
							/>
						}
						body={<>
							<Doughnut
								style={{ maxWidth: 300 }}
								options={{
									plugins: {
										legend: { display: false }
									}
								}}
								data={{
									labels: dataPie.data[0],
									datasets: [{
										data: dataPie.data[1],
										backgroundColor: colors,
									}]
								}} 
							/>

							<div>
								{barPie.data.dateXaxis.map(item => (
									<Label 
										text={item}
										color={getRandomColor()}
									/>
								))}
							</div>
						</>
						}
						footer={
							<>
							<div className='topic__info'>
								<h4>Topic</h4>
								<p>{dataPie.data[0].length}</p>
							</div>

							<div className='topic__info'>
								<h4>Recensioni</h4>
								<p>11,376</p>
							</div>
							</>
						}
					/>

					<CardChart 
						headerTitle="Distribuzione Topic per Sentiment"
						headerTools={
							<>
								<IconButton
									icon="/icons/graph.png" 
									onClick={() => setBarIsStacked(!barIsStacked)}
									size="large"
								/>
								
								<IconButton
									icon="/icons/reload.png" 
									onClick={() => {}}
								/>
							</>
						}
						body={
							<>
								<Bar
									options={{
										scales: {
											y: { stacked: true, max: barIsStacked ? 100 : undefined },
											x: { stacked: true }
										},
										plugins: {
											stacked100: { enable: barIsStacked },
											legend: { display: false }
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
								<div>
									{barPie.data.dateXaxis.map(item => (
										<Label 
											text={item}
											color={getRandomColor()}
										/>
									))}
								</div>
							</>
						}
					/>
				</div>
			</section>
		</main>
	)
}

export default AdvancedAnalysis;