import {ChartInstance, ChartSetOptionsParams, RewriteChartSetOptionsParamsOptions} from './types/common'
import lodash from 'lodash'

const defaultOptions = (charts: ChartInstance, options: RewriteChartSetOptionsParamsOptions): RewriteChartSetOptionsParamsOptions => {
    const newOptions = {
        tooltip: {},
        grid: {
            left: '3%',
            right: '3%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {},
        yAxis: {}
    }
    if (['line', 'bar', undefined].includes(options.type)) {
        if (lodash.isArray(options.xAxis)) {
            newOptions.xAxis = []
            options.xAxis.forEach(() => {
                (newOptions.xAxis as any).push({axisTick: {show: false}})
            })
        } else {
            newOptions.xAxis = {axisTick: {show: false}}
        }

        if (lodash.isArray(options.yAxis)) {
            newOptions.yAxis = []
            options.yAxis.forEach(() => {
                (newOptions.yAxis as any).push({axisLine: {show: true}})
            })
        } else {
            newOptions.yAxis = {axisLine: {show: true}}
        }
    } else {
        delete (newOptions as any).xAxis
        delete (newOptions as any).yAxis
    }

    return newOptions
}
// eslint-disable-next-line max-len
export const setOption = (charts: ChartInstance, options: RewriteChartSetOptionsParamsOptions, notMerge?: ChartSetOptionsParams[1]): Promise<ChartInstance> => {
    return new Promise(resolve => {

        const options2 = lodash.defaultsDeep(lodash.cloneDeep(options), defaultOptions(charts, options))

        const configOptions = typeof options.configBefore === 'function' && options.configBefore(charts, options2)

        const newOptions = lodash.defaultsDeep(lodash.cloneDeep(configOptions), options2)

        charts.setOption(newOptions, notMerge)

        resolve(charts)
    })
}
