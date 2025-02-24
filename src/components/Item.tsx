import { useDrop } from "react-dnd";
import React, { useState } from "react";
import ItemForm from "./ItemForm";

interface ItemProps {
    item: Item;
    onUpdateItem: (newItem: Item) => void;
    onRemoveItem: (itemId: string) => void;
}

function Item({ item, onUpdateItem, onRemoveItem }: ItemProps) {
    const [{ isOver }, drop] = useDrop(
        () => ({
            accept: "PERSON",
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
            }),
            drop: (person: Person) => {
                onUpdateItem({
                    ...item,
                    people: [...item.people, person],
                });
            },
        }),
        [item],
    );

    const [hidden, setHidden] = useState(true);

    return (
        <>
            <div
                className={`flex bg-slate-200 rounded-lg p-2 m-2 ${isOver ? "outline-2" : ""}`}
                ref={drop}
                id={item.id}
                onClick={(_e) => setHidden(false)}
            >
                <div className="flex-3">
                    {item.name} ({item.quantity})
                    {item.people
                        .map((person: Person) => person.symbol)
                        .join(" ")}
                </div>
                <div className="flex-1 text-right">${item.cost}</div>
            </div>
            <ItemForm
                item={item}
                key={`${item.id}-${item.people.map((p) => p.id).join()}-${item.name}-${item.cost}-${item.quantity}`}
                onRemoveItem={onRemoveItem}
                onUpdateItem={onUpdateItem}
                hidden={hidden}
                setHidden={setHidden}
            />
        </>
    );
}

export default Item;
