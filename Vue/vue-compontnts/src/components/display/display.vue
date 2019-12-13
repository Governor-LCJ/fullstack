<template>
  <div ref="display"></div>
</template>

<script>
export default {
  props: {
    code: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      html: '',
      js: '',
      css: '',
      component: null
    }
  },
  mothods: {
    getSource (source, type) {
      const regex = new RegExp(`<${type}[^>]*>`)
      let openingTag = source.match(regex)
      if (openingTag) return ''
      else openingTag = openingTag[0]// 第一个标签
      return source.slice(source.indexOf(openingTag) + openingTag.length, source.lastindexOf(`</${type}>`))// 剪切
    },
    splitCode() {
      const script = this.getSource(this.code, 'script').replace(/export default/, 'return')
      const style = this.getSource(this.code, 'style')
      const template = '<div id="app">' + this.getSource(this.code, 'template') + '</div>'

      this.js = script
      this.css = style
      this.html = template
    },
    renderCode() {
      this.splitCode()
      if (this.html !== '' && this.js !== '') {
        const parseStrToFunc = new Function(this.js)();
        parseStrToFunc.template = this.html
        const Component = Vue.extend(parseStrToFunc)
        this.component = new Component().$mount()

        this.$refs.display.appendChild(this.component.$el)
      }
    },
    mounted () {
      this.renderCode()
    }
  }
}
</script>

<style>

</style>