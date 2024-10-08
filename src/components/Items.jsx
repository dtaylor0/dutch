import { useState } from "react";
import { useDrop } from "react-dnd";
/** @typedef {import("./People").PersonProps} PersonProps */

/** @typedef {Object} ItemProps
 * @property {string} itemId
 * @property {string} name
 * @property {number} cost
 * @property {number} quantity
 * @property {Object.<string, PersonProps>} people
 * */

/** @type {Object.<string, ItemProps>} */
const itemsExample = {
    [crypto.randomUUID()]: {
        name: "banana",
        cost: 1.26,
        quantity: 6,
        people: {},
    },
    [crypto.randomUUID()]: {
        name: "apple",
        cost: 2.11,
        quantity: 6,
        people: {},
    },
    [crypto.randomUUID()]: {
        name: "orange",
        cost: 2.78,
        quantity: 6,
        people: {},
    },
    [crypto.randomUUID()]: {
        name: "laskdfjklsadfjklsdjdslkjf",
        cost: 1.26,
        quantity: 6,
        people: {},
    },
    [crypto.randomUUID()]: {
        name: "banana",
        cost: 1.26,
        quantity: 6,
        people: {},
    },
};

/** @param {ItemProps & {updateItemPeople: (itemId: string, person: PersonProps) => void}} props */
function Item({ itemId, name, cost, quantity, people, updateItemPeople }) {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "PERSON",
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
        /**
         * Handles the drop event when a person is dropped onto an item
         * @param {PersonProps} item - The person being dropped
         */
        drop: (item) => {
            updateItemPeople(itemId, item);
        },
    }));
    return (
        <div
            className={`menu-item flex ${isOver ? "bg-blue-200" : ""}`}
            ref={drop}
            id={itemId}
        >
            <div className="inline-block w-50% p-0">{name}</div>
            <div className="inline-block w-15% p-0">${cost}</div>
            <div className="inline-block w-20% p-0">{quantity}</div>
            <div className="inline-block w-15% p-0">
                {Object.values(people)
                    .map((person) => person.symbol)
                    .join(" ")}
            </div>
        </div>
    );
}

/**
 * Adds a person to an item in the items object
 * @param {Object.<string, ItemProps>} prevItems - The previous state of items
 * @param {PersonProps} person - The person to be added to the item
 * @param {string} itemId - The ID of the item to which the person will be added
 * @returns {Object.<string, ItemProps>} - The updated items object
 */
function addPersonToItem(prevItems, person, itemId) {
    return {
        ...prevItems,
        [itemId]: {
            ...prevItems[itemId],
            people: {
                ...prevItems[itemId].people,
                [person.personId]: person,
            },
        },
    };
}

/**
 * @returns {React.JSX.Element}
 */
function Items() {
    const [items, setItems] = useState(itemsExample);
    return (
        <div
            id="items"
            className="bg-#ddd b-rd-2 w-60% m-3 inline-block vertical-top p-2"
        >
            <h2 className="m-0">Items</h2>
            <div className="m-1 p-1">
                {Object.entries(items).map(([itemId, item]) => {
                    return (
                        <Item
                            itemId={itemId}
                            name={item.name}
                            cost={item.cost}
                            quantity={item.quantity}
                            people={item.people}
                            updateItemPeople={(itemId, person) => {
                                setItems((prevItems) =>
                                    addPersonToItem(prevItems, person, itemId),
                                );
                            }}
                            key={itemId}
                        />
                    );
                })}
                <div className="menu-item bg-inherit">
                    <button
                        onClick={() => {
                            const newItemId = crypto.randomUUID();
                            setItems((prev) => ({
                                ...prev,
                                [newItemId]: {
                                    name: "Item",
                                    cost: 99.99,
                                    quantity: 23,
                                    people: [],
                                },
                            }));
                        }}
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Items;
