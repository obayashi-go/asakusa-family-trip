import { Box, Typography, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { MenuColorCode } from "../../../../utils/constants/menu-color-code";

const CountDownWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
  fontSize: "26px",
  padding: 20,
  alignItems: "center",
  gap: 20
});

const DaysSection = styled(Box)({
  fontWeight: 700,
  color: MenuColorCode.top
})

const TimeSection = styled(Box)({
  display: "flex",
  gap: 10
});

const Time = styled(Typography)({
  fontSize: "1em",
})

export const CountdownInterval = () => {
  const [countdownDate] = useState(new Date('2024-05-04 09:00:00').getTime());
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = days;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = hours;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = minutes;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = seconds;
      }

      setState({ days: days, hours: hours, minutes, seconds });
    }
  };

  return (
    <>
      <CountDownWrapper>
        <Typography sx={{fontWeight: 700, fontSize: "1.5rem", letterSpacing: "1.5px"}}>
          浅草旅行まであと...
        </Typography>
        <DaysSection>
          <Time sx={{fontSize: "3em"}}>{state.days || '0'}日</Time>
        </DaysSection>
        <TimeSection>
          <Time>{state.hours || '00'}時間</Time>
          <Time>{state.minutes || '00'}分</Time>
          <Time>{state.seconds || '00'}秒</Time>
        </TimeSection>
      </CountDownWrapper>
    </>
  );
};
