import {ChartInstance, ChartSetOptionsParams, RewriteChartSetOptionsParamsOptions} from './types/common'
import lodash from 'lodash'

const defaultOptions = {
    xAxis: {
        axisTick: {
            show: false
        }
    },
    yAxis: {
        axisLine: {
            show: true
        }
    }
}

// eslint-disable-next-line max-len
export const setOption = (charts: ChartInstance, options: RewriteChartSetOptionsParamsOptions, notMerge?: ChartSetOptionsParams[1]): Promise<ChartInstance> => {
    return new Promise(resolve => {

        const options2 = lodash.defaultsDeep(lodash.cloneDeep(options), defaultOptions)

        const configOptions = typeof options.configBefore === 'function' && options.configBefore(charts, options2)

        const newOptions = lodash.defaultsDeep(lodash.cloneDeep(configOptions), options2)

        charts.setOption(newOptions, notMerge)

        resolve(charts)
    })
}
