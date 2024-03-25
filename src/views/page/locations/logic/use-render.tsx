import { MapCard } from "../../../conponents/map-card"

export const useRender = () => {
    const MapCards = (): JSX.Element => {
        return (
            <MapCard
                locationFramePath="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.613959585798!2d139.7937906793457!3d35.7111163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ec6db068cd1%3A0xd9a856805c8012bd!2z6Zu36ZaA!5e0!3m2!1sja!2sjp!4v1711373687028!5m2!1sja!2sjp"
                frameSize="large"
            />
        )
    }

    return {
        MapCards
    }
}