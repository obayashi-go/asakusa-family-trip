import { type FC } from "react"
import { PageTitle } from "../../conponents/PageTitle"
import { ContentsInnerWrap } from "../../conponents/contents-inner-wrap"
import { useRender } from "./logic/use-render";

export const Schedules: FC = () => {
    const { TimeTable } = useRender();
    return (
        <>
            <PageTitle title="スケジュール" pageType="schedule" />
            <ContentsInnerWrap>
                <TimeTable />
            </ContentsInnerWrap>
        </>
    )
}