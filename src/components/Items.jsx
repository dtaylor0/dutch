/**
 * Creates a list of items
 * @param {object} props
 * @param {string[]} props.items - The items to split
 * @returns {React.JSX.Element}
 */
function Items(props) {
    return (
        <div className="bg-#ddd b-rd-2 max-w-40% m-10">
            <h2 className="m-0">Items</h2>
            <ul className="m-1 p-1">
                {props.items.map((item, index) => (
                    <li className="menu-item" key={index}>
                        {item}
                    </li>
                ))}
                <li className="list-none">+</li>
            </ul>
        </div>
    );
}

export default Items;
