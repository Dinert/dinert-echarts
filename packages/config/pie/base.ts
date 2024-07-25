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
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
}
