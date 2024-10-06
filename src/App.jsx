import "./App.css";
import Header from "./components/Header";
import Items from "./components/Items";
import People from "./components/People";

const peopleExample = [
    { id: 0, name: "Drew", symbol: "\u{1F4BB}", blah: "blah" },
    { id: 1, name: "Andy", symbol: "\u{1F3A8}" },
    { id: 2, name: "Scout", symbol: "\u{1F4A2}" },
];

const itemsExample = [
    { name: "banana", cost: 1.26, quantity: 6, people: [0, 1, 2] },
];
function App() {
    return (
        <>
            <Header />
            <Items items={itemsExample} />
            <People people={peopleExample} />
        </>
    );
}

export default App;
