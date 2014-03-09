$(function(){
  function imgChange() {
    $('img[src="http://www.gravatar.com/avatar/339ae9d7dfa4cbfc3e907ab5fbee9e93"]').attr("src","https://gravatar.com/avatar/e1543dba16db6f408daa6430102a1047");
  }

  function twitterChange() {
    $('a[href="http://twitter.com/tacamy"]').attr("href","http://twitter.com/tomo_e");
  }

  function nameChange(txtbefore, txtafter) {
    $('.l-container').each(function(){

      var txt = $(this).html();
     $(this).html(
        txt.replace(new RegExp(txtbefore,"g"),txtafter)
      );
    });
  }

  chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    imgChange();
    twitterChange();
    nameChange("山田 敬美", "谷 巴絵");
    nameChange("@tacamy", "@tomo_e");
  });
});

