function randerItem() {
    for (let i = 0; i < 6; i++) {
        let item = $(`<div class="item">
        <div class="item-img">
            <img src="../assets/img/Cii-Tljl9eCIGKwPALpuV1u7G5MAAJCUQFxMpcAum5v817_w320_h180_c1_t0.jpg" alt="">
            <div class="mask">
                <p><海南三亚租车服务>机场门店/酒店取换车多种车型可选，感受安全舒适驾乘体验</p>
            </div>
        </div>
        <div class="item-bottom">
            <div class="price">
                <span>￥</span>
                <span>110</span>
                <span>起</span>
            </div>
            <div class="evaluate">
                满意度 98%
            </div>
        </div>
    </div>`)
        $(".main-right").append(item)
    }
}

randerItem()

$(".area > li").each(function(index, item) {
    $(item).hover(function() {
        $(this).addClass("active").siblings("li").removeClass("active")
        $(".main-right").html("")
        randerItem()
    })
})