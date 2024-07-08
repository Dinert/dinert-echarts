<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {initCharts, setOption} from '../../../packages'

const charts = ref(null)
onMounted(() => {
    initCharts(charts.value)
        .then(charts => charts)
        .then(charts => {
            setOption(charts, {
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
        })
})


</script>

<template>
    <div ref="charts">

    </div>
</template>

