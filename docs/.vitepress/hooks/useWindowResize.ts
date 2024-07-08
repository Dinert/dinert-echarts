/**
 * 监听浏览器缩放，使用防抖函数做触发次数太多的处理
 */
import lodash from 'lodash'

const useWindowResize = (resize: () => void, delay: number = 0, immediate: boolean = false) => {
    const onResize = lodash.debounce(() => {
        resize()
    }, delay)
    if (immediate) {
        resize() // 手动触发一次
    }
    window.addEventListener('resize', onResize, false)
    return onResize
}

export default useWindowResize
