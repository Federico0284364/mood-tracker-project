import ListItem from "./ListItem";
import { useState } from "react";

export default function List({ list }) {
  const [selectedItem, setSelectedItem] = useState(list[0].name);

  function handleSelect(itemName){
    setSelectedItem(itemName);
  }

	return (
		<ul className="flex flex-col gap-2">
			{list.map((listItem) => {
        let isSelected = false;
        if (listItem.name === selectedItem){
          isSelected = true;
        }
				return (
					<ListItem imgClassName={'w-6 aspect-square'} onSelect={handleSelect} isSelected={isSelected} icon={listItem.icon} key={listItem.name}>{listItem.name}</ListItem>
				);
			})}
		</ul>
	);
}
