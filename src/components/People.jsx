import Person from "./Person";

/**
 * Creates a list of people
 * @param {{
 *      people: Person[],
 *      onAddPerson: (person: Person) => void,
 *      onRemovePerson: (personId: string) => void
 *      onUpdatePerson: (person: Person) => void,
 *  }} props
 */
function People({ people, onAddPerson, onRemovePerson, onUpdatePerson }) {
    return (
        <div id="people">
            <div className="w-full inline-flex flex-wrap justify-center">
                {people.map((person) => {
                    return <Person key={person.id} person={person} />;
                })}
                <div
                    className="bg-slate-200 rounded-lg p-2 px-4 m-2 h-fit w-fit"
                    onClick={() =>
                        onAddPerson({
                            name: "Test",
                            id: crypto.randomUUID(),
                            symbol: "🤖",
                        })
                    }
                >
                    +
                </div>
            </div>
        </div>
    );
}

export default People;
