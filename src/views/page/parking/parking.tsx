import { FC } from "react";
import { PageTitle } from "../../conponents/PageTitle";
import { useRender } from "./logic/use-render";

export const Parking: FC = () => {
    const { ReservedParking, CollapsibleTable } = useRender()
    return (
        <>
        <PageTitle title="駐車場情報" pageType="parking" />
        <ReservedParking />
        <CollapsibleTable/>
        </>
    )
}