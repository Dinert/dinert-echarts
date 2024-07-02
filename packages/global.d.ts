declare global {
    export namespace AMap {

        class MapType extends Control {
            constructor(opts: Partial<ControlConfig>)
        }
        class Scale extends Control {
            constructor(opts: Partial<ControlConfig>)
        }
        class ToolBar extends Control {
            constructor(opts: Partial<ControlConfig>)
        }
    }
}
export {}
