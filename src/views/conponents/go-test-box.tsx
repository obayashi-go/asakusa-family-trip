import { Box, Button, Typography, styled } from "@mui/material";
import { FC } from "react";

export type IGoTestBox = {
    goTest: {q: string, a: string[]}
}

const Question = styled(Typography)({

});

const Answer = styled(Button)({

});

const Answers: FC<{answers: string[]}> = (props) => {
    const { answers } = props;
    const answersDom = answers.map((a, idx) => {
        return <Answer key={`a-${idx}`}>{a}</Answer>
    });
    return answersDom;
}

export const GoTestBox: FC<IGoTestBox> = (props) => {
    const { goTest } = props;
    return (
        <Box display="flex" flexDirection="column">
            <Question>{goTest.q}</Question>
            <Box>
                <Answers answers={goTest.a} />
            </Box>
        </Box>
    )
}