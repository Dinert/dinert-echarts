import {RewriteChartSetOptionsParamsOptions} from '../../types/common'

export const baseColumnConfig: RewriteChartSetOptionsParamsOptions = {
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
