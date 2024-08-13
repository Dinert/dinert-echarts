import {RewriteChartSetOptionsParamsOptions} from '../../types/common'

export const basePieConfig: RewriteChartSetOptionsParamsOptions = {
    type: 'pie',
    tooltip: {
        trigger: 'item'
    },
    legend: {
        bottom: 'bottom'
    },
    series: [
        {
            name: '',
            type: 'pie',
            radius: '50%',
            data: [
            ],
        }
    ]
}
