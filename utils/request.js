
function doPost(url,call,json,success,fail) {
  wx.request({
    url: url,
    method: 'POST',
    data: 'call=' + call + '&json=' + json,
    header: {
      'content-type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    },
    success: data => {
      if(call != 104){
        console.log(data);
      }
      success(data);
    },
    fail: res => {
      console.log(res)
      fail(res);
    }
  })
}

module.exports = {
  doPost: doPost
}
