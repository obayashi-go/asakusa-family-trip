import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { type FC } from "react";
import { UrlMap } from "../constants/url-map";
import { Top } from "../../views/page/top/top";
import { Schedules } from "../../views/page/schedule/schedule";
import { Locations } from "../../views/page/locations/locations";
import { Events } from "../../views/page/events/events";

export const RouteController: FC = () => {
    return (
        <Router>
            <Routes>
                <Route path={UrlMap.top} Component={Top}></Route>
                <Route path={UrlMap.schedules} Component={Schedules}></Route>
                <Route path={UrlMap.locations} Component={Locations}></Route>
                <Route path={UrlMap.events} Component={Events}></Route>
            </Routes>
        </Router>
    );
}