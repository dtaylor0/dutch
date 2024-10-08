import { useState } from "react";
import { useDrag } from "react-dnd";

/** @typedef {Object} PersonProps
 * @property {string} personId
 * @property {string} name
 * @property {string} symbol
 * */

/** @type PersonProps[] */
const peopleExample = [
    { personId: crypto.randomUUID(), name: "Drew", symbol: "\u{1F4BB}" },
    { personId: crypto.randomUUID(), name: "Andy", symbol: "\u{1F3A8}" },
    { personId: crypto.randomUUID(), name: "Scout", symbol: "\u{1F4A2}" },
];

/**
 * Creates a list of people
 */
function People() {
    const [people, setPeople] = useState(peopleExample);
    return (
        <div
            id="people"
            className="bg-#ddd b-rd-2 m-3 inline-block vertical-top p-2"
        >
            <h2 className="m-0">People</h2>
            <ul className="m-1 p-1">
                {people.map((person) => {
                    const [{ isDragging }, drag] = useDrag(() => ({
                        type: "PERSON",
                        item: {
                            personId: person.personId,
                            symbol: person.symbol,
                            name: person.name,
                        },
                        collect: (monitor) => ({
                            isDragging: !!monitor.isDragging(),
                        }),
                    }));
                    return (
                        <li
                            className={`menu-item ${isDragging ? "opacity-50" : ""}`}
                            id={person.personId}
                            ref={drag}
                            key={person.personId}
                            style={{ cursor: isDragging ? "grabbing" : "grab" }}
                        >
                            <div>{person.symbol}</div>
                            <div>{person.name}</div>
                        </li>
                    );
                })}
                <li className="menu-item bg-inherit">
                    <button
                        onClick={() =>
                            setPeople((prev) => [
                                ...prev,
                                {
                                    personId: crypto.randomUUID(),
                                    name: "Test",
                                    symbol: "\u{1F916}",
                                },
                            ])
                        }
                    >
                        +
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default People;
