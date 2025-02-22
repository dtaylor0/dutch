import { useState } from "react";
import Person from "./Person";

/** @type PersonProps[] */
const peopleExample = [
    { id: crypto.randomUUID(), name: "Drew", symbol: "\u{1F4BB}" },
    { id: crypto.randomUUID(), name: "Andy", symbol: "\u{1F3A8}" },
    { id: crypto.randomUUID(), name: "Scout", symbol: "\u{1F4A2}" },
];

/**
 * Creates a list of people
 */
function People() {
    const [people, setPeople] = useState(peopleExample);
    function addPerson() {
        setPeople((prev) => [
            ...prev,
            {
                id: crypto.randomUUID(),
                name: "Test",
                symbol: "\u{1F916}",
            },
        ]);
    }
    return (
        <div id="people">
            <div className="w-full inline-flex flex-wrap justify-center">
                {people.map((person) => {
                    return <Person key={person.id} person={person} />;
                })}
                <div
                    className="bg-slate-200 rounded-lg p-2 px-4 m-2 h-fit w-fit"
                    onClick={addPerson}
                >
                    +
                </div>
            </div>
        </div>
    );
}

export default People;
