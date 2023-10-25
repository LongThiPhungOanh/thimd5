import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./controller/Home";
import Create from "./controller/Create";
import Update from "./controller/Update";
import Delete from "./controller/Delete";
import Detail from "./controller/Detail";
function App() {
return(
    <>
        {/*<Test/>*/}
        <Routes>
            <Route path={'/'} element={<Home/>}></Route>
            <Route path={'/create'} element={<Create/>}></Route>
            <Route path={'/update/:id'} element={<Update/>}></Route>
            <Route path={'/delete/:id'} element={<Delete/>}></Route>
            <Route path={'/detail/:id'} element={<Detail/>}></Route>
        </Routes>
    </>
)
}

export default App;
