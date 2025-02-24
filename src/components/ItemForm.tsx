import { useState, useEffect } from "react";
import TextInput from "./TextInput";
import PeopleInput from "./PeopleInput";

interface ItemFormProps {
    item: Item;
    onUpdateItem: (newItem: Item) => void;
    onRemoveItem: (itemId: string) => void;
    hidden: boolean;
    setHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

function ItemForm({
    item,
    onUpdateItem,
    onRemoveItem,
    hidden,
    setHidden,
}: ItemFormProps) {
    const [formValues, setFormValues] = useState({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        cost: item.cost,
        people: item.people,
    });

    //useEffect(() => setFormValues(item), [item]);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
        event,
    ) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(`${name}: ${value}`);
        setFormValues((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        onUpdateItem(formValues);
        setHidden(true);
    };
    return (
        <div
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
                        <TextInput
                            label="Name"
                            formKey="name"
                            formValue={formValues.name}
                            uniqueId={`${formValues.id}-name`}
                            handleChange={handleChange}
                        />
                        <TextInput
                            label="Quantity"
                            formKey="quantity"
                            formValue={formValues.quantity.toString()}
                            uniqueId={`${formValues.id}-quantity`}
                            handleChange={handleChange}
                        />
                        <TextInput
                            label="Cost"
                            formKey="cost"
                            formValue={formValues.cost.toString()}
                            uniqueId={`${formValues.id}-cost`}
                            handleChange={handleChange}
                        />
                    </div>
                    <PeopleInput
                        formValues={formValues}
                        setFormValues={setFormValues}
                    />
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
    );
}

export default ItemForm;
