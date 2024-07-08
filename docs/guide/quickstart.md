
# 快速开始

本节将介绍如何在项目中使用 <el-link type="primary" :underline="false" href="https://github.com/Dinert/dinert-aap">DinertEcharts</el-link>

## 引入

### Vue2
```html
<template>
    <div id="map" class="map"></div>
</template>

<script>
import '@amap/amap-jsapi-types' // ts支持
import {initMap} from '@dinert/echarts'
window._AMapSecurityConfig = {
    securityJsCode: 'xxx'
}
export default {
    mounted() {
        initMap('map', {
            center: [113.533339, 22.794258],
            zooms: [3, 18],
            zoom: 11.5,
            viewMode: '3D',
        }, {
            version: '2.0'
        })
    }
}
</script>

```

### Vue3
```html
<script setup lang="ts">
import '@amap/amap-jsapi-types'  // ts支持
import {onMounted, ref} from 'vue'
import {initMap} from '@dinert/echarts'

window._AMapSecurityConfig = {
    securityJsCode: 'xxx'
}

const mapRef = ref<any>()
onMounted(async () => {
    initMap(mapRef.value, {
        center: [113.533339, 22.794258],
        zooms: [3, 18],
        zoom: 11.5,
        viewMode: '3D',
    }, {
        version: '2.0'
    })
})

</script>

<template>
    <div ref="mapRef">
    </div>
</template>

```