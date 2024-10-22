import React, { useContext } from 'react';
import { SharedContext } from '../App';

export const ADisplay = (props) => {
	// use useContext and props to share data too
	const {chosenSide, selectedCharacter} = useContext(SharedContext);
	const {charName, gender} = props; // use destructuring to get the charName from props
	const characterName = props.charName; // assign directly by prop name
	console.log(props.charName)
	return (
		<div>
			<hr />
			<h1>1. WAY: Character name in child's child component: {props.charName}</h1>
			<h1>2. WAY: Character name in child's child component: {charName ?? '-'}</h1>
			<h1>3. WAY: Character name in child's child component: {characterName ?? '-'}</h1>
			<h1>gender: {gender ?? '-'}</h1>
			<h1>Chosen side in child's child component: {chosenSide}</h1>
			<h1>Selected character in child's child component: {selectedCharacter}</h1>
			<hr />
		</div>
	)
}