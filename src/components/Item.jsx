import { useDrop } from "react-dnd";
import React, { useState, useEffect } from "react";

//  & {updateItemPeople: (id: string, person: PersonProps) => undefined}

/**
 * Create an Item JSX element.
 * @param {{item: Item, onUpdateItem: (newItem: Item) => void, onRemoveItem: (itemId: string) => void}} itemId
 */
function Item({ item, onUpdateItem, onRemoveItem }) {
    const [formValues, setFormValues] = useState({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        cost: item.cost,
        people: item.people,
    });

    useEffect(() => setFormValues(item), [item]);

    const [hidden, setHidden] = useState(true);

    const [{ isOver }, drop] = useDrop(
        () => ({
            accept: "PERSON",
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
            }),
            /** @type (person: Person) => undefined */
            drop: (person) => {
                onUpdateItem({
                    ...item,
                    people: [...item.people, person],
                });
            },
        }),
        [item],
    );

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(`${name}: ${value}`);
        setFormValues((values) => ({ ...values, [name]: value }));
    };

    /** @type {React.FormEventHandler} */
    const handleSubmit = (event) => {
        event.preventDefault();
        onUpdateItem(formValues);
        setHidden(true);
    };

    return (
        <>
            <div
                className={`flex bg-slate-200 rounded-lg p-2 m-2 ${isOver ? "outline-2" : ""}`}
                ref={drop}
                id={item.id}
                onClick={(_e) => setHidden(false)}
            >
                <div className="flex-3">
                    {item.name} ({item.quantity})
                    {item.people.map((person) => person.symbol).join(" ")}
                </div>
                <div className="flex-1 text-right">${item.cost}</div>
            </div>
            <div
                id={`${item.id}-form`}
                className={`${hidden ? "hidden " : ""}z-10 absolute h-full w-full bg-neutral-900/90`}
            >
                <div className="bg-slate-200 max-w-4/5 m-auto rounded-lg p-1">
                    <button
                        className="font-bold text-slate-800/80 w-full text-right px-2"
                        onClick={() => {
                            setFormValues(item);
                            setHidden(true);
                        }}
                    >
                        x
                    </button>
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <div className="grid lg:grid-cols-2">
                            <div className="flex w-2/3">
                                <label
                                    className="font-bold flex-1 m-auto"
                                    htmlFor="name"
                                >
                                    Name:
                                </label>
                                <input
                                    className="rounded-lg bg-white flex-3 p-1 m-1"
                                    type="text"
                                    name="name"
                                    id={`${item.id}-name`}
                                    value={formValues.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex w-2/3">
                                <label
                                    className="font-bold flex-1 m-auto"
                                    htmlFor="quantity"
                                >
                                    Quantity:
                                </label>
                                <input
                                    className="rounded-lg bg-white flex-3 p-1 m-1"
                                    type="text"
                                    name="quantity"
                                    id={`${item.id}-quantity`}
                                    value={formValues.quantity}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex w-2/3">
                                <label
                                    className="font-bold flex-1 m-auto"
                                    htmlFor="cost"
                                >
                                    Cost:
                                </label>
                                <input
                                    className="rounded-lg bg-white flex-3 p-1 m-1"
                                    type="text"
                                    name="cost"
                                    id={`${item.id}-cost`}
                                    value={formValues.cost}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <label
                                className="font-bold flex-1 m-auto"
                                htmlFor="people"
                            >
                                People:
                            </label>
                            <div
                                id={`${item.id}-people}`}
                                className="rounded-lg bg-white flex flex-wrap flex-3 justify-around m-auto lg:w-2/3"
                            >
                                {formValues.people.map((person) => {
                                    return (
                                        <div
                                            id={person.id}
                                            className="rounded-lg bg-teal-100 flex w-fit p-1 m-1"
                                        >
                                            {person.name}
                                            <div
                                                className="text-slate-500 font-bold w-fit mx-2"
                                                onClick={() => {
                                                    setFormValues({
                                                        ...formValues,
                                                        people: formValues.people.filter(
                                                            (p) =>
                                                                p.id !==
                                                                person.id,
                                                        ),
                                                    });
                                                }}
                                            >
                                                x
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <input
                                className="rounded-lg border-2 bg-white font-bold w-fit p-1 m-1"
                                type="submit"
                                value="Submit"
                            />
                            <div
                                className="text-red-600 rounded-lg border-2 bg-white font-bold w-fit p-1 m-1"
                                onClick={() => {
                                    onRemoveItem(item.id);
                                    setHidden(true);
                                }}
                            >
                                Delete
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Item;
