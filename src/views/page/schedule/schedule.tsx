import { useState, type FC } from "react"
import { PageTitle } from "../../conponents/PageTitle"
import { ContentsInnerWrap } from "../../conponents/contents-inner-wrap"
import { useRender } from "./logic/use-render";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

export const Schedules: FC = () => {
    const { TimeTable, MoveTimeLine } = useRender();
    const [isMoveTime, setIsMoveTime] = useState(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsMoveTime(event.target.checked);
    };
    return (
        <>
            <PageTitle title="スケジュール" pageType="schedule" />
            <ContentsInnerWrap>
                <FormGroup sx={{alignContent: "flex-end"}}>
                    <FormControlLabel
                        control={
                        <Switch
                            checked={isMoveTime}
                            onChange={handleChange}
                        />
                        }
                        label="移動時間"
                    />
                </FormGroup>
                {!isMoveTime && (<TimeTable />)}
                {isMoveTime && (<MoveTimeLine />)}
            </ContentsInnerWrap>
        </>
    )
}