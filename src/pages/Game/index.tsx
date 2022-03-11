import { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

import useAmiiboCharacters from "../../utils/useAmiiboCharacters" 
import useAmiiboSerie from "../../utils/useAmiiboSerie" 
import { Amiibo } from "../../models/amiibo"

import { GameCard } from "../../components/GameCard"

export const Game = () => {
	let { slug } = useParams();
	
	let [ firstSelectedCard, setFirstSelectedCard ] = useState<number | undefined>(undefined)
	let [ amiiboList, setAmiibosList ] = useState<Amiibo[]>([])
	let [ count, setCount ] = useState<number>(0)
	let [ isResetting, setIsResetting ] = useState<boolean>(true)
	let [ isLoading, setIsLoading ] = useState<boolean>(false)

	const amiiboCharacters = useAmiiboCharacters(slug, isResetting)
	const serie = useAmiiboSerie(slug)

	useEffect(() => {
		if (amiiboCharacters) {
			setAmiibosList(amiiboCharacters)
			setIsResetting(false)
		}
	}, [ amiiboCharacters ])

	const showSelectedCard = useCallback(id => {
		const updatedAmiibo = { ...amiiboList[id], isShown: true }

		const updatedAmiiboList = [
			...amiiboList.slice(0, id),
			updatedAmiibo,
			...amiiboList.slice(id + 1)
		]

		setAmiibosList(updatedAmiiboList)
	}, [ amiiboList ])

	const resetSelectedCards = useCallback(id => {
		const firstSelectedAmiibo = { ...amiiboList[firstSelectedCard!], isShown: false }
		const secondSelectedAmiibo = { ...amiiboList[id], isShown: false }

		const updatedFirstList = [
			...amiiboList.slice(0, firstSelectedCard!),
			firstSelectedAmiibo,
			...amiiboList.slice(firstSelectedCard! + 1)
		]

		const updatedFinalList = [
			...updatedFirstList.slice(0, id),
			secondSelectedAmiibo,
			...updatedFirstList.slice(id + 1)
		]

		setAmiibosList(updatedFinalList)
		setFirstSelectedCard(undefined)
	}, [ amiiboList, firstSelectedCard ])

	const manageDiscovederCards = useCallback(id => {
		const firstFoundAmiibos = { ...amiiboList[firstSelectedCard!], discovered: true, idShown: false }
		const secondFoundAmiibos = { ...amiiboList[id], discovered: true, idShown: false }
		
		let firstUpdatedAmiiboList = [
			...amiiboList.slice(0, firstSelectedCard),
			firstFoundAmiibos,
			...amiiboList.slice(firstSelectedCard! + 1)
		]

		let updatedAmiiboList = [
			...firstUpdatedAmiiboList.slice(0, id),
			secondFoundAmiibos,
			...firstUpdatedAmiiboList.slice(id + 1)
		]

		setAmiibosList(updatedAmiiboList)
		setCount(prevCount => prevCount +1)
		setFirstSelectedCard(undefined)
	}, [ amiiboList, firstSelectedCard ])

	const onGameCardClick = useCallback((amiibo: Amiibo) => {
		const { id, isShown, discovered } = amiibo
		if (isShown || discovered) return;
		setIsLoading(true)
		
		if (firstSelectedCard === undefined) {
			showSelectedCard(id)
			setFirstSelectedCard(id)
			setIsLoading(false)
		} else {
			if (amiiboList[firstSelectedCard].slug === amiiboList[id].slug) {
				manageDiscovederCards(id)
				setIsLoading(false)
			} else {
				showSelectedCard(id)

				// manage a loading or something in this timeout
				setTimeout(() => {
					resetSelectedCards(id)
					setIsLoading(false)
				}, 700)
			}
		}
	}, [ amiiboList, firstSelectedCard, showSelectedCard, resetSelectedCards, manageDiscovederCards ])

	const resetGame = () => {
		setCount(0)
		setIsResetting(true)
	}

	return (
		<main className="Game">
			<div className="Toolbar container">
				<Link to="/">Go back</Link>
				{count === 6 &&
					<button onClick={resetGame}>Play Again</button>
				}
				<p>Coppie trovate: {count}</p>
			</div>

			<div className="GameWrapper container">
				{amiiboCharacters && amiiboList.map(amiibo => (
					<GameCard 
						key={amiibo.id}
						serie={serie}
						image={amiibo.image}
						status={amiibo.discovered ? "shown" : amiibo.isShown ? "shown" : "hidden"}
						onClick={() => onGameCardClick(amiibo)}
						disabled={isLoading}
					/>
				))}
			</div>

		</main>
	)
}

export default Game;