import { DndProvider } from "react-dnd";
import Items from "./Items";
import People from "./People";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useEffect } from "react";
import receiptReducer from "./receiptReducer";
import { useReducer } from "react";
import { produce } from "immer";
import { itemsExample, peopleExample } from "./data";

function Receipt() {
    let initialReceipt = { items: itemsExample, people: peopleExample };
    const storedReceipt = localStorage.getItem("receipt");
    if (storedReceipt) {
        initialReceipt = JSON.parse(storedReceipt);
    }
    const [receipt, dispatch] = useReducer(
        produce(receiptReducer),
        initialReceipt,
    );

    /** @param {Person} person */
    function handleAddPerson(person) {
        dispatch({
            type: "added_person",
            person,
        });
    }

    /** @param {string} personId */
    function handleRemovePerson(personId) {
        dispatch({
            type: "removed_person",
            personId,
        });
    }

    /** @param {Person} person */
    function handleUpdatePerson(person) {
        dispatch({
            type: "updated_person",
            person,
        });
    }

    /** @param {string} itemId */
    function handleRemoveItem(itemId) {
        dispatch({
            type: "removed_item",
            itemId,
        });
    }

    /** @param {Item} item */
    function handleAddItem(item) {
        dispatch({
            type: "added_item",
            item,
        });
    }

    /** @param {Item} item */
    function handleUpdateItem(item) {
        dispatch({
            type: "updated_item",
            item,
        });
    }

    /** @param {string} itemId */
    function handleRemoveItem(itemId) {
        dispatch({
            type: "removed_item",
            itemId,
        });
    }

    useEffect(() => {
        const storedReceipt = localStorage.getItem("receipt");
        if (storedReceipt) {
            dispatch({
                type: "set_receipt",
                receipt: JSON.parse(storedReceipt),
            });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("receipt", JSON.stringify(receipt));
    }, [receipt]);

    return (
        <DndProvider backend={HTML5Backend}>
            <Items
                items={receipt.items}
                onAddItem={handleAddItem}
                onRemoveItem={handleRemoveItem}
                onUpdateItem={handleUpdateItem}
            />
            <People
                people={receipt.people}
                onAddPerson={handleAddPerson}
                onRemovePerson={handleRemovePerson}
                onUpdatePerson={handleUpdatePerson}
            />
        </DndProvider>
    );
}

export default Receipt;
