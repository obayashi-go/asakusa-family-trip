import { Box, Grid, Typography, styled } from "@mui/material"
import Carousel from 'react-material-ui-carousel';
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';//左矢印アイコン
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';//右矢印アイコン
import { MenuColorCode } from "../../../../utils/constants/menu-color-code";
import { CountdownInterval } from "./use-count-down-interval";
// import { PhotoDataUri } from "../../../../utils/constants/photo-data-uri";

const lColor = 'black';
const bgColor = 'trans';
const ArrowColor = 'blue';
const ArrowColor_bg = 'white';
const Icon = '#a72d6c54';
const ActiveIcon = MenuColorCode.top;

const ImgBox = styled(Box)({
    width: "100%",
    height: "300px",
    backgroundPosition: "center",
    backgroundSize: "cover",
});

const SectionBox = styled('section')({
    position: "relative",
    width: "100vw",
    height: "100vh",
    "& figure": {
        display: "flex",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        minHeight: "100%",
        backgroundSize: "100vw 100%",
        backgroundRepeat: "no-repeat",
        margin: 0,
    },
    '& .figure-1': {
        backgroundImage: "url(https://amanaimages.com/pickup/img/skytree120903/10247003890.jpg)",
        backgroundPosition: "center",
    },
    // '& .figure-2': {
    //     backgroundImage: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/photo-1506260408121-e353d10b87c7.jpg")',
    //     background: "#f1f1f1",
    // },
    // '& .figure-3': {
    //     backgroundImage: 'url(odaiba.jpg)',
    //     backgroundPosition: "center"
    // }
});

const SectionInnerBox = styled(Box)({
    position: "absolute",
    overflow: "hidden",
    width: "100%",
    height: "100%",
    clip: "rect(0, auto, auto, 0)"
});

const SectionSentence = styled(Typography)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    top: "0",
    left: "0",
    padding: "0 1rem",
    width: "100%",
    height: "100%",
    color: "#fff",
    fontFamily: '"Courgette", serif',
    fontSize: "8vw",
    letterSpacing: "-0.125rem",
    textAlign: "center",
});

// const SubSentence = styled(Typography)({
//     width: "100%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     textAlign: "center",
//     position: "absolute",
//     top: "calc(50vh - 20px)",
//     color: "#fff",
//     fontFamily: '"Courgette",serif',
//     fontSize: "20px",
//     textShadow: "2px 2px 4px #000"
// });

const SentenceSection = styled('section')({
    position: "relative",
    "& .content__inner": {
        maxWidth: "100%",
        display: "block",
        padding: "2rem",
        margin: "0 auto 8rem",
        background: "#fff",
        "&::before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: "-99px",
            left: 0,
            width: "100%",
            height: "100px",
            backgroundColor: "#fff",
            zIndex: "99",
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        },
        "& .content__author": {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "4rem",
            width: "100%",
            fontFamily: '"Courgette", serif',
            fontSize: "1.5rem",
            letterSpacing: "-0.125rem",
            textAalign: "center",
            "&::before, &::after": {
                content: '""',
                flex: 1,
                height: "2px",
                backgroundColor: "#A9DFBF",
            },
            "&::before": {
                marginRight: "10px"
            },
            "&::after": {
                marginLeft: "10px"
            },
        }
    }
})

export const useRender = () => {
    const TopCarouselArea = (): JSX.Element => {
        return (
        <Box
        position="relative"
        paddingBottom={2}
        sx={{
            backgroundColor:"#e6b4ce4a",
            opacity: "0.8",
            backgroundImage: "repeating-radial-gradient( circle at 0 0, transparent 0, #e5e5f7 10px ),repeating-linear-gradient( #a72d6c55, #e6b4ce4a )"
        }}>
            <Carousel
             NextIcon={<ArrowForwardIosSharpIcon/>} //矢印アイコンを別のアイコンに変更
             PrevIcon={<ArrowBackIosSharpIcon/>} //矢印アイコンを別のアイコンに変更
             autoPlay = {true} //自動でCarouselを動かすかどうか(true or false)
             interval = {2500}
             duration = {500} // アニメーションの長さを定義
             swipe = {true} // スワイプで動かせるかどうか
            //  IndicatorIcon={true}
             indicators={true}
             indicatorContainerProps={{
                style: {
                    margin: 0,
                }
              }}
               indicatorIconButtonProps={{//アクティブでない下の丸いアイコンの設定
                 style: {
                     padding: '10px',//位置調整
                     color: Icon,
                 }
               }}
               activeIndicatorIconButtonProps={{//アクティブな下の丸いアイコンの設定
                 style: {
                     color : ActiveIcon, 
                 }
               }}
               navButtonsWrapperProps={{//矢印ボタン周りの設定
                 style: {
                   margin: '-20px 15% 0px', //位置調整
                 },
               }}
               navButtonsProps = {{//矢印ボタンの設定
                 style : { 
                     color : ArrowColor, //矢印の色
                     backgroundColor : ArrowColor_bg,//矢印の背景の色
                     borderRadius : "50%",//0にすると四角になる．
                },
               }}>
                <Box sx={{mx: 'auto', width: "100%", backgroundColor: bgColor, boxShadow: "0 2px #fafafa"}}>
                    <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
                        <Box sx={{height: 300, width: "100%" ,backgroundColor:lColor}}>
                            <ImgBox
                                component="div"
                                sx={{
                                    background: "url('https://s3-ap-northeast-1.amazonaws.com/thegate/2020/12/24/17/47/58/kaminari_mon_main.jpg') no-repeat",
                                    backgroundSize: "cover"
                                }}
                            />
                        </Box>
                    </Grid>
                </Box>
                <Box sx={{mx: 'auto', width: "100%",backgroundColor:bgColor}}>
                    <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
                        <Box sx={{height: 300, width: "100%" ,backgroundColor:lColor}}>
                        <ImgBox
                                component="div"
                                sx={{
                                    background: "url('https://article-image.travel.navitime.jp/img/NTJmat0349/mat0349_0.webp') no-repeat",
                                    backgroundSize: "cover"
                                }}
                        />
                        </Box>
                    </Grid>
                </Box>
                <Box sx={{mx: 'auto', height: 300, width: "100%",backgroundColor:bgColor}}>
                    <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
                        <Box sx={{height: 300, width: "100%" ,backgroundColor:lColor}}>
                        <ImgBox
                            component="div"
                            sx={{
                                background: "url('https://static.wixstatic.com/media/a25ca6_0e553a17ee6a4e2cb127a08a75a97d6a~mv2.jpg/v1/fit/w_748,h_559,q_90/a25ca6_0e553a17ee6a4e2cb127a08a75a97d6a~mv2.jpg') no-repeat",
                                backgroundSize: "cover"
                            }}
                        />
                        </Box>
                    </Grid>
                </Box>
                <Box sx={{mx: 'auto', height: 300, width: "100%",backgroundColor:bgColor}}>
                    <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
                        <Box sx={{height: 300, width: "100%" ,backgroundColor:lColor}}>
                        <ImgBox
                            component="div"
                            sx={{
                                background: "url('https://resources.matcha-jp.com/resize/720x2000/2022/02/10-122529.webp') no-repeat",
                                backgroundSize: "cover"
                            }}
                        />
                        </Box>
                    </Grid>
                </Box>
                <Box sx={{mx: 'auto', height: 300, width: "100%",backgroundColor:bgColor}}>
                    <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
                        <Box sx={{height: 300, width: "100%" ,backgroundColor:lColor}}>
                        <ImgBox
                            component="div"
                            sx={{
                                background: "url('https://restaurant.img-ikyu.com/rsDatas/rsData113000/r112944/orig/112944ga10000014.jpg?auto=compress%2Cformat&lossless=0&fit=crop&h=790') no-repeat",
                                backgroundSize: "cover"
                            }}
                        />
                        </Box>
                    </Grid>
                </Box>
                <Box sx={{mx: 'auto', height: 300, width: "100%",backgroundColor:bgColor}}>
                    <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
                        <Box sx={{height: 300, width: "100%" ,backgroundColor:lColor}}>
                        <ImgBox
                            component="div"
                            sx={{
                                background: "url('https://www.skybus.jp/course/up_img/1499777570-731400_4.jpg') no-repeat",
                                backgroundSize: "cover"
                            }}
                        />
                        </Box>
                    </Grid>
                </Box>
            </Carousel>
            <Box>
                <CountdownInterval />
            </Box>
         </Box>
        )
    }

    const ScrollContents = () => {
        return (
            <>
                <SectionBox>
                    <SectionInnerBox id="section-0">
                        <figure className="figure-1">
                        </figure>
                        <SectionSentence>皆さんお誕生日<br/>おめでとうございます</SectionSentence>
                        {/* <SubSentence>皆さんお誕生日<br/>おめでとうございます</SubSentence> */}
                    </SectionInnerBox>
                </SectionBox>
                {/* <SectionBox>
                    <SectionInnerBox id="section-2">
                        <figure className="figure-2"></figure>
                        <SectionSentence>これからの1年が<br/>素敵な1年になりますよう</SectionSentence>
                        <SubSentence>これからの1年が<br/>素敵な1年になりますよう</SubSentence>
                    </SectionInnerBox>
                </SectionBox> */}
                {/* <SectionBox>
                    <SectionInnerBox id="section-3">
                        <figure className="figure-3"></figure>
                        <SectionSentence>素敵な旅の<br/>プレゼントです</SectionSentence>
                        <SubSentence>素敵な旅の<br/>プレゼントです</SubSentence>
                    </SectionInnerBox>
                </SectionBox> */}
                <SentenceSection>
                    <article className="content__inner">
                        <h1 className="content__title">浅草旅行 大林家パック</h1>
                        <h3 className="content__author">By Go Iyori Ao</h3>
                        <Typography sx={{fontSize: "1.2rem", lineHeight: "2.5"}}>ささやかでございますが、私たちより、</Typography>
                        <Typography sx={{fontSize: "1.2rem", lineHeight: "2.5"}}>いつもお世話になっている、ババさん、パパさん、ママさんへ、浅草旅行を誕生日プレゼントとして差し上げます。</Typography>
                        <Typography sx={{fontSize: "1.2rem", lineHeight: "2.5"}}>これからの1年も、たくさんの楽しい思い出が出来ることを楽しみにしております。</Typography>
                        <Typography sx={{fontSize: "1.2rem", lineHeight: "2.5"}}>この旅行も、是非存分にお楽しみ頂けるよう努力させて頂きます！</Typography>
                    </article>
                </SentenceSection>
            </>
        )
    }

    return {
        TopCarouselArea,
        ScrollContents
    }
}