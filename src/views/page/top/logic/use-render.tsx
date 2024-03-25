import { Box, Grid, styled } from "@mui/material"
import Carousel from 'react-material-ui-carousel';
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';//左矢印アイコン
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';//右矢印アイコン


const lColor = 'black';
const bgColor = '#CC0066';
const ArrowColor = 'blue';
const ArrowColor_bg = 'white';
const Icon = 'lightskyblue';
const ActiveIcon = 'midnightblue';

const ImgBox = styled(Box)({
    width: "100%",
    height: "300px",
    backgroundPosition: "center",
    backgroundSize: "cover",
})

export const useRender = () => {
    const TopCarouselArea = (): JSX.Element => {
        return (
        <Box position="relative">
            <Carousel
             NextIcon={<ArrowForwardIosSharpIcon/>} //矢印アイコンを別のアイコンに変更
             PrevIcon={<ArrowBackIosSharpIcon/>} //矢印アイコンを別のアイコンに変更
             autoPlay = {true} //自動でCarouselを動かすかどうか(true or false)
             //stopAutoPlayOnHover = {true} Carouselの上にマウスを置いている間、自動スクロールを継続するかどうか
             //interval = {4000} 自動でCarouselを動かす時間の間隔(ミリ秒単位)
             //animation = {fade} (fade or slide) Carouselのアニメーションの種類を変更
             duration = {500} // アニメーションの長さを定義
             swipe = {true} // スワイプで動かせるかどうか
             //indicators = {true} インジケーター(下の丸いアイコン)が必要かどうか
             navButtonsAlwaysVisible = {true} //常に矢印アイコンを表示するかどうか
             //navButtonsAlwaysInvisible = {true} //常に矢印アイコンを非表示にするかどうか
             //cycleNavigation = {true} //最後のスライドから「次へ」の矢印アイコンを押した時に最初にスライドに動かせるようにするかどうか
             //fullHeightHover = {true} //次/前のボタンがItem要素の高さ全体をカバーし、ホバー時にボタンを表示するかどうか
    
            indicatorContainerProps={{
              style: {
                margin: "3px 0px 0px 0px"
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
                 margin: '-20px 0 0', //位置調整
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
            </Carousel>
         </Box>
        )
    }

    return {
        TopCarouselArea
    }
}