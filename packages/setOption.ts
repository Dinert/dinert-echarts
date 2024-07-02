import * as echarts from 'echarts'
import {TitleComponentOption, TooltipComponentOption} from 'echarts'
interface OptionsType{
    title?: TitleComponentOption;
    tooltip?: TooltipComponentOption;
}


export const setOption = (charts: ReturnType<typeof echarts.init>, options: Parameters<typeof charts.setOption>[0] & OptionsType): ReturnType<typeof charts.setOption> => {
    return charts.setOption(options)
}
