import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { type FC } from "react";
import { UrlMap } from "../constants/url-map";
import { Top } from "../../views/page/top/top";
import { Schedules } from "../../views/page/schedule/schedule";
import { Locations } from "../../views/page/locations/locations";
import { Parking } from "../../views/page/parking/parking";
import { Go } from "../../views/page/go/go";

export const RouteController: FC = () => {
    return (
        <Router>
            <Routes>
                <Route path={UrlMap.top} Component={Top}></Route>
                <Route path={UrlMap.schedules} Component={Schedules}></Route>
                <Route path={UrlMap.locations} Component={Locations}></Route>
                <Route path={UrlMap.parking} Component={Parking}></Route>
                <Route path={UrlMap.go} Component={Go}></Route>
            </Routes>
        </Router>
    );
}