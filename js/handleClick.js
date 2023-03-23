// è´­ä¹°MILOæŒ‰é’®
setTimeout(function () {
    $('.loading_page').remove()
  }, 3000)
  
  $(".buy_milo_btn").click(function () {
    window.location.href = "";
  });
  
  $(".buy_clock_btn").click(function () {
    window.location.href = "";
  });
  $(".buy_nft_btn").click(function () {
    window.location.href = "#";
  });
  //ç§»åŠ¨ç«¯å¯¼èˆªæ ç‚¹å‡»äº‹ä»¶
  $(".ic_more").click(function () {
    $(".page_layout_top_right").animate({ top: "100%" });
  });
  
  //ç‚¹å‡»å¯¼èˆªæ æ”¶èµ·
  $(".page_layout_top_right").click(function (e) {
    $(".page_layout_top_right").animate({ top: "0" });
  });
  
  $(".page_layout_top_nav_link").click(function (e) {
    e.stopPropagation();
  });
  
  // miloå¤åˆ¶
  $(".copy_milo").click(function () {
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.setAttribute('value', handleCopyText($('.milo_token_text').text()));
    input.select();
    if (document.execCommand('copy')) {
      document.execCommand('copy');
      console.log('å¤åˆ¶æˆåŠŸ');
    }
    document.body.removeChild(input);
    $(".copy_milo .btn_tips").addClass('an');
    setTimeout(() => {
      $(".copy_milo .btn_tips").removeClass('an');
    }, 1500);
  })
  
  $(".copy_milo1").click(function () {
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.setAttribute('value', handleCopyText($('.milo_token_text').text()));
    input.select();
    if (document.execCommand('copy')) {
      document.execCommand('copy');
      console.log('å¤åˆ¶æˆåŠŸ');
    }
    document.body.removeChild(input);
    $(".copy_milo1 .btn_tips").addClass('an');
    setTimeout(() => {
      $(".copy_milo1 .btn_tips").removeClass('an');
    }, 1500);
  })
  
  $(".copy_clock").click(function () {
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.setAttribute('value', handleCopyText($('.clock_token_text').text()));
    input.select();
    if (document.execCommand('copy')) {
      document.execCommand('copy');
      console.log('å¤åˆ¶æˆåŠŸ');
    }
    document.body.removeChild(input);
    $(".copy_clock .btn_tips").addClass('an');
    setTimeout(() => {
      $(".copy_clock .btn_tips").removeClass('an');
    }, 1500);
  })
  
  $(".copy_clock1").click(function () {
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.setAttribute('value', handleCopyText($('.clock_token_text1').text()));
    input.select();
    if (document.execCommand('copy')) {
      document.execCommand('copy');
      console.log('å¤åˆ¶æˆåŠŸ');
    }
    document.body.removeChild(input);
    $(".copy_clock1 .btn_tips").addClass('an');
    setTimeout(() => {
      $(".copy_clock1 .btn_tips").removeClass('an');
    }, 1500);
  })
  
  // åŠ¨ç”»æ›´å¤šç‚¹å‡»
  $(".miloanimate_more").click(function () {
    window.location.href = "#";
  })
  
  function handleCopyText(str) {
    const res = str.split(" ");
    return res[0]
  }