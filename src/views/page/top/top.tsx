import { type FC } from "react"
import { useRender } from "./logic/use-render"

export const Top: FC = () => {
    const { TopCarouselArea, ScrollContents } = useRender();
    return (
        <>
         <TopCarouselArea />
         <ScrollContents />
        </>
    )
}