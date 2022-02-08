import Select from "../../components/Select/Select";


interface AdvancedAnalysisProps {}

export const AdvancedAnalysis = ({  }: AdvancedAnalysisProps) => {

	return (
		<main className="AdvancedAnalysis">
			<section className="pageHeader">
				<div className="pageHeader__title">
					<h2>Analisi Avanzata</h2>
					<img src="/icons/info.jpg" alt="Info" />
				</div>

				<div className="pageHeader__filters">
					<h4>Raggruppa per</h4>

					<Select 
						label="Tempo"
						options={[
							{ label: "3 mesi", value: 3 },
							{ label: "4 mesi", value: 4 },
							{ label: "5 mesi", value: 5 }
						]}
					/>

					<h4>Filtra per</h4>
					<Select 
						label="Tempo"
						options={[
							{ label: "11/01/21 a oggi", value: 0 }
						]}
					/>

					<Select 
						label="Canali"
						options={[
							{ label: "Tutti i canali", value: "all" }
						]}
					/>
					
					<Select 
						label="Luoghi"
						options={[
							{ label: "Tutti i luoghi", value: "all" }
						]}
					/>
					<Select 
						label="Topics"
						options={[
							{ label: "Tutti i topic", value: "all" }
						]}
					/>
				</div>
			</section>
		</main>
	)
}

export default AdvancedAnalysis;