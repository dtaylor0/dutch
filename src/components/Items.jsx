/** @typedef {import("./People").Person} Person */

/** @typedef {Object} Item
 * @property {string} name
 * @property {number} cost
 * @property {Person["id"][]} people
 * */

/**
 * @param {{items: Item[]}} props - The items to split
 * @returns {React.JSX.Element}
 */
function Items({ items }) {
    return (
        <div
            id="items"
            className="bg-#ddd b-rd-2 w-60% m-3 inline-block vertical-top"
        >
            <h2 className="m-0">Items</h2>
            <ul className="m-1 p-1">
                {items.map((item, index) => (
                    <li className="menu-item" key={index}>
                        <table className="w-100% table-auto">
                            <tbody>
                                <tr>
                                    <td>{item.name}</td>
                                    <td>${item.cost}</td>
                                    <td>{item.people.join(" ")}</td>
                                </tr>
                            </tbody>
                        </table>
                    </li>
                ))}
                <li className="menu-item bg-inherit">
                    <button>+</button>
                </li>
            </ul>
        </div>
    );
}

export default Items;
