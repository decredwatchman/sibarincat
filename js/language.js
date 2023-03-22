/**
 * cookieæ“ä½œ
 */
var getCookie = function (name, value, options) {
    if (typeof value != "undefined") {
      // name and value given, set cookie
      options = options || {};
      if (value === null) {
        value = "";
        options.expires = -1;
      }
      var expires = "";
      if (
        options.expires &&
        (typeof options.expires == "number" || options.expires.toUTCString)
      ) {
        var date;
        if (typeof options.expires == "number") {
          date = new Date();
          date.setTime(date.getTime() + options.expires * 24 * 60 * 60 * 1000);
        } else {
          date = options.expires;
        }
        expires = "; expires=" + date.toUTCString(); // use expires attribute, max-age is not supported by IE
      }
      var path = options.path ? "; path=" + options.path : "";
      var domain = options.domain ? "; domain=" + options.domain : "";
      var s = [cookie, expires, path, domain, secure].join("");
      var secure = options.secure ? "; secure" : "";
      var c = [name, "=", encodeURIComponent(value)].join("");
      var cookie = [c, expires, path, domain, secure].join("");
      document.cookie = cookie;
    } else {
      // only name given, get cookie
      var cookieValue = null;
      if (document.cookie && document.cookie != "") {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
          var cookie = jQuery.trim(cookies[i]);
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) == name + "=") {
            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
            break;
          }
        }
      }
      return cookieValue;
    }
  };
  
  /**
   * èŽ·å–æµè§ˆå™¨è¯­è¨€ç±»åž‹
   * @return {string} æµè§ˆå™¨å›½å®¶è¯­è¨€
   */
  var getNavLanguage = function () {
    // if (navigator.appName == "Netscape") {
    //   var navLanguage = navigator.language;
    //   return navLanguage.substr(0, 2);
    // }
    return "en";
  };
  
  /**
   * è®¾ç½®è¯­è¨€ç±»åž‹ï¼š é»˜è®¤ä¸ºä¸­æ–‡
   */
  var i18nLanguage = "en";
  
  /*
  è®¾ç½®ä¸€ä¸‹ç½‘ç«™æ”¯æŒçš„è¯­è¨€ç§ç±»
  */
  var webLanguage = ["zh", "zhtw", "en", "jp", "korean", "persian"];
  
  /**
   * æ‰§è¡Œé¡µé¢i18næ–¹æ³•
   * @return
   */
  var execI18n = function () {
    /*
    é¦–å…ˆèŽ·å–ç”¨æˆ·æµè§ˆå™¨è®¾å¤‡ä¹‹å‰é€‰æ‹©è¿‡çš„è¯­è¨€ç±»åž‹
     */
    if (getCookie("userLanguage")) {
      i18nLanguage = getCookie("userLanguage");
    } else {
      // èŽ·å–æµè§ˆå™¨è¯­è¨€
      var navLanguage = getNavLanguage();
      if (navLanguage) {
        // åˆ¤æ–­æ˜¯å¦åœ¨ç½‘ç«™æ”¯æŒè¯­è¨€æ•°ç»„é‡Œ
        var charSize = $.inArray(navLanguage, webLanguage);
        if (charSize > -1) {
          i18nLanguage = navLanguage;
          // å­˜åˆ°ç¼“å­˜ä¸­
          getCookie("userLanguage", navLanguage);
        }
      } else {
        console.log("not navigator");
        return false;
      }
    }
    /* éœ€è¦å¼•å…¥ i18n æ–‡ä»¶*/
    if ($.i18n == undefined) {
      console.log("è¯·å¼•å…¥i18n js æ–‡ä»¶");
      return false;
    }
    console.log(`i18nLanguage`, i18nLanguage)
    /*
    è¿™é‡Œéœ€è¦è¿›è¡Œi18nçš„ç¿»è¯‘
     */
    jQuery.i18n.properties({
      name: `js_${i18nLanguage}`, //èµ„æºæ–‡ä»¶åç§°
      namespace: `js_${i18nLanguage}`,
      path: "/i18n/", //èµ„æºæ–‡ä»¶è·¯å¾„
      mode: "map", //ç”¨Mapçš„æ–¹å¼ä½¿ç”¨èµ„æºæ–‡ä»¶ä¸­çš„å€¼
      language: i18nLanguage,
      callback: function () {
        //åŠ è½½æˆåŠŸåŽè®¾ç½®æ˜¾ç¤ºå†…å®¹
        var insertEle = $(".i18n");
        insertEle.each(function () {
          let i18nName = $(this).attr("name");
          // æ ¹æ®i18nå…ƒç´ çš„ i18nName èŽ·å–å†…å®¹å†™å…¥
          if (i18nName) {
            $(this).html($.i18n.prop(i18nName));
          }
        });
        // console.log(".i18n å†™å…¥ä¸­...", insertEle);
        // insertEle.each(function () {
        //   // æ ¹æ®i18nå…ƒç´ çš„ name èŽ·å–å†…å®¹å†™å…¥
        //   $(this).html($.i18n.prop("name"));
        // });
        // console.log("å†™å…¥å®Œæ¯•");
      },
    });
  };
  
  /*é¡µé¢æ‰§è¡ŒåŠ è½½æ‰§è¡Œ*/
  $(function () {
    /*æ‰§è¡ŒI18nç¿»è¯‘*/
    execI18n();
    var userLanguage = getCookie("userLanguage")
    if (getCookie("userLanguage") === "zh") {
      $(".writePaper").attr("href", `${window.location.href}MiloInu_cn.pdf`);
    } else {
      $(".writePaper").attr("href", `${window.location.href}MiloInu_en.pdf`);
    }
    $(".select_span").html($('.nav_list_link[data-value="'+ userLanguage +'"]').html());
    
    /*å°†è¯­è¨€é€‰æ‹©é»˜è®¤é€‰ä¸­ç¼“å­˜ä¸­çš„å€¼*/
    // $("#language option[value=" + i18nLanguage + "]").attr("selected", true);
    $(".select").on("click", function () {
      $(".nav_list").removeClass("hide");
    });
  
    $(".nav_list_link").on("click", function (e) {
      var language = "";
      // ($(this).data('value') === "ç®€ä½“ä¸­æ–‡") {
      language = $(this).data('value') || 'en'
      // } else {
      //   language = "en";
      // }
      e.stopPropagation();
      e.preventDefault()
      getCookie("userLanguage", language, {
        expires: 30,
        path: "/",
      });
      location.reload();
    });
  
    /* é€‰æ‹©è¯­è¨€ */
    // $(".nav_list_link").on('click', function () {
  
    // });
  });