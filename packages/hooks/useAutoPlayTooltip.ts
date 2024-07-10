
import {ChartInstance, RewriteChartSetOptionsParamsOptions} from '../types/common'

export const useAutoPlayTooltip = (charts: ChartInstance, delay: number = 3000): {timerTooltip?: null, autoPlay?: () => void} => {

    if (!charts) {
        return {}
    }

    const options = charts.getOption() as RewriteChartSetOptionsParamsOptions

    const series = options.series as any[] || []
    let seriesIndex = 0
    let dataIndex = 0
    let seriesLen = 0
    let dataIndexLen = 0
    let timerTooltip: any = null

    const mouseoverFn = () => {
        clearTimeout(timerTooltip)
        timerTooltip = null
    }

    const mouseoutFn = () => {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        autoPlay()
    }

    charts.on('mouseover', mouseoverFn)
    charts.on('mouseout', mouseoutFn)


    function autoPlay() {

        if (charts.isDisposed()) {
            clearTimeout(timerTooltip)
            timerTooltip = null
            charts.off('mouseover', mouseoverFn)
            charts.off('mouseout', mouseoutFn)
        }

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

            console.log('useAutoPlayTool')
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
                    autoPlay()
                }, delay)
            }

        }
    }
    autoPlay()

    return {
        timerTooltip,
        autoPlay
    }
}
