import { Box, Grid, Typography, styled } from "@mui/material"
import Carousel from 'react-material-ui-carousel';
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';//左矢印アイコン
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';//右矢印アイコン
import { MenuColorCode } from "../../../../utils/constants/menu-color-code";
import { CountdownInterval } from "./use-count-down-interval";
import { PhotoDataUri } from "../../../../utils/constants/photo-data-uri";

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
    minHeight: "100vh",
    "& figure": {
        display: "flex",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        minHeight: "100vh",
        backgroundSize: "cover",
        margin: 0,
    },
    '& .figure-1': {
        backgroundImage:  `url(${PhotoDataUri.skyTree})`,
        // background: "#000",
        // backgroundPosition: "co"
    },
    '& .figure-2': {
        // backgroundImage: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/photo-1506260408121-e353d10b87c7.jpg")',
        // background: "#f1f1f1",
    },
    '& .figure-3': {
        backgroundImage: 'url(odaiba.jpg)',
        // background: "#ff0",
        backgroundPosition: "center"
    }
    // '&:nth-of-type(1) figure': {
    //     backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/photo-1506260408121-e353d10b87c7.jpg)'
    // },
    // '&:nth-of-type(2) figure': {
    //     backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/photo-1506744038136-46273834b3fb.jpg)'
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

const SubSentence = styled(Typography)({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    position: "absolute",
    top: "calc(50vh - 20px)",
    color: "#fff",
    fontFamily: '"Courgette",serif',
    fontSize: "20px",
    textShadow: "2px 2px 4px #000"
})

export const useRender = () => {
    const TopCarouselArea = (): JSX.Element => {
        return (
        <Box
        position="relative"
        minHeight="100vh"
        sx={{
            backgroundColor:"#e6b4ce4a",
            opacity: "0.8",
            backgroundImage: "repeating-radial-gradient( circle at 0 0, transparent 0, #e5e5f7 10px ),repeating-linear-gradient( #a72d6c55, #e6b4ce4a )"
        }}>
            <Carousel
             NextIcon={<ArrowForwardIosSharpIcon/>} //矢印アイコンを別のアイコンに変更
             PrevIcon={<ArrowBackIosSharpIcon/>} //矢印アイコンを別のアイコンに変更
             autoPlay = {true} //自動でCarouselを動かすかどうか(true or false)
             interval = {3000}
             duration = {500} // アニメーションの長さを定義
             swipe = {true} // スワイプで動かせるかどうか
            //  IndicatorIcon={true}
             indicators={true}
             indicatorContainerProps={{
                style: {
                    margin: 0,
                    borderBottom: "solid 6px #000"
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
                        <figure className="figure-1"></figure>
                        <SectionSentence>皆さんお誕生日<br/>おめでとうございます</SectionSentence>
                        {/* <SubSentence>皆さんお誕生日<br/>おめでとうございます</SubSentence> */}
                    </SectionInnerBox>
                </SectionBox>
                <SectionBox>
                    <SectionInnerBox id="section-2">
                        <figure className="figure-2"></figure>
                        <SectionSentence>これからの1年が<br/>素敵な1年になりますよう</SectionSentence>
                        <SubSentence>これからの1年が<br/>素敵な1年になりますよう</SubSentence>
                    </SectionInnerBox>
                </SectionBox>
                <SectionBox>
                    <SectionInnerBox id="section-3">
                        <figure className="figure-3"></figure>
                        <SectionSentence>素敵な旅の<br/>プレゼントです</SectionSentence>
                        {/* <SubSentence>素敵な旅の<br/>プレゼントです</SubSentence> */}
                    </SectionInnerBox>
                </SectionBox>
                {/* <SectionBox>
                    <SectionInnerBox id="section-2">
                        <figure></figure>
                        <SectionSentence>Take lots of photos</SectionSentence>
                    </SectionInnerBox>
                </SectionBox>
                <SectionBox>
                    <SectionInnerBox id="section-3">
                        <figure></figure>
                        <SectionSentence>Each one of them pretty</SectionSentence>
                    </SectionInnerBox>
                </SectionBox> */}
                {/* <section class="content">
                    <article class="content__inner">
                        <h1 class="content__title">Some Happy Little Text</h1>
                        <h3 class="content__author">By Bob Ross</h3>
                        <p>A thin paint will stick to a thick paint. The shadows are just like the highlights, but we're going in the opposite direction. When you do it your way you can go anywhere you choose.</p>
                        <p>You have to make almighty decisions when you're the creator. When you buy that first tube of paint it gives you an artist license. There we go. The little tiny Tim easels will let you down. Let's just drop a little Evergreen right here.</p>
                        <p>Trees grow in all kinds of ways. They're not all perfectly straight. Not every limb is perfect. I really believe that if you practice enough you could paint the 'Mona Lisa' with a two-inch brush. Just pretend you are a whisper floating across a mountain. This is your world, whatever makes you happy you can put in it. Go crazy.</p>
                        <p>The first step to doing anything is to believe you can do it. See it finished in your mind before you ever start. We'll play with clouds today. Every single thing in the world has its own personality - and it is up to you to make friends with the little rascals. Don't kill all your dark areas - you need them to show the light. We don't want to set these clouds on fire. Every day I learn.</p>
                        <blockquote>When you do it your way you can go anywhere you choose.</blockquote>
                        <p>Let's get wild today. Once you learn the technique, ohhh! Turn you loose on the world; you become a tiger. This is probably the greatest thing to happen in my life - to be able to share this with you.</p>
                        <p>I'm a water fanatic. I love water. This is gonna be a happy little seascape. Put light against light - you have nothing. Put dark against dark - you have nothing. It's the contrast of light and dark that each give the other one meaning. Let's put a touch more of the magic here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue.</p>
                        <p>And that's when it becomes fun - you don't have to spend your time thinking about what's happening - you just let it happen. Let all these things just sort of happen. Don't fight it, use what happens. Let's put some happy little bushes on the other side now.</p>
                        <blockquote>Don't fight it, use what happens.</blockquote>
                        <p>If we're going to have animals around we all have to be concerned about them and take care of them. I'll go over the colors one more time that we use: Titanium white, Thalo green, Prussian blue, Van Dyke brown, Alizarin crimson, Sap green, Cad yellow, and Permanent red. Anytime you learn something your time and energy are not wasted. This is your world. We want to use a lot pressure while using no pressure at all. Just let go - and fall like a little waterfall.</p>
                        <p>Let's build some happy little clouds up here. Everyone is going to see things differently - and that's the way it should be. Let's do that again. A tree needs to be your friend if you're going to paint him. That's why I paint - because I can create the kind of world I want - and I can make this world as happy as I want it.</p>
                    </article>
                </section> */}
            </>
        )
    }

    return {
        TopCarouselArea,
        ScrollContents
    }
}