import { Routes, Route } from "react-router-dom";

import Home from "../components/pages/Home";
import ItemList from "../components/pages/ItemList";
import Detail from "../components/pages/Detail";
import Create from "../components/pages/Create";
import Edit from "../components/pages/Edit";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<ItemList />} />
            <Route path="/items/:id" element={<Detail />} />
            <Route path="/create" element={<Create />} />
            <Route path="/items/edit/:id" element={<Edit />} />
        </Routes>
    );
};

export default AppRouter;