export default md => {
    /**
     * To enable the plugin to be parsed in the demo description, the content is rendered as span instead of ElTag.
     */
    md.renderer.rules.tag = (tokens, idx) => {
        const token = tokens[idx]
        const value = token.content
        /**
         * Add styles for some special tags
         * vitepress/styles/content/tag-mark-content.scss
         */
        const tagClass = ['beta', 'deprecated', 'a11y'].includes(value) ? value : ''
        return `<span class="vp-tag ${tagClass}">${value}</span>`
    }

    md.inline.ruler.before('emphasis', 'tag', (state, silent) => {
        const tagRegExp = /^\^\(([^)]*)\)/
        const str = state.src.slice(state.pos, state.posMax)

        // eslint-disable-next-line max-statements-per-line
        if (!tagRegExp.test(str)) {return false}
        // eslint-disable-next-line max-statements-per-line
        if (silent) {return true}

        const result = str.match(tagRegExp)

        // eslint-disable-next-line max-statements-per-line
        if (!result) {return false}

        const token = state.push('tag', 'tag', 0)
        token.content = result[1].trim()
        token.level = state.level
        state.pos += result[0].length

        return true
    })
}
