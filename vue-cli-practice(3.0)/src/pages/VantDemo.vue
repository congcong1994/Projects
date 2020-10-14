<template>
  <!-- <div>vant组件</div> -->
  <van-form @submit="clickSubmitBtn">
    <van-field
      name="username"
      v-model="userName"
      placeholder="请输入用户名"
      label="用户名"
      :rules="[{ validatorUserName, message: '请输入正确内容' }]"
    />
    <van-field
      readonly
      clickable
      name="calendar"
      :value="value"
      label="日历"
      placeholder="点击选择日期"
      @click="showCalendar = true"
    />
    <van-field name="switch" label="开关">
      <template #input>
        <van-switch v-model="switchChecked" size="20" />
      </template>
    </van-field>
    <van-calendar
      v-model="showCalendar"
      :show-confirm="false"
      @confirm="onConfirm"
      :min-date="minDate"
      :max-date="maxDate"
      :show-subtitle="false"
      :round="false"
      :close-on-popstate="true"
      :formatter="formatterFun"
    />
  </van-form>
</template>
<script>
export default {
  data() {
    return {
      userName: "",
      value: "",
      showCalendar: false,
      minDate: new Date(2020, 4, 6),
      maxDate: new Date(2020, 6, 10),
      switchChecked: false
    };
  },
  methods: {
    clickSubmitBtn() {},
    validatorUserName(val) {
      // eslint-disable-next-line no-useless-escape
      return /^([\u4e00-\u9fa5]|[a-zA-Z0-9\-#\(\)\（\）])+$/.test(val);
    },
    formatterFun(day) {
      var month = day.date.getMonth() + 1;
      var date = day.date.getDate();
      if (month == 6) {
        if (date == 7) {
          day.className = "van-calendar_specialDay";
        }
      }
      return day;
    },
    onConfirm(date) {
      this.value = `${date.getMonth() + 1}/${date.getDate()}`;
      this.showCalendar = false;
    }
  }
};
</script>
