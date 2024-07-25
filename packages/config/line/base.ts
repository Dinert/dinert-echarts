import {RewriteChartSetOptionsParamsOptions} from '../../types/common'

export const baseLineConfig: RewriteChartSetOptionsParamsOptions = {
    type: 'line',
    xAxis: {
        type: 'category',
    },
    tooltip: {},
    yAxis: {
        type: 'value'
    },
    series: [{
        type: 'line',
        data: []
    }],
}
