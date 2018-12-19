/* eslint-disable */
import request from '../tools/request'

export function wxPay() {
    console.log('---ceshi1----');
    onBridgeReady();
    if (true) { return; }
    if (typeof WeixinJSBridge == "undefined") {
        if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
        } else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
        }
    } else {
        onBridgeReady();
    }
}


function wxPayParams(params) {
    return request({
        url: 'order/pay_parameter',
        method: 'post',
        params
    })
}


//wxPayParams(orderId).then(res=>{//微信密令})
wxPayParams(orderId).then(res => {
    let wxjson = res.data
    onBridgeReady(wxjson).then(res => {
        
    })
    if (typeof WeixinJSBridge == "undefined") {
        if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
        } else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
        }
    } else {
        onBridgeReady();
    }
})


function onBridgeReady(wxjson) {
    return new Promise((resolve, reject) => {
        WeixinJSBridge.invoke(
            'getBrandWCPayRequest', {
                "appId": wxjson.appId,     //公众号名称，由商户传入     
                "timeStamp": wxjson.timeStamp,//时间戳，自1970年以来的秒数     
                "nonceStr": wxjson.nonceStr, //随机串     
                "package": wxjson.package,
                "signType": wxjson.signType, //微信签名方式：     
                "paySign": wxjson.paySign //微信签名 
            },
            function (res) {
                if (res.err_msg == "get_brand_wcpay_request:ok") {
                    // 使用以上方式判断前端返回,微信团队郑重提示：
                    //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
                    resolve()
                }
            });
    })

}
