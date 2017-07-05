/**
 * Created by crystal on 2017/7/5.
 */
$(document).ready(function () {
    console.log('test');
    $('a').click(function (e) {
        console.log($(this));
        $(this).next().slideToggle();
    });
    $('#dashboard-item').click(function (e) {
        $.ajax({url:"/index/dashboard/",type:"GET",success:function (data) {
            $(".content").html(data);
        }})
    })
});