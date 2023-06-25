export type UlList = {
	li: string;
};

export function ListItem() {
	const myList: UlList[] = [
		{ li: 'Observar el HTML' },
		{ li: 'Pensar en cómo puedo extraer cada parte en componentes' },
		{ li: 'Usarlos, o mejor dicho, reusarlos en React' },
	];
	return myList.map((element) => <li>{element.li}</li>);
}
