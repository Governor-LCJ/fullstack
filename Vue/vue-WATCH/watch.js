class watcher {
  constructor (opts) {
    this.$data = opts.data// 将vm的data和watch放入类中
    this.$watch = opts.watch
    for (let key in opts.data) {
      this.setData (key, opts.data[key])
    }
  }
  setData (_key, _val) {
    Object.defineProperty(this, _key, {// {Object.defineProperty(this)   把上下文指向当前对象
      get () {
        return this.$data[_key]
      },
      set (val) {
        const oldVal = this.$data[_key]
        if (oldVal === val) return val
        this.$data[_key] = val
        this.$watch[_key] && typeof this.$watch[_key] === 'function' && (
          this.$watch[_key].call(this, val, oldVal)
        )
        return val
      }
    })
  }
}