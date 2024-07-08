
import {ChartInstance, RewriteChartSetOptionsParamsOptions} from '../types/common'

export const useAutoPlayTooltip = (charts: ChartInstance) => {

    if (!charts) {
        return
    }

    const options = charts.getOption() as RewriteChartSetOptionsParamsOptions
    const autoPlayTooltip = options.autoPlayTooltip as number || 3000
    if (!options.autoPlayTooltip) {
        return
    }
    const series = options.series as any[] || []
    let seriesIndex = 0
    let dataIndex = 0
    let seriesLen = 0
    let dataIndexLen = 0
    let timerTooltip: any = null
    let isAutoPlay = true

    const mouseoverFn = () => {
        isAutoPlay = false
        clearTimeout(timerTooltip)
        timerTooltip = null
    }

    const mouseoutFn = () => {
        isAutoPlay = true
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        autoPlay()
    }

    charts.on('mouseover', mouseoverFn)
    charts.on('mouseout', mouseoutFn)


    function autoPlay() {
        const options2 = charts.getOption()

        if (charts.isDisposed() || !options2.autoPlayTooltip) {
            clearTimeout(timerTooltip)
            timerTooltip = null
            charts.off('mouseover', mouseoverFn)
            charts.off('mouseout', mouseoutFn)
            isAutoPlay = false
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
