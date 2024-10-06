/** @typedef {Object} Person
 * @property {number} id
 * @property {string} name
 * @property {string} symbol
 * */

/**
 * Creates a list of people
 * @param {{people: Person[]}} props
 */
function People(props) {
    return (
        <div className="bg-#ddd b-rd-2 m-3 inline-block w-15% vertical-top">
            <h2 className="m-0">People</h2>
            <ul className="m-1 p-1">
                {props.people.map((person, index) => (
                    <li className="menu-item" key={index}>
                        <div>{person.symbol}</div>
                        <div>{person.name}</div>
                    </li>
                ))}
                <li className="menu-item bg-inherit">
                    <button>+</button>
                </li>
            </ul>
        </div>
    );
}

export default People;
