import {ChartInstance, ChartSetOptionsParams, RewriteChartSetOptionsParamsOptions} from './types/common'
import lodash from 'lodash'

const defaultOptions = {
    tooltip: {},
    grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true
    },
}
const changeOptions = (charts: ChartInstance, options: RewriteChartSetOptionsParamsOptions) => {
    if (options && Object.prototype.toString.call(options.xAxis) === '[object Array]') {
        options.xAxis?.forEach(item => {
            item.axisTick = {show: false, ...item.axisTick}
        })
    } else if (options && Object.prototype.toString.call(options.xAxis) === '[object Object]') {
        options.xAxis.axisTick = {show: false, ...options.xAxis?.axisTick}
    }

    if (options && Object.prototype.toString.call(options.yAxis) === '[object Array]') {
        options.yAxis?.forEach(item => {
            item.axisLine = {show: true, ...item.axisLine}
        })
    } else if (options && Object.prototype.toString.call(options.yAxis) === '[object Object]') {
        options.yAxis.axisLine = {show: true, ...options.yAxis?.axisLine}
    }
}

// eslint-disable-next-line max-len
export const setOption = (charts: ChartInstance, options: RewriteChartSetOptionsParamsOptions, notMerge?: ChartSetOptionsParams[1]): Promise<ChartInstance> => {
    return new Promise(resolve => {

        changeOptions(charts, options)
        const options2 = lodash.defaultsDeep(lodash.cloneDeep(options), defaultOptions)

        const configOptions = typeof options.configBefore === 'function' && options.configBefore(charts, options2)

        const newOptions = lodash.defaultsDeep(lodash.cloneDeep(configOptions), options2)

        charts.setOption(newOptions, notMerge)

        resolve(charts)
    })
}
