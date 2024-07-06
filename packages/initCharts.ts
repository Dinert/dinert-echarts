import * as echarts from 'echarts'
import {InitChartsProps, ChartInstance} from './types/common'

export const initCharts = (dom: InitChartsProps[0] | string, theme?: InitChartsProps[1], options?: InitChartsProps[2]): Promise<ChartInstance> => {
    return new Promise((resolve, reject) => {
        dom = typeof dom === 'string' ? document.getElementById(dom) : dom
        const charts = echarts.init(dom, theme, options)
        if (charts) {
            resolve(charts)
        } else {
            // eslint-disable-next-line prefer-promise-reject-errors, no-void
            reject(void 0)
        }
    })
}
