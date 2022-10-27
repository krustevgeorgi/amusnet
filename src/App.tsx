import React, {FC, useState} from 'react';
import './App.scss';
import {Provider} from "react-redux";
import HomeLayout from "./Layout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DashboardLayout from "./Layout/DashboardLayout";
import {BuildingModal} from "./components";

interface Props {
    store: any
}

const App: FC<Props> = ({store}) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div id="app">
                    <Routes>
                        <Route path='/' element={<HomeLayout/>}/>
                        <Route path='/dashboard' element={<DashboardLayout/>}/>
                    </Routes>
                </div>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
