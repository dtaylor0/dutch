import { useDrag } from "react-dnd";

/**
 * @param { {person: PersonProps} } person
 */
function Person({ person }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "PERSON",
        /** @type PersonProps */
        item: {
            id: person.id,
            symbol: person.symbol,
            name: person.name,
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
    return (
        <div
            className={`p-2 m-2 bg-slate-200 rounded-lg ${isDragging ? "outline-2" : ""}`}
            id={person.id}
            ref={drag}
            key={person.id}
            style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
            <div>
                {person.name}
                {person.symbol}
            </div>
        </div>
    );
}

export default Person;
