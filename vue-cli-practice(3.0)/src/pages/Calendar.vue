<template>
  <Calendar
    @choseDay="clickDay"
    @changeMonth="changeDate"
    :futureDayHide="futureHideDate"
    :markDateMore="arr"
  ></Calendar>
</template>
<script>
import Calendar from "vue-calendar-component";
export default {
  data() {
    return {
      futureHideDate: "",
      arr: [
        {
          date: "2019/6/4",
          className: "mark1"
        },
        {
          date: "2019/6/20",
          className: "mark2"
        }
      ]
    };
  },
  components: {
    Calendar
  },
  created() {
    this.futureHideDate = this.formatDate();
  },
  methods: {
    formatDate: function() {
      var dd = new Date();
      dd.setDate(dd.getDate() + 15); //获取15天后的日期
      //时间戳10位
      return (dd.getTime() / 1000).toString();
    },
    clickDay: function(data) {
      var sClassName = event.target.getAttribute("class");
      if (sClassName.indexOf("mark") > -1) {
        return;
      }
      console.log(data);
    },
    changeDate: function(data) {
      console.log(data);
    }
  }
};
</script>
<style>
.wh_content_item .wh_isToday {
  background: red !important;
}
.mark1 {
  background: #fed;
  border-radius: 50%;
}
.mark2 {
  background: #ced;
  color: #000;
  border-radius: 50%;
}
</style>
