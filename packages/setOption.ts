import {ChartSetOptionsInstance, ChartInstance, RewriteChartSetOptionsParamsOptions} from './types/common'


export const setOption = (charts: ChartInstance, options: RewriteChartSetOptionsParamsOptions): ReturnType<ChartSetOptionsInstance> => {
    return charts.setOption(options)
}
