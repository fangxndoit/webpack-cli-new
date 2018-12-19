/* eslint-disable */
/**
 * 微信授权js-sdk
 * @param {*} param0 
 */
export const wxConfig = (weichat_data) => {
    return new Promise((resolve, reject) => {
        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: weichat_data.appId, // 必填，企业号的唯一标识，此处填写企业号corpid
            timestamp: weichat_data.timestamp, // 必填，生成签名的时间戳
            nonceStr: weichat_data.nonceStr, // 必填，生成签名的随机串
            signature: weichat_data.signature,// 必填，签名，见附录1
            jsApiList: [// 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                'scanQRCode', // 扫一扫
                'chooseImage',//选择图片
                'checkJsApi',
                'updateTimelineShareData',//自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容
                'updateAppMessageShareData',
                'onMenuShareTimeline',
                'onMenuShareQQ',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo'
            ]
        })
        resolve();
    })

}

/**
*
*
* @param {*} share_data
* @param {*} succFn
* @param {*} failFn
*/
export const shareConfig = (shareinfo, succFn, failFn) => {
    wx.ready(function () {
        console.log(wx);
        console.log(shareinfo);
        //自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容（1.4.0）
        // wx.updateTimelineShareData({
        //     title: shareinfo.title, // 分享标题
        //     link: shareinfo.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        //     imgUrl: shareinfo.imgUrl, // 分享图标
        //     success: function () {
        //         // 设置成功
        //         succFn();
        //     }
        // })

        //自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0）
        // wx.updateAppMessageShareData({
        //     title: shareinfo.title, // 分享标题
        //     desc: shareinfo.desc, // 分享描述
        //     link: shareinfo.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        //     imgUrl: shareinfo.imgUrl, // 分享图标
        //     success: function () {
        //         // 设置成功
        //         succFn();
        //     }
        // })
        //获取“分享到朋友圈”按钮点击状态及自定义分享内容接口（即将废弃）
        wx.onMenuShareTimeline({
            title: shareinfo.title, // 分享标题
            link: shareinfo.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: shareinfo.imgUrl, // 分享图标
            success: function () {
                // 用户点击了分享后执行的回调函数
                succFn();
            },
        })

        //获取“分享给朋友”按钮点击状态及自定义分享内容接口（即将废弃）
        wx.onMenuShareAppMessage({
            title: shareinfo.title, // 分享标题
            desc: shareinfo.desc, // 分享描述
            link: shareinfo.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: shareinfo.imgUrl, // 分享图标
            type: shareinfo.type, // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
                // 用户点击了分享后执行的回调函数
                succFn();
            }
        });
        // 获取“分享到QQ”按钮点击状态及自定义分享内容接口（即将废弃）
        wx.onMenuShareQQ({
            title: shareinfo.title, // 分享标题
            desc: shareinfo.desc, // 分享描述
            link: shareinfo.link, // 分享链接
            imgUrl: shareinfo.imgUrl, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
                succFn();
            }
        });

        //获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
        wx.onMenuShareWeibo({
            title: shareinfo.title, // 分享标题
            desc: shareinfo.desc, // 分享描述
            link: shareinfo.link, // 分享链接
            imgUrl: shareinfo.imgUrl, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
                succFn();
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
    })
}