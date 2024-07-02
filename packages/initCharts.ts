import * as echarts from 'echarts'
type InitType = Parameters<typeof echarts.init>

export const initCharts = (dom: InitType[0] | string, theme?: InitType[1], options?: InitType[2]): Promise<ReturnType<typeof echarts.init>> => {
    return new Promise((resolve, reject) => {
        dom = typeof dom === 'string' ? document.getElementById(dom) : dom
        const charts = echarts.init(dom, theme, options)
        if (charts) {
            resolve(charts)
        } else {
            reject(undefined)
        }
    })
}
