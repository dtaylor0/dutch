interface PeopleInputProps {
    formValues: Item;
    setFormValues: React.Dispatch<React.SetStateAction<Item>>;
}

function PeopleInput({ formValues, setFormValues }: PeopleInputProps) {
    return (
        <div className="flex justify-center w-2/3">
            <label className="font-semibold flex-1 m-auto" htmlFor="people">
                People:
            </label>
            <div
                id={`${formValues.id}-people}`}
                className="rounded-lg bg-white flex flex-wrap flex-3 justify-around m-auto"
            >
                {formValues.people.map((person: Person) => {
                    return (
                        <div
                            key={person.id}
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
                                            (p: Person) => p.id !== person.id,
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
    );
}

export default PeopleInput;
