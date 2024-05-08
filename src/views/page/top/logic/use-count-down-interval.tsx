import { Box, List, ListItemButton, ListItemText, Paper, Typography, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { MenuColorCode } from "../../../../utils/constants/menu-color-code";

const CountDownWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
  fontSize: "26px",
  padding: 20,
  alignItems: "center",
  gap: 20,
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
});

const InTripWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
  fontSize: "26px",
  alignItems: "center",
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
      {state.seconds > 0 && (
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
      )}
      {state.days > 2 && state.seconds < 0 && (
        <>
          <InTripWrapper>
            <Typography sx={{
              textAlign: "center",
              margin: "20px 0",
              fontSize: "2rem",
              fontWeight: 700,
              }}>Have a Nice TRIP
              </Typography>
              <Paper
                sx={{
                  padding: "10px",
                  width: "80%",
                  margin: "20px 0",
                  boxShadow: "0px 2px 1px -1px rgb(0 0 0), 0px 1px 1px 0px rgb(0 0 0), 0px 1px 3px 0px rgb(0 0 0)",
                  gap: "10px"
                  }}
                >
                <Typography textAlign="center" fontSize="1.5rem">
                  年に一度の誕生日
                </Typography>
                <Typography textAlign="center" fontSize="1.5rem">
                Let's Enjoy
                </Typography>
                <TimeSection
                  justifyContent="center"
                  margin="10px -10px"
                  sx={{
                    background: "linear-gradient(90deg, rgba(255,255,221,1) 0%, rgba(251,255,121,1) 25%, rgba(243,255,1,1) 50%, rgba(254,175,59,1) 75%, rgba(209,136,255,1) 100%)"
                    }}
                  >
                  <Time>{state.hours * -1 || '00'}時間</Time>
                  <Time>{state.minutes * -1 || '00'}分</Time>
                  <Time>{state.seconds * -1 || '00'}秒経過</Time>
                </TimeSection>
                <Box mt={3}>
                  <Typography sx={{fontSize: "1.4rem", backgroundColor: "lightblue", padding: "4px 8px", textAlign: "center", borderBottom: "solid 3px midnightblue"}}>スカイバスチケット</Typography>
                  <List>
                    <ListItemButton component="a" href="https://skybustokyotour.book.ntmg.com/eticket?lng=ja-JP&r=0a2393f5-2cfc-5fee-8524-2dc5e3f2c191" target="_blank">
                      <ListItemText primary="ヒロおじさんFamily" sx={{fontSize: "1.3rem", borderBottom: "solid 1px #000"}} />
                    </ListItemButton>
                    <ListItemButton component="a" href="https://book.ntmg.com/FXFl2TTIcR2ws4oFlaPPZ8TBcUdYimii20iZsX4M/eticket?lng=ja-JP&r=96f3a37d-7698-5fa9-bd6f-f6efc5e3f73f" target="_blank">
                      <ListItemText primary="正田・田澤・大林Family" sx={{fontSize: "1.3rem", borderBottom: "solid 1px #000"}} />
                    </ListItemButton>
                  </List>
                </Box>
                {/* <Box width="100%" textAlign="center">
                  <a href="/go">Go検定</a>
                </Box> */}
              </Paper>
              
          </InTripWrapper>
        </>
      )}
      {state.days < 2 && (
        <Box padding="0 8px">
          <Paper sx={{display: "flex", flexDirection: "column", padding: "10px", transition: "0.5s", gap: "10px"}}>
            <Typography
            fontSize={24}
            fontWeight={700}
            textAlign="center"
            sx={{background: "#ba5a8a", color: "#fff", borderTopLeftRadius: "20px", borderBottomRightRadius: "20px"}}
            >
              皆さんお疲れ様でした！
            </Typography>
            <Typography fontSize={20} color="midnightblue" textAlign="center">一緒に素敵な歳をとりましょう</Typography>
            <Typography fontSize={18}>
              皆さんと家族で居させていただける私は幸せ者です。<br/>
              これからもたくさんの思い出を作らせていただけたら幸いです。<br/>
              歳を重ねるのは一つずつですが、<br/>
              増やせる幸せに限りは無いと思います。<br/>
              また、沢山の笑顔をご一緒しましょう！<br/>
              <span style={{fontSize: 16}} color="#505050">幸せには、税金も取られませんし（笑）</span>
            </Typography>
          </Paper>
        </Box>
      )}
    </>
  );
};
