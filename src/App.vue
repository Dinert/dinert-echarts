<script  setup lang="ts">
import {onMounted} from 'vue'
import {initCharts, setOption} from '../packages'

onMounted(() => {
    initCharts('charts')
        .then(charts => charts)
        .then(charts => {
            setOption(charts, {
                _autoPlayTooltip: 3000,
                title: {
                    text: 'ECharts 入门示例',
                    show: true,
                    left: 'center',
                    top: '10px'
                },
                tooltip: {
                    align: 'center',
                    // trigger: 'axis'

                },

                xAxis: {
                    // type: 'category',

                    axisTick: {
                        show: false
                    },
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子', '鞋子'],
                    axisLine: {
                        show: true
                    }
                },
                yAxis: {
                    axisLine: {
                        show: true
                    }
                },
                series: [
                    {
                        name: 'Email',
                        type: 'line',
                        stack: 'Total',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: 'Union Ads',
                        type: 'line',
                        stack: 'Total',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: 'Video Ads',
                        type: 'line',
                        stack: 'Total',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: 'Direct',
                        type: 'line',
                        stack: 'Total',
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: 'Search Engine',
                        type: 'line',
                        stack: 'Total',
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            })
            // useAutoPlayTooltip(charts)
        })
})

</script>

<template>
    <div class="home">
        <div id="charts"></div>
    </div>
</template>
<style lang="scss" scoped>
.home {
    display: flex;
    height: 100%;
    flex-wrap: wrap;
}

#charts {
    margin: 0 auto;
    width: 100%;
    height: 400px;
}
</style>

<style>
* {
    margin: 0;
    padding: 0;
}

html,
body,
#app {
    height: 100%;
}
</style>
