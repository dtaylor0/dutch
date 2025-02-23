/**
 * @typedef {Object} Item
 * @property {string} id
 * @property {string} name
 * @property {number} cost
 * @property {number} quantity
 * @property {Person[]} people
 */

/**
 * @typedef {Object} Person
 * @property {string} id
 * @property {string} name
 * @property {string} symbol
 */

/**
 * @typedef {Object} Receipt
 * @property {Item[]} items
 * @property {Person[]} people
 */

/** @typedef {{
 *      type: "set_receipt",
 *      receipt: Receipt
 *  }
 *  | {
 *      type: "added_item"
 *      item: Item
 *  }
 *  | {
 *      type: "removed_item"
 *      itemId: string
 *  }
 *  | {
 *      type: "updated_item"
 *      item: Item
 *  }
 *  | {
 *      type: "added_person"
 *      person: Person
 *  }
 *  | {
 *      type: "removed_person"
 *      personId: string
 *  }
 *  | {
 *      type: "updated_person"
 *      person: Person
 *  } } ReceiptAction */
