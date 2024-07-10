<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {initCharts, setOption} from '../../../packages'
import * as echarts from 'echarts'

const charts = ref(null)
onMounted(() => {
    initCharts(charts.value)
        .then(charts => charts)
        .then(charts => {
            setOption(charts, {
                title: {
                    text: '条形图',
                    left: 'center',
                    textStyle: {
                        color: '#fff'
                    },
                },
                tooltip: {
                    'trigger': 'axis',
                    backgroundColor: 'rgba(20,43,80,0.89)',
                    borderColor: 'transparent',
                    textStyle: {
                        color: '#FFF'
                    },
                    axisPointer: {
                        type: 'shadow'
                    },
                    formatter: params => {
                        const value = params[0]
                        const template = `<div>${value.axisValueLabel}</div>
                             <div>${value.seriesName}：${value.value}</div>`
                        return template
                    }
                },
                xAxis: [{
                    'data': [
                        '2018',
                        '2019',
                        '2020',
                        '2021',
                        '2022'
                    ],
                    'type': 'category'
                }],
                'yAxis': [
                    {
                        'name': '数据量',
                        'type': 'value',
                    },
                    {
                        'name': '同比增长率',
                        'type': 'value'
                    }
                ],
                'legend': {
                    'data': [
                        '数据量',
                        '同比增长率'
                    ],
                    show: false
                },
                series: [{
                             show: true,
                             type: 'bar',
                             barWidth: '20%',
                             z: 5,
                             label: {
                                 show: false,
                             },
                             itemStyle: {
                                 normal: {
                                     color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                                         offset: 0,
                                         color: '#0195E9' // 0% 处的颜色
                                     }, {
                                         offset: 1,
                                         color: '#01C0F6' // 100% 处的颜色
                                     }], false),
                                     barBorderRadius: [20, 20],
                                 }
                             },
                             'data': [
                                 7386,
                                 12919,
                                 18882,
                                 23089,
                                 26751
                             ],
                             'name': '数据量',
                         },
                         {
                             'data': [
                                 0,
                                 74.91,
                                 46.16,
                                 22.28,
                                 15.86
                             ],
                             'name': '同比增长率',
                             'type': 'line'
                         }],
                configBefore(charts, options) {
                    const rem = document.getElementsByTagName('html')[0].style.fontSize.replace('px', '')

                    console.log(charts, 'chartsssssssssss')
                    const data = options.series[0].data
                    const tempdata = []
                    const max = Math.max(...data)
                    options.yAxis = [
                        {
                            data: options.xAxis[0].data,
                            type: 'category',
                            show: true,
                            inverse: true,
                            axisTick: { // y轴刻度线
                                show: false
                            },
                            axisLabel: {
                                formatter: '{value}',
                                color: '#fff',
                                fontSize: rem
                            },
                            axisLine: {
                                show: false
                            },
                            splitLine: {
                                show: false
                            },
                        },
                        {
                            type: 'category',
                            name: '',
                            axisTick: {
                                show: false
                            },
                            splitLine: {
                                show: false
                            },
                            axisLabel: {
                                show: false,
                                fontSize: rem
                            },
                            axisLine: {
                                show: false
                            },
                            inverse: true,
                            data: options.xAxis[0].data
                        }
                    ]
                    if (data) {
                        for (let i = 0; i < data.length; i++) {
                            tempdata.push(max)
                        }
                    }
                    options.series[1] = {
                        silent: true,
                        type: 'bar',
                        barWidth: '20%',
                        yAxisIndex: 1,
                        itemStyle: {
                            normal: {
                                color: '#144776',
                                barBorderRadius: [20, 20],
                            }
                        },
                        data: tempdata
                    }
                    options.xAxis = [
                        {
                            splitLine: false,
                            axisLabel: {
                                textStyle: {
                                    color: '#fff'
                                },
                                fontSize: rem
                            },
                            max: function (value) {
                                return value.max
                            }
                        }
                    ]

                    return options
                }
            })
        })
})


</script>

<template>
    <div ref="charts">

    </div>
</template>

