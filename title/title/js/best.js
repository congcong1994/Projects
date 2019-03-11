$(function() {
    var data = JSON.parse(localStorage.getItem('lgbtsj'));
    /*if (data == null) {
        $('.list-group').append('<li class="list-group-item" style="color:#fff;">抱歉,暂无历史搜索...</li>');
    } else if (data.length > 0) {
        var listTag = '';
        for (var i = 0; i < data.length; i++) {
            listTag += '<li class="list-group-item"><em>' + (i * 1 + 1) + '</em><h5>' + data[i].searchText + '</h5><div>总分:' + data[i].total_score + '</div></li>';
        }
        $('.list-group').append(listTag);
    }*/

    var currentDate = initDate();
    var currentDateValue;
    if (data == null) {
        $('.list-group').apped('<li class="list-group-item style="color:#fff;">抱歉,您尚未搜索过关键词...</li>');
    } else {
        for (var key in data) {
            if (key == currentDate) {
                currentDateValue = data[key];
                var arrLength = currentDateValue.length;
                currentDateValue = currentDateValue.sort(compare("total_score"));
                currentDateValue = JSON.parse(uniqueArray(currentDateValue));
                var arrLength = currentDateValue.length;
                var listTag = '';
                if (arrLength < 6) {
                    for (var i = 0; i < arrLength; i++) {
                        listTag += '<li class="list-group-item"><em>' + (i * 1 + 1) + '</em><h5>' + currentDateValue[i]["searchText"] + '</h5><div>总分:' + currentDateValue[i]["total_score"] + '</div></li>';
                    }
                } else if (arrLength > 5) {
                    for (var i = 0; i < 5; i++) {
                        listTag += '<li class="list-group-item"><em>' + (i * 1 + 1) + '</em><h5>' + currentDateValue[i]["searchText"] + '</h5><div>总分:' + currentDateValue[i]["total_score"] + '</div></li>';
                    }
                }
                $('.list-group').append(listTag);
            }
        }
    }


    //时间格式:yyyymmdd
    function initDate() {
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        var currentMonth = currentDate.getMonth() * 1 + 1;
        var currentDay = currentDate.getDate();
        if (currentMonth < 10) {
            currentMonth = '0' + currentMonth;
        }
        if (currentDay < 10) {
            currentDay = '0' + currentDay;
        }
        currentDate = currentYear + currentMonth + currentDay;
        return currentDate;
    };

    //按照数组对象某一属性排序
    function compare(propertyName) {
        return function(object1, object2) {
            var value1 = object1[propertyName];
            var value2 = object2[propertyName];
            if (value2 < value1) {
                return -1;
            } else if (value2 > value1) {
                return 1;
            } else {
                return 0;
            }
        }
    }

    //数组去重
    function uniqueArray(arr) {
        var unique = {};
        arr.forEach(function(a) { unique[JSON.stringify(a)] = 1 });
        arr = JSON.stringify(Object.keys(unique).map(function(u) { return JSON.parse(u) }));
        return arr;
    }
});