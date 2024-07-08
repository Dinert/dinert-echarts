import {ChartInstance, ChartSetOptionsParams, RewriteChartSetOptionsParamsOptions} from './types/common'
import {useAutoPlayTooltip} from '@packages/hooks/'
import lodash from 'lodash'

// eslint-disable-next-line max-len
export const setOption = (charts: ChartInstance, options: RewriteChartSetOptionsParamsOptions, notMerge?: ChartSetOptionsParams[1]): Promise<ChartInstance> => {
    return new Promise(resolve => {
        const configOptions = typeof options.configBefore === 'function' && options.configBefore(charts, options)
        const newOptions = lodash.defaultsDeep(lodash.cloneDeep(options), configOptions)

        charts.setOption(newOptions, notMerge)
        if (options.autoPlayTooltip) {
            useAutoPlayTooltip(charts)
        }
        resolve(charts)
    })
}
