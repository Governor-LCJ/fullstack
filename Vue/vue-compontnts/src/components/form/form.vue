<template>
  <form action>
    <slot></slot>
  </form>
</template>

<script>
import Emitter from "@/mixins/emitter";

export default {
  name: "iForm",
  provide() {
    return {
      form: this
    };
  },
  data() {
    return {
      fields: []
    };
  },
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    }
  },
  methods: {
    // 公开方法：全部重置数据
    resetFields() {
      this.fields.forEach(field => {
        field.resetField();
      });
    },
    // 公开方法：全部校验数据，支持 Promise
    validate(callback) {
      return new Promise(resolve => {
        let valid = true;
        let count = 0;
        this.fields.forEach(field => {
          field.validate("", errors => {
            if (errors) {
              valid = false;
            }
            if (++count === this.fields.length) {
              // 全部完成
              resolve(valid);
              if (typeof callback === "function") {
                callback(valid);
              }
            }
          });
        });
      });
    }
  },
  created() {
    this.$on("on-form-item-item-add", field => {
      if (field) this.fields.push(field);
    }),
      this.$on("on-form-item-item-remove", field => {
        if (field.prop) this.fields.splice(this.field.indexOf(field), 1);
      });
  }
};
</script>

<style>
</style>