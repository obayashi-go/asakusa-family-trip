import { FC } from "react"
import { PageTitle } from "../../conponents/PageTitle"
import { useRender } from "./logic/use-render";

export const Go: FC = () => {
    const { GoTest } = useRender();
    return (
        <>
            <PageTitle title="Go検定" pageType="go"/>
            <GoTest />
        </>
    )
}