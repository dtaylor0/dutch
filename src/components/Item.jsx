import { useDrop } from "react-dnd";
import { useState } from "react";

//  & {updateItemPeople: (id: string, person: PersonProps) => undefined}

/**
 * Create an Item JSX element.
 * @param {ItemProps & {setItem: (arg0: ItemProps) => undefined}} itemId
 */
function Item({ id, name, cost, quantity, people, setItem }) {
    const [formValues, setFormValues] = useState({
        id,
        name,
        quantity,
        cost,
        people,
    });

    const [hidden, setHidden] = useState(true);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "PERSON",
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
        /** @type (person: PersonProps) => undefined */
        drop: (person) => {
            setItem({
                id,
                name,
                cost,
                quantity,
                people: [...people, person],
            });
        },
    }));

    /** @type {import("react").ChangeEventHandler} */
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(`${name}: ${value}`);
        setFormValues((values) => ({ ...values, [name]: value }));
    };

    /** @type {import("react").FormEventHandler} */
    const handleSubmit = (event) => {
        event.preventDefault();
        //(e) => {
        //e.preventDefault();
        setItem(formValues);
        setHidden(true);
        //}
    };

    return (
        <>
            <div
                className={`flex bg-slate-200 rounded-lg p-2 m-2 ${isOver ? "outline-2" : ""}`}
                ref={drop}
                id={id}
                onClick={(_e) => setHidden(false)}
            >
                <div className="flex-3">
                    {name} ({quantity})
                    {people.map((person) => person.symbol).join(" ")}
                </div>
                <div className="flex-1 text-right">${cost}</div>
            </div>
            <div
                id={`${id}-form`}
                className={`${hidden ? "hidden " : ""}z-10 absolute h-full w-full bg-neutral-900/90`}
            >
                <div className="bg-slate-200 w-fit m-auto rounded-lg p-1">
                    <button
                        className="text-sm font-bold text-slate-800/80 w-full text-right px-2"
                        onClick={() => {
                            setFormValues({ id, name, cost, quantity, people });
                            setHidden(true);
                        }}
                    >
                        x
                    </button>
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <label className="font-bold" htmlFor="name">
                            Name:
                        </label>
                        <input
                            className="rounded-lg bg-white w-fit p-1 m-1"
                            type="text"
                            name="name"
                            id={`${id}-name`}
                            value={formValues.name}
                            onChange={handleChange}
                        />
                        <label className="font-bold" htmlFor="quantity">
                            Quantity:
                        </label>
                        <input
                            className="rounded-lg bg-white w-fit p-1 m-1"
                            type="text"
                            name="quantity"
                            id={`${id}-quantity`}
                            value={formValues.quantity}
                            onChange={handleChange}
                        />
                        <label className="font-bold" htmlFor="cost">
                            Cost:
                        </label>
                        <input
                            className="rounded-lg bg-white w-fit p-1 m-1"
                            type="text"
                            name="cost"
                            id={`${id}-cost`}
                            value={formValues.cost}
                            onChange={handleChange}
                        />
                        <input
                            className="rounded-lg border-2 bg-white font-bold w-fit p-1 m-1"
                            type="submit"
                            value="Submit"
                        />
                    </form>
                </div>
            </div>
        </>
    );
}

export default Item;
