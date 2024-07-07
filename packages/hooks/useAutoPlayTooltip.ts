
import {ChartInstance} from '../types/common'

export const useAutoPlayTooltip = (charts: ChartInstance) => {

    const options = charts.getOption()
    const autoPlayTooltip = options._autoPlayTooltip as number || 3000
    if (options.autoPlayTooltip) {
        return
    }
    const series = options.series as any[] || []
    let seriesIndex = 0
    let dataIndex = 0
    let seriesLen = 0
    let dataIndexLen = 0
    let isAutoPlay = true
    let timerTooltip: any = null


    charts.on('mouseover', () => {
        isAutoPlay = false
        clearTimeout(timerTooltip)
        timerTooltip = null
    })
    charts.on('mouseout', () => {
        isAutoPlay = true
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        autoPlay()
    })


    function autoPlay() {
        seriesLen = series && series.length

        if (seriesLen) {
            dataIndexLen = series[seriesIndex].data && series[seriesIndex].data.length

            if (dataIndexLen === dataIndex) {
                dataIndex = 0
                seriesIndex++
            }

            if (seriesIndex === seriesLen) {
                seriesIndex = 0
            }

            if (dataIndexLen) {
                timerTooltip = setTimeout(() => {
                    charts.dispatchAction({
                        type: 'showTip',
                        seriesIndex: seriesIndex,
                        dataIndex: dataIndex
                    })
                    dataIndex++

                    clearTimeout(timerTooltip)
                    timerTooltip = null
                    isAutoPlay && autoPlay()
                }, autoPlayTooltip)
            }

        }
    }
    autoPlay()
}
