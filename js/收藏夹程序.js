//用于GitHub资源页的快速打开(jsdelivr)
javascript:if(/^https?:\/\/github\.com\/.*\/.*\/blob\/.*\/.*/.test(window.location.href)){var urlArr=window.location.href.split('/');var Tag=/^https?:\/\/github\.com\/.*\/.*\/blob\/(.*)\/.*/.exec(window.location.href)[1];var URL="https://cdn.jsdelivr.net/gh/"+urlArr[3]+"/"+urlArr[4]+"@"+Tag;for(var i=7;i<urlArr.length;i++){URL=URL+"/"+urlArr[i]}window.open(URL)}else{console.log("不是GitHub资源页！！")}
