<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref} from 'vue'
import {ChartInstance, initCharts, setOption, useAutoPlayTooltip} from '../../../packages'

const chartDom = ref(null)
const charts = ref<ChartInstance | null>(null)
const useAutoPlay: any = ref({})
onMounted(async () => {
    const chartInstance = await initCharts(chartDom.value)
    setOption(chartInstance, {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        tooltip: {},
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line'
            }
        ]
    })
    useAutoPlay.value = useAutoPlayTooltip(chartInstance, 1000)
    charts.value = chartInstance
})

onBeforeUnmount(() => {
    useAutoPlay.value.stopPlay()
    charts.value?.clear()
    charts.value?.dispose()
    charts.value = null
})


</script>

<template>
    <div ref="chartDom">

    </div>
</template>

