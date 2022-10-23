const item_name = document.getElementById("productTitle");
const time = document.querySelector("#mir-layout-DELIVERY_BLOCK-slot-PRIMARY_DELIVERY_MESSAGE_LARGE > span > span.a-text-bold");
const size = document.querySelector("#detailBullets_feature_div > ul > li:nth-child(1) > span > span:nth-child(2)");
const ranks = document.querySelector("#detailBulletsWrapper_feature_div > ul:nth-child(4) > li > span");
const latLong = () => {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(["error", "error"]);
        } else {
            navigator.geolocation.getCurrentPosition((position) => {
                resolve({latitude, longitude} = position.coords);
            }, () => {
                reject(["error", "error"]);
            })
        }
    })
}

const item = item_name.innerHTML

export {item};


// const button = document.querySelector("body");
// button.addEventListener("click", () => {
//   alert("CLICKED!!");
// });




