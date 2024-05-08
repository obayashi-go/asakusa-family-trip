import { GoTestBox } from "../../../conponents/go-test-box"

export const useRender = () => {


    const goTestQAMapList = [
        {q: "Goの一番好きなスポーツは？", a: [
            "相撲", "野球", "ゲートボール", "サッカー"
        ]}
    ]

    const GoTest = () => {
        return (
            <div>
                {
                    goTestQAMapList.map(goTest => {
                        return (
                            <GoTestBox goTest={goTest} />
                        )
                    })
                }
            </div>
        )
    }

    return {
        GoTest
    }
}