import React, { useEffect, useRef, useState } from "react";
import Item from "./Item";
import Title from "./Title";

/**
 * @param {{
 *      items: Item[],
 *      onAddItem: (item: Item) => void,
 *      onRemoveItem: (itemId: string) => void,
 *      onUpdateItem: (item: Item) => void,
 * }} props
 * @returns {React.JSX.Element}
 */
function Items({ items, onAddItem, onRemoveItem, onUpdateItem }) {
    /** @type { React.MutableRefObject<HTMLDivElement | null> } */
    const receiptEndRef = useRef(null);
    function scrollToBottom() {
        receiptEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    useEffect(() => scrollToBottom(), [items.length]);

    return (
        <>
            <Title>Receipt</Title>
            <div
                id="items"
                className="w-full max-h-1/2 overflow-y-auto flex flex-col"
            >
                {items.map((item) => {
                    return (
                        <Item
                            key={item.id}
                            item={item}
                            onUpdateItem={onUpdateItem}
                            onRemoveItem={onRemoveItem}
                        />
                    );
                })}
                <div ref={receiptEndRef}></div>
            </div>
            <div
                className="bg-slate-200 rounded-lg p-2 px-4 m-2 h-fit w-fit"
                onClick={() => {
                    /** @type Item */
                    const newItemProps = {
                        name: "Item",
                        cost: 0.0,
                        quantity: 1,
                        people: [],
                        id: crypto.randomUUID(),
                    };
                    onAddItem(newItemProps);
                }}
            >
                +
            </div>
        </>
    );
}

export default Items;
