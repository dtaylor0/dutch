import React, { useEffect, useRef, useState } from "react";
import Item from "./Item";
import Title from "./Title";

/**
 * @returns {React.JSX.Element}
 */
function Items() {
    /** @type ItemProps[] */
    const initialItems = [];
    const [items, setItems] = useState(initialItems);

    /**
     * Inject item index into setItems call
     * @param { number } index
     */
    function setItemAt(index) {
        return (/** @type ItemProps */ newItem) => {
            setItems((prevItems) =>
                prevItems.map((item, i) => {
                    if (i === index) {
                        return newItem;
                    }
                    return { ...item };
                }),
            );
        };
    }

    useEffect(() => {
        const storedItems = localStorage.getItem("items");
        if (storedItems) {
            setItems(JSON.parse(storedItems));
        }
    }, []);

    /** @type { React.MutableRefObject<HTMLDivElement | null> } */
    const receiptEndRef = useRef(null);
    function scrollToBottom() {
        receiptEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    useEffect(() => scrollToBottom(), [items]);

    useEffect(
        () => localStorage.setItem("items", JSON.stringify(items)),
        [items],
    );

    return (
        <>
            <Title>Receipt</Title>
            <div
                id="items"
                className="w-full max-h-1/2 overflow-y-auto flex flex-col"
            >
                {items.map((item, index) => {
                    return (
                        <Item
                            id={item.id}
                            name={item.name}
                            cost={item.cost}
                            quantity={item.quantity}
                            people={item.people}
                            key={item.id}
                            setItem={setItemAt(index)}
                        />
                    );
                })}
                <div ref={receiptEndRef}></div>
            </div>
            <div
                className="bg-slate-200 rounded-lg p-2 px-4 m-2 h-fit w-fit"
                onClick={() => {
                    /** @type ItemProps */
                    const newItemProps = {
                        name: "Item",
                        cost: 0.0,
                        quantity: 1,
                        people: [],
                        id: crypto.randomUUID(),
                    };
                    setItems((prev) => [...prev, newItemProps]);
                }}
            >
                +
            </div>
        </>
    );
}

export default Items;
