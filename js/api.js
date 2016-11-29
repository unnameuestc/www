/**
 * Created by Keith on 2015/5/7.
 */

//var apiHost = "http://api.art.uestcbmi.com";
var apiHost = "http://localhost:8081";
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
function other_adminLogin(name, pwd, errFunc, succFunc) {
    var md5pwd = md5("BMI" + pwd + "ART");
    base_invoke("/other/adminLogin", {
        name: name,
        pwd: md5pwd
    }, errFunc, succFunc);
}
function other_adminLogout(errFunc, succFunc) {
    var authKey = $.cookie("authKey");
    base_invoke("/other/adminLogout", {
        authkey: authKey
    }, errFunc, succFunc);
}
function user_getAllUsers(page, errFunc, succFunc) {
    base_invoke("/user/getAllUsers", {
        page: page
    }, errFunc, succFunc);
}
function user_getInfo(id, name, authKey, errFunc, succFunc) {
    if (!isNull(id)) {
        base_invoke("/user/getInfo", {
            id: id
        }, errFunc, succFunc);
    } else if (!isNull(name)) {
        base_invoke("/user/getInfo", {
            name: name
        }, errFunc, succFunc);
    } else {
        base_invoke("/user/getInfo", {
            authkey: authKey
        }, errFunc, succFunc);
    }
}
function user_updateInfo(id, nickName, profile, errFunc, succFunc) {
    var data = {
        id: id
    };
    if (!isNull(nickName)) {
        data["nickname"] = nickName
    }
    if (!isNull(profile)) {
        data["profile"] = profile
    }
    base_invoke("/user/updateInfo", data, errFunc, succFunc);
}
function user_getCertifyTypes(errFunc, succFunc) {
    base_invoke("/user/getCertifyTypes", {}, errFunc, succFunc);
}
function user_certify(id, certifytypes, errFunc, succFunc) {
    base_invoke("/user/certify", {
        id: id,
        certifytypes: certifytypes
    }, errFunc, succFunc);
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
function video_addVideoing(videoid, videourl, errFunc, succFunc) {
    base_invoke("/video/addVideoing", {
        videoid: videoid,
        videourl: videourl
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
function art_addArt(typeid, userid, title, content, tradable, tradedes, groupid, errFunc, succFunc) {
    base_invoke("/art/addArt", {
        typeid: typeid,
        userid: userid,
        title: title,
        content: content,
        tradable: tradable,
        tradedes: tradedes,
        groupid: groupid
    }, errFunc, succFunc);
}
function art_editArt(id, typeid, userid, title, content, tradestate, tradedes, groupid, errFunc, succFunc) {
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
    if (!isNull(tradestate)) {
        data["tradestate"] = tradestate
    }
    if (!isNull(tradedes)) {
        data["tradedes"] = tradedes
    }
    if (!isNull(groupid)) {
        data["groupid"] = groupid
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
function art_addGroup(userid, name, des, errFunc, succFunc){
    base_invoke("/art/addGroup", {
        userid: userid,
        name: name,
        des: des
    }, errFunc, succFunc);
}
function art_editGroup(id, name, des, errFunc, succFunc){
    var data = {
        id: id
    };
    if (!isNull(name)) {
        data["name"] = name
    }
    if (!isNull(des)) {
        data["des"] = des
    }
    base_invoke("/art/editGroup", data, errFunc, succFunc);
}
function art_delGroup(id, errFunc, succFunc){
    base_invoke("/art/delGroup", {
        id: id
    }, errFunc, succFunc);
}
function art_getGroup(userid, id, errFunc, succFunc){
    var data = {};
    if (!isNull(userid)) {
        data["userid"] = userid
    }
    if (!isNull(id)) {
        data["id"] = id
    }
    base_invoke("/art/getGroup", data, errFunc, succFunc);
}

function page_addPage(userid, title, content, errFunc, succFunc) {
    base_invoke("/page/addPage", {
        userid: userid,
        title: title,
        content: content
    }, errFunc, succFunc);
}
function page_editPage(id, userid, title, content, errFunc, succFunc) {
    var data = {
        id: id
    };
    if (!isNull(userid)) {
        data["userid"] = userid
    }
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
function comment_getAllComments(typeid, page, errFunc, succFunc) {
    base_invoke("/comment/getAllComments", {
        typeid: typeid,
        page: page
    }, errFunc, succFunc);
}
function comment_markValid(id, valid, errFunc, succFunc) {
    base_invoke("/comment/markValid", {
        id: id,
        valid: valid
    }, errFunc, succFunc);
}
function comment_delComment(id, errFunc, succFunc) {
    base_invoke("/comment/delComment", {
        id: id
    }, errFunc, succFunc);
}

function trade_getTradeInfo(id, errFunc, succFunc) {
    base_invoke("/trade/getTradeInfo", {
        id: id
    }, errFunc, succFunc);
}
function trade_getAllTrades(page, errFunc, succFunc) {
    base_invoke("/trade/getAllTrades", {
        page: page
    }, errFunc, succFunc);
}
function trade_editTrade(id, recipient, contact, addr, state, errFunc, succFunc) {
    var data = {
        id: id
    };
    if (!isNull(recipient)) {
        data["recipient"] = recipient
    }
    if (!isNull(contact)) {
        data["contact"] = contact
    }
    if (!isNull(addr)) {
        data["addr"] = addr
    }
    if (!isNull(state)) {
        data["state"] = state
    }

    base_invoke("/trade/editTrade", data, errFunc, succFunc);
}

function trade_getTreaty(errFunc, succFunc) {
    base_invoke("/trade/getTreaty", {}, errFunc, succFunc);
}

function trade_editTreaty(content, errFunc, succFunc) {
    var data = {
        content: content
    };
    base_invoke("/trade/editTreaty", data, errFunc, succFunc);
}

function other_getSuggests(page, errFunc, succFunc) {
    base_invoke("/other/getSuggests", {
        page: page
    }, errFunc, succFunc);
}
//把两种banner合在一起
function banner_getBanners(type, errFunc, succFunc) {
    if(type == 1) {
        base_invoke("/banner/getHomeBanner", {}, errFunc, succFunc);
    }else{
        base_invoke("/banner/getTradeBanner", {}, errFunc, succFunc);
    }
}

//两种banner都可以使用
function banner_getBannerById(id, errFunc, succFunc) {
    base_invoke("/banner/getBannerById", {
        id: id
    }, errFunc, succFunc);
}

function banner_editBanner(bannerid, description, picurl, errFunc, succFunc){
    var data = {
        bannerid : bannerid
    };

    if(!isNull(description)){
        data["description"] = description
    }

    if(!isNull(picurl)){
        data["picurl"] = picurl
    }

    base_invoke("/banner/editBanner", data, errFunc, succFunc);
}
function banner_delBanner(id, errFunc, succFunc) {
    base_invoke("/banner/delBanner", {
        id: id
    }, errFunc, succFunc);
}
function banner_addHomeBanner(typeid, targetid, description, picurl, errFunc, succFunc) {
    base_invoke("/banner/addHomeBanner", {
        typeid: typeid,
        targetid: targetid,
        description: description,
        picurl: picurl
    }, errFunc, succFunc);
}
function banner_addTradeBanner(targetid, description, picurl, errFunc, succFunc) {
    base_invoke("/banner/addTradeBanner", {
        targetid: targetid,
        description: description,
        picurl: picurl
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
function fixSwalCss(){
    $(".sweet-overlay").hide();
    $(".sweet-alert").css("border", "10px solid #ccc");
}
function justShowString(str){
    swal(str);
    $(".sweet-alert>h2").css("font-size", "20px").css("text-align", "left");
    fixSwalCss();
}
function isNull(str) {
    return str == null || str == "" || str == "null";
}