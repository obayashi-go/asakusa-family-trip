
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DepartureBoardTwoToneIcon from '@mui/icons-material/DepartureBoardTwoTone';
import LocalParkingTwoToneIcon from '@mui/icons-material/LocalParkingTwoTone';
import OfflineBoltTwoToneIcon from '@mui/icons-material/OfflineBoltTwoTone';
import RestaurantTwoToneIcon from '@mui/icons-material/RestaurantTwoTone';
import HotelIcon from '@mui/icons-material/Hotel';
import ShoppingCartCheckoutTwoToneIcon from '@mui/icons-material/ShoppingCartCheckoutTwoTone';
import WineBarIcon from '@mui/icons-material/WineBar';
import LightModeIcon from '@mui/icons-material/LightMode';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import NightlightIcon from '@mui/icons-material/Nightlight';
import RedeemIcon from '@mui/icons-material/Redeem';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import LuggageIcon from '@mui/icons-material/Luggage';
import { Link, Paper, Typography, styled } from "@mui/material"
import { MenuColorCode } from '../../../../utils/constants/menu-color-code';

const SPaper = styled(Paper)({
    padding: '6px',
});

export const useRender = () => {

    const TimeTable = (): JSX.Element => {
        return (
            <>
                <Typography sx={{
                    borderLeft: "solid 4px #4050b5",
                    paddingLeft: "6px",
                    marginLeft: "6px",
                    lineHeight: 1,
                    fontSize: "24px"
                }}>
                    5月4日
                </Typography>
                <Timeline position="alternate"
                sx={{
                    background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,253,221,1) 20%, rgba(249,255,128,1) 40%, rgba(255,253,221,1) 60%, rgba(202,163,255,1) 80%, rgba(255,255,255,1) 100%)"
                    }}
                >
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="body2" color="textSecondary">
                                8:00
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot sx={{color: "darkblue"}}>
                                <DirectionsCarIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                        <SPaper elevation={3}>
                            <Typography variant="h6" component="h1"  textAlign="center">
                            レンタカー
                            </Typography>
                            <Typography textAlign="left">三ツ境レンタカー</Typography>
                        </SPaper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="body2" color="textSecondary">
                                9:00-9:30
                            </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color="primary" >
                                    <DepartureBoardTwoToneIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                            <SPaper elevation={3}>
                                <Typography variant="h6" component="h1"  textAlign="center">
                                出発！
                                </Typography>
                                <Typography textAlign="left">全員揃って浅草方向へGO!</Typography>
                            </SPaper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="body2" color="textSecondary">
                                10:00-10:30
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="success">
                                <LocalParkingTwoToneIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                        <SPaper elevation={3}>
                            <Typography variant="h6" component="h1" textAlign="center">
                            到着！
                            </Typography>
                            <Typography textAlign="left">
                                雷門付近のパーキングに駐車<br/>
                                <a href='/parking'>予約済駐車場</a>
                            </Typography>
                        </SPaper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="body2" color="textSecondary">
                                10:00-10:30~約30分
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot sx={{color: "#333", background: "pink"}}>
                                <LuggageIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                        <SPaper elevation={3}>
                            <Typography variant="h6" component="h1" textAlign="center">
                            荷物預け
                            </Typography>
                            <Typography textAlign="left">
                                先ずは荷物を預けましょう<br/>
                                <span style={{fontSize: "14px"}}>※ホテルまでタクシーで約9分</span>
                            </Typography>
                        </SPaper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="body2" color="textSecondary">
                            11:00-11:30
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="secondary">
                                <OfflineBoltTwoToneIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <SPaper elevation={3}>
                                <Typography variant="h6" component="h1" textAlign="center">
                                雷門観光
                                </Typography>
                                <Typography textAlign="center">観光<br/>食べ歩き<br/>ランチ<br/>お土産</Typography>
                            </SPaper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="body2" color="textSecondary">
                            16:00~30分
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="warning">
                                <ShoppingCartCheckoutTwoToneIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <SPaper elevation={3}>
                                <Typography variant="h6" component="h1" textAlign="center">
                                人力車
                                </Typography>
                                <Typography textAlign="left">
                                    30分コース×２台<br/>
                                    <a href='https://www.ebisuya.com/' target='_blank'>えびす屋</a>
                                </Typography>
                            </SPaper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="body2" color="textSecondary">
                            17:30
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot sx={{color: "lightyellow", background: "#000"}}>
                                <NightlightIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <SPaper elevation={3}>
                                <Typography variant="h6" component="h1"  textAlign="center">
                                ディナー
                                </Typography>
                                <Typography textAlign="left">天ぷら<br/>
                                    <Link><a href='https://restaurant.ikyu.com/112944?num_guests=2&visit_date=2024-05-04' target='_brank'>天麩羅 中清</a></Link>
                                </Typography>
                            </SPaper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="body2" color="textSecondary">
                            18:30-19:00
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="secondary" variant="outlined">
                                <HotelIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <SPaper elevation={3}>
                                <Typography variant="h6" component="h1" textAlign="center">
                                ホテル
                                </Typography>
                                <Typography textAlign="left">チェックイン<br/>
                                    <Link><a href='https://www.stay-sakura.com/artdeco' target='_brank'>Stay Sakura Asakusa Deco</a></Link>
                                </Typography>
                            </SPaper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="body2" color="textSecondary">
                            19:30-20:00~
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="primary" variant="outlined">
                                <WineBarIcon />
                            </TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent>
                            <SPaper elevation={3}>
                                <Typography variant="h6" component="h1" textAlign="center">
                                歓談
                                </Typography>
                                <Typography textAlign="left">
                                    1日目<br/>お疲れ様
                                </Typography>
                            </SPaper>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
                <Typography sx={{
                    borderLeft: "solid 4px #4050b5",
                    paddingLeft: "6px",
                    marginLeft: "6px",
                    lineHeight: 1,
                    fontSize: "24px"
                }}>
                    5月5日
                </Typography>
                <Timeline position="alternate" sx={{background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(249,255,128,1) 40%, rgba(241,144,93,1) 80%, rgba(255,255,255,1) 100%)"}}>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="body2" color="textSecondary">
                                8:00-9:00~
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot sx={{color: "orange", backgroundColor: "lightblue"}} variant='filled'>
                                <LightModeIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                        <SPaper elevation={3}>
                            <Typography variant="h6" component="h1"  textAlign="center">
                            朝ご飯
                            </Typography>
                            <Typography textAlign="left">おはようございます</Typography>
                        </SPaper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="body2" color="textSecondary">
                                9:30-10:00
                            </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color="primary" >
                                    <DepartureBoardTwoToneIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                            <SPaper elevation={3}>
                                <Typography variant="h6" component="h1"  textAlign="center">
                                出発
                                </Typography>
                                <Typography textAlign="left">
                                    身支度を済ませて<br/>
                                    <a href='https://www.skybus.jp/' target='_blank'>スカイバスへ出発</a>
                                    </Typography>
                            </SPaper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="body2" color="textSecondary">
                                10:30~50分
                            </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot sx={{color: "skyblue", background: "darkblue"}} >
                                    <DirectionsBusIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                            <SPaper elevation={3}>
                                <Typography variant="h6" component="h1"  textAlign="center">
                                スカイバス
                                </Typography>
                                <Typography textAlign="left">東京タワー・レインボーブリッジコース<br/>
                                <span style={{
                                    color: "#fff",
                                    background: "midnightblue",
                                    display: "block",
                                    padding: "2px 4px",
                                    fontSize: "14px",
                                    borderRadius: "10px",
                                    width: "fit-content",
                                    margin: "0 auto"
                                    }}>約50分</span>
                                </Typography>
                            </SPaper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="body2" color="textSecondary">
                                11:30
                            </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot sx={{color: "chocolate", background: "khaki"}} >
                                    <RestaurantTwoToneIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                            <SPaper elevation={3}>
                                <Typography variant="h6" component="h1"  textAlign="center">
                                ランチ
                                </Typography>
                                <Typography textAlign="left">IN 東京駅</Typography>
                            </SPaper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="body2" color="textSecondary">
                                12:30
                            </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color="secondary" >
                                    <RedeemIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                            <SPaper elevation={3}>
                                <Typography variant="h6" component="h1"  textAlign="center">
                                お土産
                                </Typography>
                                <Typography textAlign="left">東京駅周辺お土産</Typography>
                            </SPaper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="body2" color="textSecondary">
                                13:30-14:00~
                            </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot sx={{color: "#fff", background: MenuColorCode.schedule}} variant='filled' >
                                    <DepartureBoardTwoToneIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                            <SPaper elevation={3}>
                                <Typography variant="h6" component="h1"  textAlign="center">
                                帰宅
                                </Typography>
                                <Typography textAlign="left">お家に帰るまでが遠足</Typography>
                            </SPaper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            {/* <Typography variant="body2" color="textSecondary">
                                13:30-14:00~
                            </Typography> */}
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color="primary" variant='filled' >
                                    <HomeWorkIcon />
                                </TimelineDot>
                                {/* <TimelineConnector /> */}
                            </TimelineSeparator>
                            <TimelineContent>
                            {/* <SPaper elevation={3}>
                                <Typography variant="h6" component="h1"  textAlign="center">
                                帰宅
                                </Typography>
                                <Typography textAlign="left">お家に帰るまでが遠足</Typography>
                            </SPaper> */}
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </>
        )
    }

    return {
        TimeTable
    }
}