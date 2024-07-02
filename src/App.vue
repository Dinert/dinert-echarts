<script  setup lang="ts">
import {onMounted} from 'vue'
import {initCharts, setOption} from '../packages'

onMounted(() => {
    initCharts('charts').then(charts => charts)
        .then(charts => {
            setOption(charts, {
                title: {
                    text: 'ECharts 入门示例',
                    show: true,
                    left: 'center',
                    top: '10px'
                },
                tooltip: {
                    align: 'center'
                },
                xAxis: {
                    axisTick: {
                        show: false
                    },
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {
                    axisLine: {
                        show: true
                    }
                },
                series: [
                    {
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }
                ]
            })
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
    width: 800px;
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
