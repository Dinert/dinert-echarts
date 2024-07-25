import {RewriteChartSetOptionsParamsOptions} from '../../types/common'

export const baseBarConfig: RewriteChartSetOptionsParamsOptions = {
    xAxis: {
    },
    yAxis: {
        type: 'category',
        inverse: true,
        axisTick: {show: false}
    },
    series: [
        {
            type: 'bar',
        }
    ]
}
