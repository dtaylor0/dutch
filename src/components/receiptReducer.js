/**
 * @param {Receipt} receipt
 * @param {ReceiptAction} action
 */
export default function receiptReducer(receipt, action) {
    switch (action.type) {
        case "added_item": {
            receipt.items.push(action.item);
            return;
        }
        case "removed_item": {
            receipt.items = receipt.items.filter(
                (item) => item.id !== action.itemId,
            );
            return;
        }
        case "updated_item": {
            const index = receipt.items.findIndex(
                (item) => item.id === action.item.id,
            );
            if (index !== -1) {
                receipt.items[index] = { ...action.item };
                const set = new Set();
                const uniquePeople = action.item.people.filter((person) => {
                    let res = !set.has(person.id);
                    set.add(person.id);
                    return res;
                });
                receipt.items[index].people = uniquePeople;
            }
            return;
        }
        case "added_person": {
            receipt.people.push(action.person);
            return;
        }
        case "removed_person": {
            receipt.people = receipt.people.filter(
                (p) => p.id !== action.personId,
            );
            return;
        }
        case "updated_person": {
            const index = receipt.people.findIndex(
                (person) => person.id === action.person.id,
            );
            if (index !== -1) {
                receipt.people[index] = action.person;
            }
            return;
        }
        case "set_receipt": {
            return action.receipt;
        }
        default: {
            throw Error("Unknown action: " + action.type);
        }
    }
}
