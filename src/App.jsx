import Header from "./components/Header";
import Items from "./components/Items";
import People from "./components/People";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
    return (
        <>
            <Header />
            <DndProvider backend={HTML5Backend}>
                <Items />
                <People />
            </DndProvider>
        </>
    );
}

export default App;
