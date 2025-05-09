import ListItem from "./ListItem";
import { useState } from "react";
import { findIconByMood } from '../../utils/functions';

export default function List({ list, onSelect, dataType, selectedItem}) {
	const activeItem = selectedItem ? selectedItem : '';

	console.log(list, activeItem);
	return (
		<ul className="flex flex-col gap-2">
			{list.map((listItem) => {
				let isSelected = false;
				if (listItem === activeItem) {
					isSelected = true;
				}
				return (
					<ListItem
						dataType={dataType}
						imgClassName={"w-6 aspect-square"}
						onSelect={onSelect}
						isSelected={isSelected}
						icon={findIconByMood(listItem)}
						key={listItem}
					>
						{listItem}
					</ListItem>
				);
			})}
		</ul>
	);
}
