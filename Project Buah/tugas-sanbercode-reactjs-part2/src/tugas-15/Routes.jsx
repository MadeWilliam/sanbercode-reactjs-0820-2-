import React from 'react'
import { Switch, Route } from 'react-router'
import Tugas9 from '../tugas9/FormBuah'
import Tugas10 from '../tugas10/AppBuah'
import Tugas11 from '../tugas11/CountApps'
import Tugas12 from '../tugas12/FormBuah2'
import Tugas13 from '../tugas-13/DaftarBuah'
import Tugas14 from '../tugas-14/Buah'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Tugas9 />
            </Route>
            <Route path="/tugas10">
                <Tugas10 />
            </Route>
            <Route path="/tugas11">
                <Tugas11 />
            </Route>
            <Route path="/tugas12">
                <Tugas12 />
            </Route>
            <Route path="/tugas13">
                <Tugas13 />
            </Route>
            <Route path="/tugas14">
                <Tugas14 />
            </Route>
        </Switch>
    )
}

export default Routes;