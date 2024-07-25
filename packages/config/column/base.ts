import {RewriteChartSetOptionsParamsOptions} from '../../types/common'

export const baseBarConfig: RewriteChartSetOptionsParamsOptions = {
    type: 'column',
    xAxis: {
        type: 'category',
    },
    yAxis: {
    },
    series: [
        {
            type: 'bar',
        }
    ]
}
