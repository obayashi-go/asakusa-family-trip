import { FC } from "react"
import { useRender } from "./logic/use-render"
import { PageTitle } from "../../conponents/PageTitle";
import { ContentsInnerWrap } from "../../conponents/contents-inner-wrap";

export const Locations: FC = () => {
    const { MapCards } = useRender();
    return (
        <>
            <PageTitle title="地図情報" pageType="locations" />
            <ContentsInnerWrap>
                <MapCards />
            </ContentsInnerWrap>
        </>
    )
}