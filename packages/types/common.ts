import * as echarts from 'echarts'
import {TitleComponentOption, TooltipComponentOption, SeriesOption, XAXisComponentOption, YAXisComponentOption, LegendComponentOption} from 'echarts'
export type InitChartsProps = Parameters<typeof echarts.init>
export type ChartInstance = ReturnType<typeof echarts.init>
export type ChartSetOptionsInstance = ReturnType<typeof echarts.init>['setOption']
export type ChartSetOptionsParams = Parameters<ChartSetOptionsInstance>
export type ChartSetOptionsParamsOptions = Parameters<ChartSetOptionsInstance>[0]

export type AutoPlayTooltipProps = number | boolean | {delay?: number, after?: (charts?: ChartInstance) => void, isAutoPlay: boolean}

export interface RewriteChartSetOptionsParamsOptions extends ChartSetOptionsParamsOptions {
    type?: 'pie' | 'line' | 'bar' | 'column';
    title?: TitleComponentOption;
    tooltip?: TooltipComponentOption;
    xAxis?: XAXisComponentOption | XAXisComponentOption[];
    yAxis?: YAXisComponentOption | YAXisComponentOption[];
    series?: SeriesOption[];
    legend?: LegendComponentOption;
    grid?: echarts.GridComponentOption;
    autoPlayTooltip?: AutoPlayTooltipProps;
    configBefore?: (charts: ChartInstance, options: RewriteChartSetOptionsParamsOptions) => RewriteChartSetOptionsParamsOptions;
}
