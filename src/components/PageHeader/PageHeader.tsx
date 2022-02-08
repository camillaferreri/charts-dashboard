import Select from "../Select/Select";

import "./PageHeader.scss"

interface PageHeaderProps {
  title: string
}

export const PageHeader = ({ title }: PageHeaderProps) => {
	return (
    <section className="PageHeader">
      <div className="PageHeader__title">
        <h2>{title}</h2>
        <img src="/icons/info.jpg" alt="Info" />
      </div>

      <div className="PageHeader__filters">
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
	)
}

export default PageHeader;