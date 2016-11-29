/**
 * Created by Keith on 2015/5/7.
 */

var apiHost = "http://api.art.uestcbmi.com";
var apiKey = "A6F7F0D6CD13058D40C1110F007E7F13";
var apiTimeout = 5000;

function base_invoke(method, data, errFunc, succFunc) {
    data["apikey"] = apiKey;
    $.ajax({
        type: "post",
        url: apiHost + method,
        timeout: apiTimeout,
        data: data,
        error: errFunc,
        dataType: "json",
        success: succFunc
    });
}
function get_status(errFunc, succFunc) {
    base_invoke("/status", {}, errFunc, succFunc);
}
function user_doLogin(idstr, pwd, errFunc, succFunc) {
    var md5pwd = md5("BMI" + pwd + "ART");
    base_invoke("/user/doLogin", {
        idstr: idstr,
        pwd: md5pwd
    }, errFunc, succFunc);
}
function user_doLogout(errFunc, succFunc) {
    var authKey = $.cookie("authKey");
    base_invoke("/user/doLogout", {
        authkey: authKey
    }, errFunc, succFunc);
}
function user_getInfo(id, name, errFunc, succFunc) {
    var authKey = $.cookie("authKey");
    if (!isNull(id)) {
        base_invoke("/user/getInfo", {
            id: id,
            authkey: authKey
        }, errFunc, succFunc);
    } else if (!isNull(name)) {
        base_invoke("/user/getInfo", {
            name: name,
            authkey: authKey
        }, errFunc, succFunc);
    } else {
        base_invoke("/user/getInfo", {
            authkey: authKey
        }, errFunc, succFunc);
    }
}
function art_getArtTypes(errFunc, succFunc) {
    base_invoke("/art/getArtTypes", {}, errFunc, succFunc);
}
function video_addVideo(typeid, userid, title, videourl, picurl, description, errFunc, succFunc) {
    base_invoke("/video/addVideo", {
        typeid: typeid,
        userid: userid,
        title: title,
        videourl: videourl,
        picurl: picurl,
        description: description
    }, errFunc, succFunc);
}
function video_editVideo(id, typeid, userid, title, videourl, picurl, description, errFunc, succFunc) {
    var data = {
        id: id
    };
    if (!isNull(typeid)) {
        data["typeid"] = typeid
    }
    if (!isNull(userid)) {
        data["userid"] = userid
    }
    if (!isNull(title)) {
        data["title"] = title
    }
    if (!isNull(videourl)) {
        data["videourl"] = videourl
    }
    if (!isNull(picurl)) {
        data["picurl"] = picurl
    }
    if (!isNull(description)) {
        data["description"] = description
    }
    base_invoke("/video/editVideo", data, errFunc, succFunc);
}
function video_getVideoInfo(id, errFunc, succFunc) {
    base_invoke("/video/getVideoInfo", {
        id: id
    }, errFunc, succFunc);
}
function video_getVideos(typeid, page, errFunc, succFunc) {
    base_invoke("/video/getVideos", {
        typeid: typeid,
        page: page
    }, errFunc, succFunc);
}
function video_delVideo(id, errFunc, succFunc) {
    base_invoke("/video/delVideo", {
        id: id
    }, errFunc, succFunc);
}
function art_getArtList(typeid, trade, page, errFunc, succFunc) {
    base_invoke("/art/getArtList", {
        typeid: typeid,
        trade: trade,
        page: page
    }, errFunc, succFunc);
}
function art_delArt(id, errFunc, succFunc) {
    base_invoke("/art/delArt", {
        id: id
    }, errFunc, succFunc);
}
function art_getArtInfo(id, errFunc, succFunc) {
    base_invoke("/art/getArtInfo", {
        id: id
    }, errFunc, succFunc);
}
function art_addArt(typeid, userid, title, content, tradable, tradedes, errFunc, succFunc) {
    base_invoke("/art/addArt", {
        typeid: typeid,
        userid: userid,
        title: title,
        content: content,
        tradable: tradable,
        tradedes: tradedes
    }, errFunc, succFunc);
}
function art_editArt(id, typeid, userid, title, content, tradable, tradedes, errFunc, succFunc) {
    var data = {
        id: id
    };
    if (!isNull(typeid)) {
        data["typeid"] = typeid
    }
    if (!isNull(userid)) {
        data["userid"] = userid
    }
    if (!isNull(title)) {
        data["title"] = title
    }
    if (!isNull(content)) {
        data["content"] = content
    }
    if (!isNull(tradable)) {
        data["tradable"] = tradable
    }
    if (!isNull(tradedes)) {
        data["tradedes"] = tradedes
    }
    base_invoke("/art/editArt", data, errFunc, succFunc);
}
function art_addArtImg(artid, url, errFunc, succFunc) {
    base_invoke("/art/addArtImg", {
        artid: artid,
        url: url
    }, errFunc, succFunc);
}
function art_delArtImg(id, errFunc, succFunc) {
    base_invoke("/art/delArtImg", {
        id: id
    }, errFunc, succFunc);
}
function page_addPage(title, content, errFunc, succFunc) {
    base_invoke("/page/addPage", {
        title: title,
        content: content
    }, errFunc, succFunc);
}
function page_editPage(id, title, content, errFunc, succFunc) {
    var data = {
        id: id
    };
    if (!isNull(title)) {
        data["title"] = title
    }
    if (!isNull(content)) {
        data["content"] = content
    }

    base_invoke("/page/editPage", data, errFunc, succFunc);
}
function page_delPage(id, errFunc, succFunc) {
    base_invoke("/page/delPage", {
        id: id
    }, errFunc, succFunc);
}
function page_getPageInfo(id, errFunc, succFunc) {
    base_invoke("/page/getPageInfo", {
        id: id
    }, errFunc, succFunc);
}
function page_getPages(page, errFunc, succFunc) {
    base_invoke("/page/getPages", {
        page: page
    }, errFunc, succFunc);
}
function upladFile(elemId, endFunc) {
    var file = document.getElementById(elemId).files[0];
    var url = "/upload.php";
    var form = new FormData();
    form.append("Filedata", file);
    var req = new XMLHttpRequest();
    req.open("post", url, true);
    req.onload = function () {
        endFunc(req.response)
    };
    req.send(form);
}
function isNull(str) {
    return str == null || str == "" || str == "null";
}