$("path, circle").hover(function(e) {
  $('#info-box').css('display','block');
  $('#info-box').html($(this).data('info'));
});

$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});

$(document).mousemove(function(e) {
  $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
  $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
}).mouseover();

var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if(ios) {
  $('a').on('click touchend', function() {
    var link = $(this).attr('href');
    window.open(link,'_blank');
    return false;
  });
}

// Assign links
$("#canada-map").find("path").each(function(){

  if (this.id == 'AB') {
    $(this).bind('click', function(){
      window.open('https://www.nachi.org/alberta.htm');
    }).addClass('regulated');
  } else {
      $(this).bind('click', function(){
        window.open('https://nachi.org/cpi-requirements');
      }).addClass('unregulated');
    }

});
