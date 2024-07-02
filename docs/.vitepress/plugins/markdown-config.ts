import path from 'path'
import fs from 'fs'
import MarkdownIt from 'markdown-it'
import mdContainer from 'markdown-it-container'
import {highlight} from '../utils/highlight'
import tag from './tag.js'

const localMd = MarkdownIt().use(tag)

export const mdPlugin = md => {
    md.use(mdContainer, 'demo', {
        render(tokens, idx: number) {
            const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
            if (tokens[idx].nesting === 1 /* means the tag is opening */) {
                const description = m && m.length > 1 ? m[1] : ''
                const sourceFileToken = tokens[idx + 2]
                let source = ''
                const sourceFile = sourceFileToken.children?.[0].content ?? ''
                if (sourceFileToken.type === 'inline') {

                    source = fs.readFileSync(
                        path.resolve('components', `${sourceFile}.vue`),
                        'utf-8'
                    )
                }
                const str = 'import {useData} from \'vitepress\''
                const str2 = 'import useMapStyle from \'../../hooks/useMapStyle\''
                const str3 = 'const {isDark} = useData()'
                const str4 = '.then(map => useMapStyle(map, isDark))'
                let demoSource = source.replace(str, '')
                demoSource = demoSource.replace(str2, '')
                demoSource = demoSource.replace(str3, '')
                demoSource = demoSource.replace(str4, '')

                // eslint-disable-next-line max-statements-per-line
                if (!source) {throw new Error(`Incorrect source file: ${sourceFile}`)}
                return `<DinertDemo source="${encodeURIComponent(
                    highlight(source, 'vue')
                )}" demoSource="${encodeURIComponent(
                    highlight(demoSource, 'vue')
                )}" path="${sourceFile}" raw-source="${encodeURIComponent(
                    source
                )}" description="${encodeURIComponent(localMd.render(description))}">`
            } else {
                return '</DinertDemo>'
            }
        }
    })
}
