
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
import { Box, Link, Modal, Paper, Typography, styled } from "@mui/material"
import { MenuColorCode } from '../../../../utils/constants/menu-color-code';
import { useState } from 'react';

const SPaper = styled(Paper)({
    padding: '6px',
});

const STimelineOppositeContent = styled(TimelineOppositeContent)({
    display: "flex",
    flexDirection: "column",
    gap: "4px"
});

const MoveTime = styled(Typography)({
    fontSize: "1rem",
    background: MenuColorCode.schedule,
    color: "#fff",
    padding: "2px 4px",
    borderRadius: "4px",
    width: "fit-content"
})

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "90%",
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    padding: "8px",
    backgroundImage: 'url(https://d34gglw95p9zsk.cloudfront.net/item_cocreco_images/images/000/023/167/large/fed50829-c8be-44e6-b96d-6fe812ebff74.jpg?1643194360)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

export const useRender = () => {

    const TimeTable = (): JSX.Element => {
        const [openSkyBusModal, setOpenSkyBusModal] = useState(false);
        const handleOpenSkyBusModal = () => {
            setOpenSkyBusModal(true);
        }
        const handleCloseSkyBusModal = () => {
            setOpenSkyBusModal(false);
        }
        return (
            <>
                {openSkyBusModal && (
                    <Modal
                    open={openSkyBusModal}
                    onClose={handleCloseSkyBusModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={modalStyle}>
                      <Typography id="modal-modal-title" fontSize="midium" textAlign="center" sx={{ textShadow: "2px 2px 6px #fff" }}>
                        スカイバス<br/>
                        東京タワー・レインボーブリッジコース
                      </Typography>
                      <Typography id="modal-modal-description" sx={{
                        margin: "10px auto",
                        textAlign: "center",
                        backgroundColor: '#e4e4e421',
                        borderRadius: "10px",
                        width: "fit-content",
                        padding: "2px 4px"
                        }}>
                        コース
                      </Typography>
                      <Box
                        component="img"
                        src='https://www.skybus.jp/course/up_img/1499778376-503372_3.png'
                        width="100%"
                      />
                    </Box>
                  </Modal>
                )}
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
                            <SPaper elevation={3} onClick={handleOpenSkyBusModal}>
                                <Box display="flex" flexDirection="column">
                                    <Typography fontWeight={700} textAlign="center">
                                        スカイバス
                                    </Typography>
                                    <Typography fontWeight={700} textAlign="center">
                                        ヒロおじさんFamily合流！
                                    </Typography>
                                </Box>
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
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color="primary" variant='filled' >
                                    <HomeWorkIcon />
                                </TimelineDot>
                            </TimelineSeparator>
                            <TimelineContent>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </>
        )
    }

    const MoveTimeLine = () => {
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
                <Timeline position="left" sx={{
                    background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,253,221,1) 20%, rgba(249,255,128,1) 40%, rgba(255,253,221,1) 60%, rgba(202,163,255,1) 80%, rgba(255,255,255,1) 100%)"
                    }}>
                    <TimelineItem>
                        <STimelineOppositeContent color="text.secondary">
                        08:00
                        <MoveTime>10分</MoveTime>
                        </STimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot color='primary' />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{fontSize: "small"}}>レンタカー</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <STimelineOppositeContent color="text.secondary">
                            <Typography>8:30-9:00</Typography>
                            <MoveTime>30分</MoveTime>
                        </STimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot color='secondary' />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{fontSize: "small"}}>ママさん・ババさんご乗車</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <STimelineOppositeContent color="text.secondary">
                            <Typography>9:00-9:30</Typography>
                            <MoveTime>1時間〜<br/>1時間30分</MoveTime>
                        </STimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot color='secondary' variant='outlined' />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{fontSize: "small"}}>大林家乗車</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <STimelineOppositeContent color="text.secondary">
                            <Typography>10:00-11:00</Typography>
                            <MoveTime>10分〜20分</MoveTime>
                        </STimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot color='warning' />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{fontSize: "small"}}>駐車場到着</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <STimelineOppositeContent color="text.secondary">
                            <Typography>11:00-11:30</Typography>
                            <MoveTime>11分〜20分</MoveTime>
                        </STimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot color='success' />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{fontSize: "small"}}>ホテル荷物預け</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <STimelineOppositeContent color="text.secondary">
                            <Typography>11:30-12:00</Typography>
                            <MoveTime>5分</MoveTime>
                        </STimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot color='info' />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{fontSize: "small"}}>雷門到着</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <STimelineOppositeContent color="text.secondary">
                            <Typography>17:30</Typography>
                            <MoveTime>6分</MoveTime>
                        </STimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot color='success' variant='outlined' />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{fontSize: "small"}}>天ぷら屋さん</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <STimelineOppositeContent color="text.secondary">
                            <Typography>18:30-19:00</Typography>
                        </STimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot color='error' />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{fontSize: "small"}}>ホテル</TimelineContent>
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
                <Timeline position="left" sx={{background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(249,255,128,1) 40%, rgba(241,144,93,1) 80%, rgba(255,255,255,1) 100%)"}}>
                    <TimelineItem>
                        <STimelineOppositeContent color="text.secondary">
                        09:30-09:30
                        <MoveTime>10分〜20分</MoveTime>
                        </STimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot color='primary' />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{fontSize: "small"}}>ホテルチェックアウト</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <STimelineOppositeContent color="text.secondary">
                            <Typography>10:00</Typography>
                            <MoveTime>10分</MoveTime>
                        </STimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot color='secondary' />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{fontSize: "small"}}>駐車場</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <STimelineOppositeContent color="text.secondary">
                            <Typography>10:15前後</Typography>
                            <MoveTime>10分前後</MoveTime>
                        </STimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot color='secondary' variant='outlined' />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{fontSize: "small"}}>スカイバス発着</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <STimelineOppositeContent color="text.secondary">
                            <Typography>11:00-11:30</Typography>
                            <MoveTime>1時間〜<br/>1時間30分</MoveTime>
                        </STimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot color='warning' />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{fontSize: "small"}}>東京駅</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <STimelineOppositeContent color="text.secondary">
                            <Typography>16:00-17:00</Typography>
                        </STimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot color='success' />
                        </TimelineSeparator>
                        <TimelineContent sx={{fontSize: "small"}}>おうち</TimelineContent>
                    </TimelineItem>
                </Timeline>
            </>
        )
    }

    return {
        TimeTable,
        MoveTimeLine
    }
}