import { Box, styled } from "@mui/material";
import { FC } from "react";
import { type ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export type ICustomLayout = {
    children: ReactNode;
}

const Wrapper = styled(Box)({
    width: "100%",
    background: "#fff"
});

const ContentsWrapper = styled(Box)({
    marginTop: "60px",
    minHeight: "calc(100vh - 110px)"
});

export const CustomLayout: FC<ICustomLayout> = (props) => {
    const { children } = props;
    return (
        <Wrapper>
            <Header isShow={true} />
            <ContentsWrapper>
                {children}
            </ContentsWrapper>
            <Footer />
        </Wrapper>
    )
}