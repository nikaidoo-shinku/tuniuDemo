let mainRight = document.querySelector(".main-right")

function randerItem() {
    for (let i = 0; i < 6; i++) {
        let item = document.createElement("div")
        item.classList.add("item")
        item.innerHTML = `<div class="item-img">
        <img src="../assets/img/Cii-Tljl9eCIGKwPALpuV1u7G5MAAJCUQFxMpcAum5v817_w320_h180_c1_t0.jpg"
            alt="">
        <div class="mask">
            <p>
                <海南三亚租车服务>机场门店/酒店取换车多种车型可选，感受安全舒适驾乘体验
            </p>
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
    </div>`
        mainRight.appendChild(item)
    }
}

randerItem()

let liarr = document.querySelectorAll(".area > li")

liarr = Array.from(liarr)

liarr.forEach((item, index) => {
    item.onmouseover = function() {
        mainRight.innerHTML = ""
        for(let it of liarr ) {
            it.classList.remove("active")
        }
        item.classList.add("active")

        randerItem()
    }
})