import './App.css';
import MagnifyingGlassIcon from "./components/icons/magnifying-glass.tsx";
import Input from "./components/input.tsx";
import {type ChangeEvent, useState} from "react";
import PlusIcon from "./components/icons/plus.tsx";
import Item from "./components/item.tsx";
import {isEqualArrays} from "./utilities";


export default function App() {
    const defaultItems = ['First item', 'Second item', 'Third item', 'Fourth item', 'Five item', 'Six item', 'Seven item'];
    const [items, setItems] = useState(defaultItems);
    const [allCollectionItems, setAllCollectionItems] = useState(defaultItems);
    const [inputAddItem, setInputAddItem] = useState('');
    const [inputFilterItem, setInputFilterItem] = useState('');


    const addItem = () => {
        if(!inputAddItem) return;
        const newItems = [...items];
        newItems.push(inputAddItem);
        setInputAddItem('');
        setItems(newItems);
        setAllCollectionItems(newItems);
    };

    const filterItems = () => {
        const filteredItems = inputFilterItem === '' ? allCollectionItems : items.filter((i) => i.toLowerCase().includes(inputFilterItem));
        if(isEqualArrays(filteredItems, items)) return;
        setItems(filteredItems);
    }

    const removeItem = (ind: number, item: string) => {
        const filtered = items.filter((_, i) => ind !== i);
        const filteredAllCollection = allCollectionItems.filter((el) => el !== item);
        setItems(filtered);
        setAllCollectionItems(filteredAllCollection);
    }

    const addInputChange = (event: ChangeEvent<HTMLInputElement>) => setInputAddItem(event.target.value);
    const filterInputChange = (event: ChangeEvent<HTMLInputElement>) => setInputFilterItem(event.target.value);

    return (
        <>
            <div className="my-4 max-w-md mx-auto">
                <form>
                    <Input
                        inputValue={inputAddItem}
                        buttonText={"Add"}
                        placeholder={"Add item"}
                        buttonIcon={<PlusIcon></PlusIcon>}
                        buttonOnClickHandler={addItem}
                        inputChangeHandler={addInputChange}></Input>

                    <Input
                        inputValue={inputFilterItem}
                        buttonText={"Filter"}
                        placeholder={"Filter items"}
                        buttonIcon={<MagnifyingGlassIcon></MagnifyingGlassIcon>}
                        buttonOnClickHandler={filterItems}
                        inputChangeHandler={filterInputChange}></Input>
                </form>


                {items.length === 0
                    ? <h2 className="flex justify-center mt-10 text-gray-500"> Sorry, no matches found for "{inputFilterItem}" :( </h2>
                    : <div
                        className="mt-8 h-[29.1rem]	overflow-y-auto text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
                        { items.map((el: string, ind: number) =>
                            <Item name={el} index={ind} key={ind} remove={removeItem}/>
                        )}
                    </div>
                }
            </div>
        </>
    );
}
