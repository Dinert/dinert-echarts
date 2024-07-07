import {ChartInstance, ChartSetOptionsParams, RewriteChartSetOptionsParamsOptions} from './types/common'
import {useAutoPlayTooltip} from '@packages/hooks/'


// eslint-disable-next-line max-len
export const setOption = (charts: ChartInstance, options: RewriteChartSetOptionsParamsOptions, notMerge?: ChartSetOptionsParams[1]): Promise<ChartInstance> => {
    return new Promise(resolve => {
        charts.setOption(options, notMerge)
        if (options._autoPlayTooltip) {
            useAutoPlayTooltip(charts)
        }
        resolve(charts)
    })
}
