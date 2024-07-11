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
                yAxis: {
                },
                tooltip: {},
                series: [
                    {
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar'
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

