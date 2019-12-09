<template>
  <div content>
    <!-- 24 -->
    <el-row>
      <el-col :span="12">12</el-col>
      <el-col :span="6">6</el-col>
      <el-col :span="6">6</el-col>
    </el-row>
    <MyRow tag="section">
      col
    </MyRow>
  </div>
</template>

<script>
import MYROW from "./My-Row";
import MyCol from "./My-Col";
export default {
  components: {
    MyRow: MYROW,
    MyCol: My-Col
  }
};
</script>

<style>
</style>