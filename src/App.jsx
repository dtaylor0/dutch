import "./App.css";
import Header from "./components/Header";
import Items from "./components/Items";

function App() {
    return (
        <>
            <Header />
            <Items items={["banana", "apple"]} />
        </>
    );
}

export default App;
