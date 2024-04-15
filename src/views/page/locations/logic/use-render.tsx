import { MapCard } from "../../../conponents/map-card"

export const useRender = () => {
    const MapCards = (): JSX.Element => {
        return (
            <>
            <MapCard
                key={1}
                cardTitle="駐車場"
                locationFramePath="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.6130967359795!2d139.8048378757936!3d35.71113752833065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ed0bd4934bf%3A0x1ddb0b85c3890c0f!2z44CSMTMxLTAwMzMg5p2x5Lqs6YO95aKo55Sw5Yy65ZCR5bO277yR5LiB55uu77yS77yW4oiS77yR77yVIOWPpOWuh-eUsOiNmA!5e0!3m2!1sja!2sjp!4v1713176606280!5m2!1sja!2sjp"
                address="〒131-0033 東京都墨田区向島１丁目２６−１５"
                tel="---"
                qr="QR_parking.png"
                frameSize="middle"
            />
            <MapCard
                key={1}
                cardTitle="雷門"
                locationFramePath="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.613959585798!2d139.7937906793457!3d35.7111163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ec6db068cd1%3A0xd9a856805c8012bd!2z6Zu36ZaA!5e0!3m2!1sja!2sjp!4v1711373687028!5m2!1sja!2sjp"
                address="〒111-0032 東京都台東区浅草２丁目３−１"
                tel="03-3842-0181"
                qr="QR_kaminarimon.png"
                frameSize="middle"
            />
            <MapCard
                key={2}
                cardTitle="Stay Sakura（ホテル）"
                locationFramePath="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.4558932294703!2d139.7873019850715!3d35.715004957423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188e955e230327%3A0x9213758d52151b0b!2sStay%20SAKURA%20Tokyo%20ASAKUSA%20ART%20DECO%20HOTEL!5e0!3m2!1sja!2sjp!4v1711603203938!5m2!1sja!2sjp"
                address="〒111-0035 東京都台東区西浅草３丁目１６−８"
                tel="050-2018-7882"
                qr="QR_StaySakura.png"
                frameSize="middle"
            />
            <MapCard
                key={3}
                cardTitle="天麩羅 中清"
                locationFramePath="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.5529840598797!2d139.79205147579358!3d35.712616428249305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ec094b2078b%3A0x870c27a7d29b7a07!2z44CSMTExLTAwMzIg5p2x5Lqs6YO95Y-w5p2x5Yy65rWF6I2J77yR5LiB55uu77yT77yZ4oiS77yR77yTIOS4rea4hQ!5e0!3m2!1sja!2sjp!4v1711605211982!5m2!1sja!2sjp"
                address="〒111-0032 東京都台東区浅草１丁目３９−１３"
                tel="03-3841-4015"
                qr="QR_Nakasei.png"
                frameSize="middle"
            />
            <MapCard
                key={4}
                cardTitle="三菱ビル（スカイバス発着）"
                locationFramePath="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6481.7663152722835!2d139.76380029999999!3d35.6798789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfa19d9f7d3%3A0x2b90eb35a5a9ff8d!2z44CSMTAwLTAwMDUg5p2x5Lqs6YO95Y2D5Luj55Sw5Yy65Li444Gu5YaF77yS5LiB55uu77yV4oiS77ySIOS4ieiPseODk-ODqw!5e0!3m2!1sja!2sjp!4v1712149457975!5m2!1sja!2sjp"
                address="〒100-0005 東京都千代田区丸の内２丁目５−２"
                tel="03-3215-0008"
                qr="QR_skybus.png"
                frameSize="middle"
            />
            </>
        )
    }

    return {
        MapCards
    }
}