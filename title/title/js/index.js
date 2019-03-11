$(function() {
    var submitBtn = $('input[type="submit"]');
    var localStorageKeyName = 'lgbtsj';
    var scores = [];
    submitBtn.click(function() {
        submitBtn.attr('disabled', 'true');
        $(".list-group div").remove();
        var searchText = $('input[type="text"]').val();

        if (searchText.length === 0 || !searchText || !searchText.replace(/\s+/g, '')) {
            alert('关键词不能为空!!');
            return;
        } else if (!searchText.replace(/((?=[\x21-\x7e]+)[^A-Za-z0-9])/g, '')) {
            alert('关键词不能为符号!!');
            return;
        }

        //日期初始化: yyyymmdd
        var currentDate = initDate();

        $.ajax({
            type: "post",
            url: "http://139.219.237.53:3205/title_analytics/tex",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify({ text: searchText }),
            success: function(response) {
                $(".phrasing-score").after('<div>' + response.phrasing_score + '</div>');
                $(".hot-score").after('<div>' + response.hot_score + '</div>');
                $(".total-score").after('<div>' + response.total_score + '</div>');
                var recommendDiv = '';
                if (response.recommend_hot.length > 0) {
                    for (var i = 0; i < response.recommend_hot.length; i++) {
                        recommendDiv += '<div>' + response.recommend_hot[i] + '</div>';
                    }
                } else {
                    recommendDiv = '<div>抱歉,没有匹配到相关数据...</div>';
                }
                $(".recommend-hot").after(recommendDiv);
                response.searchText = searchText;
                /*if (localStorage.getItem(localStorageKeyName) == null) {
                    scores.push(response);
                    localStorage.setItem(localStorageKeyName, JSON.stringify(scores));
                } else {
                    var data = JSON.parse(localStorage.getItem(localStorageKeyName));
                    data.push(response);
                    localStorage.setItem(localStorageKeyName, JSON.stringify(data));
                }*/

                if (localStorage.getItem(localStorageKeyName) == null) {
                    scores.push(response);
                    localStorage.setItem(localStorageKeyName, '{"' + currentDate + '":' + JSON.stringify(scores) + '}');
                } else {
                    var data = JSON.parse(localStorage.getItem(localStorageKeyName));
                    if (data.hasOwnProperty(currentDate)) {
                        var currentDateValue = data[currentDate];
                        currentDateValue.push(response);
                        data[currentDate] = currentDateValue;
                        localStorage.setItem(localStorageKeyName, JSON.stringify(data));
                    } else {
                        var newScores = [];
                        newScores.push(response);
                        data = JSON.stringify(data).replace(/\}$/, ',"' + currentDate + '":' + JSON.stringify(newScores) + '}');
                        localStorage.setItem(localStorageKeyName, data);
                    }
                }
            },
            error: function(response) {
                //{'error':'input_msg empty'}输入有误
                alert('关键词字符长度至少为2且不能为空格或符号或英文,请检查您的输入是否合法并请重新输入!!!');
            }
        });
        setTimeout(function() {
            submitBtn.removeAttr('disabled');
        }, 3000);
    });

    //日期: yyyymmdd
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

});